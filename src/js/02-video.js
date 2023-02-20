
const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    
const onPlay = function (data) {
    localStorage.setItem(`videoplayer-current-time`, data.seconds);
    console.log(localStorage.getItem(`videoplayer-current-time`)); 
};

player.on('timeupdate', onPlay);  

player.setCurrentTime(localStorage.getItem(`videoplayer-current-time`)).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});

// ніяк не виходить додати throttle в localStorage.setItem.

