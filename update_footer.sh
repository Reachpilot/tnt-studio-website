#!/bin/bash

# Create a temporary file for the new footer
cat > /tmp/new_footer.html << 'EOL'
    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h1 class="footer-logo">TnT STUDIO</h1>
                <p class="tagline">EXPLOSIVE VISUALS</p>
                <p>Your creative partner for digital excellence</p>
                <div class="social-links">
                    <a href="https://www.instagram.com/tnt_studio.de/" target="_blank" class="social-icon" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    <a href="mailto:tandtstudioo@gmail.com" class="social-icon" aria-label="Email"><i class="fas fa-envelope"></i></a>
                </div>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="portfolio.html">Portfolio</a></li>
                    <li><a href="about.html">About Us</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Legal</h3>
                <ul>
                    <li><a href="imprint.html">Imprint</a></li>
                    <li><a href="privacy-policy.html">Privacy Policy</a></li>
                    <li><a href="terms.html">Terms & Conditions</a></li>
                    <li><a href="cookies.html">Cookie Policy</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Contact Us</h3>
                <p><i class="fas fa-envelope"></i> tandtstudioo@gmail.com</p>
                <p><i class="fas fa-user-tie"></i> Owners: Theo Spingys & Tiago Esteves</p>
                <p><i class="fas fa-building"></i> TnT Studio</p>
                <p><i class="fas fa-euro-sign"></i> Small business according to §19 UStG (Germany)</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 TnT STUDIO. All rights reserved.</p>
            <div class="gdpr-links">
                <a href="legal-notice.html">Legal Notice</a> | 
                <a href="privacy-policy.html">Privacy Policy</a> | 
                <a href="cookies.html">Cookie Policy</a>
            </div>
        </div>
    </footer>
EOL

# Update all HTML files with the new footer
find . -name "*.html" -type f | while read -r file; do
    # Remove existing footer
    sed -i '' '/<footer>/,/<\/footer>/d' "$file"
    
    # Add new footer before the closing body tag
    sed -i '' '/<\/body>/ { 
        x
        s/$/
        /
        r /tmp/new_footer.html
    }' "$file"
    
    echo "Updated footer in $file"
done

# Clean up
rm /tmp/new_footer.html

echo "All footers have been updated successfully!"
