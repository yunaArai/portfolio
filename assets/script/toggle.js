document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.toggle');
    const content = document.querySelector('.content');

    button.addEventListener('click', () => {
        content.classList.toggle('is-open');

        if (content.classList.contains('is-open')) {
            button.textContent = 'CLOSE';
        } else {
            button.textContent = 'VIEW MORE';
        }
    });
});