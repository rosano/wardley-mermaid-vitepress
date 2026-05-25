#!/bin/bash

git submodule add -f https://github.com/tractorjuice/wardley-maps-mermaid.git source
git submodule init
git submodule update --remote

npm i
