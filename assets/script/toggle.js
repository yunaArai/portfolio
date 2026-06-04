document.querySelectorAll('.toggle').forEach(button => {
    button.addEventListener('click', () => {
        const area = button.closest('.toggle-area');
        const content = area.querySelector('.content');

        content.classList.toggle('is-open');

        button.textContent = content.classList.contains('is-open')
            ? 'CLOSE'
            : 'VIEW MORE';
    });
});