"use strict";

var jsdom    = require('jsdom');
var fs       = require("fs");
var url      = require("url");

var argV = {}
/* parse arguments */
var match, argV;
process.argv.forEach(function(val, index, array){
    if (match = (val).match(/^--(.+)/)){
	var arg = match[1].split('=');
	var key = arg[0]; argV[key] = arg[1];
    }
});

/* initialise cache */
var configfile        = (argV["configfile"]) ? argV["configfile"] : '';

var config   = require("./"+configfile+"config").config;
var dataProps = require("./"+configfile+"dataProps").dataProps;

console.log("\nloaded following config variables: ");
console.log(config)
 
var parser = require('./parser').parser

var jquery   = fs.readFileSync(config.pathToJQuery, "utf-8");

jsdom.env({
    file: config.siteSourceHtml,
    src: [jquery],
    done: function (errors, window) {
	var $ = window.$;
	
	var modifyDOM = function(args){
	    var id, props;
	    
	    console.log("\n ...going to modify DOM with: ");
	    console.log(args);
	    
	    if (args.length > 0) id = args.shift();
	    if (args.length > 0) props = args.shift();	    

	    try {
		var el = $('#'+id); if (el.length < 1) throw new Error('The specified element id ("' + id + '") could not be found');

		var attrValue, count=0;
		for (var attrName in props){
		    attrValue = props[attrName];
		    $(el).attr(attrName, attrValue);
		    count++;
		}
		if (count === 0) throw new Error('No changes made in this instance ("' + id + '")');
		
	    } catch (e) {
		console.log("\n\n");
		console.log(e);
	    }
	}

	var saveFile = function(args){
	    var WD = window.document;
	    var newDocSource = WD.doctype.toString()+WD.innerHTML;
	    console.log("\n...going to save file: ");
	    console.log(newDocSource);
	    
	    fs.writeFile(config.siteIndexHtml, newDocSource, function (err) {
		try {
		    if (err) throw err;
		    console.log('Document saved!');
		} catch (e) {
		    console.log('\n\n');
		    console.log(e);
		}
	    });	    
	}
	
	var parseScene = new parser(function(err, parser){
	    if (err) console.log(err);
	    if (parser){
		parser.on('dataProp', function(e){ modifyDOM(e); });

		parser.on('complete', function(e){console.log("\n\nParsing complete!"); saveFile(); });

		dataProps.scenes.forEach(function(e,i,a){parser.parse(e)});
	    }
	});
    }
});
