//sync-async problem
console.log('Before');

async function displayCommit() {
    try {
        let user = await getUser(1);
        let repos = await getRepositories();
        let commits = await getCommits();
        console.log(commits);
    }
    catch (e) {
        console.log(e.message);
    }
}
displayCommit();
console.log('After');

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting user from the database');
            resolve({ id: 1, githubName: 'malkyfaith' });
        }, 1000);
    });
}

function getRepositories(user, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting repositories from the database');
            resolve(["Repo1", "Repo2", "Repo3", "Repo4"]);
            //reject(new Error('some error'));
        }, 1000);
    });
}

function getCommits(repoName, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting commits from the database');
            resolve(['commit1', 'commit2', 'commit3']);
        }, 1000);
    });
}