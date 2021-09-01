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

	LeftToRight(dt) {
		// function that update the snake move on x axis from left to right
		if (!dt) return;
		this.position.x += 10 / dt; // add to the position +10 to move right
		this.bounds("right"); // function that check if the snake out of his bounds
		this.drawDown(ctx); // function that draw the snake move on x axis
	}

	rightToLeft(dt) {
		// function that update the snake move on x axis
		if (!dt) return;
		this.position.x -= 10 / dt;
		this.bounds("left");
		this.drawDown(ctx); // function that draw the snake move on x axis
	}
	upToDown(dt) {
		// function that update the snake move on y axis
		if (!dt) return;
		this.position.y += 10 / dt;
		this.bounds("down");
		this.drawUp(ctx); // function that draw the snake move on y axis
	}

	downToUp(dt) {
		// function that update the snake move on y axis
		if (!dt) return;
		this.position.y -= 10 / dt;
		this.bounds("up");
		this.drawUp(ctx); // function that draw the snake move on y axis
	}

	drawDown(ctx) {
		ctx.fillRect(this.position.x, this.position.y, this.width, this.height); // // function that draw the snake move on x axis whil
	}
	eat(ctx) {
		this.position.x = this.position.x + 10;
		ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
	}

	drawUp(ctx) {
		ctx.fillRect(this.position.x, this.position.y, this.height, this.width);
	}

	bounds(arrow) {
		switch (arrow) {
			case "right":
				if (this.GAME_WIDTH + this.width < this.position.x) {
					alert("you lose");
				}
				break;

			case "left":
				if (0 > this.position.x) {
					alert("you lose");
				}
				break;

			case "up":
				if (0 > this.position.y) {
					alert("you stuck in the top");
				}
				break;

			case "down":
				if (this.GAME_HEIGHT + this.height < this.position.y) {
					alert("you lose");
				}
				break;

			default:
				break;
		}

		if (this.GAME_WIDTH + this.width < this.position.x) {
			alert("you lose");
		}
	}
}

// const snake = document.getElementById('snake');
// const food = document.getElementById("food");
// const currentPosition = snake.style.left;
// let place = snake.getBoundingClientRect();
// console.log(place);

let gameScreen = document.getElementById("canvas1");
let ctx = gameScreen.getContext("2d");

ctx.clearRect(0, 0, 800, 600);

let GAME_WIDTH = window.innerWidth;
let GAME_HEIGHT = window.innerHeight;

let newSnake = new Snake(200, 100, 50, 5);

let lastTime = 0;

// const up = document.getElementById("up");
// const down = document.getElementById("down");
// const left = document.getElementById("left");
// const right = document.getElementById("right");

// up.addEventListener("click", () => {
// 	newSnake.upToDown(dt);
// });

// down.addEventListener("click", () => {
// 	newSnake.downToUp(dt);
// });

// left.addEventListener("click", () => {
// 	newSnake.LeftToRight(dt);
// });

// right.addEventListener("click", () => {
// 	newSnake.LeftToRight(dt);
// });

function gameLoop(timestamp) {
	let dt = timestamp - lastTime;
	lastTime = timestamp;
	ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
	// מוסיפים את השארית של ה
	newSnake.downToUp(dt);

	requestAnimationFrame(gameLoop);
}
gameLoop();

// ctx.clearRect(0,0,500,200);

// document.addEventListener('keyup', moveSnakeUp);
// document.addEventListener('keydown', moveSnakeDown);
// document.addEventListener('keyleft', moveSnakeLeft);
// document.addEventListener('keyright', moveSnakeright);

// setInterval(()=>{
// if(food.getBoundingClientRect() === snake.getBoundingClientRect()){
//     alert("win")
// }
// },10)

// function moveSnakeUp() {
//     snake.style.left = `${snake.getBoundingClientRect().x}px`;
//     snake.animate({
//         bottom: [`${snake.getBoundingClientRect().y}px`,`${200 - snake.getBoundingClientRect().y}px`],
//       }, 1000);
// }

// function moveSnakeDown(e) {
//     snake.style.left = snake.getBoundingClientRect().x;
//     snake.animate({
//         top: [`${snake.getBoundingClientRect().y}px`,`${200 - snake.getBoundingClientRect().y}px`],
//       }, 1000);
// }

// function moveSnakeLeft(e) {
//     let movingSpace = 500 - snake.getBoundingClientRect().x;
//     snake.animate({
//         left: [`${snake.getBoundingClientRect().x}px`,`${movingSpace}px`],
//         top: [`${snake.getBoundingClientRect().y}px`,`${snake.getBoundingClientRect().y}px`]

//       }, 3000);
// }

// function moveSnakeRight(e) {
//     console.log(snake.getBoundingClientRect().x);
//     let movingSpace = 500 - snake.getBoundingClientRect().x;
//     snake.style.top = snake.getBoundingClientRect().y;
//     snake.animate({
//         left:['0%',`${movingSpace}px`],
//       }, 3000);
// }

// document.addEventListener('keydown', (e) => {
//     console.log(e);
//     switch (e.key) {
//         case "ArrowLeft":
//             moveSnakeLeft();
//             break;
//         case "ArrowUp":
//             moveSnakeUp();
//             break;
//         case "ArrowRight":
//             moveSnakeRight();
//             break;
//         case "ArrowDown":
//             moveSnakeDown();
//             break;
//     }
// })
