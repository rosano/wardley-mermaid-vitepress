#!/bin/bash

git submodule add -f https://github.com/tractorjuice/wardley-maps-mermaid.git wardley-maps-mermaid
git submodule init
git submodule update --remote

npm i
