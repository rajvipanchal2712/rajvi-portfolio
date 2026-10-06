/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* =========================
   CLOSE MOBILE MENU
========================= */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();


        /* VALIDATION */

        if (name === "") {

            alert("Please enter your name.");

            return;

        }


        if (email === "") {

            alert("Please enter your email.");

            return;

        }


        if (message === "") {

            alert("Please enter your message.");

            return;

        }


        /* SUCCESS */

        alert(
            `Thank you ${name}! Your message has been received.`
        );


        contactForm.reset();

    }
);