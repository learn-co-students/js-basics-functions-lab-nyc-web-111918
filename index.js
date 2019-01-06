// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  if (someValue >= 42) {
    return someValue - 42;
  }
  else{
    return (42 - someValue);
  }
}

function distanceFromHqInFeet(street){
  return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(a, b){
  if (b > a){
    return (b - a) * 264;
  }
  else{
    return (a-b) * 264;
  }
}

function calculatesFarePrice(a, b){
  let distance = distanceTravelledInFeet(a, b);
  if (distance < 400) {
    return 0;
  }
  else if (distance >= 400 && distance <= 2000){
    return ((distance - 400) * 0.02);
  }
  else if (distance > 2000 && distance <= 2500){
    return 25;
  }
  else{
    return "cannot travel that far";
  }
}
