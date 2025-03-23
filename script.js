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

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
   if (window.pageYOffset > 100) {
     toTop.classList.add("active");
  }  else {
     toTop.classList.remove("active");
  }
})



const typed = new Typed('.multiple-text', {
    strings: [ 'Anywhere in Karachi', 
        'Fast and Secure Delivery',
        'Best Quality Pipes', 
        'Affordable Prices', 
        "Karachi's Most Trusted Pipes Supplier",
        '24/7 Customer Support', 
        'No. 1 in Karachi', 
        'Wide Range of Products',  
        'Easy Online Ordering',
        'Premium Quality, Affordable Rates',
        'Durable and Reliable Pipes',
        'Certified and Tested Products',
        'Trusted by Homeowners and Builders', 
        'Eco-Friendly Pipes',],
    typeSpeed: 60,
    backSpeed: 0.1,
    backDelay: 1070,
    loop: true,
});





   


function openChatbot() {
  document.getElementById('chatbot-container').style.display = 'block';
}

function closeChatbot() {
  document.getElementById('chatbot-container').style.display = 'none';
}
        




