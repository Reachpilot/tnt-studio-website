const fs = require('fs');
const path = require('path');

// Favicon HTML to insert
const FAVICON_HTML = `
    <!-- Favicon -->
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
    <link rel="shortcut icon" href="favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
    <link rel="manifest" href="site.webmanifest">
    <meta name="theme-color" content="#6a0dad">`;

// Get all HTML files in the current directory
const files = fs.readdirSync('.').filter(file => file.endsWith('.html'));

files.forEach(file => {
    console.log(`Updating ${file}...`);
    
    try {
        // Read the file
        let content = fs.readFileSync(file, 'utf8');
        
        // Remove any existing favicon links
        content = content.replace(/<link[^>]*(rel=('|")(icon|shortcut icon|apple-touch-icon|manifest)[^>]*>)/g, '');
        content = content.replace(/<meta[^>]*(name=('|")theme-color[^>]*>)/g, '');
        
        // Insert the new favicon HTML after the viewport meta tag
        content = content.replace(
            /(<meta[^>]*name=["']viewport["'][^>]*>)/i,
            `$1\n${FAVICON_HTML}`
        );
        
        // Write the updated content back to the file
        fs.writeFileSync(file, content, 'utf8');
        console.log(`✓ ${file} updated successfully`);
    } catch (error) {
        console.error(`Error updating ${file}:`, error.message);
    }
});

console.log('Favicon update process completed!');
