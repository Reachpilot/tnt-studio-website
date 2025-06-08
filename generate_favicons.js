const fs = require('fs');
const { execSync } = require('child_process');

// Check if ImageMagick is installed
try {
    execSync('convert -version');
} catch (error) {
    console.error('Error: ImageMagick is required. Install it with: brew install imagemagick');
    process.exit(1);
}

// Create favicon.ico (requires original favicon.png)
try {
    execSync('convert favicon.png -define icon:auto-resize=16,32,48,64,128,256 favicon.ico');
    console.log('✓ Created favicon.ico');
} catch (error) {
    console.error('Error creating favicon.ico:', error.message);
}

// Create favicon-16x16.png
try {
    execSync('convert favicon.png -resize 16x16 favicon-16x16.png');
    console.log('✓ Created favicon-16x16.png');
} catch (error) {
    console.error('Error creating favicon-16x16.png:', error.message);
}

// Create favicon-32x32.png
try {
    execSync('convert favicon.png -resize 32x32 favicon-32x32.png');
    console.log('✓ Created favicon-32x32.png');
} catch (error) {
    console.error('Error creating favicon-32x32.png:', error.message);
}

// Create apple-touch-icon.png
try {
    execSync('convert favicon.png -resize 180x180 -background white -gravity center -extent 192x192 apple-touch-icon.png');
    console.log('✓ Created apple-touch-icon.png');
} catch (error) {
    console.error('Error creating apple-touch-icon.png:', error.message);
}

console.log('\nFavicon generation complete!');
