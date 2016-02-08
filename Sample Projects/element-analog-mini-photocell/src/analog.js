//@module

exports.pins = {
 	analog: { type: "Analog" }
};

exports.configure = function() {
	this.analog.init();
}

exports.read = function() {
	return this.analog.read();
}

exports.close = function() {
	this.analog.close();
}