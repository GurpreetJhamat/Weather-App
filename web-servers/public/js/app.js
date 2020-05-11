console.log('Client side JavaScript');

const weatherForm = document.querySelector('form');
// const weatherForm2 = document.querySelector('.form2');
// const search1 = document.querySelector('.input1');
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
const feel = document.querySelector('#feel');
// console.log(weatherForm)
// console.log(search)
// let weatherDescription = '';
const docBody = document.body;
const header = document.getElementById('header')


const getData = (e) => {
    e.preventDefault()
    const location = search.value 
    // const location2 = search2.value;

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
            messageOne.textContent = `${data.forecast.temp}`;

            let degree = document.createElement("span");
            degree.id = "color"
            degree.innerHTML = "°C"
            messageOne.appendChild(degree)
            messageOne.style.fontSize = "90px"
            messageTwo.textContent = data.location;
            img.src = data.forecast.pic;
            preci.textContent = `${data.forecast.precip}% Precipitation`;
            wind.textContent = `${data.forecast.wind_speed} km/hr Wind`;
            humidity.textContent = `${data.forecast.humidity}% Humidity`;
            heading.textContent = data.forecast.description;
            time.textContent = data.forecast.timeDate;
            cloud.textContent = `${data.forecast.cloudy}% Cloudy`;
            feel.textContent = `${data.forecast.feels}°C Feels Like`
            // console.log(data);
            // console.log(data.forecast.description)
            // console.log(img.src);
            // console.log(weatherDescription)
            // console.log(data.forecast);
            // current.src = e.target.src;
        }



            // let weatherDescription = data.forecast.description;
            let weatherDescription = "Light Rain";
            // let weatherDescription = "Light Rain Shower";
            // let weatherDescription = "Rain, Mist";
            // let weatherDescription = "Patchy Rain Possible";
            console.log(weatherDescription)
            // let isDay = data.forecast.dayNight;
            let isDay = "yes"
            console.log(isDay)

        if(weatherDescription === "Overcast" && isDay === "yes"){
            docBody.style.backgroundImage = "url('../images_weather/overcast-day.jpg')";
        } 
        else if(weatherDescription === "Overcast" && isDay === "no"){
            docBody.style.backgroundImage = "url('../images_weather/overcast-night.jpg')";
        } 
        else if(weatherDescription === "Sunny" && isDay === "yes"){
            docBody.style.backgroundImage = "url('../images_weather/sunny.jpg')";
        } 
        else if(weatherDescription === "Snow" && isDay === "yes"){
            docBody.style.backgroundImage = "url('../images_weather/snow-day.jpg')";
        } 
        else if(weatherDescription === "Snow" && isDay === "no"){
            docBody.style.backgroundImage = "url('../images_weather/snow-night.jpg')";
        } 
        else if((weatherDescription === "Clouds" || "Cloudy") && isDay === "yes"){
            docBody.style.backgroundImage = "url('../images_weather/cloudy-day.jpg')";
        }
        else if((weatherDescription === "Clouds" || "Cloudy") && isDay === "no"){
            docBody.style.backgroundImage = "url('../images_weather/cloudy-night.jpg')";
        }
        else if(weatherDescription === "Partly Cloudy" && isDay === "yes"){
            docBody.style.backgroundImage = "url('../images_weather/partly-cloudy-day.jpg')";
        }
        else if(weatherDescription === "Partly Cloudy" && isDay === "no"){
            docBody.style.backgroundImage = "url('../images_weather/partly-cloudy-night.jpg')";
        }   
        else if(weatherDescription === "Light Rain" || "Light Rain Shower" || "Rain, Mist" || "Patchy Rain Possible" && isDay === "yes"){
            docBody.style.backgroundImage = "url('../images_weather/rain-day.jpg')";
            console.log('rain');
        }
        else if(weatherDescription === "Light Rain" || "Light Rain Shower" || "Rain, Mist" || "Patchy Rain Possible" && isDay === "no"){
            docBody.style.backgroundImage = "url('../images_weather/rain-night.jpg')";
            console.log('rain');
        } 
        else if(weatherDescription === "Clear" && isDay === "yes"){
            docBody.style.backgroundImage = "url('../images_weather/clear-day.jpg')";
        } 
        else if(weatherDescription === "Clear" && isDay === "no"){
            docBody.style.backgroundImage = "url('../images_weather/clear-night.jpg')";
        }
        else if(weatherDescription === "Thunderstorm" || "Rain, Mist, Rain with ThunderStorm" && isDay === "yes" || isDay == "no" ){
            docBody.style.backgroundImage = "url('../images_weather/clear-night.jpg')";
        }
        else if(weatherDescription === "Fog" || "Fog, Mist" && isDay === "yes"){
            docBody.style.backgroundImage = "url('../images_weather/fog.jpg')";
        } 
        else if(weatherDescription === "Fog" || "Fog, Mist" && isDay === "no"){
            docBody.style.backgroundImage = "url('../images_weather/fog-night.jpg')";
        }
        
        
        else{console.log('nothing matching found')}


         


        
    })
})
}

// const hello = () => {
//     console.log(weatherDescription);
// }

weatherForm.addEventListener('submit', getData);
// weatherForm2.addEventListener('submit', getData);