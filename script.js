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

// Email Subscription Form Submission
document.getElementById('subscriptionForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('subscriberEmail').value;
    sendDataToGoogleSheet('https://script.google.com/macros/s/your_google_script_url/exec', { email });
    alert('Thank you for subscribing!');
    this.reset();
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const phone = document.getElementById('contactPhone').value;
    const message = document.getElementById('contactMessage').value;
    sendDataToGoogleSheet('https://script.google.com/macros/s/your_google_script_url/exec', { name, email, phone, message });
    alert('Your message has been sent successfully!');
    this.reset();
});

// Function to send form data to Google Sheets
function sendDataToGoogleSheet(url, data) {
    fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).catch(error => console.error('Error:', error));
}
