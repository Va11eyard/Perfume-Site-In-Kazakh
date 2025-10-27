// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Smooth scroll for navigation links
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active link highlighting based on scroll position
    function highlightActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const scrollPosition = window.scrollY + navbarHeight + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }

    // Listen for scroll events
    window.addEventListener('scroll', highlightActiveLink);
    
    // Initial call to set active link on page load
    highlightActiveLink();
});

// CTA Button functionality
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const productsSection = document.querySelector('#products');
            if (productsSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = productsSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
});


// Contact Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Reset message
            formMessage.className = 'form-message';
            formMessage.textContent = '';

            // Validate all fields are filled
            if (!name || !email || !message) {
                formMessage.className = 'form-message error';
                formMessage.textContent = 'Барлық өрістерді толтырыңыз!';
                return;
            }

            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formMessage.className = 'form-message error';
                formMessage.textContent = 'Email форматы дұрыс емес!';
                return;
            }

            // If validation passes, show success message
            formMessage.className = 'form-message success';
            formMessage.textContent = 'Хабарламаңыз жіберілді!';

            // Clear form fields
            contactForm.reset();

            // Hide success message after 5 seconds
            setTimeout(function() {
                formMessage.className = 'form-message';
                formMessage.textContent = '';
            }, 5000);
        });
    }
});


// Scroll Animations with Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.about, .products, .contact');
    
    // Add fade-in-section class to sections
    sections.forEach(section => {
        section.classList.add('fade-in-section');
    });

    // Create Intersection Observer
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });
});
