// Smooth scrolling for navigation links and handle favicon
document.querySelectorAll('a[href^="#"], a[href^="./"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // If it's a hash link (same page)
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
        // If it's a page link, preserve the favicon
        else if (this.getAttribute('href').startsWith('./') || 
                !this.getAttribute('href').startsWith('http')) {
            // Add a small delay to ensure favicon is loaded
            setTimeout(() => {
                const favicon = document.querySelector('link[rel*="icon"]') || document.createElement('link');
                favicon.rel = 'icon';
                favicon.type = 'image/png';
                favicon.href = 'favicon.png';
                document.getElementsByTagName('head')[0].appendChild(favicon);
                
                const shortcutIcon = document.querySelector('link[rel*="shortcut"]') || document.createElement('link');
                shortcutIcon.rel = 'shortcut icon';
                shortcutIcon.href = 'favicon.png';
                document.getElementsByTagName('head')[0].appendChild(shortcutIcon);
            }, 100);
        }
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Add animation to service cards on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});
