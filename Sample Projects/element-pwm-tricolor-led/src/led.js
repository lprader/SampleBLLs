//@module

exports.pins = {
    red: { type: "PWM", value: 1 },
    green: { type: "PWM", value: 1  },
    blue: { type: "PWM", value: 1  },
    anode: { type: "Digital", direction: "output", value: 1  } 
};

exports.configure = function( led ) {
	this.red.init();
	this.green.init();
	this.blue.init();
	this.anode.init();
	
	//turn off the lights
	this.red.write( led.pins.red.value );
	this.green.write( led.pins.green.value );
	this.blue.write( led.pins.blue.value );
	this.anode.write( 1 );
}

exports.write = function( parameters ) {
	switch( parameters.color ){
		case( "red" ):
			this.red.write( 1 - parameters.value );
			return;
		case( "green" ):
			this.green.write( 1 - parameters.value );
			return;
		case( "blue" ):
			this.blue.write( 1 - parameters.value );
			return;
	}
}

exports.close = function( led ){
	this.red.close();
	this.green.close();
	this.blue.close();
	this.anode.close();
	
	//turn off the lights
	this.red.write( led.pins.red.value );
	this.green.write( led.pins.green.value );
	this.blue.write( led.pins.blue.value );
	this.anode.write( 0 );
}


