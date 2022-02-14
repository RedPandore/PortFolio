export function setAnimations(params) {
    params.anims.create({
        key: 'left',
        frames: params.anims.generateFrameNumbers('characters', {
            start: 3,
            end: 5,
        }),
        frameRate: 10,
        repeat: -1,
    });
    params.anims.create({
        key: 'right',
        frames: params.anims.generateFrameNumbers('characters', {
            start: 6,
            end: 8,
        }),
        frameRate: 10,
        repeat: -1,
    });
    params.anims.create({
        key: 'up',
        frames: params.anims.generateFrameNumbers('characters', {
            start: 9,
            end: 11,
        }),
        frameRate: 10,
        repeat: -1,
    });
    params.anims.create({
        key: 'down',
        frames: params.anims.generateFrameNumbers('characters', {
            start: 0,
            end: 2,
        }),
        frameRate: 10,
        repeat: -1,
    });
}
