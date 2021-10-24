const Cube = require('../models/Cube.js');
const Accessory = require('../models/Accessory.js');

const getAll = () => Cube.find({}).lean();

const getOne = (id) => Cube.findById(id).populate('accessories').lean();


const create = (name, description, imageUrl, difficulty) => {
    let cube = new Cube({
        name,
        description,
        imageUrl,
        difficulty
    });

    return cube.save();
};

const search = async (text, from, to) => {
    let result = await getAll();

    if (text) {
        result = result.filter(x => x.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
    }

    if (from) {
        result = result.filter(x => x.difficulty >= from)
    }

    if (to) {
        result = result.filter(x => x.difficulty <= to)
    }

    return result;
};

const attachAccessory = async (cubeId, accessoryId) => {
    let cube = await Cube.findById(cubeId);
    let accessory = await Accessory.findById(accessoryId);

    cube.accessories.push(accessory);
    return cube.save();
};

const updateCube = (cubeId, cubeData) => Cube.findByIdAndUpdate(cubeId, cubeData);

const deleteCube = (cubeId) => Cube.findByIdAndDelete(cubeId);

const cubeService = {
    getOne,
    getAll,
    create,
    search,
    attachAccessory,
    updateCube,
    deleteCube,
};

module.exports = cubeService;