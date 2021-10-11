const nav = document.querySelector('.headerBottom');
const burger = document.querySelector('.burger');

burger.addEventListener("click", () => {
    nav.classList.toggle('nav-active');
})