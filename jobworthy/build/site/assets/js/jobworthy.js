
var drawSVG = function(){    
    
    var coordList = [];

    $('.jobbox').each(function(){
        var coords = [$(this).position().left + ($(this).width() / 2),$(this).position().top + ($(this).height() / 2)];
        coordList.push(coords.join(','));
    });
    

    var firstCoord = coordList[0].split(',');
    var firstVertex = (firstCoord[1] / 2);
    var firstHorPos = ($(window).width() / 2);


    var firstCoords = [firstHorPos+',0',firstHorPos+','+firstVertex,coordList.shift()]
    var firstPathString = firstCoords.join(' ');
    $('path#first').attr('d', 'M ' + firstPathString);

    /*
    coordList.unshift(firstHorPos+','+firstVertex);
    coordList.unshift(firstHorPos+',0');

    /* fix final one cos it pretends not to be in center */

    finalCoords = coordList.pop().split(',');
    finalCoords[0] = firstHorPos;
    coordList.push(finalCoords.join(','))
    
    var pathRefs = ['second','third','fourth','fifth'];
    var pathString = '';
    var lastPoint = firstCoords.pop();

    console.log(coordList);
    var a = 0; while (a < coordList.length){
	
	pathString = lastPoint + ' ' +coordList[a];
	$('path#'+pathRefs[a]).attr('d', 'M ' + pathString);
	lastPoint = coordList[a]
	a++;
    }

    /*
    var pathString = coordList.join(',');
    $('#drawing_line path').attr('d', 'M ' + pathString);
    */
}
