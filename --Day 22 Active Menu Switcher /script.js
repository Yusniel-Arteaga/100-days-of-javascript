window.addEventListener('scroll', ()=>{
    const header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)
})


const nav = document.querySelector('.nav')
nav.addEventListener("click", menuSwitch)


function menuSwitch(e) {
    const navLink = e.target.parentElement;
    if(navLink.classList.contains("link")) {
        nav.querySelector(".active").classList.remove("active")
        navLink.classList.add("active")
    }
}