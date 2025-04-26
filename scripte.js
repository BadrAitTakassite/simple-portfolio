// script.js

// Smooth scroll for navigation links
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Simple contact form validation
  const contactForm = document.getElementById('contact-form');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = contactForm.querySelector('input[type="text"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const message = contactForm.querySelector('textarea').value.trim();
  
    if (name === '' || email === '' || message === '') {
      alert('Please fill out all fields before submitting!');
      return;
    }
  
    if (!validateEmail(email)) {
      alert('Please enter a valid email address!');
      return;
    }
  
    // If everything is valid
    alert('Thank you for your message! 🚀');
    contactForm.reset();
  });
  
  // Helper function to validate email format
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  document.addEventListener("DOMContentLoaded", function() {
    const typingElement = document.getElementById("typing");
    const text = typingElement.innerText;
    typingElement.innerText = "";
    
    // Delay typewriter until ASCII fade is done
    setTimeout(() => {
      let index = 0;
      function type() {
        if (index < text.length) {
          typingElement.innerText += text.charAt(index);
          index++;
          setTimeout(type, 100); // typing speed
        }
      }
      type();
    }, 1700); // 1.7s delay after ASCII fade
  });
  document.addEventListener("DOMContentLoaded", function() {
    const typingElement = document.getElementById("typing");
    const text = typingElement.innerText;
    typingElement.innerText = "";
    
    // Delay typewriter until ASCII fade is done
    setTimeout(() => {
      let index = 0;
      function type() {
        if (index < text.length) {
          typingElement.innerText += text.charAt(index);
          index++;
          setTimeout(type, 100); // typing speed
        }
      }
      type();
    }, 1700); // 1.7s delay (after fade-in)
  });
    