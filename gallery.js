// gallery.js

document.addEventListener('DOMContentLoaded', () => {
    // Select the featured image and caption
    const featuredImage = document.getElementById('featured');
    const figcaption = document.querySelector('figcaption');
    // Select all thumbnail images
    const thumbnails = document.querySelectorAll('.thumbnails img');

    // Add click event listener to each thumbnail image
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // Get the full-size image URL and caption from the clicked thumbnail
            const fullImageURL = thumbnail.getAttribute('data-full');
            const captionText = thumbnail.getAttribute('data-caption');

            // Update the featured image and caption
            featuredImage.src = fullImageURL;
            figcaption.textContent = captionText;

            // Remove the 'active' class from all thumbnails and add to the clicked one
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            thumbnail.classList.add('active');
        });
    });
});
