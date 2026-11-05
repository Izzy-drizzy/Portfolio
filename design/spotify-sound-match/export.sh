#!/bin/sh
# Usage: export.sh <html file> <id> <width> <height> <scale> <out png>
CH="/c/Program Files/Google/Chrome/Application/chrome.exe"
DIR="C:/Work/DESIGNS/bukunmi/Portfolio-spotify/design/spotify-sound-match"
"$CH" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor="$5" --window-size="$3,$4" --virtual-time-budget=4000 --screenshot="$DIR/$6" "file:///$DIR/$1#$2" > /dev/null 2>&1
