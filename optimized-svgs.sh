#!/bin/bash

# Install dependencies if not already installed
if ! command -v svgr &> /dev/null; then
    echo "Installing SVGR CLI..."
    npm install -g @svgr/cli
fi

if ! command -v svgo &> /dev/null; then
    echo "Installing SVGO CLI..."
    npm install -g svgo
fi

# Create output directory if it doesn't exist
OUTPUT_DIR="./components/svg"
mkdir -p "$OUTPUT_DIR"

# Array of input directories
INPUT_DIRS=(
  "./assets/icons/decorations/fruits"
  "./assets/icons/sprouts"
  "./assets/icons/svg"
  "./assets/icons/tree-parts"
  "./assets/icons/trees"
  "./assets/avatars/svg/dark"
  "./assets/avatars/svg/light"
)

# Loop through each input directory
for DIR in "${INPUT_DIRS[@]}"; do
  echo "Processing directory: $DIR"
  # Optimize SVG files in place
  npx svgo "$DIR"/*.svg --multipass --config="{ \"plugins\": [\"preset-default\"] }"
  # Convert optimized SVGs to React Native components
  npx @svgr/cli "$DIR" --native -o "$OUTPUT_DIR"
done

echo "Conversion and optimization completed! All components are in $OUTPUT_DIR."
