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
var FAHRENHEIT = true;

exports.pins = {
    temperature: {type: "I2C", address: 0x48}
};

exports.configure = function () {
	this.temperature.init();
    this.previous = -1;
}

exports.close = function() {
    this.temperature.close();
}

exports.read = function () {
    var data = this.temperature.readWordDataSMB(0);
	var value = ((data & 0xFF) << 4) | ((data >> 8) >> 4);
	if (value & 0x800) {
	    value -= 1;
	    value = ~value & 0xFFF;
        value = -value;
    }

    FAHRENHEIT? (value = value*(0.1125)+32) : (value *= 0.0625); //converts to Fahrenheit if FAHRENHEIHT=true, converts to Celsius if false
    if (value == this.previous) return;
    this.previous = value;
    return value;
}
