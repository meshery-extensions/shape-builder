#! /usr/bin/env bash

if [ -f public-dir.zip ]; then
    rm -rf public-dir.zip
fi
mkdir -p public
zip -r public-dir.zip . -i ./public