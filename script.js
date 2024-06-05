let navVar = document.querySelector(".navbar");
let lastScroll = window.pageYOffset;

window.onscroll = function() {
    let currentScroll = window.pageYOffset;

    if(lastScroll>currentScroll) {
        navVar.style.top = "0";
        navVar.style.opacity = "1";

    }

    else {
        navVar.style.top = "-100px";
        navVar.style.transition = ".5s linear"
        navVar.style.opacity = "0"

    }

    currentScroll=lastScroll;
}