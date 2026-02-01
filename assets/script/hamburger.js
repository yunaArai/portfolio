const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');

// ハンバーガークリック
hamburger.addEventListener('click', function (e) {
    e.stopPropagation(); // documentへの伝播を止める
    navLinks.classList.toggle('active');
});

// メニュー内クリックは閉じない
navLinks.addEventListener('click', function (e) {
    e.stopPropagation();
});

// それ以外をクリックしたら閉じる
document.addEventListener('click', function () {
    navLinks.classList.remove('active');
});
