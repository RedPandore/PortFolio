import tilesScene2 from './assets/images/scene2/castle_2.png';
import decotilesScene2 from './assets/images/scene2/decorative.png';
import mapScene2 from './assets/maps/scene2/scene2.json';
import player from './assets/images/characters.png';
import monsterSprite from './assets/images/scene2/monster.png';
import coinSprite from './assets/images/scene2/coin.png';
import { setMonster, setMonsterAnimation } from './includes/scene2/monster';
import { setCoinAnimation } from './includes/scene2/coins';
import { setKeyboardMovement } from './includes/movement';

/////////////////// Récupère les pièces sans te faire tuer //////////////////////

export class Scene2 extends Phaser.Scene {
    constructor() {
        super({
            key: 'scene2',
            /*physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 2000 },
                },
            },*/
        });
    }
    preload() {
        this.load.tilemapTiledJSON('mapScene2', mapScene2);
        this.load.image('castle_2', tilesScene2);
        this.load.spritesheet('player', player, {
            frameWidth: 32,
            frameHeight: 32,
        });
        this.load.spritesheet('monster', monsterSprite, {
            frameWidth: 32,
            frameHeight: 32,
        });
        this.load.spritesheet('coin', coinSprite, {
            frameWidth: 32,
            frameHeight: 32,
        });
    }
    create() {
        // Set the map
        const tilemap = this.add.tilemap('mapScene2');
        const tileset = tilemap.addTilesetImage('castle_2', 'castle_2');
        //const decoTileset = tilemap.addTilesetImage('decorative', 'decorative');
        tilemap.createStaticLayer('sol', tileset);
        wallLayer = [
            tilemap.createLayer('decoSol', tileset),
            tilemap.createStaticLayer('mur', tileset),
            tilemap.createStaticLayer('deco', tileset),
        ];

        wallLayer.forEach((layer) => {
        layer.setCollisionByProperty({ collides: true })});

        // set the mesh
        const objectLayer = tilemap.getObjectLayer('navMesh');
        navMesh = this.navMeshPlugin.buildMeshFromTiled(
            'mesh',
            objectLayer,
            32
        );
        const graphic = this.add.graphics(0, 0).setAlpha(0.5);

        allPhysics = this.physics;
        // set the player
        const spawnPoint = [
            tilemap.getObjectLayer('spawnPoint').objects[0].x,
            tilemap.getObjectLayer('spawnPoint').objects[0].y,
        ];
        player2 = this.physics.add.sprite(
            spawnPoint[0],
            spawnPoint[1],
            'player'
        );
        player2.setCollideWorldBounds(true);
        this.physics.add.collider(player2, wallLayer);
        cursors = this.input.keyboard.createCursorKeys();

        // set the monster
        monster[0] = setMonster(navMesh, monster, allPhysics);
        monster.forEach((monster) => {
            if (monster.active) {
                setMonsterAnimation(monster);
            }
        });

        // set the coin
        var coinsArr = navMesh.navMesh.navPolygons;
        var spawncoins =
            coinsArr[Math.floor(Math.random() * coinsArr.length)].centroid;
        coin = this.physics.add.sprite(spawncoins.x, spawncoins.y, 'coin');
        setCoinAnimation(coin);
        coin.anims.play('coin', true);
        this.physics.add.collider(coin, player2, function () {
            coin.destroy();
        });
        counterText = this.add.text(805, 5, 'Score : ' + counter, {
            fontSize: '20px',
            backgroundColor: '#000000',
            padding: {
                left: 5,
                right: 5,
                top: 5,
                bottom: 5,
            },
        });
        var test = this.game;
        this.physics.add.collider(monster, player2, function () {
            ////////// Loose game //////////
            allPhysics.pause();
            // Open a modal
            gameOver('modal5', test, monster);
            counter = 0;
        });
        // when game starts, we want to pause all physics bodies
        allPhysics.pause();
        // Explain to the player how to play the game
        startText = document.querySelector('#modal6');
        startText.style.display = 'block';
    }

