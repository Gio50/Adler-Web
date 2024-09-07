document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.overlay');
    const popup = document.querySelector('.popup');
    const closeButton = document.querySelector('.close-button');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active'); // Optionally toggle overlay if used
    });

    overlay.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
    });

    closeButton.addEventListener('click', () => {
        popup.classList.remove('active');
        overlay.classList.remove('active');
    });
});

