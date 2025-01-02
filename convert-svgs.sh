#!/bin/bash

# Install dependencies if not already installed
if ! command -v svgr &> /dev/null
then
    echo "Installing SVGR CLI..."
    npm install -g @svgr/cli
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
  echo "Transforming SVGs from $DIR to $OUTPUT_DIR"
  npx @svgr/cli --native --out-dir "$OUTPUT_DIR" --no-dimensions "./svgo.config.js" "$DIR"
done

echo "Conversion completed! All components are in $OUTPUT_DIR."
