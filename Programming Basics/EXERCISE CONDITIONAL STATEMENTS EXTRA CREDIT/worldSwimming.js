/**
 * read the record in seconds, which Ivan has to beat,
the distance in meters, which he has to swim
the time in seconds per meter.
calculates whether he will succeed
the water resistance will slow him down with 12.5 seconds for every 15 meters he swims. 
Calculate the time in seconds, for which Ivan will swim the distance and the
difference from the world record.
When calculating Ivan's slowdown as a result of the water resistance, round the result to the smaller integer.

Input
The input consists of 3 lines:
1. The record in seconds - a real number in the range [0.00 … 100000.00]
2. The distance in meters - a real number in the range [0.00 … 100000.00]
3. The time in seconds per meter - a real number in the range [0.00 … 1000.00]

Output
What you print on the console depends on the result:
● If Ivan managed to beat the World Swimming Record, print:
o " Yes, he succeeded! The new world record is {Ivan's time} seconds."
● If Ivan did NOT manage to beat the World Swimming Record, print:
o "No, he failed! He was {the difference between his time and the record} seconds
slower."
The result should be formatted to two decimal places
 */

function main(record, distance, time) {
	let timeSeconds = distance * time;
	let slowdownSeconds = parseInt(distance / 15) * 12.5;
	let timeWithWater = timeSeconds + slowdownSeconds;

	if (timeWithWater > record) {
		let difference = timeWithWater - record;
		console.log(
			`No, he failed! He was ${difference.toFixed(2)} seconds slower.`
		);
	} else {
		console.log(
			`Yes, he succeeded! The new world record is ${timeWithWater.toFixed(
				2
			)} seconds.`
		);
	}
}
main(10464, 1500, 20);
