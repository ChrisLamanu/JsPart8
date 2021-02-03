// // https://www.w3schools.com/jsref/event_preventdefault.asp

// let allTarget = document.querySelectorAll("li a");

// allTarget.forEach(e => e.addEventListener("click", function(e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//         behavior: "smooth"
//     });
// }));

const arrayA = document.querySelectorAll("li a");

arrayA.forEach(button => button.onclick = function(event) {
    event.preventDefault();
    
    document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
    });
});