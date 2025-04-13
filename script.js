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
    const buttonWrapper = document.querySelector('.center-button-wrapper');
    const toTopButton = document.querySelector('.to-top');
    let scrollTimeout;
    
    // Set initial transition
    buttonWrapper.style.transition = 'opacity 0.2s ease';
    toTopButton.style.transition = 'opacity 0.2s ease';
    
    // Function to hide buttons
    function hideButtons() {
        buttonWrapper.style.opacity = '0';
        buttonWrapper.style.pointerEvents = 'none';
        toTopButton.style.opacity = '0';
        toTopButton.style.pointerEvents = 'none';
    }
    
    // Function to show buttons
    function showButtons() {
        buttonWrapper.style.opacity = '1';
        buttonWrapper.style.pointerEvents = 'auto';
        toTopButton.style.opacity = '1';
        toTopButton.style.pointerEvents = 'auto';
    }
    
    // Handle scroll events
    window.addEventListener('scroll', function() {
        // Hide buttons when scrolling starts
        hideButtons();
        
        // Clear any existing timeout
        clearTimeout(scrollTimeout);
        
        // Show buttons after scrolling stops
        scrollTimeout = setTimeout(function() {
            showButtons();
        }, 500); // Adjust this value to change how long after scrolling stops the buttons reappear
    });
    
    // Handle touch events for mobile
    let touchStartY;
    window.addEventListener('touchstart', function(e) {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });
    
    window.addEventListener('touchmove', function(e) {
        const touchY = e.touches[0].clientY;
        const diff = touchY - touchStartY;
        
        // Only hide if actual scrolling is happening (not just touching)
        if (Math.abs(diff) > 5) {
            hideButtons();
            clearTimeout(scrollTimeout);
        }
    }, { passive: true });
    
    window.addEventListener('touchend', function() {
        showButtons();
    }, { passive: true });
});
