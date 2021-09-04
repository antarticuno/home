#!/bin/bash

source .env
export MIX_ENV=prod
export PORT=4798

echo "Stopping old copy of app, if any..."

npm stop

echo "Installing npm packages..."

npm update

echo "Starting app..."

npm start
