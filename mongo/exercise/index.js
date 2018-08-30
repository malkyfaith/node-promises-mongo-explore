const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongo-exercises')
    .then(() => console.log('Succesfully connected to MongoDB'))
    .catch(err => console.log('Could not connect to MongoDB'));

// Schema or blueprint
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: { type: Number }
});

// Model or Class
const Course = mongoose.model('Course', courseSchema);
//exercise 1 - get published backend courses, sort them by name and select on name and author
// async function getCourses() {
//     const courses = await Course
//         .find({ isPublished: true, tags: 'backend' })
//         .sort({ name: 1 })
//         .select({ name: 1, author: 1 })
//     console.log(courses);
// }
//getCourses();


//exercise 2 - get all published frontend and backend courses, sort them ny price descending, select only name and author
// async function getCourses() {
//     const courses = await Course
//         .find({ isPublished: true})
//         .or([{tags: 'backend'}, {tags: 'frontend'} ]) 
//         .sort({ price: -1 })
//         .select({ name: 1, author: 1, price: 1 })
//     console.log(courses);
// }
// getCourses();


// exercise 3 - get published cources with price >=15 and name having 'by'
// async function getCourses() {
//     const courses = await Course
//         .find({ isPublished: true })
//         .or([
//             { price: { $gte: 15 } },
//             { name: /.*by.*/i }
//         ])
//         //.find({ isPublished: true, price: { $gte: 15 }, name: /.*by.*/i  })
//         .sort({ price: -1 })
//         .select({ name: 1, author: 1, price: 1 })
//     console.log(courses);
// }
// getCourses();

// exercise - update a course
async function updateCourseById(id) {
    console.log(id);
    let course = null;
    try {
        course = await Course.findOneAndUpdate({ _id: id }, {
            $set: {
                author: 'Malkeet'
            }
        }, {
                new: true
            });
        console.log(course);
    } catch (e) {
        console.log(e.message);
    }

}
// updateCourseById('5b876e1d335f21d12af75926').then(c =>{
//     console.log(c);

// }).catch(e => console.log(e)
// )

updateCourseById('5b876e1d335f21d12af75926');
