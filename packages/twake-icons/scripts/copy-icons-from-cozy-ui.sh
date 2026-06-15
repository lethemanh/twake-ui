#!/usr/bin/env bash
# Copies SVG icons from cozy-ui into twake-icons/assets/
# Usage: npm run copy-icons -- /path/to/cozy-ui

set -euo pipefail

COZY_UI_PATH="${1:-}"

if [ -z "$COZY_UI_PATH" ]; then
  echo "Usage: npm run copy-icons -- /path/to/cozy-ui"
  echo "  or:  scripts/copy-icons-from-cozy-ui.sh /path/to/cozy-ui"
  exit 1
fi

if [ ! -d "$COZY_UI_PATH/assets/icons" ]; then
  echo "Error: $COZY_UI_PATH/assets/icons not found"
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ASSETS_DIR="$(dirname "$SCRIPT_DIR")/assets"

echo "Copying icons from $COZY_UI_PATH/assets/icons → $ASSETS_DIR/"

# Copy recursively to include subdirectories (e.g. ui/permissions/)
cp -R "$COZY_UI_PATH/assets/icons/ui/"* "$ASSETS_DIR/ui/" 2>/dev/null || true
cp -R "$COZY_UI_PATH/assets/icons/illus/"* "$ASSETS_DIR/illus/" 2>/dev/null || true
cp -R "$COZY_UI_PATH/assets/icons/animated/"* "$ASSETS_DIR/animated/" 2>/dev/null || true

ui_count=$(find "$ASSETS_DIR/ui" -name "*.svg" | wc -l | tr -d ' ')
illus_count=$(find "$ASSETS_DIR/illus" -name "*.svg" | wc -l | tr -d ' ')
animated_count=$(find "$ASSETS_DIR/animated" -name "*.svg" | wc -l | tr -d ' ')

echo "Done: $ui_count UI icons, $illus_count illustrations, $animated_count animated"
