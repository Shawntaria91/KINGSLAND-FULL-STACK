function main(name, annualGrade) {
let gradeLevel = 1;
let sumGrades = 0;
let currentGrade = annualGrade.shift();
while (gradeLevel <= 12) {
    sumGrades += currentGrade;
    currentGrade = annualGrade.shift();
    gradeLevel++;
}
let avgGrade = sumGrades / 12;

if (avgGrade < 4.00) {
    console.log("repeat class");
} else {
    console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
}
}
main("John", [4, 5.5, 6, 5.43, 4.5, 6, 5.55, 5, 6, 6, 5.43, 5]);