const router = require('express').Router({ mergeParams: true });

const cubeService = require('../services/cubeService.js');

router.get('/add', async (req, res) => {
    let cube = await cubeService.getOne(req.params.cubeId);

    res.render('cube/addAccessory', { ...cube });
});

module.exports = router;