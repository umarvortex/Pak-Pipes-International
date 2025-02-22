let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick= () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll= () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}






const typed = new Typed('.multiple-text', {
    strings: ['Anywhere in Karachi', 'No.1 in Karachi', 'Fast and Secure Delivery'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
});
