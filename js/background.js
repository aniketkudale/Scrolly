var backToTop = function backToTop(event) {
    $('body, html').animate({
        scrollTop: 0
    }, 800);    
}

var ctrlScroll = function ctrlScroll() {
    var scrollOffset = 300;
    if (window.scrollY > scrollOffset) {
        $('.scrolly-btn').addClass('scrolly-btn-visible');
    } else {
        $('.scrolly-btn').removeClass('scrolly-btn-visible');
    }
}

function addScrolly() {
    var btnURL = chrome.extension.getURL('icon48.png');
    var btnTemplate = "<div class='scrolly-btn'>" +
        "<a href='#' title='Scroll to Top'>" +
        "<img src='" + btnURL + "'/>" +
        "</a> </div>";
    var btnEl = document.createElement('div');
    btnEl.innerHTML = btnTemplate;
    var bodyEl = document.body;
    bodyEl.appendChild(btnEl);

    btnEl.addEventListener("click", function () {
        backToTop();
    });

    window.addEventListener("scroll", function () {
        ctrlScroll();
    });

}

window.addEventListener("DOMContentLoaded", addScrolly);