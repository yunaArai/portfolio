document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.toggle').forEach(button => {
        button.addEventListener('click', () => {
            const content =
                button.closest('.btn__area').nextElementSibling;

            content.classList.toggle('is-open');

            button.textContent = content.classList.contains('is-open')
                ? 'CLOSE'
                : 'VIEW MORE';
        });
    });
});