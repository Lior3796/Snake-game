class Snake {

    constructor(GameWidth,GameHeight){
        this.width = 50;
        this.height = 5;
        this.position = {
            x: GameWidth / 2 - this.width / 2, 
            y: GameHeight - this.height - 10,
        }
        this.GAME_WIDTH = GameWidth;
    }
    

    update(dt){
        if(!dt) return;
        
        this.position.y += 10 / dt ;         
    }
    

    draw(ctx) {
        ctx.fillRect(this.position.x,this.position.y,this.width,this.height);  
    }
    eat(ctx){
        this.position.x = this.position.x + 10;
        ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
    }

    move(ctx,left){
        this.position.x = 7;
    }
}

// const snake = document.getElementById('snake');
// const food = document.getElementById("food");
// const currentPosition = snake.style.left;
// let place = snake.getBoundingClientRect();
// console.log(place);


let gameScreen = document.getElementById("canvas1");
let ctx = gameScreen.getContext("2d");

ctx.clearRect(0,0,800,600);
let GAME_WIDTH = 800;
let GAME_HEIGHT = 600;

let newSnake = new Snake(200,100);
newSnake.draw(ctx);

let lastTime = 0;

function gameLoop(timestamp) {
 let dt = timestamp - lastTime;
 lastTime = timestamp;

 ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
 newSnake.update(dt);
 newSnake.draw(ctx);

 if(newSnake.GAME_WIDTH + newSnake.width > newSnake.position.x){
    requestAnimationFrame(gameLoop);  
 }
 
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