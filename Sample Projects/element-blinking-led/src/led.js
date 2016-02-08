//@module

exports.pins = { 
	led: {type: "Digital", direction: "output"} 
};

exports.configure = function() { 
    this.led.init(); 
    this.ledVal = 0;
}

var write = exports.write  = function(value) { 
    this.ledVal = value;
    this.led.write(this.ledVal); //this is the line that actually turns the led on/off
}

exports.toggle = function() {
    this.write(!this.ledVal);
}

exports.close = function() { 
    this.led.close(); 
}

