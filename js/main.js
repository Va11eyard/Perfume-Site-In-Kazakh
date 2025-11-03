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

// Dynamic Products Loading
document.addEventListener('DOMContentLoaded', function() {
    const productsGrid = document.querySelector('.products-grid');
    
    if (productsGrid) {
        loadProducts();
    }
});

function loadProducts() {
    const productsGrid = document.querySelector('.products-grid');
    const products = getProductsFromStorage();
    
    if (products.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-light);">Өнімдер жоқ</p>';
        return;
    }
    
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <span class="price">${product.price.toLocaleString()} ₸</span>
        </div>
    `).join('');
}

function getProductsFromStorage() {
    const products = localStorage.getItem('perfumeProducts');
    
    // If no products in localStorage, return default products
    if (!products) {
        const defaultProducts = [
            {
                id: 1,
                name: "Гүл иісі",
                description: "Жазғы гүлдердің нәзік хош иісі. Романтикалық және жұмсақ парфюм.",
                price: 15000,
                image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop"
            },
            {
                id: 2,
                name: "Мұхит самалы",
                description: "Теңіз самалының сергек және таза иісі. Күнделікті қолдануға өте ыңғайлы.",
                price: 18000,
                image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop"
            },
            {
                id: 3,
                name: "Түнгі жұлдыз",
                description: "Кешкі шараларға арналған ерекше парфюм. Күшті және тартымды иіс.",
                price: 22000,
                image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=400&fit=crop"
            },
            {
                id: 4,
                name: "Алтын күз",
                description: "Күзгі орманның жылы және жұмсақ иісі. Классикалық және элегантты.",
                price: 17500,
                image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400&h=400&fit=crop"
            },
            {
                id: 5,
                name: "Жасмин бағы",
                description: "Жасмин гүлінің хош иісі. Әйелдерге арналған нәзік парфюм.",
                price: 19500,
                image: "https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=400&h=400&fit=crop"
            },
            {
                id: 6,
                name: "Қара мысық",
                description: "Күшті және сексуалды иіс. Ерлерге және батыл әйелдерге арналған.",
                price: 24000,
                image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop"
            }
        ];
        
        // Initialize localStorage with default products
        localStorage.setItem('perfumeProducts', JSON.stringify(defaultProducts));
        return defaultProducts;
    }
    
    return JSON.parse(products);
}
