function main(name, age, weight, height) {
    let bmi = Math.round(weight / (height / 100) / (height / 100));
    let result = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: bmi
    };
    let status = (result.BMI < 18.5) ? 'underweight' :
        (result.BMI < 25) ? 'normal' :
        (result.BMI < 30) ? 'overweight' :
        'obese';
        result.status = status;
        result.BMI >= 30 ? result.recommendation = 'admission required' :

    console.log (result);
}
main('Peter', 29, 75, 182);
// {
//     name: 'Peter',
//     personalInfo: { age: 29, weight: 75, height: 182 },
//     BMI: 23,
//     status: 'normal'
// }

main('Honey Boo Boo', 9, 57, 137);
// {
//     name: 'Honey Boo Boo',
//     personalInfo: { age: 9, weight: 57, height: 137 },
//     BMI: 30,
//     status: 'obese',
//     recommendation: 'admission required'
// }