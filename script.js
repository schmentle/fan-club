(function() {
    const toggleButton = document.getElementById('likeButton');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('theme-dark');

        // Update ARIA attribute dynamically
        const isDark = body.classList.contains('theme-dark');
        toggleButton.setAttribute('aria-pressed', isDark);
        toggleButton.querySelector('span').textContent = isDark ? 'Light Mode' : 'Dark Mode';
    });
})();

document.querySelector('a[href="#top"]').addEventListener('click', function(e) {
    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
