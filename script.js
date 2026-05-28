// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// Active section highlight on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});


// Typing animation in hero section
const text = "Full Stack Developer | AI-ML Enthusiast | B.Tech CSE (AIML)";
let index = 0;

function typeEffect() {
  const heroText = document.querySelector(".hero p");

  if (index < text.length) {
    heroText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  }
}

// clear default text and start typing
window.onload = () => {
  const heroText = document.querySelector(".hero p");
  const original = heroText.textContent;
  heroText.textContent = "";
  typeEffect();
};


// Button hover animation (extra polish)
const btn = document.querySelector(".btn");

btn.addEventListener("mouseover", () => {
  btn.style.transform = "scale(1.05)";
  btn.style.transition = "0.3s";
});

btn.addEventListener("mouseout", () => {
  btn.style.transform = "scale(1)";
});
