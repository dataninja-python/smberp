#!/bin/bash

read -p "commit message: " anw

git add . && git commit -a -m "$anw" && git push origin main
