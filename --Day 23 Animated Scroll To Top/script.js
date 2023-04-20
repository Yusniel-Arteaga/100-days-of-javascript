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




// Animated Scroll To Top 
const btn = document.querySelector(".top")
const rootEl = document.documentElement;

document.addEventListener("scroll", scrollBtn)
btn.addEventListener("click", scrollUp)

function scrollBtn() {
    const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;
    if (rootEl.scrollTop / scrollTotal > 0.2) {
        btn.classList.add("scroll-btn")

    } else {
        btn.classList.remove("scroll-btn")
    }
}


function scrollUp() {
    rootEl.scrollTo({
        top: 0 ,
        behavior: "smooth"
    })
}