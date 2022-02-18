import Phaser from 'phaser';
import Characters from './assets/images/characters.png';
import Coat from './assets/images/coat.png';
import Fish from './assets/images/animales2.png';
import Tiles from './assets/images/CL_DEMO_32x32.png';

import Map from './assets/maps/map.json';
import { setAnimations } from './includes/player.js';
import { setKeyboardMovement, setMouseMovement } from './includes/movement.js';
import { initFish, setFishAnimations } from './includes/fish.js';
import { PhaserNavMeshPlugin } from 'phaser-navmesh';
import { setCoatAnimation } from './includes/coat.js';
import { Scene2 } from './scene2';


class MyGame extends Phaser.Scene {
    constructor() {
        super(MyGame);
    }

    preload() {
        this.load.spritesheet('characters', Characters, {
            frameWidth: 32,
            frameHeight: 32,
        });
        // load the map
        this.load.image('tiles', Tiles);
        this.load.tilemapTiledJSON('map', Map);
        this.load.spritesheet('fish', Fish, {
            frameWidth: 32,
            frameHeight: 32,
        });
        this.load.spritesheet('coat', Coat, {
            frameWidth: 48,
            frameHeight: 48,
        });
    }

    create() {
        // create the tilemap
        const map = this.make.tilemap({ key: 'map' });
        const tileset = map.addTilesetImage('!CL_DEMO_32x32', 'tiles');
        const sol = map.createLayer('Sol', tileset, 0, 0);
        const decorWalkable = map.createLayer('DecorWalkable', tileset, 0, 0);
        const mur = map.createLayer('Mur', tileset, 0, 0);
        const physics = this.physics;
        // Set the collisions tiles
        mur.setCollisionByProperty({ collides: true });
        // set spawn point
        const spawnPoint = map.findObject(
            'myObjects',
            (obj) => obj.name === 'spawn'
        );
        /*
        ////////////  nav mesh////////////
        const navMesh = this.navMeshPlugin.buildMeshFromTilemap('mesh1', map, [
            mur,
        ]);
        const graphic = this.add.graphics(0, 0).setAlpha(0.5);
        navMesh.enableDebug(graphic);
        navMesh.debugDrawMesh({
            drawCentroid: true,
            drawBounds: false,
            drawNeighbors: true,
            drawPortals: true,
        });

        /////////// end nav mesh////////////
*/
        /////////// Set the player //////////
        player = physics.add
            .sprite(spawnPoint.x, spawnPoint.y, 'characters')
            .setSize(26, 26);
        player.setCollideWorldBounds(true);
        physics.add.collider(player, mur);
        // set the movement for the player
        cursors = this.input.keyboard.createCursorKeys();
        // set the animation of the player
        setAnimations(this);
        var fishStartingPosition = [
            [1600, 380],
            [1400, 420],
            [1500, 300],
            [1350, 340],
            [1200, 800],
            [150, 750],
        ];
        //////////// SetAllTheFish ////////////
        fishStartingPosition.forEach(function (fishPosition, index) {
            fish[index] = physics.add
                .sprite(fishPosition[0], fishPosition[1], 'fish')
                .setSize(26, 26);
            fish[index].setCollideWorldBounds(true);
            fish[index].alpha = 0.5;
            physics.add.collider(fish[index], mur);
            initFish(fish[index]);
        });
        // set Fish Animation
        setFishAnimations(this);
        //////////// end SetAllTheFish ////////////
        /////////// SetAllCoat //////////
        var coatStartingPosition = [
            [150, 300],
        ];
        coatStartingPosition.forEach(function (coatPosition, index) {
            coat[index] = physics.add
                .sprite(coatPosition[0], coatPosition[1], 'coat')
                .setSize(26, 26);
            coat[index].setCollideWorldBounds(true);
            physics.add.collider(coat[index], mur);
            initFish(coat[index]);
        });
        // set Coat Animation
        setCoatAnimation(this);
        //////////// end SetAllCoat ////////////

        // get all objects
        var overlapObjects = map.getObjectLayer('myObjects')['objects'];
        // create group
        overlapObjectsGroup = physics.add.staticGroup({});

        // add modal objects to group
        overlapObjects
            .filter((obj) => obj.type === 'modal')
            .forEach((object) => {
                let obj = overlapObjectsGroup.create(
                    object.x,
                    object.y,
                    'grass'
                );
                obj.setScale(object.width / 32, object.height / 32); //my tile size was 32
                obj.setOrigin(0); //the positioning was off, and B3L7 mentioned the default was 0.5
                obj.body.width = object.width; //body of the physics body
                obj.body.height = object.height;
                obj.name = object.name;
            });
        overlapObjectsGroup.setDepth(-1);
        //physics body needs to refresh
        overlapObjectsGroup.refresh();
        // add overlap
        this.physics.add.overlap(player, overlapObjectsGroup);

        // move with mouse click
        this.input.on(
            'pointerup',
            function (pointer) {
                target.x = pointer.x;
                target.y = pointer.y;
                onClick = true;
                physics.moveToObject(player, target, 200);
                /*  /////////// navMesh test ///////////
              
              var path = navMesh.findPath(
                    { x: player.x, y: player.y },
                    { x: pointer.x, y: pointer.y }
                );

                navMesh.debugDrawPath(path, 0xffd900);
                path.forEach((step) => {
                    physics.moveToObject(player, { x: step.x, y: step.y }, 0,200);
                });*/
            },
            this
        );
    }

