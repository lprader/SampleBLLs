import Pins from "pins";

var main = {
    onLaunch(){
		var sampleColors = { 
			"white": {red:1, green:1, blue:1},
			"red": {red:1, green:0, blue:0}, 
			"green": {red:0, green:1, blue:0}, 
			"blue": {red:0, green:0, blue:1}, 
			"magenta": {red:1, green:0, blue:1}, 
			"orange":{red:1, green:0.4, blue:0}, 
			"turquoise": {red:0, green:1, blue:1}, 
		};
		Pins.configure({
			led: {
				require: "led",
			    pins: {
			        red: { pin: 9 },
			       	green: { pin: 11 },
			        blue: { pin: 12 }, 
			        anode: { pin: 10 }
				}
			}    		
		}, function(success){			
			if (success) {
				main.changeColor(sampleColors['turquoise']);
			} else {
				trace("Failed to configure button\n");
			}
		});
    },
    changeColor(colorVals) {
		Pins.invoke("/led/write", { color: "red", value: colorVals.red } );
		Pins.invoke("/led/write", { color: "green", value: colorVals.green } );
		Pins.invoke("/led/write", { color: "blue", value: colorVals.blue } );    
    }
};

export default main;

