#!/bin/sh

# Остановка выполнения при ошибке
set -e

echo "Installing dependencies..."
npm install

echo "Starting application..."
exec "$@"
