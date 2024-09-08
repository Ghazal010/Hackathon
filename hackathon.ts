// Function to scroll to the top of the page
function scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Function to set up event listeners
function setupEventListeners(): void {
    const backToTopLink = document.getElementById('backToTopLink') as HTMLAnchorElement;
    if (backToTopLink) {
        backToTopLink.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault(); // Prevent default anchor click behavior
            scrollToTop(); // Call function to scroll to the top
        });
    }
}

// Initialize the script
document.addEventListener('DOMContentLoaded', setupEventListeners);
