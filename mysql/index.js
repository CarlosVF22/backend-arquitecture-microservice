const express = require('express');
const bodyParser = require('body-parser');

const config = require('../config.js');
const router = require('./network');


const app = express();

app.use(bodyParser.json())

//Router
app.use('/', router)

// Server listen
app.listen(config.mysqlService.port, () => {
    console.log('Servicio de mysql escuchando en el puerto', config.mysqlService.port);
})