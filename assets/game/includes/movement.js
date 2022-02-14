export function setKeyboardMovement(player, cursors) {
    if (cursors.left.isDown) {
        player.setVelocityX(-160);
        player.anims.play('left', true);
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);
        player.anims.play('right', true);
    } else if (cursors.up.isDown) {
        player.setVelocityY(-160);
        player.anims.play('up', true);
    } else if (cursors.down.isDown) {
        player.setVelocityY(160);
        player.anims.play('down', true);
    }
    
}

export function setMouseMovement(player, target) {

        // move with mouse click
        var distance = Phaser.Math.Distance.Between(
            player.x,
            player.y,
            target.x,
            target.y
        );
        if (player.body.speed > 0) {
            //  4 is our distance tolerance, i.e. how close the source can get to the target
            //  before it is considered as being there. The faster it moves, the more tolerance is required.
            if (distance < 4) {
                player.body.reset(target.x, target.y);
                return true
            }
        
    }
   

}
