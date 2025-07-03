// //preloader
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
  }, 250);
});

// mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

// Skill progress animation
const skillProgressBars = document.querySelectorAll(".skill-progress");
const skillsSection = document.getElementById("skills");

const animateSkills = () => {
  const sectionTop = skillsSection.offsetTop;
  const sectionHeight = skillsSection.clientHeight;
  const scrollPosition = window.scrollY + window.innerHeight;

  if (scrollPosition > sectionTop + 200) {
    skillProgressBars.forEach((bar) => {
      const width = bar.getAttribute("data-width");
      bar.style.width = width + "%";
    });
    window.removeEventListener("scroll", animateSkills);
  }
};

window.addEventListener("scroll", animateSkills);

//initialize aos
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

// typed.js initialization
document.addEventListener("DOMContentLoaded", function () {
  new Typed("#typed-text", {
    strings: [
      "IT Undergraduate",
      "Future Software Engineer",
      "Web Developer",
      "Problem Solver",
      "Tech Enthusiast",
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
  });
});

//dark mode toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
//check for saved theme
const curruntTheme = localStorage.getItem("theme") || "light";
if (curruntTheme == "dark") {
  body.classList.add("dark");
}
themeToggle.addEventListener("click", function () {
  body.classList.toggle("dark");
  const theme = body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});

//smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Close mobile menu if open
      mobileMenu.classList.remove("show");
    }
  });
});

//active navigation link
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

//parallax effect for hero section
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector("#home");
  const speed = scrolled * 0.5;
  parallax.style.transform = `translateY(${speed}px)`;
});

// contact submission
// document.querySelector('.contact-form').addEventListener('submit', (e)=>{
//     e.preventDefault()
//     alert('Thank you for your message! I\'ll get back to you soon.')
//     this.reset()
// })

//email sending

//mouse pointer
const cursor = document.querySelector(".cursor");
let timeout;
document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";

  function mouseStopped() {
    cursor.style.display = "none";
  }
  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 1000);
});

document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});
document.addEventListener("scroll", () => {
  cursor.style.display = "none";
});
