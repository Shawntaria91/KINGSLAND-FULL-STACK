function main(jsonString, criteria){
    filterJSON(jsonString, criteria);
}
function filterJSON(jsonString, criteria){
    let employeeObjArr = JSON.parse(jsonString);
    let [searchKey,searchValue] = criteria.split('-');
    let empFilteredArr = employeeObjArr.filter((employeeObj)=>{
       return employeeObj[searchKey] == searchValue;
    });
    for(let i in empFilteredArr){
        console.log(`${i}. ${empFilteredArr[i].first_name} ${empFilteredArr[i].last_name} - ${empFilteredArr[i].email}`);
    }
}  
main(`[{"id": "1", "first_name": "Ardine", "last_name": "Bassam", "email": "abassam0@cnn.com", "gender": "Female"}, {"id": "2","first_name": "Kizzee", "last_name": "Jost","email": "kjost1@forbes.com", "gender": "Female"}, {"id": "3","first_name": "Evanne", "last_name": "Maldin","email": "emaldin2@hostgator.com", "gender": "Male"}]`, 
`gender-Female`);