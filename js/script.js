function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
}

const testimonials = document.querySelectorAll('.testimonial');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let index = 0;

function showTestimonial(n) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === n ? 'block' : 'none';
        testimonial.style.opacity = i === n ? '1' : '0';
        testimonial.style.transform = i === n ? 'translateX(0)' : 'translateX(100%)';
    });
}

function nextTestimonial() {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
}

function prevTestimonial() {
    index = (index - 1 + testimonials.length) % testimonials.length;
    showTestimonial(index);
}

nextBtn.addEventListener('click', nextTestimonial);
prevBtn.addEventListener('click', prevTestimonial);
setInterval(nextTestimonial, 3000);

showTestimonial(index);

// js for to enhance the scrolling animation

document.addEventListener("scroll", function() {
    let reveals = document.querySelectorAll(".reveal");
    reveals.forEach((section) => {
        let sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 50) {
            section.classList.add("active");
        }
    });
});

// js for back to the top button

document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
