const fs = require('fs');
const path = require('path');

// Simple favicon HTML to insert - using only favicon.png
const FAVICON_HTML = `
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="favicon.png">
    <link rel="shortcut icon" href="favicon.png">`;

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
            `$1${FAVICON_HTML}`
        );
        
        // Write the updated content back to the file
        fs.writeFileSync(file, content, 'utf8');
        console.log(`✓ ${file} updated successfully`);
    } catch (error) {
        console.error(`Error updating ${file}:`, error.message);
    }
});

console.log('\nFavicon update process completed!');
console.log('Make sure favicon.png exists in the root directory.');
