var events = require('events');
var error = '';

var parser = function(callback){
    this.callback = callback;
    events.EventEmitter.call(this);

    this.parse = function(obj){
	
	var id, data, nodes, self = this;
		
	try {	

	if (!obj) throw new Error('Missing an object to parse!');

	    id = obj.id, data = obj.data, nodes = obj.nodes;
	    if (!id) throw new Error('Missing a selector / node id to reference');

	    if (data.length > 0) data.forEach(function(e,i,a){
		var attrObj = this.dataProp(e, function(err){
		    console.log("Caught an error in the context of " + obj.id + "; ");console.log(err);
		});

		for (var dp in attrObj){
		    if (attrObj[dp] != ''){
			self.emit('dataProp', [obj.id, attrObj])
		    }
		}
	    },
	    this);

	    if (nodes && nodes.length > 0) nodes.forEach(function(e,i,a){
		console.log("about to recurse");
		this.parse(e);
	    },this);
	} catch (e) {
	    if (callback) callback(e, !!0)
	}
    }

    this.dataProp = function(dataProps, callback){
	var offset, props, attrName='', attrValue='';

	if (dataProps.length > 0) data_suffix = dataProps.shift();
	if (dataProps.length > 0) props = dataProps.shift();
	if (!data_suffix) { return }

	attrName = "data-" + data_suffix;
	
	props.forEach(function(prop){
	    attrValue += prop[0] + ((prop[1]) ? ":" + prop[1]  + ";" : "");    
	});
	
	
	if (!attrName || !attrValue) { if (callback) callback(new Error('Unable to parse data properties')); return };
	rv = {}; rv[attrName] = attrValue;
	return rv;
	
    }
    
    
    if (this.callback) this.callback(error, this);
    this.emit('complete');
}

parser.prototype.__proto__ = events.EventEmitter.prototype;
exports.parser = parser
