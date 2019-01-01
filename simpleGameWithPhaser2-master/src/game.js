var Game = {
    inGameAudio: null,
    explosionAudio: null,
    explosions: null,
    titleSprite: null,
    player: null,
    myBullets: null,
    myBulletTime: null,
    myBulletVelocity: null,
    timeBetween2Shoot: null,
    score: null,
    scoreText: null,
    health: null,
    bulletShotSound: null,
    lastGameTime21: null,
    lastGameTime22: null,
    lastGameTime23: null,
    lastGameTime24: null,
    lastGameTime25: null,
    lastGameTime26: null,
    lastGameTime2Boss1: null,
    lastGameTime2Boss2: null,
    lastGameTime2Boss3: null,
    lastGameTime2Boss4: null,
    boss1: null,
    boss2: null,
    boss3: null,
    boss4: null,
    enemyBullets1: null,
    enemyBullets2: null,
    enemyBullets3: null,
    enemyBullets4: null,
    enemyBullets5: null,
    explosion: null,
    invaders: null,
    enemy1: null,
    enemy2: null,
    enemy3: null,
    enemy4: null,
    enemy5: null,
    enemy6: null,
    velocityStage1: null,
    velocityStage2: null,
    velocityStage3: null,
    velocityStage4: null,
    curVelocity: null,
    curStage: null,
    stateText: null,
    stateBossHealth: null,
    gameOver: null,
    bulletTotalMilisecond: null,
    checkBoss1Die: null,
    checkBoss2Die: null,
    checkBoss3Die: null,
    checkBoss4Die: null,
    curVersion: null,
    healthBoss1: null,
    healthBoss2: null,
    healthBoss3: null,
    healthBoss4: null,
    finishBoss1: null,
    finishBoss2: null,
    finishBoss3: null,
    finishBoss4: null,
    finishUpgradeVer2: null,
    finishUpgradeVer3: null,
    finishUpgradeVer4: null,
    timeOut: null,

    preload: function() {
        game.load.audio('inGameAudio', 'assets/audio/ingame.mp3');
        game.load.audio('explosionAudio', 'assets/audio/explosion.mp3');
        game.load.image('starfield', 'assets/image/starfield.jpg');

        game.load.image('player', 'assets/image/spaceShip1.png');
        game.load.image('player2', 'assets/image/spaceShip2.png');
        game.load.image('player3', 'assets/image/spaceShip3.png');
        game.load.image('player4', 'assets/image/spaceShip4.png');

        game.load.image('bullet1', 'assets/image/myBullet1.png');
        game.load.image('bullet2', 'assets/image/myBullet2.png');
        game.load.image('bullet3', 'assets/image/myBullet3.png');
        game.load.image('bullet4', 'assets/image/myBullet4.png');

        game.load.image('enemyBullets1', 'assets/image/bullet1.png');
        game.load.image('enemyBullets2', 'assets/image/bullet2.png');
        game.load.image('enemyBullets3', 'assets/image/bullet3.png');
        game.load.image('enemyBullets4', 'assets/image/bullet4.png');
        game.load.image('enemyBullets5', 'assets/image/bullet5.png');

        game.load.image('boss1', 'assets/image/boss1.png');
        game.load.image('boss2', 'assets/image/boss2.png');
        game.load.image('boss3', 'assets/image/boss3.png');
        game.load.image('boss4', 'assets/image/boss4.png');

        game.load.image('enemy1', 'assets/image/enemy1.png');
        game.load.image('enemy2', 'assets/image/enemy2.png');
        game.load.image('enemy3', 'assets/image/enemy3.png');
        game.load.image('enemy4', 'assets/image/enemy4.png');
        game.load.image('enemy5', 'assets/image/enemy5.png');
        game.load.image('enemy6', 'assets/image/enemy6.png');

        game.load.spritesheet('kaboom', 'assets/image/explode.png', 128, 128);

        game.load.image('healthUnit', 'assets/image/healthUnit.png');
        game.load.audio('bulletShot', 'assets/audio/bullet_shot.wav');

    },

    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        //background audio
        inGameAudio = game.add.audio('inGameAudio');
        inGameAudio.play();
        inGameAudio.loopFull(0.5);

        //explosion audio
        explosionAudio = game.add.audio('explosionAudio');

        //titleSprite for background in game
        tileSprite = game.add.tileSprite(0, 0, 800, 600, 'starfield');

        //create player
        player = game.add.sprite(400, 570, 'player');
        player.width = 60;
        player.height = 60;
        player.anchor.setTo(0.5, 0.5);
        game.physics.enable(player, Phaser.Physics.ARCADE);
        player.body.collideWorldBounds = true;

        //init boss1
        boss1 = game.add.sprite(400, 0, 'boss1');
        boss1.width = 200;
        boss1.height = 200;
        boss1.anchor.setTo(0.5, 0);
        game.physics.enable(boss1, Phaser.Physics.ARCADE);
        boss1.body.collideWorldBounds = true;
        boss1.exists = false;
        healthBoss1 = 15;

        //init boss2
        boss2 = game.add.sprite(400, 0, 'boss2');
        boss2.width = 200;
        boss2.height = 200;
        boss2.anchor.setTo(0.5, 0);
        game.physics.enable(boss2, Phaser.Physics.ARCADE);
        boss2.body.collideWorldBounds = true;
        boss2.body.bounce.setTo(1, 1);
        boss2.body.velocity.x = 100;
        boss2.body.velocity.y = 150;
        boss2.exists = false;
        healthBoss2 = 30;

        //init boss3
        boss3 = game.add.sprite(400, 0, 'boss3');
        boss3.width = 200;
        boss3.height = 200;
        boss3.anchor.setTo(0.5, 0);
        game.physics.enable(boss3, Phaser.Physics.ARCADE);
        boss3.body.collideWorldBounds = true;
        boss3.body.bounce.setTo(1, 0);
        boss3.body.velocity.x = 300;
        boss3.exists = false;
        healthBoss3 = 60;

        //init boss4
        boss4 = game.add.sprite(400, 0, 'boss4');
        boss4.width = 200;
        boss4.height = 200;
        boss4.anchor.setTo(0.5, 0);
        game.physics.enable(boss4, Phaser.Physics.ARCADE);
        boss4.body.collideWorldBounds = true;
        boss4.body.bounce.setTo(1, 1);
        boss4.body.velocity.x = 200;
        boss4.body.velocity.y = 200;
        boss4.exists = false;
        healthBoss4 = 120;

        finishBoss1 = false;
        finishBoss2 = false;
        finishBoss3 = false;
        finishBoss4 = false;

        //create state text for boss'health
        stateBossHealth = game.add.text(200, 16, "Boss's Health: 0", { fontSize: '32px', fill: '#FFF' });
        stateBossHealth.visible = false;

        //create player's bullet
        myBullets = game.add.group();
        myBullets.enableBody = true;
        myBullets.physicsBodyType = Phaser.Physics.ARCADE;
        myBullets.createMultiple(300, 'bullet1');
        myBullets.setAll('anchor.x', 0.5);
        myBullets.setAll('anchor.y', 1);
        myBullets.setAll('outOfBoundsKill', true);
        myBullets.setAll('checkWorldBounds', true);
        myBulletTime = 0;
        myBulletVelocity = 800;
        timeBetween2Shoot = 200;


        //create shooting bullet sound
        bulletShotSound = game.add.audio('bulletShot');

        //create score
        score = 0;
        scoreText = game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#FFF' });

        //create  player's health
        health = game.add.group();
        game.add.text(650, 16, 'Health: ', { fontSize: '32px', fill: '#FFF' });
        for (var i = 0; i < 8; i++) {
            var healthUnit = health.create(650 + i * 15, 56, 'healthUnit');

        }



        //create invader group       
        enemy1 = game.add.group();
        enemy1.enableBody = true;
        enemy1.physicsBodyType = Phaser.Physics.ARCADE;

        enemy2 = game.add.group();
        enemy2.enableBody = true;
        enemy2.physicsBodyType = Phaser.Physics.ARCADE;

        enemy3 = game.add.group();
        enemy3.enableBody = true;
        enemy3.physicsBodyType = Phaser.Physics.ARCADE;

        enemy4 = game.add.group();
        enemy4.enableBody = true;
        enemy4.physicsBodyType = Phaser.Physics.ARCADE;

        enemy5 = game.add.group();
        enemy5.enableBody = true;
        enemy5.physicsBodyType = Phaser.Physics.ARCADE;

        enemy6 = game.add.group();
        enemy6.enableBody = true;
        enemy6.physicsBodyType = Phaser.Physics.ARCADE;



        //create enemy's bullet
        enemyBullets1 = game.add.group();
        enemyBullets1.enableBody = true;
        enemyBullets1.physicsBodyType = Phaser.Physics.ARCADE;
        enemyBullets1.createMultiple(300, 'enemyBullets1');
        enemyBullets1.setAll('anchor.x', 0.5);
        enemyBullets1.setAll('anchor.y', 0);
        enemyBullets1.setAll('outOfBoundsKill', true);
        enemyBullets1.setAll('checkWorldBounds', true);
        enemyBullets1.setAll('width', 10);
        enemyBullets1.setAll('height', 10);

        enemyBullets2 = game.add.group();
        enemyBullets2.enableBody = true;
        enemyBullets2.physicsBodyType = Phaser.Physics.ARCADE;
        enemyBullets2.createMultiple(300, 'enemyBullets2');
        enemyBullets2.setAll('anchor.x', 0.5);
        enemyBullets2.setAll('anchor.y', 0);
        enemyBullets2.setAll('outOfBoundsKill', true);
        enemyBullets2.setAll('checkWorldBounds', true);
        enemyBullets2.setAll('width', 20);
        enemyBullets2.setAll('height', 20);


        enemyBullets3 = game.add.group();
        enemyBullets3.enableBody = true;
        enemyBullets3.physicsBodyType = Phaser.Physics.ARCADE;
        enemyBullets3.createMultiple(300, 'enemyBullets3');
        enemyBullets3.setAll('anchor.x', 0.5);
        enemyBullets3.setAll('anchor.y', 0);
        enemyBullets3.setAll('outOfBoundsKill', true);
        enemyBullets3.setAll('checkWorldBounds', true);
        enemyBullets3.setAll('width', 10);
        enemyBullets3.setAll('height', 20);

        enemyBullets4 = game.add.group();
        enemyBullets4.enableBody = true;
        enemyBullets4.physicsBodyType = Phaser.Physics.ARCADE;
        enemyBullets4.createMultiple(300, 'enemyBullets4');
        enemyBullets4.setAll('anchor.x', 0.5);
        enemyBullets4.setAll('anchor.y', 0);
        enemyBullets4.setAll('outOfBoundsKill', true);
        enemyBullets4.setAll('checkWorldBounds', true);
        enemyBullets4.setAll('width', 10);
        enemyBullets4.setAll('height', 30);

        enemyBullets5 = game.add.group();
        enemyBullets5.enableBody = true;
        enemyBullets5.physicsBodyType = Phaser.Physics.ARCADE;
        enemyBullets5.createMultiple(300, 'enemyBullets5');
        enemyBullets5.setAll('anchor.x', 0.5);
        enemyBullets5.setAll('anchor.y', 0);
        enemyBullets5.setAll('outOfBoundsKill', true);
        enemyBullets5.setAll('checkWorldBounds', true);
        enemyBullets5.setAll('width', 20);
        enemyBullets5.setAll('height', 30);

        //create explosions group
        explosions = game.add.group();
        explosions.createMultiple(50, 'kaboom');
        explosions.forEach(this.setUpExplosion, this);

        //initial velocity for each Stage
        velocityStage1 = 50;
        velocityStage2 = 75;
        velocityStage3 = 100;
        velocityStage4 = 125;
        curVelocity = velocityStage1;

        //initial stage=1
        curStage = 1;
        timeB2SEnemy = 0;
        lastGameTime21 = game.time.now;
        lastGameTime22 = game.time.now;
        lastGameTime23 = game.time.now;
        lastGameTime24 = game.time.now;
        lastGameTime25 = game.time.now;
        lastGameTime26 = game.time.now;
        bulletTotalMilisecond = 7000;

        //statetext to inform win or lose game
        stateText = game.add.text(game.world.centerX, game.world.centerY, ' ', { font: '84px Arial', fill: '#fff' });
        stateText.anchor.setTo(0.5, 0.5);
        stateText.visible = false;

        //init before start game
        checkBoss1Die = false;
        checkBoss2Die = false;
        checkBoss3Die = false;
        checkBoss4Die = false;

        gameOver = false;
        finishUpgradeVer2 = false;
        finishUpgradeVer3 = false;
        finishUpgradeVer4 = false;
        curVersion = 1;
        timeOut = [];
        var seft = this;

        timeOut.push(setTimeout(function() {
            seft.createInvader(1, 5, 'right-left', 'enemy6', -1, -1);
        }, 500));

        timeOut.push(setTimeout(function() {
            seft.createInvader(2, 5, 'top-bottom', 'enemy6', -1, -1);
        }, 5000));

        timeOut.push(setTimeout(function() {
            seft.createInvader(1, 8, 'left-right', 'enemy6', -1, -1);
        }, 11000));

        timeOut.push(setTimeout(function() {
            seft.createBoss1();
        }, 20000));



    },

    update: function() {
        tileSprite.tilePosition.y += 2;
        game.physics.arcade.moveToPointer(player, 100, game.input.activePointer, 35);
        if (gameOver) {
            for (var i = 0; i < timeOut.length; i++) {
                clearTimeout(timeOut[i]);
            }
        }
        if (game.input.activePointer.isDown) {
            if (gameOver) {
                game.state.start("Game");
                gameOver=false;
            }
            else{
                 this.fireBullet();
            }
           
        }

        if (curStage == 1) {
            bulletTotalMilisecond = 5000;
            curVelocity = velocityStage1;
        }
        if (curStage == 2) {
            bulletTotalMilisecond = 4500;
            curVelocity = velocityStage2;
        }
        if (curStage == 3) {
            bulletTotalMilisecond = 4000;
            curVelocity = velocityStage3;
        }
        if (curStage == 4) {
            bulletTotalMilisecond = 3500;
            curVelocity = velocityStage4;
        }


        var now = game.time.now;

        timeB2SEnemy = bulletTotalMilisecond / enemy1.countLiving();
        if (now - lastGameTime21 > timeB2SEnemy) {
            this.invaderFireBullet(enemy1);
            lastGameTime21 = now;
        }

        timeB2SEnemy = bulletTotalMilisecond / enemy2.countLiving();
        if (now - lastGameTime22 > timeB2SEnemy) {
            this.invaderFireBullet(enemy2);
            lastGameTime22 = now;
        }
        timeB2SEnemy = bulletTotalMilisecond / enemy3.countLiving();
        if (now - lastGameTime23 > timeB2SEnemy) {
            this.invaderFireBullet(enemy3);
            lastGameTime23 = now;
        }

        timeB2SEnemy = bulletTotalMilisecond / enemy4.countLiving();
        if (now - lastGameTime24 > timeB2SEnemy) {
            this.invaderFireBullet(enemy4);
            lastGameTime24 = now;
        }

        timeB2SEnemy = bulletTotalMilisecond / enemy5.countLiving();
        if (now - lastGameTime25 > timeB2SEnemy) {
            this.invaderFireBullet(enemy5);
            lastGameTime25 = now;
        }

        timeB2SEnemy = bulletTotalMilisecond / enemy6.countLiving();
        if (now - lastGameTime26 > timeB2SEnemy) {
            this.invaderFireBullet(enemy6);
            lastGameTime26 = now;
        }

        if (boss1.exists === true) {
            if (now - lastGameTime2Boss1 > 1000) {
                this.invaderFireBullet(boss1);
                lastGameTime2Boss1 = now;
            }
        }

        if (boss2.exists === true) {
            if (now - lastGameTime2Boss2 > 500) {
                this.invaderFireBullet(boss2);
                lastGameTime2Boss2 = now;
            }
        }

        if (boss3.exists === true) {
            if (now - lastGameTime2Boss3 > 500) {
                this.invaderFireBullet(boss3);
                lastGameTime2Boss3 = now;
            }
        }

        if (boss4.exists === true) {
            if (now - lastGameTime2Boss4 > 500) {
                this.invaderFireBullet(boss4);
                lastGameTime2Boss4 = now;
            }
        }
        if (score > 200 && finishUpgradeVer2 == false) { //200
            var preX = player.x,
                preY = player.y;
            player.kill();
            this.createNewPlayer(preX, preY, 'player2');
            this.createNewMyBullet('bullet2');
            curVersion = 2;
            finishUpgradeVer2 = true;

        }
        if (score > 1000 && finishUpgradeVer3 == false) { //800
            var preX = player.x,
                preY = player.y;
            player.kill();
            this.createNewPlayer(preX, preY, 'player3');
            this.createNewMyBullet('bullet3');
            curVersion = 3;
            finishUpgradeVer3 = true;

        }
        if (score > 2200 && finishUpgradeVer4 == false) { //2300
            var preX = player.x,
                preY = player.y;
            player.exists = false;
            this.createNewPlayer(preX, preY, 'player4');
            this.createNewMyBullet('bullet4');
            curVersion = 4;
            finishUpgradeVer4 = true;

        }
        if (checkBoss1Die == true && finishBoss1 == false) {
            var seft = this;
            timeOut.push(setTimeout(function() {
                seft.createInvader(2, 7, 'top-bottom', 'enemy2', -1, -1);
            }, 500));

            timeOut.push(setTimeout(function() {
                seft.createInvader(5, 1, 'left-right', 'enemy6', -1, -1);
            }, 7000));

            timeOut.push(setTimeout(function() {
                seft.createInvader(2, 5, 'right-left', 'enemy3', -1, -1);
            }, 14000));

            timeOut.push(setTimeout(function() {
                seft.createBoss2();
            }, 20000));
            finishBoss1 = true;
            curStage = 2;
        }
        if (checkBoss2Die == true && finishBoss2 == false) {
            var seft = this;
            timeOut.push(setTimeout(function() {
                seft.createInvader(2, 7, 'top-bottom', 'enemy3', -1, -1);
            }, 500));

            timeOut.push(setTimeout(function() {
                seft.createInvader(5, 1, 'left-right', 'enemy4', -1, -1);
            }, 7000));

            timeOut.push(setTimeout(function() {
                seft.createInvader(2, 5, 'left-right', 'enemy3', -1, -1);
            }, 14000));

            timeOut.push(setTimeout(function() {
                seft.createBoss3();
            }, 20000));
            finishBoss2 = true;
            curStage = 3;
        }

        if (checkBoss3Die == true && finishBoss3 == false) {
            var seft = this;
            timeOut.push(setTimeout(function() {
                seft.createInvader(2, 7, 'top-bottom', 'enemy4', -1, -1);
            }, 500));

            timeOut.push(setTimeout(function() {
                seft.createInvader(5, 1, 'left-right', 'enemy5', -1, -1);
            }, 7000));

            timeOut.push(setTimeout(function() {
                seft.createInvader(2, 5, 'left-right', 'enemy4', -1, -1);
            }, 14000));

            timeOut.push(setTimeout(function() {
                seft.createInvader(3, 6, 'top-bottom', 'enemy5', -1, -1);
            }, 14000));

            timeOut.push(setTimeout(function() {
                seft.createBoss4();
            }, 20000));
            finishBoss3 = true;
            curStage = 4;
        }

        game.physics.arcade.overlap(boss1, player, this.playerHitBoss, null, this);
        game.physics.arcade.overlap(boss2, player, this.playerHitBoss, null, this);
        game.physics.arcade.overlap(boss3, player, this.playerHitBoss, null, this);
        game.physics.arcade.overlap(boss4, player, this.playerHitBoss, null, this);

        game.physics.arcade.overlap(enemy1, player, this.playerHitEnemy, null, this);
        game.physics.arcade.overlap(enemy2, player, this.playerHitEnemy, null, this);
        game.physics.arcade.overlap(enemy3, player, this.playerHitEnemy, null, this);
        game.physics.arcade.overlap(enemy4, player, this.playerHitEnemy, null, this);
        game.physics.arcade.overlap(enemy5, player, this.playerHitEnemy, null, this);
        game.physics.arcade.overlap(enemy6, player, this.playerHitEnemy, null, this);

        game.physics.arcade.overlap(myBullets, enemy1, this.bulletHitEnemy, null, this);
        game.physics.arcade.overlap(myBullets, enemy2, this.bulletHitEnemy, null, this);
        game.physics.arcade.overlap(myBullets, enemy3, this.bulletHitEnemy, null, this);
        game.physics.arcade.overlap(myBullets, enemy4, this.bulletHitEnemy, null, this);
        game.physics.arcade.overlap(myBullets, enemy5, this.bulletHitEnemy, null, this);
        game.physics.arcade.overlap(myBullets, enemy6, this.bulletHitEnemy, null, this);

        game.physics.arcade.overlap(myBullets, boss1, this.bulletHitBoss, null, this);
        game.physics.arcade.overlap(myBullets, boss2, this.bulletHitBoss, null, this);
        game.physics.arcade.overlap(myBullets, boss3, this.bulletHitBoss, null, this);
        game.physics.arcade.overlap(myBullets, boss4, this.bulletHitBoss, null, this);

        game.physics.arcade.overlap(enemyBullets1, player, this.bulletHitPlayer, null, this);
        game.physics.arcade.overlap(enemyBullets2, player, this.bulletHitPlayer, null, this);
        game.physics.arcade.overlap(enemyBullets3, player, this.bulletHitPlayer, null, this);
        game.physics.arcade.overlap(enemyBullets4, player, this.bulletHitPlayer, null, this);
        game.physics.arcade.overlap(enemyBullets5, player, this.bulletHitPlayer, null, this);


    },
    createBoss1: function() {
        boss1.exists = true;
        lastGameTime2Boss1 = game.time.now;

        stateBossHealth.text = "Boss's Health: " + healthBoss1;
        stateBossHealth.visible = true;
    },
    createBoss2: function() {
        boss2.exists = true;
        lastGameTime2Boss2 = game.time.now;
    },
    createBoss3: function() {
        boss3.exists = true;
        lastGameTime2Boss3 = game.time.now;
    },
    createBoss4: function() {
        boss4.exists = true;
        lastGameTime2Boss4 = game.time.now;
    },
    invaderFireBullet: function(invaders) {

        //_________________________________________________
        if (invaders.key !== 'boss1' && invaders.key != 'boss2' && invaders.key != 'boss3' && invaders.key != 'boss4') {
            var livingEnemies = [];
            livingEnemies.length = 0;
            invaders.forEachAlive(function(enemy) {

                // put every living enemy in an array
                livingEnemies.push(enemy);
            });



            if (livingEnemies.length > 0) {

                var random = game.rnd.integerInRange(0, livingEnemies.length - 1);

                // randomly select one of them
                var shooter = livingEnemies[random];
                // And fire the bullet from this enemy

                var typeBullet;
                if (shooter.key === 'enemy1') {
                    typeBullet = enemyBullets3;
                }
                if (shooter.key === 'enemy2') {
                    typeBullet = enemyBullets2;
                }
                if (shooter.key === 'enemy3') {
                    typeBullet = enemyBullets4;
                }
                if (shooter.key === 'enemy4') {
                    typeBullet = enemyBullets4;
                }
                if (shooter.key === 'enemy5') {
                    typeBullet = enemyBullets5;
                }
                if (shooter.key === 'enemy6') {
                    typeBullet = enemyBullets1;
                }

                this.enemyFireBullet(shooter.body.x, shooter.body.y, -1, typeBullet);

            }
        } else {
            if (invaders.key === 'boss1') {
                var typeBullet = enemyBullets2;
                for (var i = 1; i <= 6; i++) {
                    this.enemyFireBullet(invaders.x, invaders.y, -40 + i * 10, typeBullet);
                }

            }
            if (invaders.key === 'boss2') {
                var typeBullet = enemyBullets4;
                for (var i = 1; i <= 6; i++) {
                    this.enemyFireBullet(invaders.x, invaders.y + 100, -1, typeBullet);
                }

            }

            if (invaders.key === 'boss3') {
                var typeBullet = enemyBullets2;
                for (var i = 1; i <= 6; i++) {
                    this.enemyFireBullet(invaders.x, invaders.y + 100, -1, typeBullet);
                }

            }

            if (invaders.key === 'boss4') {
                var typeBullet = enemyBullets5;
                for (var i = 1; i <= 35; i++) {
                    this.enemyFireBullet(invaders.x, invaders.y + 100, +i * 10, typeBullet);
                }

            }

        }


    },
    setUpExplosion: function(invader) {
        invader.anchor.x = 0.3;
        invader.anchor.y = 0.3;
        invader.animations.add('kaboom');
    },
    playerHitEnemy: function(player, invader) {
        var explosion = explosions.getFirstExists(false);
        explosion.reset(invader.body.x, invader.body.y);
        explosion.play('kaboom', 30, false, true);

        var explosion2 = explosions.getFirstExists(false);
        explosion2.reset(player.body.x, player.body.y);
        explosion2.play('kaboom', 30, false, true);
        explosionAudio.play();

        invader.kill();
        player.kill();
        health.callAll('kill');
        gameOver = true;


        stateText.text = " GAME OVER \n Click to restart";
        stateText.visible = true;
    },
    playerHitBoss: function(boss, player) {


        var explosion2 = explosions.getFirstExists(false);
        explosion2.reset(player.body.x, player.body.y);
        explosion2.play('kaboom', 30, false, true);
        explosionAudio.play();

        player.kill();
        health.callAll('kill');
        gameOver = true;


        stateText.text = " GAME OVER \n Click to restart";
        stateText.visible = true;
    },
    bulletHitEnemy: function(bullet, enemy) {

        bullet.kill();
        enemy.kill();

        //  Increase the score
        score += 10 * curStage;
        scoreText.text = 'Score:' + score;

        //  And create an explosion :)
        var explosion = explosions.getFirstExists(false);
        explosion.reset(enemy.body.x, enemy.body.y);
        explosion.play('kaboom', 30, false, true);
        explosionAudio.play();

    },
    bulletHitBoss: function(boss, bullet) {

        bullet.kill();
        if (boss.key == 'boss1') {
            if (curVersion == 1 || curVersion == 2) {
                healthBoss1 -= 1;
            } else {
                healthBoss1 -= 2;
            }
            if (healthBoss1 <= 0) {
                score += 200;
                boss.kill();
                checkBoss1Die = true;
                //  And create an explosion :)
                var explosion = explosions.getFirstExists(false);
                explosion.reset(boss.body.x, boss.body.y);
                explosion.play('kaboom', 30, false, true);
                explosionAudio.play();
                stateBossHealth.visible = false;
                stateText.text = " STAGE 2";
                stateText.visible = true;
                var fn2 = function() {
                    stateText.visible = false;
                };
                setTimeout(fn2, 1000);
            }
            stateBossHealth.text = "Boss's Health: " + healthBoss1;

        }
        if (boss.key == 'boss2') {
            if (curVersion == 1 || curVersion == 2) {
                healthBoss2 -= 1;
            } else {
                healthBoss2 -= 2;
            }
            if (healthBoss2 <= 0) {
                score += 400;
                boss.kill();
                checkBoss2Die = true;
                //  And create an explosion :)
                var explosion = explosions.getFirstExists(false);
                explosion.reset(boss.body.x, boss.body.y);
                explosion.play('kaboom', 30, false, true);
                explosionAudio.play();
                stateBossHealth.visible = false;
                stateText.text = " STAGE 3";
                stateText.visible = true;
                var fn2 = function() {
                    stateText.visible = false;
                };
                setTimeout(fn2, 1000);
            }
            stateBossHealth.text = "Boss's Health: " + healthBoss2;

        }
        if (boss.key == 'boss3') {

            if (curVersion == 1 || curVersion == 2) {
                healthBoss3 -= 1;
            } else {
                healthBoss3 -= 2;
            }
            if (healthBoss3 <= 0) {
                score += 800;
                boss.kill();
                checkBoss3Die = true;
                //  And create an explosion :)
                var explosion = explosions.getFirstExists(false);
                explosion.reset(boss.body.x, boss.body.y);
                explosion.play('kaboom', 30, false, true);
                explosionAudio.play();
                stateBossHealth.visible = false;
                stateText.text = " STAGE 3";
                stateText.visible = true;
                var fn2 = function() {
                    stateText.visible = false;
                };
                setTimeout(fn2, 1000);
            }
            stateBossHealth.text = "Boss's Health: " + healthBoss3;

        }
        if (boss.key == 'boss4') {
            if (curVersion == 1 || curVersion == 2) {
                healthBoss4 -= 1;
            } else {
                healthBoss4 -= 2;
            }
            if (healthBoss4 <= 0) {

                boss.kill();
                checkBoss4Die = true;
                //  And create an explosion :)
                var explosion = explosions.getFirstExists(false);
                explosion.reset(boss.body.x, boss.body.y);
                explosion.play('kaboom', 30, false, true);
                explosionAudio.play();
                stateBossHealth.visible = false;
                stateText.text = "YOU WON ! CLICK TO RESTART";
                stateText.visible = true;
                gameOver = true;
            }
            stateBossHealth.text = "Boss's Health: " + healthBoss4;


        }






    },
    bulletHitPlayer: function(player, bullet) {
        bullet.kill();
        var healthUnit = health.getFirstAlive();
        if (healthUnit) {
            var countHealth = health.countLiving();
            if (bullet.key == 'enemyBullets1' || bullet.key == 'enemyBullets2' || bullet.key == 'enemyBullets3') {
                healthUnit.kill();
            }
            if (bullet.key == 'enemyBullets4') {
                if (countHealth >= 2) {
                    healthUnit.kill();
                    healthUnit.kill();
                } else {
                    var explosion2 = explosions.getFirstExists(false);
                    explosion2.reset(player.body.x, player.body.y);
                    explosion2.play('kaboom', 30, false, true);
                    explosionAudio.play();
                    player.kill();
                    gameOver = true;

                    stateText.text = " GAME OVER \n Click to restart";
                    stateText.visible = true;
                }
            }
            if (bullet.key == 'enemyBullets5') {
                if (countHealth >= 2) {
                    healthUnit.kill();
                    healthUnit.kill();
                    healthUnit.kill();
                } else {
                    var explosion2 = explosions.getFirstExists(false);
                    explosion2.reset(player.body.x, player.body.y);
                    explosion2.play('kaboom', 30, false, true);
                    explosionAudio.play();
                    player.kill();
                    gameOver = true;

                    stateText.text = " GAME OVER \n Click to restart";
                    stateText.visible = true;
                }
            }


        } else {
            var explosion2 = explosions.getFirstExists(false);
            explosion2.reset(player.body.x, player.body.y);
            explosion2.play('kaboom', 30, false, true);
            explosionAudio.play();
            player.kill();
            gameOver = true;

            stateText.text = " GAME OVER \n Click to restart";
            stateText.visible = true;
        }
    },
    createNewPlayer: function(preX, preY, playerKey) {
        player = game.add.sprite(preX, preY, playerKey);
        player.width = 60;
        player.height = 60;
        player.anchor.setTo(0.5, 0.5);
        game.physics.enable(player, Phaser.Physics.ARCADE);
        player.body.collideWorldBounds = true;
    },
    createNewMyBullet: function(bulletKey) {
        myBullets = game.add.group();
        myBullets.enableBody = true;
        myBullets.physicsBodyType = Phaser.Physics.ARCADE;
        myBullets.createMultiple(300, bulletKey);
        myBullets.setAll('anchor.x', 0.5);
        myBullets.setAll('anchor.y', 1);
        myBullets.setAll('outOfBoundsKill', true);
        myBullets.setAll('checkWorldBounds', true);
    },
    endGame: function() {
        game.state.start("Menu");
    },
    fireSingleBullet: function(angle) {
        var rotation;

        var bullet = myBullets.getFirstExists(false);
        bullet.reset(player.x, player.y);
        var pi = game.math.PI2 / 2;
        if (angle == -1) {
            rotation = -pi / 2;

        } else {
            rotation = angle / 180 * pi - pi / 2;
        }
        //bullet.rotation = rotation;
        game.physics.arcade.velocityFromRotation(rotation, curVelocity * 6, bullet.body.velocity);
    },
    fireBullet: function() {


        //  To avoid them being allowed to fire too fast we set a time limit
        if (game.time.now > myBulletTime) {
            //  Grab the first bullet we can from the pool
            if (curVersion == 1) {

                bullet = myBullets.getFirstExists(false);

                if (bullet) {
                    bulletShotSound.play();
                    bullet.reset(player.x, player.y + 8);
                    bullet.body.velocity.y = -myBulletVelocity;
                    myBulletTime = game.time.now + timeBetween2Shoot;
                }


            }
            if (curVersion == 2) {
                bulletShotSound.play();

                for (var i = -1; i < 2; i++) {

                    this.fireSingleBullet(0 + i * 15);
                }
                myBulletTime = game.time.now + timeBetween2Shoot;
            }
            if (curVersion == 3) {
                bulletShotSound.play();

                for (var i = -2; i < 3; i++) {
                    this.fireSingleBullet(0 + i * 10);

                }
                myBulletTime = game.time.now + timeBetween2Shoot;
            }
            if (curVersion == 4) {
                bulletShotSound.play();

                for (var i = -10; i < 11; i++) {
                    this.fireSingleBullet(0 + i * 18);

                }
                myBulletTime = game.time.now + timeBetween2Shoot;
            }

        }

    },
    enemyFireBullet: function(posx, posy, angle, type) {
        var rotation;

        var bullet = type.getFirstExists(false);
        bullet.reset(posx, posy);
        var pi = game.math.PI2 / 2;
        if (angle == -1) {
            rotation = game.physics.arcade.angleToPointer(bullet) - pi / 2;

        } else {
            rotation = angle / 180 * pi;
        }
        bullet.rotation = rotation;
        game.physics.arcade.velocityFromRotation(rotation + pi / 2, curVelocity + 50, bullet.body.velocity);
        //game.physics.arcade.moveToObject(bullet, player,curVelocity+50);
    },
    createInvader: function(quantityRow, quantityColumn, direction, species, posx, posy) {
        var startPointX, startPointY;
        var invaders = null;

        //check species
        if (species == 'enemy1') {
            invaders = enemy1;
        }
        if (species == 'enemy2') {
            invaders = enemy2;
        }
        if (species == 'enemy3') {
            invaders = enemy3;
        }
        if (species == 'enemy4') {
            invaders = enemy4;
        }
        if (species == 'enemy5') {
            invaders = enemy5;
        }
        if (species == 'enemy6') {
            invaders = enemy6;
        }
        //_________________________________________________


        for (var y = 0; y < quantityRow; y++) {
            for (var x = 0; x < quantityColumn; x++) {
                //__________________________________________________________________________________________
                if (direction === 'top-bottom') {
                    startPointX = (800 - (quantityColumn * 60) - (quantityColumn - 1) * 10) / 2;
                    startPointY = -quantityRow * (60 + 10);
                    var invaderUnit;
                    if (posx == -1 && posy == -1) {
                        invaderUnit = invaders.create(startPointX + x * 70, startPointY + y * 70, species);
                    } else {
                        invaderUnit = invaders.create(posx + x * 70, startPointY + y * 70, species);
                    }
                    invaderUnit.body.velocity.y = curVelocity;

                }
                //__________________________________________________________________________________________
                if (direction === 'left-right') {
                    startPointX = -(quantityColumn * 60) - (quantityColumn - 1) * 10;
                    startPointY = game.rnd.integerInRange(quantityRow * (60 + 10), 300);
                    var invaderUnit;
                    if (posx == -1 && posy == -1) {
                        invaderUnit = invaders.create(startPointX + x * 70, startPointY + y * 70, species);
                    } else {
                        invaderUnit = invaders.create(startPointX + x * 70, posy + y * 70, species);
                    }

                    invaderUnit.body.velocity.x = curVelocity;
                }
                //__________________________________________________________________________________________
                if (direction === 'right-left') {
                    startPointX = 800;
                    startPointY = game.rnd.integerInRange(quantityRow * (60 + 10), 300);
                    var invaderUnit;
                    if (posx == -1 && posy == -1) {
                        invaderUnit = invaders.create(startPointX + x * 70, startPointY + y * 70, species);
                    } else {
                        invaderUnit = invaders.create(startPointX + x * 70, posy + y * 70, species);
                    }

                    invaderUnit.body.velocity.x = -curVelocity;
                }
                //__________________________________________________________________________________________
            }
        }
        invaders.setAll('width', 60);
        invaders.setAll('height', 60);

    }
};