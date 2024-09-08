
function scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


function setupEventListeners(): void {
    const backToTopLink = document.getElementById('backToTopLink') as HTMLAnchorElement;
    if (backToTopLink) {
        backToTopLink.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault(); 
            scrollToTop(); 
        });
    }
}

document.addEventListener('DOMContentLoaded', setupEventListeners);
