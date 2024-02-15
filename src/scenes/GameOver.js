import {Scene} from "phaser";

export default class GameOverScene extends Scene {
  constructor() {
    super("over-scene");
  }

  init(data) {
    this.replayButton = undefined;
    this.score = data.score;
  }

  preload() {
    this.load.image("background", "images/BG/BG.png");
    this.load.image("start1", "images/th.jpg");
    this.load.image("tile", "images/Tiles/14.png");
    this.load.image("tile1", "images/Tiles/13.png");
    this.load.image("tile2", "images/Tiles/15.png");
    this.load.image("replay-button", "images/replay.png")
  }

  create() {
    this.add.image(200, 320, "background").setScale(4);
    this.add.image(710, 400, "tile1").setScale(1.5);
    this.add.image(1090, 400, "tile2").setScale(1.5);
    const tile = this.physics.add.staticImage(900, 400, "tile").setScale(1.5);
    this.player = this.physics.add.sprite(900, 0, "start").setScale(6);
    this.physics.add.collider(this.player, tile);
    this.replayButton = this.add.image(900,800, "replay-button").setInteractive().setScale(2);
    this.replayButton.once(
        "pointerup",() => {
          this.scene.start("level-1");
        },
        this
      )
  }
}