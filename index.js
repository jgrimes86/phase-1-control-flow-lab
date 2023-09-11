function scuberGreetingForFeet(rideLength){
  // Write your code here!
  let lengthMessage;
  if(rideLength <= 400) {
    lengthMessage = "This one is on me!";
  } else if (rideLength > 400 && rideLength <= 2000) {
    lengthMessage = "That will be twenty bucks.";
  } else if (rideLength > 2000 && rideLength <= 2500) {
    lengthMessage = "I will gladly take your thirty bucks.";
  } else if (rideLength > 2500) {
    lengthMessage = "No can do.";
  }
  return lengthMessage;
}

function ternaryCheckCity(city){
  // Write your code here!
  return city == "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case "generous" :
      return "Thank you so much.";
    case "not as generous" :
      return "Thank you.";
    default:
      return "Bye.";
  }
}