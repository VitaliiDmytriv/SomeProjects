$(document).ready(function () {
    let prices = document.querySelectorAll(".price");
    $(".chose-toggle").click(function (e) {
        e.preventDefault();
        $(".chose-toggle").hasClass("active")
            ? $(".card__price-month").text("/month")
            : $(".card__price-month").text("/year");
        $(".chose-toggle").toggleClass("active");
        for (let i = 0; i < prices.length; i++) {
            if ($(".chose-toggle").hasClass("active")) {
                prices[i].textContent = prices[i].innerHTML * 12;
            } else {
                prices[i].textContent = prices[i].innerHTML / 12;
            }
        }
    });
});
