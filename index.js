// Code your solution in this file!
function distanceFromHqInBlocks (block) {
  if (block > 42) {
    return block - 42;
  } else {
    return 42 - block;
  }
}

function distanceFromHqInFeet (feet) {
  if (feet > 42) {
    return (feet - 42) * 264;
  } else {
    return (42 - feet) * 264;
  }
}

function distanceTravelledInFeet (street1, street2) {
  if (street2 > street1){
    return (street2 - street1) * 264;
  } else {
    return (street1 - street2) * 264;
  }
}

function calculatesFarePrice (street1, street2) {
  const totalfeet = distanceTravelledInFeet (street1, street2);
  if (totalfeet <= 400) {
    return 0;
  } else if (400 < totalfeet && totalfeet <= 2000){
    return 0.02 * (totalfeet - 400);
  } else if (2000 < totalfeet && totalfeet < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
