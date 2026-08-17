"use strict";
let value;
// value.toUppercase();      // invalid
// value.toFixed(2);         // invalid
let myText = value;
const up = myText.toUpperCase();
let myNum = value;
const fix = myNum.toFixed(2);
let data;
const userData = data;
userData.name;
// as const
const iqbal = {
    name: 'Iqbal',
};
//iqbal.name = 'Tamim'  // allowed  
const tamim = {
    name: 'Tamim',
    email: 'abc@example.com'
};
//tamim.name = 'iqbal'  // not allowed    
