/*2. JSON’s Table

JSON’s Table is a magical table that turns JSON data into an HTML table. You will be given JSON strings that hold the data about the employees, including their name, position, and salary. You need to parse that data into objects and create an HTML table that holds the data for each employee on different rows.
The name and position of the employee are strings and a salary is a number.

Input
The input comes as an array of strings. Each element is a JSON string represents the data for each employee. 
Output
The output is an HTML code of a table that holds the data of all the employees. Check the examples for more info.
Hints
You might want to escape the HTML. Otherwise, you might find yourself a victim to vicious JavaScript code in the input.
*/

function main(employeeDataArr) {
    jsonToHtmlTable(employeeDataArr);
}

function jsonToHtmlTable(employeeDataArr) {
  console.log('<table>');
    for (const employee of employeeDataArr) {
      const person = JSON.parse(employee);
        console.log(`  <tr>\n    <td>${person.name}</td>\n    <td>${person.position}</td>\n    <td>${person.salary}</td>\n  </tr>`);
    }
    console.log('</table>');
}
main(['{"name":"Peter","position":"Manager","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"George","position":"Lecturer","salary":1000}']);/*
<table>
  <tr>
    <td>Peter</td>
    <td>Manager</td>
    <td>100000</td>
  </tr>
  <tr>
    <td>Teo</td>
    <td>Lecturer</td>
    <td>1000</td>
  </tr>
  <tr>
    <td>George</td>
    <td>Lecturer</td>
    <td>1000</td>
  </tr>
</table>*/

