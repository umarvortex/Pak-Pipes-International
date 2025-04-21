// ================== MENU TOGGLE ==================
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');

    menuIcon.addEventListener('click', function () {
        this.classList.toggle('active');
        navbar.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Auto-close on scroll
    window.addEventListener('scroll', () => {
        menuIcon.classList.remove('active');
        navbar.classList.remove('active');
        document.body.classList.remove('menu-open');
    });

    // Auto-close on clicking any navbar link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('active');
            navbar.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
});

// ================== TYPED TEXT ==================
document.addEventListener('DOMContentLoaded', function () {
    const typed = new Typed('.multiple-text', {
        strings: [
            'Anywhere in Karachi',
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
            'Eco-Friendly Pipes',
        ],
        typeSpeed: 60,
        backSpeed: 50,
        backDelay: 1100,
        loop: true,
    });
});

// ================== SCROLL TO TOP BUTTON ==================
document.addEventListener('DOMContentLoaded', function () {
    const toTop = document.querySelector('.to-top');
    const buttonWrapper = document.querySelector('.center-button-wrapper');

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        // Scroll To Top button visibility
        toTop.classList.toggle('active', scrollY > 500);

        // Floating Button visibility
        if (buttonWrapper) {
            buttonWrapper.style.opacity = scrollY > 300 ? '1' : '0';
            buttonWrapper.style.visibility = scrollY > 300 ? 'visible' : 'hidden';
            buttonWrapper.style.transform = scrollY > 300 ? 'translateY(0)' : 'translateY(100px)';
        }

        // Header animation
        const header = document.querySelector('header');
        if (header) {
            if (scrollY > 100) {
                header.style.height = '70px';
                header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
                header.style.backdropFilter = 'blur(15px)';
            } else {
                header.style.height = 'var(--header-height)';
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                header.style.backdropFilter = 'blur(10px)';
            }
        }

        // Navbar active link highlighting
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.navbar a[href*=' + sectionId + ']').classList.add('active');
            } else {
                document.querySelector('.navbar a[href*=' + sectionId + ']').classList.remove('active');
            }
        });
    });

    // Smooth show/hide on touch devices
    let scrollTimeout;
    const hideButton = () => {
        toTop.style.opacity = '0';
        toTop.style.pointerEvents = 'none';
    };
    const showButton = () => {
        toTop.style.opacity = '1';
        toTop.style.pointerEvents = 'auto';
    };

    window.addEventListener('scroll', () => {
        hideButton();
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(showButton, 500);
    });

    window.addEventListener('touchstart', e => {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    window.addEventListener('touchmove', e => {
        const diff = e.touches[0].clientY - touchStartY;
        if (Math.abs(diff) > 5) {
            hideButton();
            clearTimeout(scrollTimeout);
        }
    }, { passive: true });

    window.addEventListener('touchend', () => {
        showButton();
    }, { passive: true });
});

// ================== CHATBOT TOGGLE ==================
function openChatbot() {
    document.getElementById('chatbot-container').style.display = 'block';
}

function closeChatbot() {
    document.getElementById('chatbot-container').style.display = 'none';
}



// ================== UPDATE YEAR AUTOMATICALLY ==================
// Get the current year and update the year span in the footer
const yearElement = document.getElementById('current-year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}



document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const counter = document.getElementById('counter');
    const slides = document.querySelectorAll('.slide');

    let currentSlide = 0;
    const totalSlides = slides.length;
    let slideInterval;

    // Update slider state
    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        counter.textContent = `${currentSlide + 1} of ${totalSlides}`;

        // Disable buttons when at ends
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === totalSlides - 1;
    }

    // Auto-rotate slides
    function startAutoSlide() {
        slideInterval = setInterval(() => {
            if (currentSlide < totalSlides - 1) currentSlide++;
            else currentSlide = 0;
            updateSlider();
        }, 5000);
    }

    // Event listeners
    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlider();
            resetAutoSlide();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateSlider();
            resetAutoSlide();
        }
    });

    // Reset auto-slide timer
    function resetAutoSlide() {
        clearInterval(slideInterval);
        startAutoSlide();
    }

    // Pause on hover
    slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slider.addEventListener('mouseleave', startAutoSlide);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevBtn.click();
        if (e.key === 'ArrowRight') nextBtn.click();
    });

    // Initialize
    updateSlider();
    startAutoSlide();
});
