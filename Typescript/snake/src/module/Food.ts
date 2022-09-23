import Snake from "./Snake";
export default class Food{
  private element: HTMLElement;
  snake: Snake;
  constructor(){
    this.snake = new Snake()
    this.element = document.getElementById('food') as HTMLElement;
  }
  // 随机修改食物位置
  change(){
    let left = Math.floor(Math.random() * 29 ) * 10
    let top = Math.floor(Math.random() * 29 ) * 10
    // 避免食物刷新在蛇身上
    for (let i = 0; i < this.snake.bodies.length; i++) {
     if ((this.snake.bodies[i] as HTMLElement).offsetTop === top && (this.snake.bodies[i] as HTMLElement).offsetLeft === left  ) {
       this.element.style.left = left + 'px'
       this.element.style.top = top + 'px'
      i = -1
       
     } 
    }
    this.element.style.left = left + 'px'
       this.element.style.top = top + 'px'
  }
  // 食物横坐标
  get X(){
    return this.element.offsetLeft
  }
  // 食物纵坐标
  get Y(){
    return this.element.offsetTop
  }
}
