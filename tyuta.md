// ctx.clearRect(0,0,500,200);

// document.addEventListener('keyup', moveSnakeUp);
// document.addEventListener('keydown', moveSnakeDown);
// document.addEventListener('keyleft', moveSnakeLeft);
// document.addEventListener('keyright', moveSnakeright);

// setInterval(()=>{
// if(food.getBoundingClientRect() === snake.getBoundingClientRect()){
// alert("win")
// }
// },10)

// function moveSnakeUp() {
// snake.style.left = `${snake.getBoundingClientRect().x}px`;
// snake.animate({
// bottom: [`${snake.getBoundingClientRect().y}px`,`${200 - snake.getBoundingClientRect().y}px`],
// }, 1000);
// }

// function moveSnakeDown(e) {
// snake.style.left = snake.getBoundingClientRect().x;
// snake.animate({
// top: [`${snake.getBoundingClientRect().y}px`,`${200 - snake.getBoundingClientRect().y}px`],
// }, 1000);
// }

// function moveSnakeLeft(e) {
// let movingSpace = 500 - snake.getBoundingClientRect().x;
// snake.animate({
// left: [`${snake.getBoundingClientRect().x}px`,`${movingSpace}px`],
// top: [`${snake.getBoundingClientRect().y}px`,`${snake.getBoundingClientRect().y}px`]

// }, 3000);
// }

// function moveSnakeRight(e) {
// console.log(snake.getBoundingClientRect().x);
// let movingSpace = 500 - snake.getBoundingClientRect().x;
// snake.style.top = snake.getBoundingClientRect().y;
// snake.animate({
// left:['0%',`${movingSpace}px`],
// }, 3000);
// }

// document.addEventListener('keydown', (e) => {
// console.log(e);
// switch (e.key) {
// case "ArrowLeft":
// moveSnakeLeft();
// break;
// case "ArrowUp":
// moveSnakeUp();
// break;
// case "ArrowRight":
// moveSnakeRight();
// break;
// case "ArrowDown":
// moveSnakeDown();
// break;
// }
// })
