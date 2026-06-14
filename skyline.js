/* =========================
FILE: script.js
========================= */

// MOBILE MENU

const menuBtn =
document.querySelector(".menu-btn");

const navLinks =
document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// NAVBAR SCROLL EFFECT

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background = "#000";

    }

    else{

        navbar.style.background =
        "rgba(0,0,0,0.4)";
    }

});


// COUNTER ANIMATION

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const current =
        +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText =
            `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 25);

        }

        else{

            counter.innerText = target;
        }
    };

    updateCounter();

});


// ORDER BUTTON EFFECT

const orderButtons =
document.querySelectorAll(".menu-footer button");

orderButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.innerHTML = "Added ✓";

        button.style.background = "limegreen";

        setTimeout(() => {

            button.innerHTML = "Order";

            button.style.background = "#d4af37";

        }, 2000);

    });

});


// CONTACT FORM

const form =
document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert(
        "Your table has been booked successfully!"
    );

    form.reset();

});


// SCROLL REVEAL ANIMATION

const sections =
document.querySelectorAll("section");

window.addEventListener("scroll", revealSections);

function revealSections(){

    sections.forEach(section => {

        const sectionTop =
        section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){

            section.style.opacity = "1";

            section.style.transform =
            "translateY(0px)";
        }

    });

}

sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform =
    "translateY(80px)";

    section.style.transition = "1s";

});


// GALLERY IMAGE EFFECT

const galleryImages =
document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(image => {

    image.addEventListener("mousemove", (e) => {

        const x = e.offsetX;

        const y = e.offsetY;

        image.style.transform =
        `perspective(1000px)
        rotateX(${y / 25}deg)
        rotateY(${x / 25}deg)
        scale(1.05)`;

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

    });

});


// TYPING EFFECT

const text =
"Luxury Rooftop Cafe Experience";

let i = 0;

function typingEffect(){

    const heading =
    document.querySelector(".hero-content h3");

    if(i < text.length){

        heading.innerHTML +=
        text.charAt(i);

        i++;

        setTimeout(typingEffect, 80);
    }

}

document.querySelector(".hero-content h3")
.innerHTML = "";

typingEffect();