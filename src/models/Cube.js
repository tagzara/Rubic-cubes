const uniqid = require('uniqid');

class Cube {
    static #cubes = [
        {
            id: 'sdhjkkkkkld12jklk',
            name: 'Mirror Cube',
            description: 'This is not very easy to complete.',
            imageUrl: 'https://m.media-amazon.com/images/I/71og4DYmeuL._AC_SL1000_.jpg',
            difficulty: '4'
        },
        {
            id: 'nhj1sdc4kuikcp23',
            name: 'Ice Cube',
            description: 'Old rap singer.',
            imageUrl: 'https://i.pinimg.com/originals/1c/d1/b2/1cd1b2c55b447a132745308a5ad0ce7b.jpg',
            difficulty: '3'
        }
    ];

    constructor(name, description, imageUrl, difficulty) {
        this.id = uniqid();
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficulty = difficulty;
    }
    static get cubes() {
        return Cube.#cubes.slice();
    }

    static add(cube) {
        Cube.#cubes.push(cube);
    }
}

module.exports = Cube;