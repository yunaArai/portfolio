document.querySelectorAll('.toggle').forEach(button => {
    button.addEventListener('click', () => {
        const content =
            button.closest('.btn__area')
                .parentElement
                .querySelector('.content');

        if (!content) return;

        content.classList.toggle('is-open');

        button.textContent = content.classList.contains('is-open')
            ? 'CLOSE'
            : 'VIEW MORE';
    });
});