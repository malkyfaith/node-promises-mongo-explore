// example single promises
// var p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve(10) // pending to resolve
//         reject(new Error('Reason of failure')); // pending to reject
//     }, 100);
// });

// p.then(res => console.log(res), (e) => console.log('failure', e))
//     .catch(e => console.log('catch:', e));


// example multiple promise

var p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
        //reject(new Error('Something failed'));
    }, 2000);
}); 

var p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Malkeet');
    }, 1000);
}); 

Promise.race([p1, p2])
    .then(res => console.log(res))
    .catch(err => console.log(err.message));

//sync-async problem
// console.log('Before');
// getUser(1)
//     .then(user => getRepositories(user.githubName))
//     .then(repos => getCommits(repos))
//     .then(commits => console.log('Commits:', commits))
//     .catch(err => console.log(err));
// console.log('After');

// function getUser(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Getting user from the database');
//             resolve({ id: 1, githubName: 'malkyfaith' });
//         }, 1000);
//     });
// }

// function getRepositories(user, callback) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Getting repositories from the database');
//             resolve(["Repo1", "Repo2", "Repo3", "Repo4"]);
//         }, 1000);
//     });
// }

// function getCommits(repoName, callback) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Getting commits from the database');
//             resolve(['commit1', 'commit2', 'commit3']);
//         }, 1000);
//     });
// }