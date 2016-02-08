import Pins from "pins";

var main = {
    onLaunch(){
		Pins.configure({
			led: {
		        require: "led",
		        pins: {
		            led: { pin: 10 },
		            ground: {pin: 9, type: "Ground"},
		        }
			}    		
		}, function(success){			
			if (success) {
				Pins.repeat("/led/toggle", 1000);
			} else {
				trace("Failed to configure light\n");
			}
		});
    },
};

export default main;


