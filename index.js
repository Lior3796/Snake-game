class Snake {
	constructor(GameWidth, GameHeight, width, height) {
		// add width and height to consturctor
		this.width = width;
		this.height = height;
		this.position = {
			x: GameWidth / 2 - this.width / 2,
			y: GameHeight / 2,
		};
		this.GAME_WIDTH = GameWidth;
	}

	snakeMove(direction, dt) {
		switch (direction) {
			case 39:
				this.LeftToRight(Math.floor(dt), ctx);
				break;

			case 40:
				this.upToDown(Math.floor(dt), ctx);
				break;

			case 38:
				this.downToUp(Math.floor(dt), ctx);
				break;

			case 37:
				this.rightToLeft(Math.floor(dt), ctx);
				break;
		}
	}
	snakeDirection(dir) {
		switch (dir) {
			case 40:
				return 40;
			case 39:
				return 39;

			case 38:
				return 38;

			case 37:
				return 37;
		}
	}

	LeftToRight(dt, ctx) {
		// function that update the snake move on x axis from left to right
		if (!dt) return;
		this.position.x += 10 / dt; // add to the position +10 to move right
		this.bounds("right"); // function that check if the snake out of his bounds
		this.drawDown(ctx); // function that draw the snake move on x axis
	}

	rightToLeft(dt, ctx) {
		// function that update the snake move on x axis
		if (!dt) return;
		this.position.x -= 10 / dt;
		this.bounds("left");
		this.drawDown(ctx); // function that draw the snake move on x axis
	}
	upToDown(dt, ctx) {
		// function that update the snake move on y axis
		if (!dt) return;
		this.position.y += 10 / dt;
		this.bounds("down");
		this.drawUp(ctx); // function that draw the snake move on y axis
	}

	downToUp(dt, ctx) {
		// function that update the snake move on y axis
		if (!dt) return;
		this.position.y -= 10 / dt;
		this.bounds("up");
		this.drawUp(ctx); // function that draw the snake move on y axis
	}

	drawDown(ctx) {
		ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
		// // function that draw the snake move on x axis whil
	}

	drawUp(ctx) {
		ctx.fillRect(
			this.position.x + this.width,
			this.position.y,
			this.height,
			this.width
		);
	}

	bounds(arrow) {
		switch (arrow) {
			case "right":
				if (this.GAME_WIDTH + this.width < this.position.x) {
					// alert("you lose");
				}
				break;

			case "left":
				if (0 > this.position.x) {
					upToDown(dt);
					// alert("you lose");
				}
				break;

			case "up":
				if (0 > this.position.y) {
					// alert("you stuck in the top");
				}
				break;

			case "down":
				if (this.GAME_HEIGHT + this.height < this.position.y) {
					// alert("you lose");
				}
				break;

			default:
				break;
		}
	}
}
class Ball {
	constructor(random, positionY, width, height) {
		this.ball = document.getElementById("ball")
		this.height = height
		this.width = width
		this.x = random
		this.y = positionY
		this.randomOne = random
	}
	Random() {
		this.randomOne = Math.floor(Math.random() * 290)
	}

	drowBall(ctx, random) {
		ctx.drawImage(this.ball, this.randomOne, this.y, this.height, this.width)
	}


}
let gameScreen = document.getElementById("canvas1");
let ctx = gameScreen.getContext("2d");
const POINTS = document.getElementById('ponits')

ctx.clearRect(0, 0, 800, 600);

let GAME_WIDTH = window.innerWidth;
let GAME_HEIGHT = window.innerHeight;

let newSnake = new Snake(200, 100, 50, 5);
let lastTime = 0;
let currentDir = 40;
let ballOne = new Ball(100, 48, 10, 10)
let random;
let point = 0
function Random() {
	let Points = point
	return random = Math.floor(Math.random() * 290), point + Points
}
function BallPosition(snake, ball) {
	switch (snake.position.x) {
		case ball.randomOne:
			ball.Random()
			console.log("eat one");
			point++;
		default:
			break;
	}
}
POINTS.innerHTML = point
function gameLoop(timestamp) {
	let dt = timestamp - lastTime;
	lastTime = timestamp;
	ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
	newSnake.snakeMove(currentDir, dt);
	ballOne.drowBall(ctx, random)
	BallPosition(newSnake,ballOne)
	document.addEventListener(
		"keyup",
		(e) => (currentDir = newSnake.snakeDirection(e.keyCode))
	);

	requestAnimationFrame(gameLoop);
}
gameLoop();
