#!/bin/bash

# Favicon HTML to insert
FAVICON_HTML='    <!-- Favicon -->
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
    <link rel="shortcut icon" href="favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
    <link rel="manifest" href="site.webmanifest">
    <meta name="theme-color" content="#6a0dad">'

# Process each HTML file
for file in *.html; do
    echo "Updating $file..."
    
    # Remove any existing favicon links
    sed -i '' '/<link.*icon\|apple-touch-icon\|manifest/d' "$file"
    sed -i '' '/<meta.*theme-color/d' "$file"
    
    # Insert the new favicon HTML after the viewport meta tag
    sed -i '' '/<meta.*viewport/a \
    <!-- Favicon -->
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
    <link rel="shortcut icon" href="favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
    <link rel="manifest" href="site.webmanifest">
    <meta name="theme-color" content="#6a0dad">' "$file"
    
    echo "✓ $file updated"
done

echo "All HTML files have been updated with the favicon."
