var pauseTimeout; // Store the timeout ID globally

function playVideo(index) {
    var video = document.getElementById("video-" + index);
    if (!video) return;

    clearTimeout(pauseTimeout); // Cancel the pause timeout if it exists
    video.currentTime = 0; // Reset video to start
    video.play(); // Play the video on hover
}

function pauseVideo(index) {
    var video = document.getElementById("video-" + index);
    if (!video) return;

    pauseTimeout = setTimeout(function () {
        video.pause(); // Pause the video after 0.5 seconds
    }, 250); // 500 milliseconds=0.5 seconds
}