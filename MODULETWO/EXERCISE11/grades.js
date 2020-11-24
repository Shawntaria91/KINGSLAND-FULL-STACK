function main(grade) {
    console.log(solve(grade));
}

function solve(grade) {
    if (grade >= 2.00 && grade <= 2.99) {
        return 'Fail';
    } else if (grade >= 3.00 && grade <= 3.49) {
        return 'Poor';
    } else if (grade >= 3.50 && grade <= 4.49) {
        return 'Good';
    } else if (grade >= 4.50 && grade <= 5.49) {
        return 'Very Good';
    } else if (grade >= 5.50 && grade <= 6.00) {
        return 'Excellent';
    }
}
main(3.33);