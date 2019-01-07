// Code your solution in this file!
function distanceFromHqInBlocks(destination) {
  if (destination >= 42) {
    return destination - 42;
  } else {
    return 42 - destination;
  }
}

function distanceFromHqInFeet(destination) {
  return distanceFromHqInBlocks(destination) * 264;
}

function distanceTravelledInFeet(beginning, destination) {
  return (Math.abs(destination - beginning)) * 264;
}

function calculatesFarePrice(beginning, destination) {
  let distance = distanceTravelledInFeet(beginning, destination);

  if (distance > 2500) {
    return 'cannot travel that far';
  } else if (distance > 2000) {
    return 25;
  } else if (distance > 400) {
    return (distance - 400) * .02;
  } else {
    return 0;
  }

}
