const btn = document.querySelector('.btn')
const result = document.querySelector('.result')

btn.addEventListener('click', pal)

function pal() {
    let word = document.querySelector('.input-word').value
    let len = word.length
    let start = word.substring(0, Math.floor(len/2))
    let end = word.substring(len - Math.floor(len/2))
    let flip = [...end].reverse().join("")

    if (start == flip) {
        result.innerHTML = `${word.toUpperCase().italics()} is a Palindrome`
    } else {
        result.innerHTML = `${word.toUpperCase().italics()} is NOT a Palindrome`
 
    }
}