const newsSlider = document.querySelector('.newsSlider');
const newsSliderButtonsLeft = document.querySelector('.newsSliderButtonsLeft');
const newsSliderButtonsRight = document.querySelector('.newsSliderButtonsRight');
let steps = 0;
newsSliderButtonsRight.addEventListener("click", () => {
    if(steps > 2){
        steps = -1;
    }
    steps++
    newsSlider.style.transform = `translateX(${-100*steps}vh)`
    console.log(steps)
})
newsSliderButtonsLeft.addEventListener("click", () => {
    if(steps < 1){
        steps = 4;
    }
    steps--
    newsSlider.style.transform = `translateX(${-100*steps}vh)`
    console.log(steps)
})
