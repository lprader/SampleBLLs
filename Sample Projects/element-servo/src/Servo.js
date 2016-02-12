//@module
exports.pins = {
	servo: { type: "PWM" }
}

exports.configure = function(){
	this.servo.init();
}

exports.write = function(params){
	this.servo.write([params.dutyCycle,params.period]);
}

exports.close = function(){
	this.servo.close();
}