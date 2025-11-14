document.addEventListener('DOMContentLoaded', () => {
    
    // --- NEW: Particle Generator ---
    const particleContainer = document.getElementById('particle-container');
    if (particleContainer) {
        const particleCount = 30; // Number of particles
        for (let i = 0; i < particleCount; i++) {
            let particle = document.createElement('span');
            particle.classList.add('particle');
            
            let size = Math.random() * 8 + 2; // size 2px to 10px
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100 + 100}%`; // Start below the viewport
            
            let animationDuration = Math.random() * 15 + 10; // duration 10s to 25s
            particle.style.animationDuration = `${animationDuration}s`;
            particle.style.animationDelay = `${Math.random() * 10}s`; // random delay
            
            particleContainer.appendChild(particle);
        }
    }

    // --- Mobile Menu Toggle ---
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
De                });
    });
    
    // --- Back to Top Button ---
    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.remove('hidden');
            backToTopButton.classList.add('flex');
        } else {
            backToTopButton.classList.add('hidden');
            backToTopButton.classList.remove('flex');
        }
    });
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // This STOPS the page from redirecting
        const form = e.target;
        const data = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                formMessage.classList.remove('hidden'); // Show success message
                contactForm.reset(); // Clear the form
                setTimeout(() => {
                    formMessage.classList.add('hidden');
                }, 4000);
            }else {
      // If Formspree has an error
            response.json().then(data => {
                alert("Oops! There was a problem sending your message.");
            })
        }
    }).catch(error => {
    // If there's a network error
    alert("Oops! There was a network error.");
    });
});     
    

    // --- NEW: Intersection Observer for Scroll Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.0 // Trigger when 10% of the element is visible
    });

    // Observe all elements with the .animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
});