export default class ScorePanel{
  element:HTMLElement;
  score: HTMLElement;
  level: HTMLElement;
  btn_open: HTMLElement;
  max_level: number;
  update_level: number;
  constructor(max_level: number = 10,update_level: number = 10){
    this.element = document.getElementById("score_panel") as HTMLElement;
    this.score = this.element.querySelector('score') as HTMLElement;
    this.level = this.element.querySelector('level') as HTMLElement;
    this.btn_open = this.element.querySelector('btn_open') as HTMLElement;
    this.max_level = max_level
    this.update_level = update_level
  }
  init(){
    this.btn_open.addEventListener('click',this.btnhandle.bind(this))
  }
  addscore(){
   const score = +this.score.innerHTML + 1
    if(score % this.update_level === 0 ){
      this.addlevel()
    }
    this.score.innerHTML = score + ''
  }
  addlevel(){
    if(+this.level.innerHTML <= this.max_level){
      this.level.innerHTML = (+this.level.innerHTML + 1) + ''
    }
  }
  btnhandle(e:MouseEvent){

  }
}