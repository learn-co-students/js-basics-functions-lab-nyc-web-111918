// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  //returns the number of blocks given a value
  return someValue > 42 ? someValue - 42 : 42 - someValue;
}
function distanceFromHqInFeet (someValue) {
  let feet = distanceFromHqInBlocks(someValue);
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
  return feet * 264;
}

function distanceTravelledInFeet(start, destination) {
  let distance = destination > start ? destination - start : start - destination;
  return distance*264
}

function calculatesFarePrice(start, destination){
  let distance = distanceTravelledInFeet(start, destination)
  return distance < 400 ? 0 : distance >= 400 && distance <= 2000 ? 0.02*(distance-400) : distance > 2000 && distance <= 2500 ?  25 : distance > 2500 ? "cannot travel that far" : "";
  }
