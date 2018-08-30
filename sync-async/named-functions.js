console.log('Before');
getUser(1, displayUser);
console.log('After');

function displayUser(user) {
    // user
    console.log('User', user);
    // get repositories
    getRepositories(user.githubName, displayRepositories)
}

function displayRepositories(repos) {
    console.log('Repositories', repos);
    getCommits(repos, displayCommits)
}

function displayCommits(commits) {
    console.log('Commits', commits)
}

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Getting user from the database');
        callback({ id: 1, githubName: 'malkyfaith' });
    }, 1000);
}

function getRepositories(user, callback) {
    setTimeout(() => {
        console.log('Getting repositories from the database');
        callback(["Repo1", "Repo2", "Repo3", "Repo4"]);
    }, 1000);
}

function getCommits(repoName, callback) {
    setTimeout(() => {
        console.log('Getting commits from the database');
        callback(['commit1', 'commit2', 'commit3']);
    }, 1000);
}