document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesBtn = document.getElementById('accept-cookies');
    const declineCookiesBtn = document.getElementById('decline-cookies');
    
    // Check if user has already made a choice
    if (!getCookie('cookieConsent')) {
        cookieBanner.style.display = 'block';
    }
    
    // Handle accept button click
    if (acceptCookiesBtn) {
        acceptCookiesBtn.addEventListener('click', function() {
            setCookie('cookieConsent', 'accepted', 365);
            cookieBanner.style.display = 'none';
            // Initialize analytics or tracking cookies here if needed
        });
    }
    
    // Handle decline button click
    if (declineCookiesBtn) {
        declineCookiesBtn.addEventListener('click', function() {
            setCookie('cookieConsent', 'declined', 365);
            cookieBanner.style.display = 'none';
            // Make sure to not set any tracking cookies
        });
    }
    
    // Cookie helper functions
    function setCookie(name, value, days) {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + (value || '') + expires + '; path=/';
    }
    
    function getCookie(name) {
        const nameEQ = name + '=';
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
});
