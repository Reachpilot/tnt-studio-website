#!/bin/bash

# Update quick links in all HTML files
find . -name "*.html" -type f -exec sed -i '' 's|<li><a href="contact.html">Contact</a></li>||g' {} \;
find . -name "*.html" -type f -exec sed -i '' 's|<li><a href="about.html">About Us</a></li>||g' {} \;

# Add About Us to the quick links section after the Portfolio link
find . -name "*.html" -type f -exec sed -i '' '/<li><a href="portfolio.html">Portfolio<\/a><\/li>/a \                    <li><a href="about.html">About Us<\/a><\/li>' {} \;

echo "Quick links updated successfully!"
