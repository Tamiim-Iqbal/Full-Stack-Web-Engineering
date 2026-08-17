// function useState(initialValue){
//     let value = initialValue;

//     function setValue(newValue){
//         value = newValue;
//     }

//     return [value, setValue]
// }

// const [counter, setCounter] = useState(0);


function useState<Generic>(initialValue: Generic) : [Generic, (newValue: Generic) => void]{
    let value = initialValue;

    function setValue(newValue: Generic){
        value = newValue;
    }

    return [value, setValue]
}
useState<string>('')
useState<number>(0)
