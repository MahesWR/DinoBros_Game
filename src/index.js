import { AUTO, Scale, Game } from "phaser";
import StartGameScene from "./scenes/MainMenu";
import Level1 from "./scenes/Level1";
import WinScene from "./scenes/Win"
import GameOver from "./scenes/GameOver"

const config = {
  type: AUTO,

  parent: "game",
  backgroundColor: "#33A5E7",
  scale: {
    width: 1920,
    height: 1080,
    mode: Scale.FIT,
    autoCenter: Scale.CENTER_BOTH,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 1000 },
      debug: false,
    },
  },
  scene: [StartGameScene,Level1,WinScene,GameOver],
};

/* eslint-disable-next-line */
export default new Game(config);
