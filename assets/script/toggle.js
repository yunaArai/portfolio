document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.toggle');
    const content = document.querySelector('.content');

    button.addEventListener('click', () => {
        if (content.style.display === 'block') {
            content.style.display = 'none';
            button.textContent = 'VIEW MORE';
        } else {
            content.style.display = 'block';
            button.textContent = 'CLOSE';
        }
    });
});