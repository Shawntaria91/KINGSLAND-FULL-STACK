// 4. Personal BMI
// A wellness clinic has contacted you with an offer - they want you to write a program that composes patient charts
// and performs some preliminary evaluation of their condition. The data comes in the form of several arguments,
// describing a person - their name, age, weight in kilograms and height in centimeters. Your program must
// compose this information into an object and return it for further processing.
// The patient chart object must contain the following properties:
// ● name
// ● personalInfo, which is an object holding their age, weight and height as properties
// ● BMI - body mass index. You can find information about how to calculate it here:
// https://en.wikipedia.org/wiki/Body_mass_index
// ● Status
// The status is one of the following:
// ● underweight, for BMI less than 18.5;
// ● normal, for BMI less than 25;
// ● overweight, for BMI less than 30;
// ● obese, for BMI 30 or more;
// Once the BMI and status are calculated, you can make a recommendation. If the patient is obese, add an additional
// property called recommendation and set it to “admission required”.
// Input
// Your function needs to take four arguments - name, age, weight and height
// Output
// Your function needs to return an object with properties as described earlier. All numeric values should be rounded
// to the nearest whole number. All fields should be named exactly as described (their order is not important).
// Look at the sample output for more information.

function main(name, age, weight, height) {

    let bmi = calcBmi(Number(weight), Number(height) / 100);
    let status = getStatus(bmi);
    let isObese = status === 'obese';
    let patient = {
        name: name,
        personalInfo: {
            age: Math.round(+age),
            weight: Math.round(+weight),
            height: Math.round(+height),
        },
        BMI: Math.round(bmi),
        status: status,
        recommendation: 'admission required'
    };

    (!isObese) ? delete patient.recommendation : 0;
    console.log(patient);


    function calcBmi(weight, height) {
        return weight / (height * height);
    }

    function getStatus(bmi) {
        return bmi < 18.5 ? 'underweight'
             : bmi < 25 ?  'normal'
             : bmi < 30 ? 'overweight'
             : 'obese';
    }   
}
    // if (bmi < 18.5) {
        // return 'underweight';
        // } else if (bmi < 25) {
        //     return 'normal';
        // } else if (bmi < 30) {
        //     return 'overweight';
        // } else {
        //     return 'obese';
        // }
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

