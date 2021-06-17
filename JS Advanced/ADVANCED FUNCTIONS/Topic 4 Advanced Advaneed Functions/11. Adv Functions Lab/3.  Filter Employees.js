// 3. Filter Employees
// Write a program that filters the employees of your company. You should print the result in a specific format. 
// You will receive 2 parameters (data, criteria). You should parse the input, find all employees that fullfil the citeria and print them.
// Input
// You will receive a string with all the employees, and a criteria by which you should sort the employees. If the
// criteria is "all" print all the employees in the given format.
// Output
// The output should be the printed on the console.
// For more information check the examples.

function main(employees, criteria){//'gender-Female'
    let employeesJSONArr = JSON.parse(employees);
    let [criteriaKey, criteriaValue] = criteria.split('-');//['gender', 'Female']

    for (let employeeObj in employeesJSONArr){
   
        Object.entries(employeeObj).map(([key, value]) => {if(employeeObj[criteriaKey] == criteriaValue)
            console.log(`${key}: ${value}`);
        });   
    }
}

main(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
    }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
    },
   {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
    }]`,
   'gender-Female');

// 0. Ardine Bassam - abassam0@cnn.com
// 1. Kizzee Jost - kjost1@forbes.com





// main(`[{
//     "id": "1",
//     "first_name": "Kaylee",
//     "last_name": "Johnson",
//     "email": "k0@cnn.com",
//     "gender": "Female"
//     }, {
//     "id": "2",
//     "first_name": "Kizzee",
//     "last_name": "Johnson",
//     "email": "kjost1@forbes.com",
//     "gender": "Female"
// }, {
//     "id": "3",
//     "first_name": "Evanne",
//     "last_name": "Maldin",
//     "email": "emaldin2@hostgator.com",
//     "gender": "Male"
//     }, {
//     "id": "4",
//     "first_name": "Evanne",
//     "last_name": "Johnson",
//     "email": "ev2@hostgator.com",
//     "gender": "Male"
//     }]`,
//    'last_name-Johnson');

// 0. Kaylee Johnson - k0@cnn.com
// 1. Kizzee Johnson - kjost1@forbes.com
// 2. Evanne Johnson - ev2@hostgator.com
