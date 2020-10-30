console.log('start');

function loginUser(email, password, callback) {
    setTimeout(() => {
        console.log('Now we have a data');
        callback({
            userEmail: email,
        });
    }, 2000);
}

function getUserVideo(email, callback) {
    setTimeout(() => {
        callback(['video1', 'video2', 'video3']);
    }, 3000);
}

function videoDetails(videos, callback) {
    setTimeout(() => {
        callback('title of the video');
    }, 4000);
}

const user = loginUser('gogotuyer22@gmail.com', 123456, (user) => {
    console.log(user);
    getUserVideo(user.userEmail, (video) => {
        console.log(video);
        videoDetails(video[0], (title) => {
            console.log(title);
        });
    });
});

console.log('finish');