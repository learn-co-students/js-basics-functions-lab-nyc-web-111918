// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  const hq = 42
  let distance
  if (hq < block) {
    distance = block - hq
  }
  else {
    distance = hq - block
  }
  return distance
}

function distanceFromHqInFeet(block) {
  feet = distanceFromHqInBlocks(block) * 264
  return feet
}

function distanceTravelledInFeet(start, finish) {
  let feet
  if (start < finish) {
    feet = (finish - start) * 264
  }
  else {
    feet = (start - finish) * 264
  }
  return feet
}

function calculatesFarePrice(start, finish) {
  feet = distanceTravelledInFeet(start, finish)
  let price
  if (feet < 400) {
    price = 0
  }
  else if (feet > 2500) {
    price = 'cannot travel that far'
  }
  else if (feet > 2000) {
    price = 25
  }
  else {
    price = (feet - 400) * .02
  }
  return price
}
