document.addEventListener('DOMContentLoaded', function() {
    // Simple toggle for a contact form
    const toggleButton = document.getElementById('toggleContactForm');
    const contactForm = document.getElementById('contactForm');

    if (toggleButton && contactForm) {
        toggleButton.addEventListener('click', function() {
            // Toggle visibility of the contact form
            contactForm.style.display = (contactForm.style.display === 'none') ? 'block' : 'none';
        });
    }
});
