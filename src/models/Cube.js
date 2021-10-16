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
        validate: [/^https?:\/\//i , 'Invalid image Url']
        // validate: {
        //  validator: function(value) {
        //     return /^https?:\/\//i.test(value)
        // },
        // message: (props) => `Image Url ${props.value} is invalid!`
        // }
    },
    difficulty: {
        type: Number,
        required: true,
        min: 1,
        max: 6,
    }
});

// cubeSchema.path('imageUrl').validate(function(value) {
//     return /^https?:\/\//i.test(value)
// });

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