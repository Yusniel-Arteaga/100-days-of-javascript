const countdown = document.getElementById("countdown")
const countTo = "1 Jan 2024"

const c = setInterval(() => {
    const endDate = new Date(countTo)
    const currentDate = new Date();
    const totalSeconds = (endDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) %24;
    const minutes = Math.floor(totalSeconds / 60) %60 ;
    const seconds = Math.floor(totalSeconds) %60;

    countdown.innerHTML = `${days}Days ${hours}:${minutes}:${seconds}`

    if(totalSeconds < 0){
        clearInterval(c);
        countdown.innerHTML = ""
        const header = document.querySelector('h1')
        
        header.innerHTML = "Happy New Year!!"
        header.style.color = 'yellow'

    }

}, 1000)

