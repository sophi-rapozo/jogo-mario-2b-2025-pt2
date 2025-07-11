const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")
const nuvem = document.querySelector(".nuvem")
const starButton = document.querySelector(".star") 
const gameOverScreen = document.querySelector(".game-over")
const scoreElement = document.querySelector(".score")

AudioStart = new Audio("./sound/audio_theme.mp3"):
const gameOverSound = new Audio("./sound/audio_gameover.mp3");

let gameStarted = false;
let score = 0;

const startGame = () => {
    gameStarted = true;
    audioStart.play();

    pipe.computedStyleMap.animation ="pipe-animation 1.5s"

}