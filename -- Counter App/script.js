const count = document.querySelector('.count')
const button = document.querySelector('.buttons')
const subi = document.querySelector('.subtract')

button.addEventListener('click', (e) => {
    if (e.target.classList.contains('subtract')){
        count.innerHTML--;
        colorChange();
        icon()
        
    }
    if (e.target.classList.contains('add')){
        count.innerHTML++;
        colorChange();
    }
    if (e.target.classList.contains('reset')){
        count.innerHTML = 0;
        colorChange();
    }
})
function colorChange() {
    if(count.innerHTML >0){
        count.style.color = "rgb(147, 246, 0)"
    } else if(count.innerHTML < 0){
        count.style.color = "rgb(255, 145, 0)"
    } else {
        count.style.color = "white"
    }
}
