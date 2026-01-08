#!/bin/bash

# MongoDB Installation Script for Ubuntu/Linux Mint (Noble/Jammy based)

echo "Checking system information..."
source /etc/os-release
echo "Running on $PRETTY_NAME ($UBUNTU_CODENAME)"

# Install gnupg and curl if missing
echo "Installing prerequisites..."
sudo apt-get update
sudo apt-get install -y gnupg curl

# Import the public key used by the package management system
echo "Importing MongoDB public GPG key..."
curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg --dearmor

# Create a list file for MongoDB
# Using 'jammy' (22.04) repo as 'noble' (24.04) might not be fully populated in all mirrors yet, or we explicitly check.
# Generally, the jammy repo works for newer ubuntu versions until specific ones are released.
echo "Creating list file for MongoDB..."
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

# Reload local package database
echo "Updating package database..."
sudo apt-get update

# Install the MongoDB packages
echo "Installing MongoDB..."
sudo apt-get install -y mongodb-org

# Start MongoDB
echo "Starting MongoDB Service..."
sudo systemctl start mongod

# Enable MongoDB to start on system boot
echo "Enabling MongoDB on boot..."
sudo systemctl enable mongod

# Verify status
echo "Checking MongoDB status..."
sudo systemctl status mongod --no-pager

echo "MongoDB installation complete!"
echo "You can connect using 'mongosh'"
