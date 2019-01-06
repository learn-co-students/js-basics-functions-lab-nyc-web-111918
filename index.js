function distanceFromHqInBlocks(location){
  return Math.abs(location-42)
}

function distanceFromHqInFeet(location){
  return distanceFromHqInBlocks(location)*264
}

function distanceTravelledInFeet(pointA, pointB){
  return Math.abs(pointA-pointB)*264;
}


function calculatesFarePrice(pointA, pointB){
  const distance = distanceTravelledInFeet(pointA, pointB);
  if(distance <= 400){
    return  0;
  } else if(distance > 400 && distance <= 2000){
    return 0.02*(distance-400);
  }else if(distance>2000 && distance <=2500){
    return 25;
  }else if(distance>2500){
    return 'cannot travel that far'
  }
}
