const router = require('express').Router({ mergeParams: true });

const cubeService = require('../services/cubeService.js');
const accessoryService = require('../services/accessoryService.js');

router.get('/add', async (req, res) => {
    let cube = await cubeService.getOne(req.params.cubeId);
    let accessories = await accessoryService.getAllWithout(cube.accessories.map(x => x._id));

    res.render('cube/addAccessory', { cube, accessories });
});

router.post('/add', async (req, res) => {
    //we need the cube id and the attached accessory's id from post data:
    const cubeId = req.params.cubeId;

    await cubeService.attachAccessory(cubeId, req.body.accessory);

    res.redirect(`/cube/${cubeId}`);
});

module.exports = router;