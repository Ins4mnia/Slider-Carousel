const slider = document.querySelector('.slider');
const sliderSection = document.querySelectorAll('.sliderSection')
const wrapper = document.querySelector('.wrapper')
const left = document.getElementById('left')
const right = document.getElementById('right')

let i = 0
function turnLeft(){
  if (i > 0) {
    i--;
    resizeElems();
  }
}

function turnRight(){
  if (i == sliderSection.length-1){
    i = -1;
  }
  if (i < sliderSection.length-1){
    i++;
    resizeElems();
  }
}

function addResizeSliderSectionFunc(){
  sliderSection.forEach(item => {resizeSliderSection(item)});
}

function resizeSliderSection(item) {
  item.style.width = `${document.documentElement.clientWidth}px`;
}

function resizeElems (){
  wrapper.style.width = `${document.documentElement.clientWidth}px`;
  slider.style.width = document.documentElement.clientWidth*sliderSection.length + 'px';
  slider.style.transform = `translateX(${-document.documentElement.clientWidth*i + "px"})`;
}

window.addEventListener('resize', addResizeSliderSectionFunc)
window.addEventListener('load', addResizeSliderSectionFunc)

window.addEventListener('resize', resizeElems)
window.addEventListener('load', resizeElems)

left.addEventListener('click',turnLeft)
right.addEventListener('click',turnRight)