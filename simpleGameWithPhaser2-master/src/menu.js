var Menu = {
  bgAudio:null,
  menuSelectAudio:null,
  preload: function() {
    game.load.spritesheet("startBtn", "assets/image/startGameButton.png",333,90);
    game.load.image("bg1", "assets/image/menuBackground.jpg");
     game.load.audio('bgAudio', 'assets/audio/backgroundAudio.wav');
      game.load.audio('menuSelectAudio', 'assets/audio/menu_select.mp3');
     
  },

  create: function() {
    bgAudio = game.add.audio('bgAudio');
    menuSelectAudio = game.add.audio('menuSelectAudio');
    bgAudio.play();
    bgAudio.loopFull(1);

    myBackground=game.add.image(0,0,'bg1');
    myBackground.width=800;
    myBackground.height=600;

    startButton = game.add.button(game.width/2, game.height/2-80, "startBtn", this.startGame, this,1,0);
    startButton.anchor.setTo(0.5);
  },

  startGame: function() {
    menuSelectAudio.play();
    bgAudio.destroy();
    game.cache.removeSound('bgAudio');
    game.state.start("Game");    
  }
};
