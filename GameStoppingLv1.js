function GameStoppingLv1() {

    if (role === "1") {

        if (player.isTouching(obs)) {
            die.play();
            die.setVolume(0.3);
            bg2.velocityX = 0;
            bg3.velocityX = 0;
            bg4.velocityX = 0;
            obs.setVelocityXEach(0);
            obs.setLifetimeEach(-1);
            player.velocityX = 0;
            player.velocityY = 0;
            gamestate = 2;
            sound2.loop();
            sound2.setVolume(0.3);
        }


    }

    else if (role === "2") {

        if (player.isTouching(Stone)) {
            stone.destroy();
        }

        if (player.isTouching(Bush) || player.isTouching(Monster)) {
            die.play();
            die.setVolume(0.3);
            bg2.velocityX = 0;
            bg3.velocityX = 0;
            bg4.velocityX = 0;
            obs.setVelocityXEach(0);
            obs.setLifetimeEach(-1);
            player.velocityX = 0;
            player.velocityY = 0;
            gamestate = 2
            sound2.loop();
            sound2.setVolume(0.3);

        }




    }

    else if (role === "3") {

        if (player.isTouching(Monster)) {
            monster.destroy();
        }

        if (player.isTouching(Bush) || player.isTouching(Stone)) {
            die.play();
            die.setVolume(0.3);
            bg2.velocityX = 0;
            bg3.velocityX = 0;
            bg4.velocityX = 0;
            obs.setVelocityXEach(0);
            obs.setLifetimeEach(-1);
            player.velocityX = 0;
            player.velocityY = 0;
            gamestate = 2
            sound2.loop();
            sound2.setVolume(0.3);

        }




    }








}
