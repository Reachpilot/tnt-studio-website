#!/bin/bash

# Add favicon to all HTML files
for file in *.html; do
    # Check if favicon link already exists
    if ! grep -q "<link rel=\"icon\"" "$file"; then
        # Insert favicon link after the last meta tag in head
        sed -i '' '/<meta.*>/ {
            :a
            $!{N;ba
            }
            s/\(<meta[^>]*>\n\)\([^<]*<title>\)/\1    <link rel="icon" type="image/png" href="favicon.png">\n\2/
        }' "$file"
        echo "Added favicon to $file"
    else
        echo "Favicon already exists in $file"
    fi
done
