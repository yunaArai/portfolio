window.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const clone = slider.innerHTML;
    slider.innerHTML += clone; // ← 中身を丸ごと複製
});