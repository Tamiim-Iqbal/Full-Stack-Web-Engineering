"use strict";
// function useState(initialValue){
//     let value = initialValue;
//     function setValue(newValue){
//         value = newValue;
//     }
//     return [value, setValue]
// }
// const [counter, setCounter] = useState(0);
function useState(initialValue) {
    let value = initialValue;
    function setValue(newValue) {
        value = newValue;
    }
    return [value, setValue];
}
useState('');
useState(0);