    update(time, deltaTime) {
        // when the user presses the spacebar, we want to start the game
        if (cursors.space.isDown) {
            allPhysics.resume();
            startText.style.display = 'none';
        }

        if (!coin.active) {
            counter += 1;
            var coinsArr = navMesh.navMesh.navPolygons;
            var spawncoins =
                coinsArr[Math.floor(Math.random() * coinsArr.length)].centroid;
            coin = this.physics.add.sprite(spawncoins.x, spawncoins.y, 'coin');
            setCoinAnimation(coin);
            coin.anims.play('coin', true);
            this.physics.add.collider(coin, player2, function () {
                coin.destroy();
            });
            counterText.setText('Score : ' + counter);
            if (
                counter == 3 ||
                counter == 6 ||
                counter == 9 ||
                counter == 15 ||
                counter == 20
            ) {
                monster.push(setMonster(navMesh, monster, allPhysics));
                monster.forEach((monster) => {
                    if (monster.active) {
                        setMonsterAnimation(monster);
                    }
                });
            }
        }

        if (
            !cursors.left.isDown &&
            !cursors.right.isDown &&
            !cursors.up.isDown &&
            !cursors.down.isDown
        ) {
            player2.setVelocity(0);
            player2.anims.play('down', true);
            player2.anims.stop();
        }
        setKeyboardMovement(player2, cursors);

        const start = new Phaser.Math.Vector2(monster.x, monster.y);
        const end = new Phaser.Math.Vector2(player2.x, player2.y);
        monster.forEach((monster) => {
            if (monster.active) {
                goToPos(end, monster, navMesh);
                if (currentTarget) {
                    const { x, y } = currentTarget;
                    const distance = Phaser.Math.Distance.Between(
                        monster.x,
                        monster.y,
                        x,
                        y
                    );
                    if (distance < 5) {
                        if (path.length > 0) {
                            currentTarget = path.shift();
                        } else {
                            currentTarget = null;
                        }
                    }
                    monster.setVelocity(0);
                    let speed = 100;
                    if (path.lenght === 0 && distance < 50) {
                        speed = speedMovement(distance, 50, 0, 100, 50);
                    }
                    if (currentTarget) {
                        moveTowards(
                            currentTarget,
                            speed,
                            deltaTime / 1000,
                            monster
                        );
                    }
                }
            }
        });
    }
}

function goToPos(end, player, navMesh) {
    path = navMesh.findPath(new Phaser.Math.Vector2(player.x, player.y), end);
    if (path && path.length > 0) currentTarget = path.shift();
    else currentTarget = null;
}
function moveTowards(targetPosition, maxSpeed = 200, elapsedSeconds, player) {
    const { x, y } = targetPosition;
    const angle = Phaser.Math.Angle.Between(player.x, player.y, x, y);
    const distance = Phaser.Math.Distance.Between(player.x, player.y, x, y);
    const targetSpeed = distance / elapsedSeconds;
    const magnitude = Math.min(maxSpeed, targetSpeed);

    allPhysics.velocityFromRotation(angle, magnitude, player.body.velocity);
    if (player.body.velocity.x > 0) {
        player.anims.play('rightMonster', true);
    } else if (player.body.velocity.x < 0) {
        player.anims.play('leftMonster', true);
    } else if (player.body.velocity.y > 0) {
        player.anims.play('downMonster', true);
    } else if (player.body.velocity.y < 0) {
        player.anims.play('upMonster', true);
    }
}

function gameOver(objName, game, monster) {
    var retryValue = 'Yes';
    var modal = document.getElementById(objName);
    modal.style.display = 'block';
    modal.querySelector('#nbCoin').innerHTML = counter;

    var radioButton = modal.querySelectorAll('input[name="retry-dark"]');
    var retryButton = modal.querySelector('#retryButton');

    radioButton.forEach((radio) => {
        radio.addEventListener('change', function () {
            retryValue = this.value;
        });
    });
    monster.forEach((monster) => {
        monster.destroy();
    });
    retryButton.addEventListener('click', function () {
        if (retryValue === 'Yes') {
            game.scene.stop('scene2');
            modal.style.display = 'none';
            game.scene.start('scene2');
        } else {
            game.scene.stop('scene2');
            modal.style.display = 'none';
            game.scene.start('default');
        }
    });
}
var player2;
var cursors;
var monster = [];
var wallLayer;
var coin;
var path;
var currentTarget;
const speedMovement = (value, min, max, newMin, newMax) => {
    return ((value - min) / (max - min)) * (newMax - newMin) + newMin;
};
var navMesh;
var allPhysics;
var counter = 0;
var counterText;
var startText;