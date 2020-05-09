console.log('Client side JavaScript');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2')
const img = document.querySelector('#image');
const preci = document.querySelector('#precipitation');
const wind = document.querySelector('#wind');
const humidity = document.querySelector('#humidity');
const detail = document.querySelector('#heading');
const time = document.querySelector('#time');
const cloud = document.querySelector('#cloud');
// let weatherDescription = '';



const getData = (e) => {
    e.preventDefault()
    const location = search.value;

    messageOne.textContent = 'Loading....';
    messageTwo.textContent = '';
    heading.textContent = 'Loading...'

    fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
            
        
        if(data.error){
            // console.log(data.error);
            messageOne.textContent = data.error;
        }    
        else{
            messageOne.textContent = `${data.forecast.temp}°C`;
            messageTwo.textContent = data.location;
            img.src = data.forecast.pic;
            preci.textContent = `${data.forecast.precip}% Precipitation`;
            wind.textContent = `${data.forecast.wind_speed} km/hr Wind`;
            humidity.textContent = `${data.forecast.humidity}% Humidity`;
            heading.textContent = data.forecast.description;
            time.textContent = data.forecast.timeDate;
            cloud.textContent = `${data.forecast.cloudy}% Cloudy`;
            // console.log(data);
            // console.log(data.forecast.description)
            // console.log(img.src);
            // console.log(weatherDescription)
            // console.log(data.forecast);
            // current.src = e.target.src;
        }
        


        
    })
})
}

const hello = () => {
    console.log(weatherDescription);
}

weatherForm.addEventListener('submit', getData);