// Code your solution in this file!
function distanceFromHqInBlocks(arg){
  return Math.abs(arg - 42)
}

function distanceFromHqInFeet(arg){
  return (distanceFromHqInBlocks(arg) * 264)
}

function distanceTravelledInFeet(loc1, loc2){
  return Math.abs(loc1-loc2) * 264
}

function calculatesFarePrice(loc1, loc2){
  if (distanceTravelledInFeet(loc1, loc2) <= 400){
    return 0
  } else if (distanceTravelledInFeet(loc1, loc2) > 2500){
    return 'cannot travel that far'
  } else if (distanceTravelledInFeet(loc1, loc2) > 2000){
    return 25
  } else{
    return (distanceTravelledInFeet(loc1, loc2) - 400) *0.02
  }
}
