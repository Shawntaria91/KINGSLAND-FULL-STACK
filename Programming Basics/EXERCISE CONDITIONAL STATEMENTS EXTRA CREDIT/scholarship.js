/**
 * social scholarship:
 * *family income less than the minimum wage AND
 * *GPA at least 4.5 (out of 6)
 * *equals 35% of the minimum wage
 *
 * scholarship for excellent performance:
 * *GPA of at least 5.5
 * *equals student GPA multiplied by 25.
 *
 * write a program that gives info whether a student applies for a schol.
 * if qualifies, which would have a bigger amount in their case
 *
 * Input
 * *Income in leva
 * *GPA
 * *Minimum wage
 *
 * Output
 * if student does not qualify, print "You cannot get a scholarship!"
 * If the student does qualify for a social scholarship, and the amount is bigger than EP:
 * print "You get a Social Scholarship {amount} BGN"
 * If qualify for PE and amount bigger than social
 * print "You get a scholarship for excellent results {amount} BGN
 * The result should be rounded to the smaller integer.
 */

function main(income, gpa, minWage) {
	let socialScholarship = Math.floor(minWage * 0.35);
	let excellentScholarship = Math.floor(gpa * 25);

	if (
		income < minWage &&
		gpa >= 4.5 &&
		socialScholarship > excellentScholarship
	) {
		console.log(`You get a Social scholarship ${socialScholarship} BGN`);
	} else if (gpa >= 5.5 && excellentScholarship > socialScholarship) {
		console.log(
			`You get a scholarship for excellent results ${excellentScholarship} BGN`
		);
	} else {
		console.log("You cannot get a scholarship!");
	}
}
main(310, 5.8, 350);
