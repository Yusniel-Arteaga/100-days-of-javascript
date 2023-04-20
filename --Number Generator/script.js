const number = document.querySelector('.number')
const genbtn = document.querySelector('.generate')



function rando(){
    number.innerHTML =  Math.floor(Math.random() *10000000 +1);

}
genbtn.addEventListener('click', rando);

rando();
