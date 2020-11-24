/*
JSON’s Table is a magical table that turns JSON data into an HTML table. You will be given JSON strings that hold the
data about the employees, including their name, position, and salary. You need to parse that data into objects and
create an HTML table that holds the data for each employee on different rows.
The name and position of the employee are strings and a salary is a number.
Input
The input comes as an array of strings. Each element is a JSON string represents the data for each employee.
Output
The output is an HTML code of a table that holds the data of all the employees. Check the examples for more info.
*/

function main(input) {
    console.log('<table>');
    for (const data of input) {
        const employee = JSON.parse(data);
        console.log(`  <tr>\n    <td>${employee.name}</td>\n    <td>${employee.position}</td>\n    <td>${employee.salary}</td>\n  </tr>`);
    }
    console.log('</table>');
}
main(['{"name":"Peter","position":"Manager","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"George","position":"Lecturer","salary":1000}'] );