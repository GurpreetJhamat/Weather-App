//IMAGES DATA

let getImages = [

    {
        sunny: "sunny.jpg"
    },

    {
        overcast:[
            "overcast-day.jpg",
            "overcast-night"
        ]
    },

    {
        snow:[
            "snow-day",
            "snow-night"
        ]
    }
    
]


const sunnyImg = getImages[0].sunny;
const overcastDay = getImages[1].overcast[0];
const overcastNight = getImages[1].overcast[1];

// const overcastImg = getImages[1].overcast.day;

console.log(loop);
console.log(overcastImg)

module.exports = {
    sunnyImg, overcastDay, overcastNight
}