//@module

exports.pins = {
    button: { type: "Digital", direction: "input" }
};

exports.configure = function() {
	this.button.init();
	this.state = -1;
}

exports.read = function() {
	this.state = this.button.read();
	return this.state;
}

exports.wasPressed = function() {
	var formerState = this.state;
	this.state = this.button.read();
	return ((formerState == 0) && (this.state == 1))
}

exports.wasReleased = function() {
	var formerState = this.state;
	this.state = this.button.read();
	return ((formerState == 1) && (this.state == 0))
}

exports.close = function() {
	this.button.close();
}
