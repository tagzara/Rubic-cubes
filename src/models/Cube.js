const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxlength: 100,
    },
    imageUrl: {
        type: String,
        required: true,
        // validate: /^https?:\/\//i
        validate: {
         validate: function(value) {
            return /^https?:\/\//i.test(value)
        },
        message: 'Image Url is invalid!'
        }
    },
    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    }
});

// cubeSchema.path('imageUrl').validate = function(value) {
//     return /^https?:\/\//i.test(value)
// }

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;

// This is old method, without using mongoose
// class Cube {
  
//     constructor(name, description, imageUrl, difficulty) {
//         this.id = uniqid();
//         this.name = name;
//         this.description = description;
//         this.imageUrl = imageUrl;
//         this.difficulty = difficulty;
//     }
//     static get cubes() {
//         return Cube.#cubes.slice();
//     }

//     static add(cube) {
//         Cube.#cubes.push(cube);
//     }
// }

// module.exports = Cube;