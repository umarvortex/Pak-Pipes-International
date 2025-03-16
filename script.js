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
        'No`1 in Karachi', 
        'Wide Range of Products',  
        'Easy Online Ordering',
        'Premium Quality, Affordable Rates',
        'Durable and Reliable Pipes',
        'Certified and Tested Products',
        'Trusted by Homeowners and Builders', 
        'Eco-Friendly Pipes',],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1050,
    loop: true,
});




<script>
    document.addEventListener("DOMContentLoaded", function() {
        const toTopButton = document.querySelector(".to-top");

        // Show the button when scrolling down 100px from the top
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                toTopButton.classList.add("active");
                resetHideTimer();
            } else {
                toTopButton.classList.remove("active");
            }
        });

        // Scroll to the top when the button is clicked
        toTopButton.addEventListener("click", (event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        // Hide the button after 4 seconds of inactivity
        let hideTimeout;
        function resetHideTimer() {
            clearTimeout(hideTimeout);
            hideTimeout = setTimeout(() => {
                toTopButton.classList.remove("active");
            }, 4000);
        }

        // Reset hide timer on scroll
        window.addEventListener("scroll", resetHideTimer);
    });
</script>







