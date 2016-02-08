import Pins from "pins";

Pins.configure({
	button: {
        require: "button",
        pins: {
        	power: { pin: 9, voltage: 3.3, type: "Power" },
        	ground: {pin: 10, type: "Ground"},
            button: { pin: 11 },
        }
	}    		
}, function(success){			
	if (success) {
		Pins.repeat("/button/wasPressed", 20, function(result) {
			if (result) trace("Button pressed!\n");
		});
	} else {
		trace("Failed to configure button\n");
	}
});

