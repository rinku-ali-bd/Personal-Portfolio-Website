// ===============================
// Rinku Ali Portfolio JavaScript
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  // ===============================
  // Mobile Menu Toggle
  // ===============================
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("active");
      navMenu.classList.toggle("show");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.classList.remove("active");
        navMenu.classList.remove("show");
      });
    });
  }

  // ===============================
  // Sticky Header Shadow on Scroll
  // ===============================
  const header = document.getElementById("header");

  function handleHeaderScroll() {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleHeaderScroll);
  handleHeaderScroll();

  // ===============================
  // Active Nav Link on Scroll
  // ===============================
  const sections = document.querySelectorAll("section[id]");

  function setActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute("id");
      const activeLink = document.querySelector(
        `.nav-menu a[href="#${sectionId}"]`,
      );

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        activeLink?.classList.add("active");
      } else {
        activeLink?.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveNav);
  setActiveNav();

  // ===============================
  // Typing Effect
  // ===============================
  const typingElement = document.getElementById("typingText");

  if (typingElement) {
    const words = [
      "Frontend Web Developer",
      "HTML CSS JavaScript Developer",
      "Responsive Website Builder",
      "Self-Taught Learner",
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentWord = words[wordIndex];
      let displayedText = "";

      if (isDeleting) {
        displayedText = currentWord.substring(0, charIndex--);
      } else {
        displayedText = currentWord.substring(0, charIndex++);
      }

      typingElement.textContent = displayedText;

      let speed = isDeleting ? 60 : 110;

      if (!isDeleting && charIndex === currentWord.length + 1) {
        speed = 1400;
        isDeleting = true;
      } else if (isDeleting && charIndex < 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 300;
        charIndex = 0;
      }

      setTimeout(typeEffect, speed);
    }

    typeEffect();
  }

  // ===============================
  // Scroll Reveal Animation
  // ===============================
  const revealElements = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 120;

    revealElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - revealPoint) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // ===============================
  // Scroll To Top Button
  // ===============================
  const scrollTopBtn = document.getElementById("scrollTop");

  function toggleScrollTop() {
    if (!scrollTopBtn) return;

    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  }

  window.addEventListener("scroll", toggleScrollTop);
  toggleScrollTop();

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // ===============================
  // Contact Form Validation
  // ===============================
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const subject = document.getElementById("subject");
      const message = document.getElementById("message");

      let isValid = true;

      // reset errors
      [name, email, subject, message].forEach((input) => {
        input.classList.remove("error");
      });

      // name
      if (!name.value.trim()) {
        name.classList.add("error");
        isValid = false;
      }

      // email
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
      if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
        email.classList.add("error");
        isValid = false;
      }

      // subject
      if (!subject.value.trim()) {
        subject.classList.add("error");
        isValid = false;
      }

      // message
      if (!message.value.trim() || message.value.trim().length < 10) {
        message.classList.add("error");
        isValid = false;
      }

      if (!isValid) {
        alert("Please fill in all fields correctly.");
        return;
      }

      alert("Message sent successfully! (Demo only)");
      contactForm.reset();
    });
  }
});
