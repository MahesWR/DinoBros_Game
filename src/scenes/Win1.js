import { Scene } from "phaser";

export default class WinScene1 extends Scene {
  constructor() {
    super("win-scene1");
  }

  init(data) {
    this.replayButton = undefined;
    this.score = data.score;
    this.player = undefined;
  }

  preload() {
    this.load.image("background", "images/BG/BG.png");
    this.load.image("start1", "images/th.jpg");
    this.load.image("tile", "images/Tiles/14.png");
    this.load.image("tile1", "images/Tiles/13.png");
    this.load.image("tile2", "images/Tiles/15.png");

    this.load.spritesheet("start", "images/Dino.png", {
      frameWidth: 24,
      frameHeight: 24,
    });
  }

  create() {
    this.add.image(200, 320, "background").setScale(4);
    this.add.image(710, 400, "tile1").setScale(1.5);
    this.add.image(1090, 400, "tile2").setScale(1.5);
    const tile = this.physics.add.staticImage(900, 400, "tile").setScale(1.5);
    this.player = this.physics.add.sprite(900, 0, "start").setScale(6);
    this.physics.add.collider(this.player, tile);
    this.add.text(550,500,'You Win!, Go to level 2?', { 
      fontSize: '48px', backgroundColor: "SkyBlue" })
    this.startButton = this.add
      .image(900, 800, "start1")
      .setInteractive()
      .setScale(2);
    this.startButton.once(
      "pointerup",
      () => {
        this.scene.start("level-2");
      },
      this
    );
  }
}