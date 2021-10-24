const express = require('express');

const cubeService = require('../services/cubeService.js');
const cubeAccessoryController = require('./cubeAccessoryController.js');

const router = express.Router();

const getCreateCubePage = (req, res) => {
    res.render('cube/create');
};

const createCube = async (req, res) => {
    let { name, description, imageUrl, difficulty } = req.body;

    try {
        await cubeService.create(name, description, imageUrl, difficulty);
        res.redirect('/');

    } catch (error) {
        res.status(400).send(error.message).end();
    }
};

const cubeDetails = async (req, res) => {
    let cube = await cubeService.getOne(req.params.cubeId);
    res.render('cube/details', { ...cube });
};

const getEditCubePage = (req, res) => {
    res.render('cube/edit');
};

const getDeleteCubePage = (req, res) => {
    if (!req.user) {
        return res.redirect('/login');
    }

    res.render('cube/delete');
};


router.get('/create', getCreateCubePage);
router.post('/create', createCube);
router.get('/:cubeId', cubeDetails);
router.get('/:cubeId/edit', getEditCubePage);
router.get('/:cubeId/delete', getDeleteCubePage);
router.use('/:cubeId/accessory', cubeAccessoryController);

module.exports = router;