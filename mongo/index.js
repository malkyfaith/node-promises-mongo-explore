const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongo-playground')
    .then(() => console.log('Succesfully connected to MongoDB'))
    .catch(err => console.log('Could not connect to MongoDB'));

// Schema or blueprint
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: { type: Number, default: 10 }
});

// Model or Class
const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    //console.log('Creating course....');

    // create instance
    const course = new Course({
        name: 'React Course',
        author: 'Amar',
        tags: ['react', 'front-end'],
        isPublished: false,
        price: 30
    });
    // persist the course in DB
    const result = await course.save();
    //show the result
    console.log(result);
}
// focus on used operator
async function getCourses() {
    const courses = await Course
        //.find({author:'Malkeet'})
        // query operator lt, lte, gt, gte, eq, in, nin
        // course with price equal to 10
        // .find({price: 10})
        // course with price greater or equal 10
        // .find({ price: { $gte: 10 } })
        // course with price greater or equal 10 but less than 20
        //.find({ price: { $gte: 10, $lt: 20 } })
        // course with price equal to either 10, 15 and 20
        //.find({ author: { $nin: ['Malkeet'] } })
        // logical operator or and
        .find()
        .or([{author: 'Malkeet'}, {isPublished: false}])
        .sort
        ({ name: 1 })
        //.select({ name: 1, author: 1 });
        console.log(courses.length);
        
    console.log(JSON.stringify(courses, undefined, 2));
}
//createCourse();
getCourses();



