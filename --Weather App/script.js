
const api = {
    key: "ae6e38a00387c08ef3d49b47cac2cc87",
    base: "https://api.openweathermap.org/data/2.5/"
}

const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const error = document.querySelector('.error');

const locationW = document.querySelector('.location')
const date = document.querySelector('.date');
const temp = document.querySelector('.temp')
const weather = document.querySelector('.weather')
const tempRange = document.querySelector('.temp-range')
const icon = document.querySelector('.icon')

btn.addEventListener('click', submitFunc);


function submitFunc(e) {
    if (e.type == 'click'){
        getData(search.value)
        console.log(search.value)
        search.value = ""
    }
}

function getData() {
    fetch(`${api.base}weather?q=${search.value}&units=metric&appid=${api.key}`)
    .then(response => {return response.json()})
    .then(displayData);
}

function displayData(response) {
    // console.log(response);
    if(response.cod === "404"){
        error.innerHTML = 'Please Enter A Valid City Name';
        search.value = "";
        locationW.innerHTML = `Location`
        date.innerHTML = `Date`
        temp.innerHTML = `Temp`
        weather.innerHTML = `Weather`
        tempRange.innerHTML = `Temp Range`
        icon.src = '';
    } else {
        // icon
        const iconUrl = "http://openweathermap.org/img/w/";
        icon.src = iconUrl + response.weather[0].icon + '.png';

        // location
        locationW.innerHTML = `${response.name}, ${response.sys.country}`;
        
        // date
        const today = new Date();

        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[today.getDay()]

        let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let month = months[today.getMonth()]

        let year = today.getFullYear()
        date.innerHTML = `${day} ${month}, ${year}`;


        // temp
        temp.innerHTML = `Temp: ${response.main.temp} °C`

        // weather
        weather.innerHTML = `Weather: ${upperCase(response.weather[0].description)}`

        // temp-range
        tempRange.innerHTML = `Temp Range: ${response.main.temp_min} °C / ${response.main.temp_max} °C`
        
        error.innerHTML = ""
    }
}


function upperCase(t){
    const arr = t.split(" ")
    for (let i =0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)

    }

    const arr2 = arr.join(" ")
    return arr2
}