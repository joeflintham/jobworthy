#!/bin/bash

# sync version control
svnMessage='Build script execution'
while getopts "s:" opt
do 
    case "$opt" in 
	s) 
	    svnMessage=$OPTARG
	    ;;
    esac
done
d=`date +%Y-%m-%d-%H:%M`





# load config vars
. ./config_build.sh

f="badcomputersprite"
./spritify.sh \
    -d "$IMAGE_ASSET_FOLDER" \
    -c "$CSS_PATH_TO_IMAGES" \
    -h "$HTML_FRAGMENT_FOLDER" \
    \
    -o "$f" \
    -f "png" \
    -i 1000 \
    -l 10 \
    -p "../production/scene1/badcomputer/face*" \
    -t "../production/scene1/badcomputer/computer.png";

echo $?

svn add -q --depth=infinity ./"$HTML_FRAGMENT_FOLDER"/"$f".html

f="traysprite"
./spritify.sh \
    -d "$IMAGE_ASSET_FOLDER" \
    -c "$CSS_PATH_TO_IMAGES" \
    -h "$HTML_FRAGMENT_FOLDER" \
    \
    -o "$f" \
    -f "png" \
    -i 0 \
    -l 10 \
    -p "../production/scene1/tray/page*" \
    -t "../production/scene1/tray/tray.png";

echo $?

svn add -q --depth=infinity ./"$HTML_FRAGMENT_FOLDER"/"$f".html

f="jobsworthy"
./spritify.sh \
    -d "$IMAGE_ASSET_FOLDER" \
    -c "$CSS_PATH_TO_IMAGES" \
    -h "$HTML_FRAGMENT_FOLDER" \
    \
    -o "$f" \
    -f "png" \
    -i 0 \
    -l 10 \
    -p "../production/scene1/jobsworthy/jobsworthy*";

echo $?

f="badbosssprite"
./spritify.sh \
    -d "$IMAGE_ASSET_FOLDER" \
    -c "$CSS_PATH_TO_IMAGES" \
    -h "$HTML_FRAGMENT_FOLDER" \
    \
    -o "$f" \
    -f "png" \
    -i 0 \
    -l 10 \
    -p "../production/scene1/bad_boss/bad_boss*";

echo $?

f="birdie"
./spritify.sh \
    -d "$IMAGE_ASSET_FOLDER" \
    -c "$CSS_PATH_TO_IMAGES" \
    -h "$HTML_FRAGMENT_FOLDER" \
    \
    -o "$f" \
    -f "png" \
    -i 0 \
    -l 1 \
    -p "../production/scene2/bird*";

echo $?

f="officewindow"
./spritify.sh \
    -d "$IMAGE_ASSET_FOLDER" \
    -c "$CSS_PATH_TO_IMAGES" \
    -h "$HTML_FRAGMENT_FOLDER" \
    \
    -o "$f" \
    -f "png" \
    -i 0 \
    -l 0 \
    -p "../production/scene2/window*";

echo $?

f="cat"
./spritify.sh \
    -d "$IMAGE_ASSET_FOLDER" \
    -c "$CSS_PATH_TO_IMAGES" \
    -h "$HTML_FRAGMENT_FOLDER" \
    \
    -o "$f" \
    -f "png" \
    -i 0 \
    -l 0 \
    -p "../production/scene3/cat*";

echo $?

f="cv"
./spritify.sh \
    -d "$IMAGE_ASSET_FOLDER" \
    -c "$CSS_PATH_TO_IMAGES" \
    -h "$HTML_FRAGMENT_FOLDER" \
    \
    -o "$f" \
    -f "png" \
    -i 0 \
    -l 0 \
    -p "../production/scene3/cv_large*";

echo $?

f="clipboard"
./spritify.sh \
    -d "$IMAGE_ASSET_FOLDER" \
    -c "$CSS_PATH_TO_IMAGES" \
    -h "$HTML_FRAGMENT_FOLDER" \
    \
    -o "$f" \
    -f "png" \
    -i 0 \
    -l 0 \
    -p "../production/scene3/clipboard*";

echo $?

f="jb_idea"
./spritify.sh \
    -d "$IMAGE_ASSET_FOLDER" \
    -c "$CSS_PATH_TO_IMAGES" \
    -h "$HTML_FRAGMENT_FOLDER" \
    \
    -o "$f" \
    -f "png" \
    -i 0 \
    -l 0 \
    -p "../production/scene3/jb_idea*";

echo $?

f="jb_personality"
./spritify.sh \
    -d "$IMAGE_ASSET_FOLDER" \
    -c "$CSS_PATH_TO_IMAGES" \
    -h "$HTML_FRAGMENT_FOLDER" \
    \
    -o "$f" \
    -f "png" \
    -i 0 \
    -l 0 \
    -p "../production/scene3/jb_personality*";

echo $?

f="lcd_machine"
./spritify.sh \
    -d "$IMAGE_ASSET_FOLDER" \
    -c "$CSS_PATH_TO_IMAGES" \
    -h "$HTML_FRAGMENT_FOLDER" \
    \
    -o "$f" \
    -f "png" \
    -i 0 \
    -l 0 \
    -p "../production/scene4/lcd_*";

echo $?

f="wardrobe"
./spritify.sh \
    -d "$IMAGE_ASSET_FOLDER" \
    -c "$CSS_PATH_TO_IMAGES" \
    -h "$HTML_FRAGMENT_FOLDER" \
    \
    -o "$f" \
    -f "png" \
    -i 0 \
    -l 0 \
    -p "../production/scene4/wardrobe_0*";

echo $?

svn add -q --depth=infinity ./"$HTML_FRAGMENT_FOLDER"/"$f".html

svnMessage+=" "$d;
svn commit . --message '$svnMessage'
echo "Commit message is "\'$svnMessage\'
