#!/bin/bash
# The Script displays the Content-Length from an HTTP request
curl -sI "$1" | grep "Content-Length:" | cut -d " " -f 2
