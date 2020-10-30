// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('got the user');
//         // resolve({ user: 'dmk' });
//         reject(new Error('User not logged in'));
//     }, 2000);
// });

// promise
//     .then((user) => {
//         console.log(user);
//     })
//     .catch((err) => {
//         console.log(err.message);
//     });

console.log('start');

function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('We have a data');
            resolve({ userEmail: email });
            reject('User not logged in');
        }, 3000);
    });
}

function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['video1', 'video2', 'video3']);
            resolve('There is nothing video here');
        }, 2000);
    });
}

function videoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('titile of the video');
            reject('video is required');
        }, 1000);
    });
}

loginUser('gogotuyer22@gmail.com', '123456')
    .then((user) => {
        getUserVideos(user.email);
    })
    .then((video) => {
        videoDetails(video[0]);
    })
    .then((detail) => {
        console.log(detail);
    });

console.log('finish');