// Code your solution in this file!
function distanceFromHqInBlocks(arg){
	return Math.abs(42 - arg)
}

function distanceFromHqInFeet(arg){
	return distanceFromHqInBlocks(arg) * 264
}

function distanceTravelledInFeet(arg1,arg2){
	let distance_blocks = Math.abs(arg2 - arg1)
	return distance_blocks * 264
}

function calculatesFarePrice(arg1,arg2){
	let total_distance = distanceTravelledInFeet(arg1,arg2)

	if (total_distance < 400)
		{return 0}
	else if (total_distance > 400 && total_distance < 2000)
		{return (total_distance - 400) * .02}
	else if (total_distance > 2000 && total_distance < 2500)
		{return 25}
	else if (total_distance > 2500)
		{return 'cannot travel that far'}
}	