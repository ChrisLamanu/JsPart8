// https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// https://developer.mozilla.org/fr/docs/Web/API/Element/scrollTop

let btnScroll = document.getElementById("btnScroll");

function scrollTop() {
    document.documentElement.scrollTop = 0;
}

function updateBtn() {
    (document.documentElement.scrollTop > 20) ? btnScroll.style.display = "block" : btnScroll.style.display = "none"; 
}

window.addEventListener("scroll", updateBtn);
btnScroll.addEventListener("click", scrollTop);