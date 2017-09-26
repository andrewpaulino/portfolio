const express = require ('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')

app.get('/', (req,res) => {
    const data = {
        person: {
            firstName: 'Andrew',
            lastName: 'Paulino'
        }
    }

    res.render('index', data)
});
app.get('/thanks', (req,res) => {
    const data = {
        person: {
            firstName: 'Andrew',
            lastName: 'paulino'
        }
    }

    res.render('thanks', data)
});
app.get('/aboutme', (req,res) => {


    res.render('aboutme')}
);
var profile = require('./profile')
var contactme = require('./contactme')

// ...
// then define the route that will use your custom router
app.use('/profile', profile)
app.use('/contactme', contactme)
app.listen(8080, () => {
    console.log('Listenning at http://localhost:8080')
});