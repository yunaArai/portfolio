function copyToClipboard() {
    const text = document.getElementById("copyTarget").value;

    navigator.clipboard.writeText(text)
    .then(() => {
        alert("コピーしました！ : " + text);
    })
    .catch(err => {
        console.error("コピーに失敗:", err);
        alert("コピーに失敗しました");
    });
}