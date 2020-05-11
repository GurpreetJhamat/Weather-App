const docBody = document.body;

let weatherDescription = "";
let description = weatherDescription.split(' ')



let keyWords = ['Rain','Light', 'Mist', 'Shower', 'Drizzzle', 'Rain,', 'Mist,']

// let keyWords = [];


if(weatherDescription){
    for(let i = 0; i < description.length; i++) {
        if(keyWords.includes(description[i])) {
            console.log(description[i], ': we have a match')
            // docBody.style.background = "url('../images_weather/rain-lightning.jpg')"
            // docBody.style.backgroundSize = "cover";
        }
    }
    // keyWords.push(weatherDescription);
    console.log(description);
    console.log(keyWords);
}