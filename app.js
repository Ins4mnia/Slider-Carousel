const slider = document.querySelector('.slider');
const sliderSection = document.querySelectorAll('.sliderSection')
const wrapper = document.querySelector('.wrapper')
const left = document.getElementById('left')
const right = document.getElementById('right')
let i = 0
function Fleft(){
  if(i > 0) {
    i--
    addEvent()
  }
}
function Fright(){
  if (i < sliderSection.length-1){
    i++
    addEvent()
  }
}
left.addEventListener('click',Fleft)
right.addEventListener('click',Fright)
function addEvent(){
  sliderSection.forEach(item => {
    resizeWindow(item)
  });
}
function resizeWindow(block) {
  block.style.width = `${document.documentElement.clientWidth}px`;
  wrapper.style.width = `${document.documentElement.clientWidth}px`;
  slider.style.width = document.documentElement.clientWidth*sliderSection.length + 'px';
  slider.style.transform = `translateX(${-document.documentElement.clientWidth*i + "px"})`;
}
window.addEventListener('resize', addEvent)
window.addEventListener('load', addEvent)

