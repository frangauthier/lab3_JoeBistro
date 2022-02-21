const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/', function(req, res) {
    res.send('Hello World')
})

app.get('/openingHours', function(req, res) {

    let isOpen = false

    const currentHours = new Date().getHours()
    const currentDay = new Date().getDay()

    if (currentHours > 11 && currentHours < 21) {
        isOpen = true
    }

    if (currentDay === 1) {
        isOpen = false
    }

    res.send({
        isOpen
    })
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log('Listening on port ' + PORT)
})