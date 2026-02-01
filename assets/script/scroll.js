const targets = document.querySelectorAll('.js-scroll');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const boxes = entry.target.querySelectorAll('div');
            boxes.forEach((box, index) => {
                box.style.animationDelay = `${index * 0.5}s`;
                box.classList.add('is-show');
            });
            observer.unobserve(entry.target); // 1回だけ再生
        }
    });
}, {
    threshold: 0.2
});

targets.forEach(target => {
    observer.observe(target);
});
