import Pins from 'pins';

var main = {
	onLaunch(){
		Pins.configure({
			ground: { pin: 1, type: "Ground"},
			power: { pin: 2, type: "Power" },
			Servo: {
				require: "Servo",
				pins: { servo:{ pin: 9 } }
			}
		}, success => {
			var state  = 0;
			setInterval(function(){
				if( state === 0) Pins.invoke('/Servo/write', { dutyCycle: 5, period: 20}); 
				if( state === 1) Pins.invoke('/Servo/write', { dutyCycle: 0, period: 20}); 
				if( state === 2) Pins.invoke('/Servo/write', { dutyCycle: 1, period: 20}); 
				if( state === 3){
				 Pins.invoke('/Servo/write', { dutyCycle: 0, period: 20}); 
				 state = -1;
				} 
				state += 1;
			}, 1000);
		});
	},
	onQuit(){
		Pins.close();
	}
};

export default main;
	

