// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Only run on mobile/tablet devices
    function isMobileDevice() {
        return window.innerWidth <= 1024; // Same as our media query breakpoint
    }
    
    // Create mobile menu elements
    function createMobileMenu() {
        // Check if we're on mobile/tablet
        if (!isMobileDevice()) return;
        
        // Remove any existing mobile menu first
        removeMobileMenu();
        
        // Create mobile menu button
        const menuBtn = document.createElement('button');
        menuBtn.className = 'mobile-menu-btn';
        menuBtn.innerHTML = '☰';
        menuBtn.setAttribute('aria-label', 'Open menu');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-controls', 'mobile-nav');
        
        // Create mobile navigation
        const mobileNav = document.createElement('nav');
        mobileNav.className = 'mobile-nav';
        mobileNav.id = 'mobile-nav';
        mobileNav.setAttribute('aria-hidden', 'true');
        
        // Create navigation links
        const navLinks = document.createElement('ul');
        navLinks.className = 'mobile-nav-links';
        
        // Add navigation items
        const pages = [
            { href: 'index.html', text: 'Home' },
            { href: 'services.html', text: 'Services' },
            { href: 'portfolio.html', text: 'Portfolio' },
            { href: 'about.html', text: 'About' }
        ];
        
        pages.forEach(page => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = page.href;
            link.textContent = page.text;
            
            // Add active class if current page
            if (window.location.pathname.endsWith(page.href) || 
                (page.href === 'index.html' && window.location.pathname.endsWith('/'))) {
                link.classList.add('active');
            }
            
            listItem.appendChild(link);
            navLinks.appendChild(listItem);
        });
        
        mobileNav.appendChild(navLinks);
        
        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.setAttribute('tabindex', '-1');
        overlay.setAttribute('aria-hidden', 'true');
        
        // Add elements to header
        const header = document.querySelector('header');
        if (header) {
            // Add logo for mobile
            const logo = document.createElement('a');
            logo.href = 'index.html';
            logo.className = 'mobile-logo';
            logo.textContent = 'TNT';
            header.appendChild(logo);
            
            // Add menu button
            header.appendChild(menuBtn);
            
            // Add mobile nav and overlay to body
            document.body.insertBefore(mobileNav, document.body.firstChild);
            document.body.appendChild(overlay);
            
            // Update body padding when header height changes (e.g., on orientation change)
            function updateBodyPadding() {
                const headerHeight = header.offsetHeight;
                document.body.style.paddingTop = `${headerHeight}px`;
            }
            
            // Initial update
            updateBodyPadding();
            
            // Update on resize
            window.addEventListener('resize', updateBodyPadding);
            
            // Toggle mobile menu function
            const toggleMenu = (show) => {
                const isActive = show !== undefined ? show : !mobileNav.classList.contains('active');
                
                mobileNav.classList.toggle('active', isActive);
                overlay.classList.toggle('active', isActive);
                menuBtn.setAttribute('aria-expanded', isActive);
                menuBtn.setAttribute('aria-label', isActive ? 'Close menu' : 'Open menu');
                mobileNav.setAttribute('aria-hidden', !isActive);
                overlay.setAttribute('aria-hidden', !isActive);
                document.body.style.overflow = isActive ? 'hidden' : '';
                menuBtn.innerHTML = isActive ? '✕' : '☰';
                
                // Focus management for accessibility
                if (isActive) {
                    mobileNav.querySelector('a').focus();
                } else {
                    menuBtn.focus();
                }
            };
            
            // Toggle mobile menu on button click
            menuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleMenu();
            });
            
            // Close menu when clicking overlay or a link
            overlay.addEventListener('click', () => toggleMenu(false));
            
            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!mobileNav.contains(e.target) && !menuBtn.contains(e.target) && mobileNav.classList.contains('active')) {
                    toggleMenu(false);
                }
            });
            
            // Close menu with Escape key
            document.addEventListener('keydown', function handleEscape(e) {
                if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
                    toggleMenu(false);
                }
            });
        }
    }
    
    // Remove mobile menu elements
    function removeMobileMenu() {
        const mobileElements = document.querySelectorAll('.mobile-menu-btn, .mobile-logo, .mobile-nav, .overlay');
        mobileElements.forEach(el => el.remove());
        document.body.style.overflow = '';
        document.body.style.paddingTop = '0';
    }
    
    // Initialize mobile menu on load if on mobile
    if (isMobileDevice()) {
        createMobileMenu();
    }
    
    // Handle window resize with debounce
    let resizeTimer;
    
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (isMobileDevice() && !document.querySelector('.mobile-menu-btn')) {
                createMobileMenu();
            } else if (!isMobileDevice()) {
                removeMobileMenu();
            }
        }, 150);
    });
});
