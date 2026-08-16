// union
function calculateTax (amount: number | string, taxRate: number):number{
    if(typeof amount === 'string'){
        amount = parseInt(amount);
    }
    return amount * taxRate;
}

const myTax = calculateTax(100, 0.15);
const yourTax = calculateTax('200', 0.2)

// null
const myFuture : number | null = null;

// any
let price: any = "hello";
price = 100;


// undefined 
let money: number | undefined = undefined;

// unknown & never

