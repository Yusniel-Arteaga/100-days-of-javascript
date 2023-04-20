const hex = document.querySelector('.hex')
const genbtn = document.querySelector('.generate')
const container = document.querySelector('.container')

function randomHex() {
    let color = Math.random().toString(16).substring(2,8)
    hex.innerHTML = '#' + color;
    container.style.backgroundColor = hex.innerHTML;
}
genbtn.addEventListener('click', randomHex);
randomHex();