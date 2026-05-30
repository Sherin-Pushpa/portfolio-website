```javascript id="mx7v2k"
/* =====================================
   PORTFOLIO JAVASCRIPT
   Sherin Pushpa P Portfolio
===================================== */

/* =========================
   TYPING ANIMATION
========================= */

const words = [
    "B.Tech IT Student",
    "Web Developer",
    "Python Programmer",
    "Frontend Enthusiast",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? 60 : 120
    );
}

document.addEventListener(
    "DOMContentLoaded",
    typeEffect
);

/* =========================
   SCROLL TO TOP BUTTON
========================= */

const scrollBtn =
    document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
            &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");
        }

    });

});

/* =========================
   SMOOTH SCROLLING
========================= */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
        "click",
        function (e) {

            e.preventDefault();

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            target.scrollIntoView({
                behavior: "smooth"
            });

        }
    );

});

/* =========================
   CONTACT FORM VALIDATION
========================= */

const form =
    document.getElementById("contactForm");

if (form) {

    form.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            const inputs =
                form.querySelectorAll(
                    "input, textarea"
                );

            let valid = true;

            inputs.forEach(input => {

                if (
                    input.value.trim() === ""
                ) {

                    valid = false;

                    input.style.border =
                        "1px solid red";

                } else {

                    input.style.border =
                        "1px solid #38bdf8";
                }

            });

            if (valid) {

                alert(
                    "Message sent successfully!"
                );

                form.reset();
            }

        }
    );
}

/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const revealElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .certificate-card, .timeline-card"
    );

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0px)";
                }

            });

        },

        {
            threshold: 0.2
        }

    );

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(40px)";

    element.style.transition =
        "all 0.8s ease";

    revealObserver.observe(element);

});

/* =========================
   NAVBAR SHADOW ON SCROLL
========================= */

const navbar =
    document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.3)";

    } else {

        navbar.style.boxShadow = "none";
    }

});

/* =========================
   HERO FADE IN
========================= */

window.addEventListener("load", () => {

    const hero =
        document.querySelector(".hero-section");

    hero.style.opacity = "0";

    hero.style.transition =
        "opacity 1.5s ease";

    setTimeout(() => {

        hero.style.opacity = "1";

    }, 300);

});

/* =========================
   CURRENT YEAR IN FOOTER
========================= */

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();
}
```
