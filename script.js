var aside = document.querySelector("aside");
var asideTop = aside.offsetTop;

window.addEventListener("scroll", function () {
    if (window.scrollY >= asideTop) {
        aside.style.position = "fixed";
        aside.style.top = "0px";
    } else {
        aside.style.position = "sticky";
    }
});
