export default class Snake {
  snake: HTMLElement;
  header: HTMLElement;
  //HTMLCollection 是一个接口，表示 HTML 元素的集合，它提供了可以遍历列表的方法和属性。
  bodies: HTMLCollection;
  constructor() {
    this.snake = document.querySelector('#snake') as HTMLElement;
    this.header = this.snake.querySelector('.snake_header') as HTMLElement;
    this.bodies = this.snake.getElementsByTagName('div') as HTMLCollection;
    // console.log(this.bodies[1]);

  }
  //  获取蛇头的坐标
  get x(): number {
    return this.header.offsetLeft
  }
  get y(): number {
    return this.header.offsetTop
  }

  set x(value: number) {
    if (this.x === value) return;
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      if (this.x > value) {
        value += 20
      }else{
        value -= 20
      }
    }
    // 判断撞墙
    if(value < 0 || value > 290) throw new Error("撞墙了");
    this.moveBody()
    this.header.style.left = value + "px";
    this.checkEatSelf()
  }
  set y(value: number) {
    if(this.y === value) return;
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      if (this.y > value) {
        value += 20
      }else{
        value -= 20
      }
    }
    // 判断撞墙
    if(value < 0 || value > 290) throw new Error("撞墙了");
    this.moveBody()
    this.header.style.top = value + "px";
    this.checkEatSelf()
  }
  addBody(){
    const div = document.createElement('div')
    div.className = "snake_body"
    this.snake.append(div)
  }
  moveBody(){
    for(let i = this.bodies.length - 1; i > 0; i--){
      const X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      const Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
      (this.bodies[i] as HTMLElement).style.left = X + 'px'; 
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';

    }
  }
  checkEatSelf(){
    for (let i = 1; i < this.bodies.length; i++) {
      if((this.bodies[i] as HTMLElement).offsetLeft === this.x&& (this.bodies[i] as HTMLElement).offsetTop === this.y){
        throw new Error("您撞到自己了");
        
      }
      
    }
  }

}