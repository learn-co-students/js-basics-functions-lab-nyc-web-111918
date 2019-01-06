// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  if (distance > 42){
    return distance - 42
  } else {
    return 42 - distance
  }
};

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264
};

function distanceTravelledInFeet(locationOne, locationTwo) {
  let distance;
  distance = (locationOne - locationTwo) * 264
  if (distance < 0){
    distance = distance * -1
  }
  return distance
}

function calculatesFarePrice (locationOne, locationTwo) {
  let distance = distanceTravelledInFeet(locationOne, locationTwo)
  let fare = 0;

    if(distance < 400){
      fare = 0
    } else if (distance > 400 && distance < 2000){
      fare = (distance - 400) * 0.02
    } else if (distance > 2000 && distance < 2500) {
      fare = 25
    } else {
      fare = 'cannot travel that far'
    }

  return fare
}
