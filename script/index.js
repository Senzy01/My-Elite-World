// Smooth Scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          target.scrollIntoView({
              behavior: 'smooth'
          });
      }
  });
});

// Optional: Animate sections on scroll (simple fade-in)
const animatedItems = document.querySelectorAll('.scroll-img, .scroll-image');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('animate__fadeIn');
      }
  });
}, { threshold: 0.2 });

animatedItems.forEach(item => observer.observe(item));

// for world-news
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.news-card');
  
    const observerOptions = {
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    cards.forEach(card => {
      observer.observe(card);
    });
  });

  // for Business
  function motivateUser() {
    const messages = [
      "Every expert was once a beginner.",
      "Success starts with the decision to try.",
      "Dream big. Start small. Act now.",
      "Consistency beats talent when talent doesn’t show up.",
      "You’ve got what it takes to build something great."
    ];
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("motivation-text").textContent = randomMsg;
  }

  // for contact
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const review = document.getElementById('review').value.trim();
    const rating = document.getElementById('rating').value;
  
    const mailto = `mailto:angelsenzy12@gmail.com?subject=New Contact from ${name}&body=
  Name: ${name}%0DEmail: ${email}%0DMessage: ${message}%0DReview: ${review}%0DRating: ${rating}`;
  
    window.location.href = mailto;
  });
  