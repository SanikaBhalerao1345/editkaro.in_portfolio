// Function to filter videos by category
function filterVideos(category) {
    const videos = document.querySelectorAll('.video-card');

    videos.forEach(video => {
        if (category === 'all' || video.dataset.category === category) {
            video.style.display = 'block';
        } else {
            video.style.display = 'none';
        }
    });
}
