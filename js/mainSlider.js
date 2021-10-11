const slider = document.querySelector('.slider');
const pg = document.querySelectorAll('.pg');
let move = 0;


setInterval(function slideShow() {
    if(move>6){
        move = -1;
    }
    move++
    slider.style.transform = `translateX(${-100*move}vw)`
    pag()
}, 4000)
pag() 
function pag() {
    pg.forEach((el, i) => {
        if(move == i){
            el.classList.add('pgAct')
        } else{
            el.classList.remove('pgAct')
        }
    });
}

