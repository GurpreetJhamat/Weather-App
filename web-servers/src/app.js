const path = require('path');
const express = require('express');
const app = express();

const port = 3000;

const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));
app.get('', (req, res) => {
    res.render('index', {
        title: 'Handelbars',
        name: 'Gurpreet',
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Gurpreet',
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'This is an exapmle message!',
    });
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Partly cloudy',
        location: 'Montreal'
    });
});
app.listen(port, () => console.log(`Example app listening on port ${port}`));