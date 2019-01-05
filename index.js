// Code your solution in this file!

function distanceFromHqInBlocks(final) {
  let distance = Math.abs(final - 42)
  return distance
}

function distanceFromHqInFeet(final) {
  let distance = Math.abs(final - 42) * 264
  return distance
}

function distanceTravelledInFeet(start, finish) {
  let distance = Math.abs(finish-start) * 264
  return distance
}

function calculatesFarePrice(start, finish) {
  let fare;
  let distance = distanceTravelledInFeet(start, finish);
  if (distance >= 2500) {
      fare = 'cannot travel that far'
    } else if (distance > 2000) {
      fare = 25
    } else if (distance < 400) {
      fare = 0
    } else {
      fare = (distance - 400) * .02
    }
  return fare
}
