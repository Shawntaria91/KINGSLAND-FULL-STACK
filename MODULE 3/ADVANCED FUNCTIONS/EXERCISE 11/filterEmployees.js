// Write a program that filters the employees of your company. 
// You should print the result in a specific format. 
// You will receive 2 parameters (data, criteria). 
// You should parse the input, find all employees that fullfil the citeria and print them.
// Input
// You will receive a string with all the employees, and a criteria by witch you should sort the employees. 
// If the criteria is "all" print all the employees in the given format.
// Output
// The output should be the printed on the console.
// For more information check the examples.

function main(data, criteria) {
    let eeArr = JSON.parse(data);
    let searchReq = criteria.split('-');
        //searchCriteria[0] -->> key for gender
        //searcCriteria[1] ->> value of the key 'female'
    let eeFilter = eeArr.filter((eeObj) => {
        return eeObj[searchReq[0]] == searchReq[1];
    });
    for (let idx in eeFilter) {
        console.log(`${idx}. ${eeFilter[idx].first_name} ${eeFilter[idx].last_name} - ${eeFilter[idx].email}`)
    }
}
main(`[{"id": "1", "first_name": "Ardine", "last_name": "Bassam", "email": "abassam0@cnn.com", "gender": "Female"}, {"id": "2","first_name": "Kizzee", "last_name": "Jost","email": "kjost1@forbes.com", "gender": "Female"}, {"id": "3","first_name": "Evanne", "last_name": "Maldin","email": "emaldin2@hostgator.com", "gender": "Male"}]`,
    `gender-Female`);