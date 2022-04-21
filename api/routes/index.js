const express = require("express");
const user = require('../components/user/network');

function routerApi(app) {
    const router = express.Router();
    app.use('/api', router);
    router.use('/user', user)
}

module.exports = routerApi;