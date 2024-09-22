document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.menu-button');
    const dropdown = document.querySelector('.dropdown');

    button.addEventListener('click', () => {
        dropdown.classList.toggle('show');
    });

    window.addEventListener('click', (event) => {
        if (!button.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });
});
