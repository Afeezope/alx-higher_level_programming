#!/bin/bash
# Bash script takes in a URL and dispalys all HTTP methods the server will accept
curl -sI "$1" | grep "Allow" | cut -d " " -f 2-
