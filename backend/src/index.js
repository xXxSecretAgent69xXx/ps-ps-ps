const express = require('express');
require('./db/baza')

//importanje ruta jer sam razvodjio da ne bude sve u jednom fileu da se laske snaci
const ReceptRuta = require('./rute/receptRuta');
const ReceptKomentarRuta = require('./rute/ReceptKomentarRuta');

// instanciranje apliakcije
const app  = express()
//definiranje porta
const port = process.env.PORT || 3000;

app.use(express.json())

//koristenje gore importanih ruta
app.use(ReceptRuta)
app.use(ReceptKomentarRuta)


app.listen(port, () =>{
    console.log(`Server je na portu ${port}`);
})