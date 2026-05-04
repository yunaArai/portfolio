$(function () {
    $(".toggle").on("click", function () {
        const $btn = $(this);
        const $content = $btn.next();

        $content.slideToggle();

        // aria-expanded 切り替え
        const isExpanded = $btn.attr("aria-expanded") === "true";
        $btn.attr("aria-expanded", !isExpanded);
    });
});