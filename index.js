// Code your solution in this file!

function distanceFromHqInBlocks(streetNumber) {
      return Math.abs(streetNumber - 42);
}

function distanceFromHqInFeet(streetNumber) {
   return distanceFromHqInBlocks(streetNumber) * 264;
}

function distanceTravelledInFeet(street1, street2) {
  return Math.abs((street1 - street2) * 264)
}

function calculatesFarePrice(street1, street2) {
  if (distanceTravelledInFeet(street1, street2) > 2500) {
    return 'cannot travel that far';
  } else if (distanceTravelledInFeet(street1, street2) > 2000) {
    return 25;
  } else if (distanceTravelledInFeet(street1, street2) > 400 && distanceTravelledInFeet(street1, street2) < 2000) {
    return (distanceTravelledInFeet(street1, street2) - 400) * 0.02;
  } else if (distanceTravelledInFeet(street1, street2) < 400) {
    return 0;
  }

}
