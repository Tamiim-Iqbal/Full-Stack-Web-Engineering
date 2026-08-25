// Problem 1
function getMonthName(monthNumber:Number) : String {
  switch(monthNumber)
  {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "Invalid month";
  }
  
}

// Problem 2
function countNumberProperties(numbers: number[]): { even: number; odd: number; positive: number; negative: number } {
  // TODO: Implement this function
  let even = 0;
  let odd = 0;
  let positive = 0;
  let negative = 0;

  for(let num of numbers)
  {
    if (num %2 === 0) even++;
    else odd++;

    if(num > 0) positive++;
    else if (num < 0) negative++;
  }

  return {even, negative, odd, positive};
}

// Problem 3
function checkMathOperationsForNine(a: number, b: number): string {
  // TODO: Implement this function
  if(a+b === 9) return "Nine";
  else if (a-b === 9) return "Nine";
  else if (a*b === 9) return "Nine";
  else if (a/b === 9) return "Nine";
  return "Nein";
}

// Problem 4
