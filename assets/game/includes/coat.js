export function setCoatAnimation(params){
    params.anims.create({
        key: 'leftCoat',
        frames: params.anims.generateFrameNumbers('coat', {
            start: 12,
            end: 14,
        }),
        frameRate: 10,
        repeat: -1,
    });
    params.anims.create({
        key: 'rightCoat',
        frames: params.anims.generateFrameNumbers('coat', {
            start: 24,
            end: 26,
        }),
        frameRate: 10,
        repeat: -1,
    });
    params.anims.create({
        key: 'upCoat',
        frames: params.anims.generateFrameNumbers('coat', {
            start: 36,
            end: 38,
        }),
        frameRate: 10,
        repeat: -1,
    });
    params.anims.create({
        key: 'downCoat',
        frames: params.anims.generateFrameNumbers('coat', {
            start: 0,
            end: 2,
        }),
        frameRate: 10,
        repeat: -1,
    });
}