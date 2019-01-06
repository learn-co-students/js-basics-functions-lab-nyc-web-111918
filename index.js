// Code your solution in this file!
function distanceFromHqInBlocks (num) {
  return Math.abs(num - 42);
}

function distanceFromHqInFeet (num) {
  return distanceFromHqInBlocks (num) * 264;
}

function distanceTravelledInFeet (block1, block2) {
  return Math.abs(block1 - block2) * 264;
}

function calculatesFarePrice (block1, block2) {
  let distance = distanceTravelledInFeet(block1, block2)
  let fare = 0;

  if (distance < 400) {
    return fare;
  }

  else if (distance > 400 && distance < 2000) {
    return fare + .02*(distance - 400)
  }

  else if (distance > 2000 && distance < 2500) {
    return 25
  }

  else {
    return 'cannot travel that far'
  }

}
