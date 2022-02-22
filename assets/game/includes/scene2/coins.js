export function setCoin(navMesh, coin, physics) {
    var coinsArr = navMesh.navMesh.navPolygons;
    var spawncoins = coinsArr[Math.floor(Math.random() * coinsArr.length)].centroid;
    var coin = physics.add.sprite(spawncoins.x, spawncoins.y, 'coin');
    return coin;
}

export function setCoinAnimation(params) {
    params.anims.create({
        key: 'coin',
        frames: params.anims.generateFrameNumbers('coin', {
            start: 0,
            end: 7,
        }),
        frameRate: 10,
        repeat: -1,
    });
}
