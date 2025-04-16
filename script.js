let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('active'); // icon animation
    navbar.classList.toggle('active'); // menu slide open/close
}

window.onscroll = () => {
    menu.classList.remove('active');
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
    backSpeed: 50,
    backDelay: 1100,
    loop: true,
});





        
function openChatbot() {
  document.getElementById('chatbot-container').style.display = 'block';
}

function closeChatbot() {
  document.getElementById('chatbot-container').style.display = 'none';
}





document.addEventListener('DOMContentLoaded', function() {
    const toTopButton = document.querySelector('.to-top');
    let scrollTimeout;
    
    // Set initial transition
    toTopButton.style.transition = 'opacity 0.5s ease';
    
    // Function to hide button
    function hideButton() {
        toTopButton.style.opacity = '0';
        toTopButton.style.pointerEvents = 'none';
    }
    
    // Function to show button
    function showButton() {
        toTopButton.style.opacity = '1';
        toTopButton.style.pointerEvents = 'auto';
    }
    
    // Handle scroll events
    window.addEventListener('scroll', function() {
        // Hide button when scrolling starts
        hideButton();
        
        // Clear any existing timeout
        clearTimeout(scrollTimeout);
        
        // Show button after scrolling stops
        scrollTimeout = setTimeout(function() {
            showButton();
        }, 500);
    });
    
    // Handle touch events for mobile
    let touchStartY;
    window.addEventListener('touchstart', function(e) {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });
    
    window.addEventListener('touchmove', function(e) {
        const touchY = e.touches[0].clientY;
        const diff = touchY - touchStartY;
        
        // Only hide if actual scrolling is happening
        if (Math.abs(diff) > 5) {
            hideButton();
            clearTimeout(scrollTimeout);
        }
    }, { passive: true });
    
    window.addEventListener('touchend', function() {
        showButton();
    }, { passive: true });
});