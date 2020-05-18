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

const docBody = document.body;
const header = document.getElementById('header')

docBody.style.backgroundSize = "cover";
docBody.style.backgroundRepeat = "no-repeat"
docBody.style.backgroundPosition = "center center"
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
        

        // let weatherDescription = data.forecast.description;
        let weatherDescription = "Haze";
        let isDay = data.forecast.dayNight;
        // let isDay = "yes";
        // console.log(isDay)
console.log(weatherDescription)
        let description = weatherDescription.split(' ')


//FOR OVERCAST
        if(weatherDescription === "Overcast" && isDay === "yes"){
            docBody.style.backgroundImage = "url('../images_weather/overcast-day.jpg')";
        } 
        if(weatherDescription === "Overcast" && isDay === "no"){
            docBody.style.backgroundImage = "url('../images_weather/overcast-night.jpg')";
        } 
      
//FOR SUNNY        
        if(weatherDescription === "Sunny" && isDay === "yes"){
            docBody.style.backgroundImage = "url('../images_weather/sunny.jpg')";
        } 

//FOR SNOW        
        if(weatherDescription === "Snow" && isDay === "yes"){
            docBody.style.backgroundImage = "url('../images_weather/snow-day.jpg')";
        }      
        if(weatherDescription === "Snow" && isDay === "no"){
            docBody.style.backgroundImage = "url('../images_weather/snow-night.jpg')";
        }
        if(weatherDescription === "Blizzard" && isDay === "yes"){
            docBody.style.backgroundImage = "url('../images_weather/snow-day.jpg')";
        }      
        if(weatherDescription === "Blizzard" && isDay === "no"){
            docBody.style.backgroundImage = "url('../images_weather/snow-night.jpg')";
        }

//FOR PARTLY CLOUDY
        if(weatherDescription === "Partly cloudy" && isDay === "yes"){
            docBody.style.backgroundImage = "url('../images_weather/partly-cloudy-day.jpg')";
        }
        if(weatherDescription === "Partly cloudy" && isDay === "no"){
            docBody.style.backgroundImage = "url('../images_weather/partly-cloudy-night.jpg')";
        } 

//FOR CLEAR WEATHER
        if(weatherDescription === "Clear" && isDay === "yes"){
            docBody.style.backgroundImage = "url('../images_weather/clear-day.jpg')";
        } 
        if(weatherDescription === "Clear" && isDay === "no"){
            docBody.style.backgroundImage = "url('../images_weather/clear-night.jpg')";
        }

//FOR HAZZY AND FOGGY WEATHER


let fogKeyWords = ["Fog", "Mist", "Fog,", "Mist," ]

// if(weatherDescription){
//     for(let i = 0; i < description.length; i++) {
//         if(fogKeyWords.includes(description[i])) {
//             console.log(description[i], ': we have a match')
//             docBody.style.backgroundImage = "url('../images_weather/fog-day.jpg')";
//             docBody.style.backgroundSize = "cover";
//         }
//     }
//     // keyWords.push(weatherDescription);
//     console.log(description);
//     console.log(fogKeyWords);
// }
        if(weatherDescription === "Fog" && isDay === "yes"){
            docBody.style.backgroundImage = "url('../images_weather/fog-day.jpg')";
        } 
        if(weatherDescription === "Fog" && isDay === "no"){
            docBody.style.backgroundImage = "url('../images_weather/fog-night.jpg')";
        }
        if(weatherDescription === "Haze" && isDay === "yes"){
            docBody.style.backgroundImage = "url('../images_weather/fog-day.jpg')";
        } 
        if(weatherDescription === "Haze" && isDay === "no"){
            docBody.style.backgroundImage = "url('../images_weather/fog-night.jpg')";
        }
        if(weatherDescription === "Fog, Mist" && isDay === "yes"){
            docBody.style.backgroundImage = "url('../images_weather/fog-day.jpg')";
        }
        if(weatherDescription === "Fog, Mist" && isDay === "no"){
            docBody.style.backgroundImage = "url('../images_weather/fog-night.jpg')";
        }

//FOR RAIN & THUNDERSTORM
            let keyWords = ['Thunderstorm','Rain', 'Mist', 'with', 'Rain,', 'Mist,'];
            if(weatherDescription){
                for(let i = 0; i < description.length; i++) {
                    if(keyWords.includes(description[i]) && isDay === "yes") {
                        console.log(description[i], ': we have a match')
                        docBody.style.backgroundImage = "url('../images_weather/rain-lightning.jpg')";
                        docBody.style.backgroundSize = "cover";
                    } 
                }
                
            }


// FOR RAIN
            let rainKeyWords = ['Rain','Light', 'Mist', 'Shower', 'Drizzzle', 'Rain,', 'Mist,', 'Moderate Rain at times',]
            if(weatherDescription){
                for(let i = 0; i < description.length; i++) {
                    if(rainKeyWords.includes(description[i]) && isDay === "yes") {
                        console.log(description[i], ': we have a match')
                        docBody.style.background = "url('../images_weather/rain-day.jpg')"
                        docBody.style.backgroundSize = "cover";
                    } else if(rainKeyWords.includes(description[i]) && isDay === "no"){
                        docBody.style.background = "url('../images_weather/rain-night.jpg')"
                        docBody.style.backgroundSize = "cover";
                    }
                }
            }





         
        if(weatherDescription === "Clouds" && isDay === "yes"){
            docBody.style.backgroundImage = "url('../images_weather/cloudy-day.jpg')";
        }
        if(weatherDescription === "Clouds" && isDay === "no"){
            docBody.style.backgroundImage = "url('../images_weather/cloudy-night.jpg')";
        }
          
        if(weatherDescription === "Smoke" && isDay === "yes"){
            docBody.style.backgroundImage = "url('../images_weather/smoke-day.jpg')";
        }
        if(weatherDescription === "Smoke" && isDay === "no"){
            docBody.style.backgroundImage = "url('../images_weather/smoke-night.jpg')";
        } 
        
        // else if(weatherDescription === "Thunderstorm" && isDay === "yes" || isDay == "no" ){
        //     docBody.style.backgroundImage = "url('../images_weather/thunderstorm.jpg')";
        // }
        
        
        
        // else{console.log('nothing matching found')}

    }
                 
    })
})
}
weatherForm.addEventListener('submit', getData);
