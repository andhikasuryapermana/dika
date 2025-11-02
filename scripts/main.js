// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000,
  once: true
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('mainNav');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80;
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      const navbarCollapse = document.getElementById('navbarResponsive');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    }
  });
});

// Create and add scroll to top button
function createScrollToTopButton() {
  const scrollBtn = document.createElement('div');
  scrollBtn.className = 'scroll-to-top';
  scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
  document.body.appendChild(scrollBtn);

  // Show/hide scroll to top button
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  });

  // Scroll to top on click
  scrollBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Initialize scroll to top button
createScrollToTopButton();

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    this.reset();
    
    // In a real application, you would send the form data to a server here
    // Example:
    // fetch('/api/contact', {
    //   method: 'POST',
    //   body: formData
    // }).then(response => response.json())
    //   .then(data => console.log(data));
  });
}

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    
    if (email) {
      alert('Thank you for subscribing to our newsletter!');
      this.reset();
    }
  });
}

// Active navigation highlight
function highlightActiveSection() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('#mainNav .nav-link');
  
  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= (sectionTop - 100)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// Initialize active section highlighting
highlightActiveSection();

// Portfolio item click animation
document.querySelectorAll('.portfolio-item').forEach(item => {
  item.addEventListener('click', function() {
    // Add custom click behavior here
    console.log('Portfolio item clicked');
  });
});

// Service card hover effect enhancement
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.borderLeft = '4px solid #667eea';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.borderLeft = 'none';
  });
});

// Counter animation for stats
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const value = target.textContent;
        const number = parseInt(value.replace(/\D/g, ''));
        const suffix = value.replace(/[0-9]/g, '');
        
        let count = 0;
        const duration = 2000;
        const increment = number / (duration / 16);
        
        const timer = setInterval(() => {
          count += increment;
          if (count >= number) {
            target.textContent = number + suffix;
            clearInterval(timer);
          } else {
            target.textContent = Math.floor(count) + suffix;
          }
        }, 16);
        
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => observer.observe(counter));
}

// Initialize counter animation
animateCounters();

// Preloader (optional)
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});

console.log('TechVision Solutions website loaded successfully!');
