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
















// Track karne ke liye ek Set banaya
let repliedMessages = new Set();

function sendMessage() {
    const userInput = document.getElementById("user-input");
    const chatBody = document.getElementById("chat-body");
    const message = userInput.value.trim().toLowerCase();
    
    if (message) {
        chatBody.innerHTML += `<div class='user-message'>${message}</div>`;
        userInput.value = "";
        chatBody.scrollTop = chatBody.scrollHeight;

        // Agar message pehle diya ja chuka hai to ignore kare ya alternate jawab de
        if (repliedMessages.has(message)) {
            botReply = "Aap pehle bhi yeh puch chuke hain. Koi aur sawal puchiye!";
        } else {
            generateBotReply(message);
            repliedMessages.add(message); // Is message ko track kar lo
        }
    }
}

function generateBotReply(message) {
    let botReply = "";

    if (message.includes("hi") || message.includes("hello")) {
        botReply = "Hello! What can I help with?";
    } else if (message.includes("pipes")) {
        botReply = "We have Poly pipe, HDPE pipe, Garden pipe, etc.";
    } else if (message.includes("price") || message.includes("cost")) {
        botReply = "For pricing details, please visit our website or contact us.";
    } else {
        botReply = "I'm not sure about that. Ask a different question?";
    }

    // Bot message show kare
    setTimeout(() => {
        document.getElementById("chat-body").innerHTML += `<div class='bot-message'>${botReply}</div>`;
        document.getElementById("chat-body").scrollTop = document.getElementById("chat-body").scrollHeight;
    }, 1000);
}





