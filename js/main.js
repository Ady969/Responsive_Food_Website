// header scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    }
    else {
        nav.classList.remove("header-scrolled")
    }
}

// hide navbar
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (e) {
    e.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})

/**
   * Back to top button
   */
let backtotop = select('.back-to-top')
if (backtotop) {
    const toggleBacktotop = () => {
        if (window.scrollY > 100) {
            backtotop.classList.add('active')
        } else {
            backtotop.classList.remove('active')
        }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
}