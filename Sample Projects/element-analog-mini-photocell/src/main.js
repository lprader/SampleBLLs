import Pins from "pins";

Pins.configure({
	photoresistor: {
        require: "analog",
        pins: {
        	power: { pin: 1, voltage: 3.3, type: "Power" },
            analog: { pin: 2 },
            ground: {pin: 3, type: "Ground"},
        }
	}    		
}, function(success){			
	if (success) {
		Pins.repeat("/photoresistor/read", 500, function(result) {
			trace(result+'\n');
		});
	} else {
		trace("Failed to configure photoresistor\n");
	}
});

