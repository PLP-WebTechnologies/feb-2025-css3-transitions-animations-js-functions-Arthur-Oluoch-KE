 // Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const animateButton = document.getElementById('animateButton');
    const savePreferenceButton = document.getElementById('savePreference');
    const userPreferenceInput = document.getElementById('userPreference');
    const savedMessage = document.getElementById('savedMessage');

    // Retrieve and display saved preference from localStorage
    const savedPreference = localStorage.getItem('userPreference');
    if (savedPreference) {
        userPreferenceInput.value = savedPreference;
        savedMessage.textContent = `Your favorite style is: ${savedPreference}`;
    }

    // Add animation to the hero image when the button is clicked
    animateButton.addEventListener('click', () => {
        const heroImage = document.querySelector('.hero-image');
        heroImage.classList.add('animate');
        setTimeout(() => {
            heroImage.classList.remove('animate');
        }, 1000); // Animation duration
    });

    // Save user preference to localStorage
    savePreferenceButton.addEventListener('click', () => {
        const userPreference = userPreferenceInput.value.trim();
        if (userPreference) {
            localStorage.setItem('userPreference', userPreference);
            savedMessage.textContent = `Your favorite style is: ${userPreference}`;
        } else {
            savedMessage.textContent = 'Please enter a valid style.';
        }
    });
});

// Add CSS animation dynamically
const style = document.createElement('style');
style.textContent = `
    .hero-image.animate {
        transform: scale(1.2) rotate(5deg);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
    }
`;
document.head.appendChild(style);