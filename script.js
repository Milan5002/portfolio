// Add a smooth scroll effect to the navigation links
nav a {
    cursor: pointer;

    addEventListener('click', function() {
        event.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
}

// Add a fade-in animation to the project images
const projectImages = document.querySelectorAll('.project-image');

window.addEventListener('scroll', function() {
    for (let i = 0; i < projectImages.length; i++) {
        const projectImage = projectImages[i];

        if (projectImage.getBoundingClientRect().top < window.innerHeight / 2) {
            projectImage.classList.add('fade-in');
        } else {
            projectImage.classList.remove('fade-in');
        }
    }
});

// Add a filter to the project images
const projectImageFilters = {
    grayscale: 'grayscale(100%)',
    sepia: 'sepia(100%)',
    blur: 'blur(10px)'
};

document.querySelector('.project-image-filters').addEventListener('change', function() {
    const selectedFilter = this.value;

    for (let i = 0; i < projectImages.length; i++) {
        const projectImage = projectImages[i];

        projectImage.style.filter = projectImageFilters[selectedFilter];
    }
});

// Add a contact form validation
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = contactForm.querySelector('input[name="name"]');
    const emailInput = contactForm.querySelector('input[name="email"]');
    const messageInput = contactForm.querySelector('textarea[name="message"]');

    if (!nameInput.value) {
        alert('Please enter your name');
        return;
    }

    if (!emailInput.value) {
        alert('Please enter your email address');
        return;
    }

    if (!messageInput.value) {
        alert('Please enter a message');
        return;
    }

    // Submit the contact form data to your server here
});