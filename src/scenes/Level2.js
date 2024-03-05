import { Scene } from "phaser";
export default class Level2 extends Scene {
  constructor() {
    super("level-2");
  }

  init() {
    this.platform = [];
    this.player = undefined;
    this.star = undefined;
    this.bomb = undefined;
    this.bombs = undefined;
    this.cursor = undefined;
    this.scoreText = undefined;
    this.score = 0;
    this.power = 0;
  }

  preload() {
    this.load.image("background", "images/BG/BG.png");
    this.load.image("Tile1", "images/Tiles/2.png");
    this.load.image("Tile2", "images/Tiles/1.png");
    this.load.image("Tile3", "images/Tiles/3.png");
    this.load.image("Tile4", "images/Tiles/5.png");
    this.load.image("Tile5", "images/Tiles/4.png");
    this.load.image("Tile1", "images/Tiles/6.png");
    this.load.image("Water1", "images/Tiles/17.png");
    this.load.image("Water2", "images/Tiles/18.png");
    this.load.image("PlatMid", "images/Tiles/14.png");
    this.load.image("PlatLeft", "images/Tiles/13.png");
    this.load.image("PlatRight", "images/Tiles/15.png");
    this.load.image("star", "images/star.png");
    this.load.image("bombs", "images/bomb.png");
    this.load.image("bomb", "images/bomb.png");

    this.load.spritesheet("dude", "images/Dino.png", {
      frameWidth: 24,
      frameHeight: 24,
    });
  }

