const express = require('express');
require('./db/baza')

//importanje ruta jer sam razvodjio da ne bude sve u jednom fileu da se laske snaci
const ReceptRuta = require('./rute/receptRuta');
const ReceptKomentarRuta = require('./rute/receptKomentarRuta');
const ForumObjavaRuta = require('./rute/forumObjavaRuta');
const ForumKomentarRuta = require('./rute/forumKomentarRuta');


// instanciranje apliakcije
const app  = express()
//definiranje porta
const port = process.env.PORT || 3000;

app.use(express.json())

//koristenje gore importanih ruta
app.use(ReceptRuta)
app.use(ReceptKomentarRuta)
app.use(ForumObjavaRuta)
app.use(ForumKomentarRuta)


app.listen(port, () =>{
    console.log(`Server je na portu ${port}`);
})