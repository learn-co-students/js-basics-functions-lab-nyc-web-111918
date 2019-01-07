// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  return Math.abs(someValue-42)
}
function distanceFromHqInFeet (someValue) {
  return distanceFromHqInBlocks(someValue)*264;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(block1, block2){
  return Math.abs(block1-block2)*264;
}

function calculatesFarePrice(start, destination){
  dist=distanceTravelledInFeet(start, destination)
  if (dist<400){
    return 0;
  }else if (dist<2000){
    return (dist-400)*.02
  }else if (dist<2500){
    return 25
  }else{
    return 'cannot travel that far'
  }
}
