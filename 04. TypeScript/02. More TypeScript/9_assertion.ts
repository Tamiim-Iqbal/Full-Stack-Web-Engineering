let value : unknown;
// value.toUppercase();      // invalid
// value.toFixed(2);         // invalid

let myText = value as string;
const up = myText.toUpperCase();

let myNum = value as number;
const fix = myNum.toFixed(2);

let data : unknown
interface User{
    name : string,
    email? : string
}
const userData = data as User
userData.name

// as const

const iqbal = {
    name : 'Iqbal',
}
//iqbal.name = 'Tamim'  // allowed  

const tamim = {
    name : 'Tamim',
    email : 'abc@example.com'
} as const;
//tamim.name = 'iqbal'  // not allowed    


