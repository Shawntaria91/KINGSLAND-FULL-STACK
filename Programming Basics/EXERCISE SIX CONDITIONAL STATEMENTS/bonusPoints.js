/*Given an integer called a number of points
Calculates bonus points based on number
sum of total points of points and bonus
if num is less than or equal to 100, 5 bonus points
if num is greater than 100 and less than or equal to 1000, bonus pts 20% of the number
if num is greater than 1000, the bonus are 10% of the number
Additional bonus points after the previous are:
eve number - plus 1pt
number ending in 5 - 2pts */

function main(numOfPoints) {
	let totalPoints = 0;
	let bonusPoints = 0;
	if (numOfPoints <= 100) {
		bonusPoints = bonusPoints + 5;
	} else if (numOfPoints > 100 && numOfPoints <= 1000) {
		bonusPoints = bonusPoints + numOfPoints * 0.2;
	} else if (numOfPoints > 1000) {
		bonusPoints = bonusPoints + numOfPoints * 0.1;
	} else {
	}

	if (bonusPoints > 0 && numOfPoints % 2 == 0) {
		bonusPoints = bonusPoints + 1;
	} else if (bonusPoints > 0 && numOfPoints % 5 == 0) {
		bonusPoints = bonusPoints + 2;
	} else {
	}
	totalPoints = numOfPoints + bonusPoints;
	console.log(bonusPoints);
	console.log(totalPoints);
}
main(2703);
