// Code your solution in this file!
function distanceFromHqInBlocks (blockCount) {
  if (blockCount > 42) {
    return blockCount - 42;
  } else {
    return 42 - blockCount;
  }
}

function distanceFromHqInFeet (blockCount) {
  return distanceFromHqInBlocks(blockCount) * 264;
}

function distanceTravelledInFeet (pointOne, pointTwo) {
  if (pointOne < pointTwo) {
    return (pointTwo - pointOne) * 264;
  } else {
    return (pointOne - pointTwo) * 264;
  }
}

function calculatesFarePrice (pointOne, pointTwo) {
  const distance = distanceTravelledInFeet(pointOne, pointTwo);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
