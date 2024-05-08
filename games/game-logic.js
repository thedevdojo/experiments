// Game Logic for Flappy Bird and Pong

// Flappy Bird Game Logic
class FlappyBird {
    constructor() {
        this.gravity = 0.25;
        this.lift = -6;
        this.velocity = 0;
        this.position = 250;
    }

    show() {
        // Code to display the bird on the canvas
    }

    up() {
        this.velocity += this.lift;
    }

    update() {
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.position += this.velocity;

        if (this.position > canvas.height) {
            this.position = canvas.height;
            this.velocity = 0;
        }

        if (this.position < 0) {
            this.position = 0;
            this.velocity = 0;
        }
    }
}

// Pong Game Logic
class Pong {
    constructor() {
        this.ballX = canvas.width / 2;
        this.ballY = canvas.height / 2;
        this.ballSpeedX = 4;
        this.ballSpeedY = 4;
        this.paddle1Y = 250;
        this.paddle2Y = 250;
        this.paddleHeight = 100;
        this.paddleWidth = 10;
    }

    resetBall() {
        this.ballX = canvas.width / 2;
        this.ballY = canvas.height / 2;
        this.ballSpeedX = -this.ballSpeedX;
    }

    moveBall() {
        this.ballX += this.ballSpeedX;
        this.ballY += this.ballSpeedY;

        if (this.ballY < 0 || this.ballY > canvas.height) {
            this.ballSpeedY = -this.ballSpeedY;
        }
        if (this.ballX < 0 || this.ballX > canvas.width) {
            this.resetBall();
        }
    }

    show() {
        // Code to display the pong game elements on the canvas
    }

    update() {
        this.moveBall();
        // Additional update logic for the pong game
    }
}

// Modular function to initialize and run both games
function initializeGames(canvasId, gameType) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');

    let game;
    if (gameType === 'flappyBird') {
        game = new FlappyBird();
    } else if (gameType === 'pong') {
        game = new Pong();
    }

    // Game loop
    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update();
        game.show();
        requestAnimationFrame(gameLoop);
    }

    gameLoop();
}
