#!/bin/bash

echo "Deploying master branch at $(date)" >> ~/sandbox.codesquire.com/deployment_log.txt

git pull

forever restart 36mo