    update() {
        //////////// movement ////////////
        if (
            !onClick &&
            !cursors.left.isDown &&
            !cursors.right.isDown &&
            !cursors.up.isDown &&
            !cursors.down.isDown
        ) {
            player.setVelocity(0);
            player.anims.play('down', true);
            player.anims.stop();
        }

        setKeyboardMovement(player, cursors);
        if (onClick) {
            if (setMouseMovement(player, target)) {
                onClick = false;
            }
        }
        //////////// end movement ////////////

        //////////// modal objects ////////////

        //  get the name of modal object player are touching
        overlapObjectsGroup.getChildren().forEach((obj) => {
            if (player.body.touching.none) {
            } else if (this.physics.world.overlap(player, obj)) {
                let objName = obj.name;
                createModal(objName);

                // stop player movement if click
                if (onClick) {
                    player.body.reset(target.x, target.y);
                    onClick = false;
                }
                player.setVelocityY(160);
            }
        });
        //////////// end modal objects ////////////

        //////////// animal update ////////////
        // check if fish is blocked
        checkAnimalCollision(fish, fishAnimationName);
        // check if coat is blocked
        checkAnimalCollision(coat, coatAnimationName);
        document.getElementById('open-game').onclick = function () {

            game.scene.stop('default');
            game.scene.start('scene2');
        };
    }
}

function createModal(objName) {
    let element = document.getElementById(objName);
    let button = element.querySelector('#close-modal');
    element.style.display = 'block';
    button.addEventListener('click', () => closeModal(objName));
}

function closeModal(objName) {
    let element = document.getElementById(objName);
    element.style.display = 'none';
}

function checkAnimalCollision(animals, animationName){
    animals.forEach((animal) => {
        if (animal.body.blocked.down === true) {
            animal.setVelocityY(-50);
            animal.anims.play(animationName.up, true);
        }
        if (animal.body.blocked.up === true) {
            animal.setVelocityY(50);
            animal.anims.play(animationName.down, true);
        }
        if (animal.body.blocked.left === true) {
            animal.setVelocityX(50);
            animal.anims.play(animationName.right, true);
        }
        if (animal.body.blocked.right === true) {
            animal.setVelocityX(-50);
            animal.anims.play(animationName.left, true);
        }
    });
}

const config = {
    type: Phaser.AUTO,
    width: 1800,
    height: 900,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 0 },
        },
    },
    scene: [MyGame, Scene2],
    plugins: {
        scene: [
            {
                key: 'NavMeshPlugin', // Key to store the plugin class under in cache
                plugin: PhaserNavMeshPlugin, // Class that constructs plugins
                mapping: 'navMeshPlugin', // Property mapping to use for the scene, e.g. this.navMeshPlugin
                start: true,
            },
        ],
    },
};

const game = new Phaser.Game(config);
var player;
var cursors;

var overlapObjectsGroup;

var target = new Phaser.Math.Vector2();
var onClick = false;
var fish = [];
var fishAnimationName = {
    up: 'upFish',
    down: 'downFish',
    left: 'leftFish',
    right: 'rightFish',
};
var coat = [];
var coatAnimationName = {
    up: 'upCoat',
    down: 'downCoat',
    left: 'leftCoat',
    right: 'rightCoat',
};
