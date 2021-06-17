function main(empData,criteria){
    let criteriaArray = criteria.split('-');
    empArray = JSON.parse(empData);
    let filteredEmployees = empArray.filter((employee) => {
       return employee[criteriaArray[0]] == criteriaArray[1];
    });
    for (let emp in filteredEmployees){
        console.log(`${emp}. ${filteredEmployees[emp].first_name} ${filteredEmployees[emp].last_name} - ${filteredEmployees[emp].email}`);
    }
}
main(`[{"id":"1","first_name":"Ardine","last_name":"Bassam","email":"abassam0@cnn.com","gender":"Female"},{"id":"2","first_name":"Kizzee","last_name":"Jost","email":"kjost1@forbes.com","gender":"Female"},{"id":"3","first_name":"Evanne","last_name":"Maldin","email":"emaldin2@hostgator.com","gender":"Male"}]`, "gender-Female");

// main(`[{
//     "id": "1",
// "first_name": "Ardine", "last_name": "Bassam", "email": "abassam0@cnn.com", "​gender​": "​Female​"
// }, {
// "id": "2",
// "first_name": "Kizzee", "last_name": "Jost",
// "email": "kjost1@forbes.com", "​gender​": "​Female​"
// }, {
//     "id": "3",
//     "first_name": "Evanne",
//     "last_name": "Maldin",
//     "email": "emaldin2@hostgator.com",
//     "gender": "Male"
// }]`, '​gender-​Female');