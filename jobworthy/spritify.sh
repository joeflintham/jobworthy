#!/bin/bash

# the following variables are used to select sources file, background properties  and specify the output file type / name / location
filePrefix='*' # -p
outputFilename='output' # -o
outputFormat='png' # -f
outputImagepath='' # -d
outputHTMLpath='' # -h
tile='' # -t

#cssPathToImage should be the relative path from the location of the css directive to the image location
cssPathToImage='./' # -c

# these parameters are used to generate the data-x points that are used by skrollr
scrollIncrement='50' # -s
initialOffset=0 # -i
loop=0 # -l

# Read input parameters
while getopts "p:o:f:c:s:t:i:l:d:h:" opt
do 
    case "$opt" in 
	o) 
	    outputFilename=$OPTARG
	    ;;
	p) 
	    filePrefix=$OPTARG
	    ;;
	f) 
	    outputFormat=$OPTARG
	    ;;
	c) 
	    cssPath=$OPTARG
	    ;;
	s) 
	    scrollIncrement=$OPTARG
	    ;;
	i) 
	    initialOffset=$OPTARG
	    ;;
	t) 
	    tile=$OPTARG
	    ;;
	l) 
	    loop=$OPTARG
	    ;;
	d) 
	    outputImagepath=$OPTARG
	    ;;
	h) 
	    outputHTMLpath=$OPTARG
	    ;;
	?) 
	    exit
	    ;;
    esac
done

echo "$filePrefix $outputFilename $outputFormat $outputImagepath $cssPath $outputHTMLpath $tile "

# some default values
let width=0;
let totalWidth=0;
let height=0;
let b=0;

# read output from feh, awk the dimensions, iterate
for dims in `feh -l $filePrefix | awk '{gsub(/\t+/,",")}1' | cut -d, -f3,4`
  do
    # split the width / height
    IFS=","; dima=($dims)
    let w=0; w=${dima[0]}
    let h=0; h=${dima[1]}
    # if numeric (header line sends letters, so ignore
    if [ `echo $w | grep -o '^[0-9]*$'` ] 
    then
	# keep tabs on the total width | NOT USED
	let totalWidth=$totalWidth+$w
	# in the event that the input images are of variable size, track the largest dimensions
	if [ $h -gt $height ]; then let height=$h; fi;
	if [ $w -gt $width ]; then let width=$w; fi;
	# count the images
	let b=$b+1
    fi
done

if [ "$loop" -lt 1 ]; then let loop=1; fi 
let c=0;
dataprops=''
while [ "$c" -lt $loop ]
do
    d=0;
    while [ "$d" -lt $b ]
    do 
	#set the scroll offset for each frame of the sprite
	so=$(((d * scrollIncrement) + initialOffset + ($c * $b * scrollIncrement)))
	#calculate the 
	bp=$(((d * width)))
	dataprops=$dataprops" data-"$so"=\"background-position:!-"$bp"px 0;\""
	((d++))
    done
    ((c++))
done

if [ "$tile" = "" ]; then tile="$outputImagepath"/"blank.png"; fi

if [ "$totalWidth" -gt "0" -a "$height" -gt "0" -a "$b" -gt "0" ]
then    

    destinationImageFile="$outputImagepath"/"$outputFilename"."$outputFormat"
    if [ -e $destinationImageFile ]; then `rm "$destinationImageFile"`; fi
    destinationHTMLFile="$outputHTMLpath"/"$outputFilename".html
    if [ -e $destinationHTMLFile ]; then `rm "$destinationHTMLFile"`; fi

    echo; 
    echo -e "Making an image called '$outputImagepath/$outputFilename.$outputFormat' which is $width x $height pixels in size."
    echo ;

    `montage -verbose "$filePrefix" -tile "$b"x1 -geometry "$width"x"$height"+0+0 -background Transparent -texture "$tile" "$outputImagepath"/"$outputFilename"."$outputFormat"`

    echo -e "... done"
    echo ;

    echo -e "Going to create a HTML fragment ready for skrollr compatibility!"
    echo ;

    html="<div class=\"$outputFilename spritified\" style=\"width: "$width"px; height: "$height"px; overflow: hidden; background: transparent url("$cssPath"/"$outputFilename"."$outputFormat") 0 0;\""$dataprops"></div>"


    if [ `echo touch "$outputHTMLpath"/"$outputFilename".html` ]
    then
	echo $html > "$outputHTMLpath"/"$outputFilename".html
    else
	echo "... failed to create HTML fragment, sorry."
	echo "You can copy and paste the following fragment into your HTML doc"
    fi

    echo ;
    echo -e $html
    echo ;
    echo "complete"
    echo ;
fi
