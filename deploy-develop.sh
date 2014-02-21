#!/bin/bash

echo "Deploying develop branch at $(date)" >> ~/Sandbox/deployment_log.txt

git pull

forever restart QKpf
