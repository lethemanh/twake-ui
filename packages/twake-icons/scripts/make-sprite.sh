#!/usr/bin/env bash
# Generates the SVG sprite as a TypeScript module.
# Usage: npm run sprite

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PACKAGE_DIR="$(dirname "$SCRIPT_DIR")"
OUTFILE="$PACKAGE_DIR/src/Icon/icons-sprite.ts"
SVGSTORE_BIN="$PACKAGE_DIR/../../node_modules/.bin/svgstore"

echo "Making icon sprite, output file: ${OUTFILE}..."

# Collect all SVGs from assets/ (skip animated — CSS keyframes break sprite)
icons=""
for category in ui illus; do
  if [ -d "$PACKAGE_DIR/assets/$category" ]; then
    for f in "$PACKAGE_DIR/assets/$category"/*.svg; do
      [ -f "$f" ] && icons="$icons $f"
    done
  fi
done

if [ -z "$icons" ]; then
  echo "No SVGs found in assets/"
  echo "export default ''" > "$OUTFILE"
  exit 0
fi

# Generate sprite using svgstore
echo "$icons" | xargs "$SVGSTORE_BIN" --inline -o /tmp/twake-icons-sprite.svg 2>/dev/null || {
  echo "Error: svgstore failed"
  exit 1
}

# Use Node.js to properly escape and write the TypeScript file
node "$SCRIPT_DIR/generate-sprite-ts.mjs"

echo "Done: $OUTFILE"
