

export function setKeyboardMovement(player, cursors) {
    player.setVelocity(0);
    if (cursors.left.isDown && !cursors.up.isDown && !cursors.down.isDown) {
        player.setVelocityX(-150);
        player.anims.play('left', true);
    } else if (cursors.right.isDown && !cursors.up.isDown && !cursors.down.isDown) {
        player.setVelocityX(150);
        player.anims.play('right', true);
    } else if (cursors.up.isDown && !cursors.right.isDown && !cursors.left.isDown) {
        player.setVelocityY(-150);
        player.anims.play('up', true);
    } else if (cursors.down.isDown && !cursors.right.isDown && !cursors.left.isDown) {
        player.setVelocityY(150);
        player.anims.play('down', true);
    }else if (cursors.left.isDown && cursors.up.isDown) {
        player.setVelocityX(-75);
        player.setVelocityY(-75);
        player.anims.play('up', true);
    }else if(cursors.right.isDown && cursors.up.isDown){
        player.setVelocityX(75);
        player.setVelocityY(-75);
        player.anims.play('up', true);
    }else if (cursors.left.isDown && cursors.down.isDown) {
        player.setVelocityX(-75);
        player.setVelocityY(75);
        player.anims.play('down', true);
    }else if (cursors.right.isDown && cursors.down.isDown) {
        player.setVelocityX(75);
        player.setVelocityY(75);
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
