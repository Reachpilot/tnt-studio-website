// Favicon fix for all pages
(function() {
    // Create favicon if it doesn't exist
    function ensureFavicon() {
        // Check if favicon exists
        if (!document.querySelector('link[rel*="icon"]')) {
            const favicon = document.createElement('link');
            favicon.rel = 'icon';
            favicon.type = 'image/png';
            favicon.href = '/favicon.png';
            document.head.appendChild(favicon);
        }
        
        // Check if shortcut icon exists
        if (!document.querySelector('link[rel*="shortcut"]')) {
            const shortcutIcon = document.createElement('link');
            shortcutIcon.rel = 'shortcut icon';
            shortcutIcon.href = '/favicon.ico';
            document.head.appendChild(shortcutIcon);
        }
        
        // Force favicon refresh
        const favicon = document.querySelector('link[rel*="icon"]');
        if (favicon) {
            const href = favicon.href;
            favicon.href = '';
            setTimeout(() => { favicon.href = href; }, 10);
        }
    }

    // Run on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', ensureFavicon);
    } else {
        ensureFavicon();
    }

    // Also run after navigation (for SPAs or AJAX)
    let lastUrl = location.href; 
    new MutationObserver(() => {
        const url = location.href;
        if (url !== lastUrl) {
            lastUrl = url;
            ensureFavicon();
        }
    }).observe(document, {subtree: true, childList: true});
})();
