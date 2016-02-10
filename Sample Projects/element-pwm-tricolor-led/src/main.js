/*
  Copyright 2011-2016 Marvell Semiconductor, Inc.
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
      http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
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

