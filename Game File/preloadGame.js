class preloadGame extends Phaser.Scene{
    constructor(){
      super("PreloadGame");
    }
    preload(){
      this.load.image("bg_1", "assets/bg-1.png");
      this.load.image("bg_2", "assets/bg-2.png");
      this.load.image("ground", "assets/ground.png");
      this.load.spritesheet("player", "assets/bee.png",{
        frameWidth: 37,
        frameHeight: 39
      });
    }
    create(){
      this.scene.start("PlayGame");
    }
}
