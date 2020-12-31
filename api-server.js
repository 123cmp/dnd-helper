const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const fs = require('fs')
const port = 4444

const json = fs.readFileSync('./chunk1.json')
const resp = JSON.parse(json)

app.get('/', (req, res) => {
    res.send(resp)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})