// Code your solution in this file!
function distanceFromHqInBlocks(value){
  return Math.abs(42 - value);
}
function distanceFromHqInFeet(value){
  return (Math.abs(42 - value)*264);
}
function distanceTravelledInFeet(value1,value2){
  return (Math.abs(value1 - value2)*264);
}
function calculatesFarePrice(value1,value2){
  if (distanceTravelledInFeet(value1,value2) <= 400){
    return 0;
  }else if (distanceTravelledInFeet(value1,value2) > 2500){
    return 'cannot travel that far';
  }else if (distanceTravelledInFeet(value1,value2) > 2000){
    return 25;
  }else if (400 < distanceTravelledInFeet(value1,value2) <= 2000){
    return (((distanceTravelledInFeet(value1,value2)-400)*2)/100);
  }
}
