console.log('Client side JavaScript');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2')
const img = document.querySelector('#image');
let weatherDescription = '';



const getData = (e) => {
    e.preventDefault()
    const location = search.value;

    messageOne.textContent = 'Loading....';
    messageTwo.textContent = '';

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
            weatherDescription = data.forecast.description;
            console.log(data);
            // console.log(img.src);
            console.log(weatherDescription)
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