#!/bin/bash
#
# Release Script for Twake UI Monorepo
#
# This script automates the release process for all packages in the monorepo.
# It detects which packages have been modified since their last release and
# runs semantic-release only on those packages.
#
# Usage:
#   ./scripts/release.sh              # Run from repository root
#   npm run release                   # Via package.json script
#
# Features:
#   - Independent versioning per package
#   - Automatic detection of modified packages
#   - Changelog generation
#   - NPM publishing
#   - GitHub release creation
#
# Requirements:
#   - Must be run from repository root
#   - Requires GITHUB_TOKEN and NODE_AUTH_TOKEN environment variables
#   - Each package must have its own .releaserc.json configuration
#

set -e

echo "🔍 Checking for modified packages..."

# Get the list of all packages
for package_dir in packages/*/; do
  if [ -d "$package_dir" ]; then
    package_name=$(basename "$package_dir")
    echo ""
    echo "📦 Checking package: $package_name"

    # Get the last tag for this package
    last_tag=$(git tag -l "@linagora/$package_name@*" --sort=-v:refname | head -n 1)

    if [ -z "$last_tag" ]; then
      echo "   No previous tag found, checking if package exists..."
      # No tag yet, check if the package directory has any tracked files
      if git ls-files --error-unmatch "$package_dir" > /dev/null 2>&1; then
        echo "   ✨ Package exists, running semantic-release..."
        cd "$package_dir"
        npx semantic-release
        cd - > /dev/null
      else
        echo "   ⏭️  No tracked files in package, skipping..."
      fi
    else
      echo "   Last tag: $last_tag"
      # Check if there are changes since the last tag
      if git diff --name-only "$last_tag" HEAD | grep -q "^$package_dir"; then
        echo "   ✨ Changes detected since last tag, running semantic-release..."
        cd "$package_dir"
        npx semantic-release
        cd - > /dev/null
      else
        echo "   ⏭️  No changes since $last_tag, skipping..."
      fi
    fi
  fi
done

echo ""
echo "✅ Release process completed!"
