#!/bin/bash

git add .

read -p "what is the commit message: " ans

git commit -m "$ans"


git push origin main
