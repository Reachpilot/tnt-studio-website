#!/bin/bash

# Add favicon to all HTML files
for file in *.html; do
    # Skip index.html and about.html as they already have the favicon
    if [[ "$file" == "index.html" || "$file" == "about.html" ]]; then
        echo "Skipping $file (already has favicon)"
        continue
    fi
    
    # Check if favicon link already exists (just in case)
    if ! grep -q "<link rel=\"icon\"" "$file"; then
        # Insert favicon link after the last meta tag in head
        # Using a temporary file for macOS compatibility
        sed -i '' '/<meta.*>/ { 
            :a 
            $!{ N; ba } 
            s/\(<meta[^>]*>\)\([^<]*<title>\)/\1\n    <link rel="icon" type="image/png" href="favicon.png">\2/ 
        }' "$file"
        
        # Verify the change was made
        if grep -q "<link rel=\"icon\"" "$file"; then
            echo "✓ Added favicon to $file"
        else
            echo "! Failed to add favicon to $file"
        fi
    else
        echo "- $file already has favicon"
    fi
done
