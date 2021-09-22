

let gameScreen = document.getElementById("canvas1");
let ctx = gameScreen.getContext("2d");

ctx.clearRect(0, 0, 800, 100);
let GAME_WIDTH = window.innerWidth;
let GAME_HEIGHT = window.innerHeight;
class Snake {
    constructor(GameWidth, GameHeight) {
        this.gameBoxes = 20;
        this.boxSize = GameWidth / this.gameBoxes
        this.position = {
            x: GameWidth / 2,
            y: GameHeight / 2,
        }
        this.DiractionX = 0
        this.DiractionY = 0
        this.ballX = 30
        this.ballY = 30
    }
    checkForCullestion() {
        if (this.position.x === this.ballX && this.position.y === this.ballY) {
            alert("eat")
            let width = Math.floor(Math.random() * (gameScreen.width - 15) + 15)
            let width2 = Math.round(width / 15) * 15;
            // all i did here is to try and craete a random number between the width on the canvas and the size of the box so the ball wont exit the canvas and the rando by 15 so i will always be able to collide whit it its fully working yet

            let height = Math.floor(Math.random() * (gameScreen.height - 15) + 15)
            let height2 = Math.round(height / 15) * 15;
            console.log(gameScreen.width);
            console.log(gameScreen.height);
            this.ballX = width2
            this.ballY = height2;
        }

    }
    drawBall(ctx) {
        ctx.fillRect(this.ballX, this.ballY, this.boxSize, this.boxSize);
    }
    drawSnake(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.boxSize, this.boxSize);
    }
    moveSnake() {
        this.position.x = this.position.x + this.DiractionX
        // if left DiractionX turns into -15  we calculate positionX + -15 every time the requestanimationframe runs  the snake position  go left by 15 every time
        // if right DiractionX turns into 15  we calculate positionX + 15 every time the requestanimationframe runs  the snake position  go right  by 15 every time
        this.position.y = this.position.y + this.DiractionY
        // if down Diractiony turns into 15  we calculate positionY + 15 every time the requestanimationframe runs and the snake position  go down by 15 every time
        // if up Diractiony turns into -15  we calculate positionY + -15 every time the requestanimationframe runs and the snake position  go up by 15 every time

    }
    Diraction() {
        document.addEventListener('keydown', (e) => {
            if (e.keyCode == 38) {
                // console.log('up');
                if (this.DiractionY == 15) {
                    return;
                }
                // 1 check if DiractionY equal to 15 if yes exit condition so the snake cant go back (inside himself) whitout turning left or right first
                // 2 if condition false set DiractionX to 0 so he wont move on x axis 
                // 3 set DiractionY to -15 so the postion top will start to go down and the snake go up
                this.DiractionX = 0
                this.DiractionY = -15
            }
            if (e.keyCode == 40) {
                if (this.DiractionY == -15) {
                    return;
                }
                this.DiractionX = 0
                this.DiractionY = 15
            }
            if (e.keyCode == 37) {
                if (this.DiractionX == 15) {
                    return;
                }
                this.DiractionX = -15
                this.DiractionY = 0
            }
            if (e.keyCode == 39) {
                if (this.DiractionX == -15) {
                    return;
                }
                this.DiractionX = 15
                this.DiractionY = 0
            }
        })
    }
}
let lastTime = 0
let speed = 10
const newSnake = new Snake(gameScreen.width, gameScreen.height)

// code exapmle for slowing the request animation frame
// one https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe
// tow https://gist.github.com/elundmark/38d3596a883521cb24f5
function gameLoop(timestamp) {
    requestAnimationFrame(gameLoop)
    // console.log(timestamp );
    let dt = timestamp - lastTime
    // console.log(dt);
    let bd = dt / 1000;
    // console.log(bd);
    if (bd < 1 / speed) return
    lastTime = timestamp;
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    newSnake.moveSnake()
    newSnake.Diraction()
    newSnake.checkForCullestion()
    newSnake.drawBall(ctx)
    newSnake.drawSnake(ctx)
}
gameLoop()