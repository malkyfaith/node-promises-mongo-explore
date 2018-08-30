const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongo-playground')
    .then(() => console.log('Succesfully connected to MongoDB'))
    .catch(err => console.log('Could not connect to MongoDB'));


function show(c) {
    console.log('val:', v)
}
// Schema or blueprint
const courseSchema = new mongoose.Schema({
    name: { type: String, required: true, get: v => show },
    author: {type: String,  get: v => show },
    tags: {
        type: Array,
        validate: {
            validator: function (v) {
                return v && v.length > 0;
            },
            message: 'tags must have at least one value'
        }
    },
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: { type: Number, required: function () { return this.isPublished } }
});

// Model or Class
const Course = mongoose.model('Course', courseSchema);


async function createCourse() {
    const course = new Course({
        name: 'React Course',
        author: 'Amar',
        tags: ['frontend'],
        isPublished: true,
        price: 30
    });
    try {
        const result = await course.save();
        console.log(result);

    } catch (e) {
        console.log(e.message);

    }
}

async function getCourses() {
    const courses = await Course
        .findById('5b87692887960f0aac9aa089')

    console.log(JSON.stringify(courses, undefined, 2));
}

getCourses()