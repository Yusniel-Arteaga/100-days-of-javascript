const btn = document.querySelector(".btn")
const input = document.querySelector(".input")
const rate = document.getElementById("select")

btn.addEventListener("click", calc)

function calc(e) {
    e.preventDefault()

    const inputVal = input.value
    
    let error = document.querySelector(".error")

    if (isNaN(inputVal)) {
        error.style.display = 'initial'
        setTimeout(()=>{
            error.style.display = 'none'

        }, 4000)
        
    } else if (inputVal) {
        let tip = inputVal * rate.value;
        let tipAmount = document.querySelector(".tip")
        tipAmount.innerHTML = `Tip: $${tip.toFixed(2)}`

        let bill = +tip + +inputVal;
        let totalBill = document.querySelector(".total-bill")
        totalBill.innerHTML = `Total Bill: $${bill.toFixed(2)}`
    } 

    
}
