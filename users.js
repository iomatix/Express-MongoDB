const express = require('express')
const router = express.Router()

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
router.get('/', (req, res) => {
    res.send('Hello from users!')
})
router.get('/test', (req, res) => {
    res.send('Hello from users/test!')
})

router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

module.exports = router



