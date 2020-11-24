// You're tasked to create a list of employees and their personal numbers.

// You will receive an array of strings. 

// Each string is an employee name and to assign them a personal number you

// have to find the length of the name (whitespace included).

// Try to use an object.

// At the end print all the list employees in the following format:

// "Name: {employeeName} -- Personal Number: {personalNum}"



function main(employeeArr) {

    employees(employeeArr);

}



function employees(employeeArr) {

    let employeesObj = {};

    for (i = 0; i < employeeArr.length; i++) {

        name = employeeArr[i];
        num = name.length;
    employeesObj[name] = num;

    }

    for (let name in employeesObj) {
    //key can be boolean, string, or number
        console.log(`Name: ${name} -- Personal Number: ${employeesObj[name]}`);

    }

}
main(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal']);