
var resultWrapper = document.querySelector(".spin-result-wrapper"),
wheel = document.querySelector(".wheel-img"),
params = window.location.search.replace("?", "").split("&").reduce(function (e, t) {
    var n = t.split("=");
    return e[decodeURIComponent(n[0])] = decodeURIComponent(n[1]), e
}, {});

function spin() {
wheel.classList.contains("rotated") || (wheel.classList.add("super-rotation"), setTimeout(function () {
    resultWrapper.style.display = "block"
}, 8e3), setTimeout(function () {
    $(".spin-wrapper").slideUp(), $(".order_block").slideDown(), start_timer()
}, 1e4), wheel.classList.add("rotated"))
}
var closePopup = document.querySelector(".close-popup");
$(".close-popup, .pop-up-button").click(function (e) {
e.preventDefault(), $(".spin-result-wrapper").fadeOut()
});
var intr, time = 600;

function start_timer() {
intr = setInterval(tick, 1e3)
}

function tick() {
time -= 1;
var e = Math.floor(time / 60),
    t = time - 60 * e;
0 == e && 0 == t && clearInterval(intr), t = t >= 10 ? t : "0" + t, $("#min").html("0" + e), $("#sec").html(t)
}
const hash = document.getElementsByTagName("body")[0].getAttribute("data-hash");
setTimeout(function () {
// $("form").leadprofit({
//     hash: hash
// }).leadprofitSubmit({
//     confirmUrl: "confirm.html",
//     counterParams: {
//         country: "{country}",
//         version: document.location.pathname.replace(/\/+/g, "").replace("landings", "").replace("index.html", "").replace("index2.html", "").replace("confirm.html", "")
//     }
// })
}, 1500);