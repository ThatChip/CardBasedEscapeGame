<<<<<<< HEAD
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const gameWidth = canvas.width;
const gameHeight = canvas.height;

let lastTime = 0;
function gameLoop(timestamp) {
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, gameWidth, gameHeight);

    // Update and draw game elements here

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
