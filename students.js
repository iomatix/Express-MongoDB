const express = require('express')
const router = express.Router()

const db = require('./mongomodule')

var students = [
    { "id": 0, "imie": "Marek", "nazwisko": "Nowak", "wiek": 23 },
    { "id": 1, "imie": "Zofia", "nazwisko": "Zalewska", "wiek": 22 },
    { "id": 2, "imie": "Tadeusz", "nazwisko": "Mostowski", "wiek": 24 },
    { "id": 3, "imie": "Inga", "nazwisko": "Baran", "wiek": 23 }
];
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
router.get('/', (req, res) => {
    res.send(students)
})

router.get('/janek', (req, res) => {
    const janek = db.createStudent("Jan","Kowalski",20);
    db.saveItem(janek)
    res.json(janek)
})

router.get('/:id', (req, res) => {
    var got = null
    students.forEach(el => {
        if (el.id == req.params.id) got = el
    });
    if (got !== null) res.send(got)
    else res.send('Brak Danych')
})

module.exports = router



