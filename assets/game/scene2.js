import tilesScene2 from './assets/images/scene2/tiles.png';
import mapScene2 from './assets/maps/scene2/map.json';
import player from './assets/images/characters.png';

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
        this.load.image('tilesScene2', tilesScene2);
        this.load.spritesheet('player', player, {
            frameWidth: 32,
            frameHeight: 32,
        });
    }
    create() {
        // Set the map
        const tilemap = this.add.tilemap('mapScene2');
        const tileset = tilemap.addTilesetImage('tilesScene2', 'tilesScene2');
        tilemap.createStaticLayer('bg', tileset);
        const wallLayer = tilemap.createStaticLayer('walls', tileset);
        wallLayer.setCollisionByProperty({ collides: true });
        // set the mesh
        const objectLayer = tilemap.getObjectLayer('navmesh');
        const navMesh = this.navMeshPlugin.buildMeshFromTiled(
            'mesh',
            objectLayer,
            12.5
        );

        // set the player
        const spawnPoint = [tilemap.heightInPixels/2 , tilemap.widthInPixels/2 ];
         player2 = this.physics.add.sprite(spawnPoint[0], spawnPoint[1], 'player');
         player2.setCollideWorldBounds(true);
         this.physics.add.collider(player2, wallLayer);
         cursors = this.input.keyboard.createCursorKeys();
        // This is how you can get a path within the mesh
        const path = navMesh.findPath({ x: 0, y: 0 }, { x: 300, y: 400 });
        console.log(path);
    }

    update() {
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
    }
}
var player2;
var cursors;
