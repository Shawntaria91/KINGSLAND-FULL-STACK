/*
You’re tasked to create an HTML table of students and their scores. 
You will receive a single string representing an array of objects, 
the table’s headings should be equal to the objects’ keys, 
while each object’s values should be a new entry in the table.
Any text values in an object should be escaped, in order to avoid introducing dangerous code into the HTML.

Input
The input comes as array with a single string argument (the array of objects).

Output
The output should be printed on the console – for each entry row in the input print the object representing it.
Note:
Object’s keys will always be the same.
HTML
You are provided with an HTML file to test your table in the browser.
                                Index.html
 <!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <title>FromJSONToHTMLTable</title>
 <style>
 table,th{
 border: groove;
 border-collapse: collapse;
 }
 td{
 border: 1px solid black;
 }
 td,th{
 padding: 5px;
 }
 </style>
</head>
<body>
 <div id="wrapper">
 </div>
 <script>
 function fromJSONToHTMLTable(input){
 //Write your code here
 }
 window.onload = function(){
 let container = document.getElementById('wrapper');
 container.innerHTML = fromJSONToHTMLTable(['[{"Name":"Tomatoes &
Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);
 };
 </script>
</body>
</html>
*/
function main(input) {
    jsonToHtml(input);
}

function jsonToHtml([input]) {
    let arr = JSON.parse(input);
    
    let html = `<table>\n  <tr>`.trim();

    for (let key of Object.keys(arr[0]))
        html += `<th>${key}</th>`;
    html += '</tr>\n';
    for (let obj of arr) {
        html += '  <tr>';
        for (let value of Object.keys(obj)) {
            html += `<td>${htmlEsc(obj[value])}</td>`;
        }
        html += '</tr>\n';
    }
    console.log(html + '</table>'.trim());

    function htmlEsc(key) {
        const encoded = encodeURIComponent(key);
        return encoded;
    }
}
// main((['[{"X":5,"Y":7},{"X":2,"Y":4}]']));
main((['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']));