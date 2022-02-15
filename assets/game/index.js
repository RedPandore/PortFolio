import Phaser from 'phaser';
import Characters from './assets/images/characters.png';
import Tiles from './assets/images/CL_DEMO_32x32.png';
import Map from './assets/maps/map.json';
import { setAnimations } from './includes/player.js';
import { setKeyboardMovement, setMouseMovement } from './includes/movement.js';
class MyGame extends Phaser.Scene {
    constructor() {
        super();
    }

    preload() {
        this.load.spritesheet('characters', Characters, {
            frameWidth: 32,
            frameHeight: 32,
        });
        // load the map
        this.load.image('tiles', Tiles);
        this.load.tilemapTiledJSON('map', Map);
    }

    create() {
        // create the tilemap
        const map = this.make.tilemap({ key: 'map' });
        const tileset = map.addTilesetImage('!CL_DEMO_32x32', 'tiles');
        const sol = map.createLayer('Sol', tileset, 0, 0);
        const decorWalkable = map.createLayer('DecorWalkable', tileset, 0, 0);
        const mur = map.createLayer('Mur', tileset, 0, 0);

        // Set the collisions tiles
        mur.setCollisionByProperty({ collides: true });

        // set spawn point
        const spawnPoint = map.findObject(
            'myObjects',
            (obj) => obj.name === 'spawn'
        );

        // Set the player
        player = this.physics.add
            .sprite(spawnPoint.x, spawnPoint.y, 'characters')
            .setSize(26, 26);
        player.setCollideWorldBounds(true);
        this.physics.add.collider(player, mur);
        // set the movement for the player
        cursors = this.input.keyboard.createCursorKeys();
        // set the animation of the player
        setAnimations(this);

        // get all objects
        var overlapObjects = map.getObjectLayer('myObjects')['objects'];
        // create group
        overlapObjectsGroup = this.physics.add.staticGroup({});

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
            'pointerdown',
            function (pointer) {
                target.x = pointer.x;
                target.y = pointer.y;

                // Move at 200 px/s:
                this.physics.moveToObject(player, target, 200);
                onClick = true;
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
                if(onClick){
                    player.body.reset(target.x, target.y);
                    onClick = false;
                }
                player.setVelocityY(160);

            }
        });
        //////////// end modal objects ////////////
    }
}

function createModal(objName) {
    let element = document.getElementById(objName);
    let button = element.querySelector('#close-modal')
    element.style.display = 'block';
    button.addEventListener('click', () =>
                  closeModal(objName)
              )
            
    }

function closeModal(objName) {
    let element = document.getElementById(objName);
    element.style.display = 'none';
}

const config = {
    type: Phaser.AUTO,
    width: 1800,
    height: 900,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { y: 0 },
        },
    },
    scene: MyGame,
};

const game = new Phaser.Game(config);
var player;
var cursors;

var overlapObjectsGroup;

var target = new Phaser.Math.Vector2();
var onClick = false;
