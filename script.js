/* THEME TOGGLE */

function toggleTheme() {
    document.body.classList.toggle("light");

    const button = document.getElementById("themeButton");

    if (document.body.classList.contains("light")) {
        button.innerHTML = "🌙";
    } else {
        button.innerHTML = "☀";
    }
}


/* CONTACT FORM */

function sendMessage(event) {
    event.preventDefault();

    alert("Thank you for contacting me! Your message has been received.");

    event.target.reset();
}


/* BACK TO TOP BUTTON */

window.addEventListener("scroll", function () {
    const button = document.getElementById("topBtn");

    if (window.scrollY > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
});


function goTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* TYPING EFFECT */

const typingText = document.getElementById("typingText");

const words = [
    "BTech CSE DS Student",
    "Web Developer",
    "Data Science Student",
    "Programmer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) % words.length;
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}


typeEffect();
