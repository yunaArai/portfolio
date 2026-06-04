document.addEventListener('DOMContentLoaded', () => {
    console.log('読み込み成功');

    const button = document.querySelector('.toggle');
    const content = document.querySelector('.content');

    console.log(button);
    console.log(content);

    button.addEventListener('click', () => {
        console.log('クリックされた');
    });
});