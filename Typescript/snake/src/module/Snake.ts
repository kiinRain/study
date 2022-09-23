export default class Snake {
  snake: HTMLElement;
  header: HTMLElement;
  //HTMLCollection 是一个接口，表示 HTML 元素的集合，它提供了可以遍历列表的方法和属性。
  bodies: HTMLCollection;
  constructor() {
    this.snake = document.querySelector('#snake') as HTMLElement;
    this.header = this.snake.querySelector('.snake_header') as HTMLElement;
    this.bodies = this.snake.getElementsByTagName('div') as HTMLCollection;
    console.log(this.bodies[1]);

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

      }
    }
    this.snake.style.left = value + "px";
  }
  set y(value: number) {
    this.snake.style.top = value + "px";
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

  }

}