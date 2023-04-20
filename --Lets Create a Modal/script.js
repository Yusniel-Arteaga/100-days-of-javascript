const btn = document.querySelector('.pupopbtn')
const section = document.querySelector('section')
const xclose = document.querySelector('.close')
const slideUp = document.querySelector('.slide-up')

btn.addEventListener('click', openModal)
xclose.addEventListener('click', closeModal)
section.addEventListener('click', closeModal)


function openModal(e){
    e.preventDefault();
    section.style.display = 'block';
}

function closeModal() {
    section.style.display = 'none'
    
}