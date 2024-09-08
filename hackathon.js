// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
// Function to set up event listeners
function setupEventListeners() {
    var backToTopLink = document.getElementById('backToTopLink');
    if (backToTopLink) {
        backToTopLink.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor click behavior
            scrollToTop(); // Call function to scroll to the top
        });
    }
}
// Initialize the script
document.addEventListener('DOMContentLoaded', setupEventListeners);
