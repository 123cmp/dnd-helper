const MongoConnection = require ('./MongoConnection');

const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const port = 4444;
const connection = new MongoConnection();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors());

connection.initialize().then(
    (db) => {
        console.log("DB: Connection to db is established")
    },
    () => console.error("DB: Something goes wrong")
);

app.get('/monsters', async (req, res) => {
    const monstersCursor = await connection.db.collection('monsters').find();
    const monsters = await monstersCursor.toArray();
    res.send(monsters)
})

app.get('/adventures', async (req, res) => {
    const adventureCursor = await connection.db.collection('adventures').find();
    const adventure = await adventureCursor.toArray();
    res.send(adventure[0])
})

app.post('/adventures', async (req, res) => {
    const result = await connection.db.collection('adventures').updateOne(
        {
            id: req.body.id
        },
        {
            $set: req.body
        }
    );
    res.status(200).send(req.body)
})

app.get('/places', async (req, res) => {
    const placesCursor = await connection.db.collection('places').find();
    const places = await placesCursor.toArray();
    res.send(places)
})

app.get('/places/:id', async (req, res) => {
    const place = await connection.db.collection('places').findOne(req.params.id);
    res.send(place)
})

app.post('/places', async (req, res) => {
    const result = await connection.db.collection('places').updateOne(
        {
            id: req.body.id
        },
        {
            $set: req.body
        }
    );
    res.status(200).send(req.body)
})

app.put('/places', async (req, res) => {
    const result = await connection.db.collection('places').insertOne(
       req.body
    );
    res.status(200).send(req.body)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})