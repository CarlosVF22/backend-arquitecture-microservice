const express = require('express');
const { json } = require('express/lib/response');

const config = require('../config.js');
const routerApi = require('./routes/index');


const app = express();
// app.use(json())

//Router
routerApi(app)

// Server listen
app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto', config.api.port);
})