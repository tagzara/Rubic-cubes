const express = require('express');
const cubeService = require('../services/cubeService.js');

const router = express.Router();

const home = (req, res) => {
    let cubes = cubeService.getAll();

    res.render('index', {
        cubes: cubes
    });
};

router.get('/', home);

module.exports = router;