// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  let result = Math.abs(42 - someValue);

  return result;
}

function distanceFromHqInFeet(someValue) {
  let blocks = distanceFromHqInBlocks(someValue);

  let result = blocks * 264;

  return result;
}

function distanceTravelledInFeet(start, destination) {
  let result = Math.abs((start - destination) * 264);

  return result;
}

function calculatesFarePrice(start, destination) {
  let fare
  let feet = distanceTravelledInFeet(start, destination)

  if (feet <= 400) {
    fare = 0;
  } else if (401 <= feet && feet <= 2000) {
    fare = (feet - 400) * 0.02;
  } else if (feet > 2000 && feet < 2500) {
    fare = 25;
  } else if (feet > 2500) {
    fare = 'cannot travel that far';
  }

  return fare;
}
