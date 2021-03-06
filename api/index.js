const express = require('express');
const bodyParser = require('body-parser');

const config = require('../config.js');
const routerApi = require('./routes/index');


const app = express();

app.use(bodyParser.json())

//Router
routerApi(app)

// Server listen
app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto', config.api.port);
})