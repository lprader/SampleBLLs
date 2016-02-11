import Pins from 'pins';

var main = {
	onLaunch(){
		Pins.configure({
			colorSensor : {
				require: 'TCS34725',
				pins: {
					rgb: { sda: 13, clock: 14}
				} 
			},
			power: { pin: 15, type: 'Power', voltage: 3.3},
			ground: { pin: 16, type: 'Ground' }
			
		}, success => {
			Pins.repeat('/colorSensor/getColor', 2000, function(color){
				trace("got color: " + JSON.stringify(color) + "\n");
			});
			
		});
	},
	onQuit(){ Pins.close(); }
};

export default main;	