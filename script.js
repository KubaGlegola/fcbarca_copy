let oldValue = 0;
const navbar = document.querySelector('.navbar');
document.addEventListener('scroll', (e) => {
    let newValue = window.pageYOffset;
    if (oldValue < newValue) {
        console.log("dół");
        navbar.setAttribute("style", "display:none");
    } else {
        navbar.setAttribute("style", "display:block");
    }
    oldValue = newValue;
})