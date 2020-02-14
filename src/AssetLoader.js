import bg from "./assets/bg.png";
import bike from "./assets/bike.png";
import bike_jump from "./assets/bike_jump.png";
import floor from "./assets/floor.png";
import coin from "./assets/coin.png";
import bullet from "./assets/bullet.png";
import enemy_1 from "./assets/enemy_1.png";
import enemy_2 from "./assets/enemy_2.png";
import asteroid from "./assets/asteroid.png";
import zombie from "./assets/zombie.png";
import boss_fly from "./assets/boss.png";
import explode from "./assets/explode.png";
import gun_sound from "./assets/gun.wav";
import hit_sound from "./assets/hit.wav";
import coin_sound from "./assets/coin.wav";
import jump_sound from "./assets/jump.wav";
import death_sound from "./assets/death.wav";
import theme_music from "./assets/theme.mp3";

export const loadAssets = (scene) => {
    scene.load.image("bg", bg);
    scene.load.image("bike", bike);
    scene.load.image("bike_jump", bike_jump);
    scene.load.image("floor", floor);
    scene.load.image("coin", coin);
    scene.load.image("bullet", bullet);
    scene.load.image("enemy_1", enemy_1);
    scene.load.image("enemy_2", enemy_2);
    scene.load.image("asteroid", asteroid);
    scene.load.image("zombie", zombie);
    scene.load.image("boss_fly", boss_fly);
    scene.load.spritesheet('explode',
        explode,
        { frameWidth: 96, frameHeight: 96 }
    );
    scene.load.audio('gun_sound', gun_sound);
    scene.load.audio('hit_sound', hit_sound);
    scene.load.audio('coin_sound', coin_sound);
    scene.load.audio('jump_sound', jump_sound);
    scene.load.audio('death_sound', death_sound);
    scene.load.audio('theme_music', theme_music);
}
