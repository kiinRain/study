export default class Food{
  element: HTMLElement;
  constructor(){
    this.element = document.getElementById('food') as HTMLElement;
  }
  change(){
    let left = Math.floor(Math.random() * 29 ) * 10
    let top = Math.floor(Math.random() * 29 ) * 10
    this.element.style.left = left + 'px'
    this.element.style.top = top + 'px'
  }
  get X(){
    return this.element.offsetLeft
  }
  get Y(){
    return this.element.offsetTop
  }
}
