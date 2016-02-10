//@module
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
exports.pins = { 
	led: {type: "Digital", direction: "output"} 
};

exports.configure = function() { 
    this.led.init(); 
    this.ledVal = 0;
}

var write = exports.write  = function(value) { 
    this.ledVal = value;
    this.led.write(this.ledVal); //this is the line that actually turns the led on/off
}

exports.toggle = function() {
    this.write(!this.ledVal);
}

exports.close = function() { 
    this.led.close(); 
}

