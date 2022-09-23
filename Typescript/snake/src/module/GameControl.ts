import Snake from "./Snake"
import Food from "./Food"
import ScorePanel from "./ScorePanel"
export default class GameControl{
  food : Food;
  snake: Snake;
  direction: string = '';
  scorepanel: ScorePanel;
  isLive: boolean = true;
  isPusah: boolean = false;
  constructor(){
    this.food = new Food()
    this.snake = new Snake()
    this.scorepanel = new ScorePanel()
    // console.log(food.X,food.Y);
    this.init()
  }
  // 初始化
  init(){
    document.addEventListener('keydown',this.btnhandle.bind(this))
    this.food.change();
    this.run();
    
  }
  btnhandle(e:KeyboardEvent){
    this.direction = e.key
    console.log(this.direction);
    
  }
  // 蛇的移动
  run(){
    let x = this.snake.x
    let y = this.snake.y
    switch (this.direction) {
      case "ArrowUp":
        y -= 10
        break;
      case "ArrowDown":
        y += 10
        break;
      case "ArrowRight":
        x -= 10
        break;
      case "ArrowLeft":
        x += 10
        break;
    
      default:
        break;
    }
  }
}