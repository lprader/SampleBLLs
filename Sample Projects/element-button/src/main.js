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

