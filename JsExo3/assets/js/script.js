// https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver
// https://www.youtube.com/watch?v=huVJW23JHKQ
// https://www.grafikart.fr/tutoriels/intersection-observer-804
let pAll = document.querySelectorAll("p");

let obsParagraph = new IntersectionObserver(e => e.forEach(e => {
    if (e.intersectionRatio >= 0.5) {
        e.target.style.opacity = 1;
        e.target.style.transform = "translateY(0px)";
        e.target.style.transition = "transform 300ms ease-in, opacity 300ms ease-in";
        obsParagraph.unobserve(e.target);
    }
    else {
        e.target.style.transform = "translateY(200px)";
    }
}), {
    threshold: [0.6]
});

pAll.forEach(e => {
    e.style.opacity = 0;
    e.style.transform = "translateY(0px)";
    obsParagraph.observe(e);
})