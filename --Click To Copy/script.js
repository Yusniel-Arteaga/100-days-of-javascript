const btn = document.querySelector('.btn')
const input = document.querySelector('.input-coupon')


btn.addEventListener('click', copyCode)

function copyCode(e) {
    e.preventDefault()

    input.select();
    navigator.clipboard.writeText(input.value)

    btn.textContent = "Copied!"
    btn.style.backgroundColor = "#00ff2f"
    setTimeout(() => {
        btn.textContent = "Copy"
        btn.style.backgroundColor = "transparent"

    }, 3000)
}