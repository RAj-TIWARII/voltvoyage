// Toggle Mobile Menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Typing and Deleting Animation for Quotes
const quotes = [
    "Exploring the Final Frontier",
    "Innovation in Space Technology",
    "Bringing the Universe Closer",
    "Journey Beyond the Stars",
    "Discover the Unknown"
];

let currentQuoteIndex = 0;
let charIndex = 0;
const quoteElement = document.querySelector('.quote');
const typingSpeed = 100;
const erasingSpeed = 50;
const newQuoteDelay = 2000;

function typeQuote() {
    if (charIndex < quotes[currentQuoteIndex].length) {
        quoteElement.textContent += quotes[currentQuoteIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeQuote, typingSpeed);
    } else {
        setTimeout(eraseQuote, newQuoteDelay);
    }
}

function eraseQuote() {
    if (charIndex > 0) {
        quoteElement.textContent = quotes[currentQuoteIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseQuote, erasingSpeed);
    } else {
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        setTimeout(typeQuote, typingSpeed + 1100);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeQuote, newQuoteDelay);
});
