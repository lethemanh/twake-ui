#!/bin/bash
#
# Dry-run Release Script for Twake UI Monorepo
#
# This script runs semantic-release in dry-run mode for a specific package.
# It simulates the release process without actually publishing anything.
# Useful for testing and debugging before merging to main.
#
# Usage:
#   ./scripts/release-dry-run.sh <package-name>
#   npm run release:dry -- twake-mui    # Via npm
#   npm run release:dry -- toto         # Test another package
#
# Example output:
#   - Next version number
#   - Release notes
#   - Commits analyzed
#
# Note: This does NOT publish anything. It's a simulation only.
#

set -e

PACKAGE_NAME=$1

if [ -z "$PACKAGE_NAME" ]; then
  echo "❌ Error: Package name is required"
  echo ""
  echo "Usage: npm run release:dry -- <package-name>"
  echo "Example: npm run release:dry -- twake-mui"
  echo ""
  echo "Available packages:"
  for dir in packages/*/; do
    if [ -d "$dir" ]; then
      echo "  - $(basename "$dir")"
    fi
  done
  exit 1
fi

PACKAGE_DIR="packages/$PACKAGE_NAME"

if [ ! -d "$PACKAGE_DIR" ]; then
  echo "❌ Error: Package '$PACKAGE_NAME' not found in packages/"
  echo ""
  echo "Available packages:"
  for dir in packages/*/; do
    if [ -d "$dir" ]; then
      echo "  - $(basename "$dir")"
    fi
  done
  exit 1
fi

echo "🔍 Running dry-run for package: $PACKAGE_NAME"
echo "📁 Directory: $PACKAGE_DIR"
echo ""

cd "$PACKAGE_DIR"
npx semantic-release --dry-run
