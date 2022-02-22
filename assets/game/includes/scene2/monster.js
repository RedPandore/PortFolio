export function setMonsterAnimation(params) {
    params.anims.create({
        key: 'leftMonster',
        frames: params.anims.generateFrameNumbers('monster', {
            start: 3,
            end: 5,
        }),
        frameRate: 10,
        repeat: -1,
    });
    params.anims.create({
        key: 'rightMonster',
        frames: params.anims.generateFrameNumbers('monster', {
            start: 6,
            end: 8,
        }),
        frameRate: 10,
        repeat: -1,
    });
    params.anims.create({
        key: 'upMonster',
        frames: params.anims.generateFrameNumbers('monster', {
            start: 9,
            end: 11,
        }),
        frameRate: 10,
        repeat: -1,
    });
    params.anims.create({
        key: 'downMonster',
        frames: params.anims.generateFrameNumbers('monster', {
            start: 0,
            end: 2,
        }),
        frameRate: 10,
        repeat: -1,
    });
}

export function setMonster(navMesh, monster, physics){
    var arr = navMesh.navMesh.navPolygons;
    var spawnMonster = arr[Math.floor(Math.random() * arr.length)].centroid;
    monster = physics.add.sprite(
        spawnMonster.x,
        spawnMonster.y,
        'monster'
    );
    return monster
}