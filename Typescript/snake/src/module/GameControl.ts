import Snake from "./Snake"
import Food from "./Food"
import ScorePanel from "./ScorePanel"
export default class GameControl{
  food : Food;
  snake: Snake;
  direction: string = '';
  scorepanel: ScorePanel;
  isLive: boolean = true;
  isParse: boolean = false;
  constructor(){
    this.food = new Food()
    this.snake = new Snake()
    this.scorepanel = new ScorePanel()
    // console.log(food.X,food.Y);
    this.init()
  }
  // 初始化
  init(){
    document.addEventListener('keydown',this.handleKeyDown.bind(this))
    this.food.change();
    this.run();
    
  }
  handleKeyDown(e:KeyboardEvent){
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
        x += 10
        break;
      case "ArrowLeft":
        x -= 10
        break;
    
      default:
        break;
    }
    // 吃食物处理
    if(this.food.X === x && this.food.Y === y){
      this.snake.addBody()
      this.food.change()
      this.scorepanel.addscore()
    }
    try {
      this.snake.x = x;
      this.snake.y = y;
    } catch (error:any) {
      this.isLive = false
      alert(error.message + "GAME  OVER ! ")
    }
    if (this.isLive && !this.isParse) {
      setTimeout(() => {
        this.run()
      }, 180 - (+this.scorepanel.level.innerHTML - 1) * 20);
      
    }
  }
}