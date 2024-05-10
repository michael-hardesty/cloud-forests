// Get the parallax background and overlay text sections
const parallaxBg = document.querySelector('.parallax-bg');
const overlayTextSections = document.querySelectorAll('.overlay-text');

// Function to handle the scroll event
function handleScroll() {
    const scrollPosition = window.pageYOffset;
    const parallaxContainerTop = document.querySelector('.parallax-container').offsetTop;
    const parallaxContainerHeight = document.querySelector('.parallax-container').offsetHeight;
    const lastOverlayTextTop = overlayTextSections[overlayTextSections.length - 1].offsetTop;

    // Show the overlay text sections when they are in the viewport
    overlayTextSections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });

    // Scroll the background image out of view when the last overlay text section is out of the viewport
    if (scrollPosition >= lastOverlayTextTop + window.innerHeight) {
        parallaxBg.style.top = `${parallaxContainerHeight - window.innerHeight}px`;
    } else {
        parallaxBg.style.top = '0';
    }
}

// Add a scroll event listener
window.addEventListener('scroll', handleScroll);
