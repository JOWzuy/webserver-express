const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;



app.use(express.static(__dirname + '/public'));

// Express HBS engine, dirname= no importa el patch y concatenala la siguiente ruta
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');




app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'jowz',

    });
});
app.get('/about', (req, res) => {

    res.render('about', {
        nombre: 'joww',
    });
});



app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);

});