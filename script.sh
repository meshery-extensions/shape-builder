#!/usr/bin/env bash
set -e

ZIP_NAME="public-dir.zip"
BUILD_DIR="site/public"

# Ensure build output exists and is not empty
if [ ! -d "$BUILD_DIR" ] || [ -z "$(ls -A "$BUILD_DIR")" ]; then
  echo "Build output missing or empty at $BUILD_DIR"
  exit 1
fi

rm -f "$ZIP_NAME"

# Zip ONLY the contents of the built site
(
  cd "$BUILD_DIR"
  zip -r "../../$ZIP_NAME" .
)

echo "Zipped site contents into $ZIP_NAME"
