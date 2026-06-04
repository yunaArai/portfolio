const toggleBtn = document.querySelector('.toggle');
const content = document.querySelector('.content');

toggleBtn.addEventListener('click', () => {
    const isOpen = toggleBtn.getAttribute('aria-expanded') === 'true';

    if (isOpen) {
        content.style.display = 'none';
        toggleBtn.textContent = 'VIEW MORE';
        toggleBtn.setAttribute('aria-expanded', 'false');
    } else {
        content.style.display = 'block';
        toggleBtn.textContent = 'CLOSE';
        toggleBtn.setAttribute('aria-expanded', 'true');
    }
});