
var callback = false;
var error = false;
var setup = function(args, callback){
    callback = callback;
    console.log(args);
    return this;
}

var run = function(args, callback){
    var variable = "test worked";
    if (callback) { callback(error, variable); }
}

exports.setup = setup
exports.run = run
