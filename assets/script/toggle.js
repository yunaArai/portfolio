document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.toggle').forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;

            content.classList.toggle('is-open');

            button.textContent = content.classList.contains('is-open')
                ? 'CLOSE'
                : 'VIEW MORE';
        });
    });
});