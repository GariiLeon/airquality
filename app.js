const express = require('express');
const mongoose = require('mongoose');

const crontaskCtrl = require("./controllers/crontask.controller")

/**
 * Déclarations des routes
 */
const airqualityRoutes = require('./routes/airquality.route');


const app = express();
mongoose.connect(
    'mongodb://garii:TNVBeHvts6uq4C80@cluster0-shard-00-00.swd3j.mongodb.net:27017,cluster0-shard-00-01.swd3j.mongodb.net:27017,cluster0-shard-00-02.swd3j.mongodb.net:27017/celaneoTest?ssl=true&replicaSet=atlas-j0bk2d-shard-0&authSource=admin&retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((err) =>{
        console.log('Connexion à MongoDB échouée !')
        console.log(err)
    });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());

setInterval(crontaskCtrl.checkParisAirQuality, 60*1000)

app.use('/airquality', airqualityRoutes);

module.exports = app;