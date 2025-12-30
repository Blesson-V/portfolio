document.addEventListener('DOMContentLoaded', () => {

    // --- Bootstrap Theme Toggle ---
    const themeBtn = document.getElementById('theme-btn');
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');
    const htmlElement = document.documentElement;

    // 1. Initialize logic based on saved preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    // 2. Button Click Handler
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    // Helper function to apply theme and icons
    function setTheme(theme) {
        htmlElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);

        // Icon visual logic:
        // Dark Mode: Show Sun (to switch to light) or Moon? 
        // Standard convention: Show the icon of the mode you will SWITCH TO.
        // If Dark -> Show Sun. If Light -> Show Moon.

        if (theme === 'dark') {
            moonIcon.classList.add('d-none');
            sunIcon.classList.remove('d-none');
        } else {
            sunIcon.classList.add('d-none');
            moonIcon.classList.remove('d-none');
        }
    }

    // --- Simple Scroll Reveal ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});
