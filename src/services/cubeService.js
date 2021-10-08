const Cube = require('../models/Cube.js');

const cubeDb = [
    {
        name: 'Mirror Cube',
        description: 'This is not very easy to complete.',
        imageUrl: 'https://m.media-amazon.com/images/I/71og4DYmeuL._AC_SL1000_.jpg',
        difficulty: '4'
      }
];

const getAll = () => cubeDb.slice();

const create = (name, description, imageUrl, difficulty) => {
    let cube = new Cube(name, description, imageUrl, difficulty);

    cubeDb.push(cube);
};

const cubeService = {
    create, 
    getAll,
};

module.exports = cubeService;