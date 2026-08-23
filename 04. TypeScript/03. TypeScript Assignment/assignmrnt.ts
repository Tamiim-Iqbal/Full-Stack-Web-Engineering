// Problem 1 
function getBatteryStatus(percentage: number): string {
  if (percentage >= 0 && percentage <= 20) 
  {
    return "Low";
  } 
  else if (percentage >= 21 && percentage <= 50) 
  {
    return "Medium";
  } 
  else if (percentage >= 51 && percentage <= 90) 
  {
    return "High";
  } 
  else if (percentage >= 91 && percentage <= 100) 
  {
    return "Full";
  }

  return "Invalid";
}

// Problem 2
interface Booking {
  name: string;
  guests: number;
  time: string;
}

const formatBookingConfirmation = (booking: Booking): string => {
  return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`;
};

// Problem 3
const calculateWeeklyTotal = (expenses: number[]): number => {
  return expenses.reduce((total, expense) => total + expense, 0);
};

// Problem 4
type Light = "red" | "yellow" | "green";

const getTrafficAction = (light: Light): string => {
    if(light === "red") return "Stop";
    else if (light === "yellow") return "Slow Down";
    else if (light === "green") return "Go";

    return "Invalid";
};

// Problem 5
interface QuizSummary {
  total: number;
  average: number;
};

const getQuizSummary = (scores: number[]): QuizSummary => {
  const total = scores.reduce((sum, score) => sum + score, 0);

const length = scores.length;

if (length === 0) {
  return { total: 0, average: 0 };
}

return { total, average: total / length };
};