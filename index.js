// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  distance = blocks - 42;
  return Math.abs(distance);
}


function distanceFromHqInFeet(blocks) {
   return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(block1, block2) {
  difference = block1 - block2;
  return Math.abs(difference) * 264;
}

function calculatesFarePrice(start, destination) {
  let difference = distanceTravelledInFeet(start, destination)
  if (difference <= 400) {
    return 0;
  } else if (difference > 400 && difference < 2000) {
    return 0.02 * (difference - 400);
  } else if (difference > 2000 && difference < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
