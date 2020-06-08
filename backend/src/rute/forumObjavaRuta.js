const express = require('express');
const ForumObjava = require('../db/models/forumObjava.js');
const ForumKomentar = require('../db/models/forumKomentar.js');




//posto su rute podjeljene u vise fileova, u svakome treba instancirati novu
var ForumObjavaRuta = new express.Router()

//ruta koja sprema u bazu, "/api" je jer ako u produkciji budes imao i Vue koji ima "/recept" da ne baca error
//npr u Vue "/recept" otvara html recept, a na backu "/recept" geta sve recepte. Nece znati sto treba, zato cijeli backend ima "prefix" api
//upload.single() je middleware koji ucitava sliku (multer)
ForumObjavaRuta.post('/api/forum/objava', async (req, res) =>{
    
    var objava = new ForumObjava({
        ...req.body,
    })
    try {
        //pokusava spremit, ako uspije posalje sto je spremio
        await objava.save()
        res.status(200).send(objava)
    } catch (error) {
        //a ako postoji error vrati ti taj error
        res.status(500).send({error: error.message})
    }
})

//dohvaca sve recepte
//match sluzi za pretragu jer mongoose pretraga treba objekt koji se zove match zato je i ovdje match da se samo dolje prosljedi
ForumObjavaRuta.get('/api/forum', async (req, res) =>{
    const match = {}
    //ako si prosljedio termin za pretragu po nazivu radi malo regexa, sluzi tako da ako imas recepte sa rijec "cevapi" u nazivu, a ti si unio "ceva" vraca sve koje sadrze "ceva"
    //u match naziv treba odgovarati onome sto je uneseno
    if(req.query.naslov != null){
        let termin = new RegExp(`^.*${req.query.naslov}.*$`, "img")
        match['naslov'] = termin
    }
    
    try {
        //pokusava dohvatit sve po tome
        var objave = await ForumObjava.find(match, null);
        console.log(objave);
        if(objave.length === 0) return res.status(404).send("Nema objava")
        res.send({objave})
    } catch (error) {
        res.status(500).send(error)
    }
})


//dohvati jedan recept po id-ju koji mu prosljedis
ForumObjavaRuta.get('/api/forum/objava/:id', async (req, res) =>{
    const _id = req.params.id;
    try {
        const objava = await ForumObjava.findOne({_id});
        if(!objava){
            return res.status(404).send({error: "Objava ne postoji"})
        }
        res.send(objava)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

//dohvaca sve komentare za taj recept
ForumObjavaRuta.get('/api/forum/objava/:id/komentari', async (req, res) =>{
    const _id = req.params.id;
    try {
        const komentari = await ForumKomentar.find({objava: _id});
        if(komentari.length === 0){
            return res.status(404).send({error: "Komentari ne postoje"})
        }
        res.send(komentari)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

//updatejt jednog recepta
ForumObjavaRuta.patch('/api/forum/objava/:id', async (req, res) =>{
    //ukratko gleda dali si u bodiju prosljedio dozvoljene varijable
    //isto lakse uzivo objasnit
    const updates = Object.keys(req.body)

    const dozvoljenePromjene = ["sadrzaj"];
    const smijeLiSePromjeniti = updates.every((promjena) =>{
        return dozvoljenePromjene.includes(promjena)
    })
    if(!smijeLiSePromjeniti){
        return res.status(400).send()
    }
    try {
        //pokusava pronaci taj recept, updejtat mu sve varijable i spremiti
        const objava = await ForumObjava.findOne({_id:req.params.id})
        updates.forEach((promjena) => objava[promjena] = req.body[promjena])
        
        await objava.save()
        if(!objava){
            return res.status(404).send()
        }
        res.send(objava)
    } catch (error) {
        res.status(400).send(error)
    }
})

//nade recept po id-ju i obrise ga
ForumObjavaRuta.delete('/api/forum/objava/:id', async (req, res) =>{
    const _id = req.params.id;
    try {
        const objava = await ForumObjava.findOne({_id})
        if(!objava){
            return res.status(404).send()
        }
        await objava.remove()
        res.send(objava)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = ForumObjavaRuta