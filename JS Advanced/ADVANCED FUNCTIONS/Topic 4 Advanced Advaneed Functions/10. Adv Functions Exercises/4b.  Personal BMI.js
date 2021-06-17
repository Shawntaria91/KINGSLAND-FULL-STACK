function main(name, age, weight, height) {
    let bmi = weight / Math.pow(height / 100, 2);
    let status;
        if (bmi < 18.5) {
            status = "underweight"
        } else if (bmi < 25) {
            status = "normal"
        } else if (bmi < 30) {
            status = "overweight"
        } else {
            status = "obese"
        }
    let patient = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: Math.round(bmi),
        status: status
    };

    if (status === "obese") {
        patient.recommendation = "admission required";
    }
}

main("Peter", 32, 85, 185);
// {
//     name: 'Peter',
//     personalInfo: { age: 29, weight: 75, height: 182 },
//     BMI: 23,
//     status: 'normal'
// }

main("Honey Boo Boo", 9, 57, 137);
// {
//     name: 'Honey Boo Boo',
//     personalInfo: { age: 9, weight: 57, height: 137 },
//     BMI: 30,
//     status: 'obese',
//     recommendation: 'admission required'
// }