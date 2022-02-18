export function setFishAnimations(params) {
    params.anims.create({
        key: 'leftFish',
        frames: params.anims.generateFrameNumbers('fish', {
            start: 12,
            end: 14,
        }),
        frameRate: 10,
        repeat: -1,
    });
    params.anims.create({
        key: 'rightFish',
        frames: params.anims.generateFrameNumbers('fish', {
            start: 24,
            end: 26,
        }),
        frameRate: 10,
        repeat: -1,
    });
    params.anims.create({
        key: 'upFish',
        frames: params.anims.generateFrameNumbers('fish', {
            start: 36,
            end: 38,
        }),
        frameRate: 10,
        repeat: -1,
    });
    params.anims.create({
        key: 'downFish',
        frames: params.anims.generateFrameNumbers('fish', {
            start: 0,
            end: 2,
        }),
        frameRate: 10,
        repeat: -1,
    });
}

export function initFish(fish){
   fish.setVelocityY(50) ;
    fish.setVelocityX(50) ;
    }

