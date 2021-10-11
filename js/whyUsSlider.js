const whyUsSlider = document.querySelector('.whyUsSlider');
const whyUsSliderButtonsLeft = document.querySelector('.whyUsSliderButtonsLeft');
const whyUsSliderButtonsRigth = document.querySelector('.whyUsSliderButtonsRigth');
const whyUsSliderPGImg = document.querySelectorAll('.whyUsSliderPGImg');
let to = 0;

whyUsSliderButtonsRigth.addEventListener("click", () => {
    if(to > 5){
        to = -1
    }
    to++
    whyUsSlider.style.transform = `translateX(${-15*to}%)`
    PG()
})
whyUsSliderButtonsLeft.addEventListener("click", () => {
    if(to < 1){
        to = 7
    }
    to--
    whyUsSlider.style.transform = `translateX(${-15*to}%)`
    PG()
})

setInterval(function st(){
    if(to > 5){
        to = -1
    }
    to++
    whyUsSlider.style.transform = `translateX(${-15*to}%)`
    PG()
},4000)


PG() 
function PG() {
    whyUsSliderPGImg.forEach((el, img) => {
        if(to === img){
            el.classList.add('whyUsSliderPGAct')
        } else{
            el.classList.remove('whyUsSliderPGAct')
        }
    });
}