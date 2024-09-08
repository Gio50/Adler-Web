document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');

    if (!hamburger || !mobileMenu || !popup || !overlay) {
        console.error('One or more required elements are missing in the DOM.');
        return;
    }

    // Load menu content from text file
    function loadMenuContent() {
        fetch('wochenmenu.txt')
            .then(response => response.text())
            .then(data => {
                const menuContent = data.split('\n\n').map(item => {
                    const [title, ...content] = item.split('\n');
                    return `<div class="menu-day"><h3>${title}</h3><p>${content.join('<br>')}</p></div>`;
                }).join('');
                popup.innerHTML = `<button class="close-button" aria-label="Close">&times;</button><h2>Wochenmenü</h2>${menuContent}`;

                // Re-select the dynamically added close button
                const closeButton = popup.querySelector('.close-button');
                closeButton.addEventListener('click', function() {
                    popup.classList.remove('active');
                    overlay.classList.remove('active');
                });
            })
            .catch(error => console.error('Error loading menu content:', error));
    }

    hamburger.addEventListener('click', function() {
        // Toggle the mobile menu
        mobileMenu.classList.toggle('active');
        // Toggle the hamburger menu icon
        hamburger.classList.toggle('open');
        // Toggle aria-expanded attribute
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);
    });

    overlay.addEventListener('click', function() {
        popup.classList.remove('active');
        overlay.classList.remove('active');
    });
});