  create() {
    // Create Images
    this.add.image(960, 590, "background").setScale(2);
    this.platform = this.physics.add.staticGroup();
    this.platform.create(600, 1020, "Tile4");
    this.platform.create(500, 1020, "Tile4");
    this.platform.create(400, 1020, "Tile4");
    this.platform.create(300, 1020, "Tile4");
    this.platform.create(200, 1020, "Tile4");
    this.platform.create(100, 1020, "Tile4");
    this.platform.create(0, 1020, "Tile4");
    this.platform.create(0, 900, "Tile1");
    this.platform.create(100, 900, "Tile1");
    this.platform.create(200, 900, "Tile1");
    this.platform.create(300, 900, "Tile1");
    this.platform.create(400, 900, "Tile1");
    this.platform.create(500, 900, "Tile1");
    this.platform.create(600, 900, "Tile1");
    this.platform.create(728, 883, "PlatMid");
    this.platform.create(855, 883, "PlatMid");
    this.platform.create(980, 1020, "Tile4");
    this.platform.create(980, 900, "Tile1");
    this.platform.create(1080, 1020, "Tile4");
    this.platform.create(1080, 900, "Tile1");
    this.platform.create(1207, 1020, "Tile1");
    this.platform.create(1307, 1020, "Tile1");
    this.platform.create(1407, 1020, "Tile1");
    this.platform.create(1407, 1020, "Tile1");
    this.platform.create(1507, 1020, "Tile4");
    this.platform.create(1507, 900, "Tile1");
    this.platform.create(1607, 1020, "Tile4");
    this.platform.create(1607, 900, "Tile1");
    this.platform.create(1707, 1020, "Tile4");
    this.platform.create(1707, 900, "Tile1");
    this.platform.create(1807, 1020, "Tile4");
    this.platform.create(1807, 900, "Tile1");
    this.platform.create(1907, 1020, "Tile4");
    this.platform.create(1907, 900, "Tile1");
    this.platform.create(600, 500, "PlatMid");
    this.platform.create(475, 500, "PlatLeft");
    this.platform.create(850, 500, "PlatRight");
    this.platform.create(725, 500, "PlatMid");
    this.platform.create(1300, 300, "PlatMid");
    this.platform.create(0, 0, "PlatMid");
    this.platform.create(100, 0, "PlatMid");
    this.platform.create(200, 0, "PlatMid");
    this.platform.create(300, 0, "PlatMid");
    this.platform.create(400, 0, "PlatMid");
    this.platform.create(500, 0, "PlatMid");
    this.platform.create(600, 0, "PlatMid");
    this.platform.create(700, 0, "PlatMid");
    this.platform.create(800, 0, "PlatMid");
    this.platform.create(900, 0, "PlatMid");
    this.platform.create(1000, 0, "PlatMid");
    this.platform.create(1100, 0, "PlatMid");
    this.platform.create(1200, 0, "PlatMid");
    this.platform.create(1300, 0, "PlatMid");
    this.platform.create(1400, 0, "PlatMid");
    this.platform.create(1500, 0, "PlatMid");
    this.platform.create(1600, 0, "PlatMid");
    this.platform.create(1700, 0, "PlatMid");

    // Create Sprite
    this.player = this.physics.add.sprite(100, 750, "dude").setScale(4);
    this.player.setCollideWorldBounds(true);
    this.physics.add.collider(this.player, this.platform);

    // Create Star
    this.star = this.physics.add.group({
      key: "star",
      repeat: 3,
      setXY: { x: 650, y: 0, stepX: 600 },
    });
    this.bomb = this.physics.add.group({
      key: "bomb",
      repeat: 2,
      setXY: { x: 500, y: 0, stepX: 1000 },
    });
    this.bombs = this.physics.add.group({
      key: "bombs",
      repeat: 2,
      setXY: { x: 600, y: 550, stepX: 700 },
    });
    this.physics.add.collider(this.star, this.platform);
    this.physics.add.collider(this.bomb, this.platform);
    this.physics.add.collider(this.bombs, this.platform);
    this.star.children.iterate(function (child) {
      // @ts-ignore
      child.setBounceY(0.5).setScale(3);
    });
    this.bomb.children.iterate(function (child) {
      // @ts-ignore
      child.setBounceY(1).setScale(3);
    });
    this.bombs.children.iterate(function (child) {
      // @ts-ignore
      child.setBounceY(1).setScale(3);
    });

    // Cursor
    this.cursor = this.input.keyboard.createCursorKeys();

    // Animation Player
    // diem
    this.anims.create({
      key: "turn",
      frames: [{ key: "dude", frame: 1 }],
      frameRate: 20,
    });
    // right turn
    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("dude", { start: 16, end: 23 }),
      frameRate: 5,
      repeat: -1,
    });
    // left turn
    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("dude", { start: 16, end: 23 }),
      frameRate: 5,
      repeat: -1,
      setFlipX: true,
    });
    // overlap buat ilangin star
    this.physics.add.overlap(
      this.player,
      this.star,
      this.collectStar,
      null,
      this
    );
    // Kena Bom
    this.physics.add.overlap(this.player, this.bomb, this.gameOver, null, this);
    this.physics.add.overlap(
      this.player,
      this.bombs,
      this.gameOver,
      null,
      this
    );
    // membuat score
    this.scoreText = this.add.text(16, 16, "Star Collected : 0 , Level 2", {
      fontSize: "64px",
      backgroundColor: "SkyBlue",
    });
  }

  update() {
    if (this.cursor.left.isDown) {
      //Jika keyboard panah kiri ditekan
      this.player.setVelocity(-200, 200);
      //Kecepatan x : -200
      //Kecepatan y : 200
      //(bergerak ke kiri dan turun kebawah seolah terkena gaya gravitasi)
      this.player.anims.play("left", true);
      this.player.setFlipX(true);
    } else if (this.cursor.right.isDown) {
      this.player.setVelocity(200, 200);
      this.player.anims.play("right", true);
      this.player.setFlipX(false);
    } else {
      this.player.setVelocity(0, 0);
      this.player.anims.play("turn");
    }
    if (this.cursor.up.isDown) {
      // this.player.setVelocity(0, -200);
      this.startJump();
      this.player.anims.play("turn");
    }
    if (this.cursor.up.isUp) {
      this.player.setVelocityY(200);
      this.endJump;
    }

    if (this.score >= 3) {
      this.physics.pause();
      this.scene.start("win-scene2");
    }
  }

  // Method

  collectStar(player, star) {
    star.destroy();
    this.score += 1;
    this.scoreText.setText("Star Collected : " + this.score);
  }

  gameOver() {
    this.physics.pause();
    this.scene.start("over-scene");
  }

  startJump() {
    this.timer = this.time.addEvent({
      delay: 100,
      callback: this.tick,
      callbackScope: this,
      loop: true,
    });
    this.player.setVelocityY(-200);
  }

  endJump() {
    this.timer.remove();
    this.player.setVelocityY(this.power * 400);
    this.power = 0;
  }

  tick() {
    if (this.power < 10) {
      this.power += 1;
      console.log(this.power);
    }
  }
}
