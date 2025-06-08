// Animated counter for statistics
document.addEventListener('DOMContentLoaded', function() {
    // Configuration for each counter
    const counters = [
        { element: '.stat-item:nth-child(1) .stat-number', target: 84, suffix: '+' },
        { element: '.stat-item:nth-child(2) .stat-number', target: 99, suffix: '%' },
        { element: '.stat-item:nth-child(3) .stat-number', target: 45, suffix: '+' }
    ];

    // Options for the Intersection Observer
    const options = {
        threshold: 0.5, // Trigger when 50% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Adjust this to trigger the animation earlier/later
    };

    // Create the observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start all counters when the section is in view
                counters.forEach(counter => {
                    animateCounter(counter);
                });
                // Stop observing after animation starts
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Observe the stats section
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        observer.observe(statsSection);
    }

    // Counter animation function
    function animateCounter(counter) {
        const element = document.querySelector(counter.element);
        if (!element) return;

        const duration = 2000; // Animation duration in milliseconds
        const start = 0;
        const increment = counter.target / (duration / 16); // 60fps
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= counter.target) {
                clearInterval(timer);
                current = counter.target;
            }
            // Update the element with the current value and suffix
            element.textContent = Math.round(current) + counter.suffix;
        }, 16); // ~60fps
    }
});
