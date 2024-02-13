import { AUTO, Scale, Game } from "phaser";
import DoggyBrosScene from "./scenes/DoggyBrosScene";

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
  scene: [DoggyBrosScene],
};

/* eslint-disable-next-line */
export default new Game(config);
