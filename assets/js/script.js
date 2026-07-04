/*=========================================
    PRARAMBHA KIDS
    script.js
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================
        Sticky Navbar
    =====================================*/

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 40) {

            navbar.classList.add("sticky");

        } else {

            navbar.classList.remove("sticky");

        }

    });




    /*=====================================
        Mobile Menu
    =====================================*/

    const menuBtn = document.querySelector(".menu-toggle");

    const nav = document.querySelector(".nav-links");

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", () => {

            nav.classList.toggle("show");

            menuBtn.classList.toggle("active");

        });

        nav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("show");

                menuBtn.classList.remove("active");

            });

        });

    }




    /*=====================================
        Smooth Scroll
    =====================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    });




    /*=====================================
        Scroll Reveal Animation
    =====================================*/

    const reveals = document.querySelectorAll(
        ".feature-card, .program-card, .facility-card, .gallery-item, .testimonial-card, .faq-item, .about-founder, .learning, .contact, .stat-card"
    );

    const revealOnScroll = () => {

        const trigger = window.innerHeight * 0.88;

        reveals.forEach(item => {

            const top = item.getBoundingClientRect().top;

            if (top < trigger) {

                item.classList.add("show");

            }

        });

    };

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();




    /*=====================================
        FAQ Accordion
    =====================================*/

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const answer = item.querySelector("p");

        if (answer) {

            answer.style.display = "none";

        }

        item.addEventListener("click", () => {

            item.classList.toggle("active");

            if (!answer) return;

            answer.style.display =
                answer.style.display === "block"
                    ? "none"
                    : "block";

        });

    });




    /*=====================================
        Active Navigation
    =====================================*/

    const sections = document.querySelectorAll("section[id]");

    const navLinks = document.querySelectorAll(".nav-links a");

    const activateNav = () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 150;

            const height = section.offsetHeight;

            if (window.scrollY >= top && window.scrollY < top + height) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    };

    window.addEventListener("scroll", activateNav);

    activateNav();




    /*=====================================
        Back To Top
    =====================================*/

    const topBtn = document.createElement("button");

    topBtn.innerHTML = "↑";

    topBtn.className = "back-to-top";

    document.body.appendChild(topBtn);

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    });




    /*=====================================
        Button Ripple Effect
    =====================================*/

    document.querySelectorAll(".btn").forEach(button => {

        button.addEventListener("click", function (e) {

            const circle = document.createElement("span");

            const diameter = Math.max(

                this.clientWidth,

                this.clientHeight

            );

            circle.style.width =

                circle.style.height = diameter + "px";

            circle.style.left =

                e.offsetX - diameter / 2 + "px";

            circle.style.top =

                e.offsetY - diameter / 2 + "px";

            circle.classList.add("ripple");

            const ripple = this.querySelector(".ripple");

            if (ripple) {

                ripple.remove();

            }

            this.appendChild(circle);

        });

    });




    /*=====================================
        Hero Image Parallax
    =====================================*/

    const heroImage = document.querySelector(".hero-image img");

    if (heroImage) {

        window.addEventListener("scroll", () => {

            heroImage.style.transform =
                `translateY(${window.scrollY * 0.08}px)`;

        });

    }




    /*=====================================
        Loading Images Smoothly
    =====================================*/

    document.querySelectorAll("img").forEach(img => {

        img.loading = "lazy";

        img.style.opacity = "0";

        img.onload = () => {

            img.style.transition = ".6s";

            img.style.opacity = "1";

        };

    });




    /*=====================================
        Scroll Progress Bar
    =====================================*/

    const progress = document.createElement("div");

    progress.className = "progress-bar";

    document.body.appendChild(progress);

    window.addEventListener("scroll", () => {

        const total =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const current =
            (window.scrollY / total) * 100;

        progress.style.width = current + "%";

    });

});