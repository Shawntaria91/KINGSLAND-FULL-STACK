/*3. From JSON to HTML Table
You’re tasked to create an HTML table of students and their scores. You will receive a single string representing an
array of objects, the table’s headings should be equal to the objects’ keys, while each object’s values should be a
new entry in the table. Any text values in an object should be escaped, in order to avoid introducing dangerous
code into the HTML.
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
} //['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']

function jsonToHtml(input) {
    let arr = JSON.parse(input);
    // [{Name: 'Tomatoes & Chips', Price: 2.35}, { Name: 'J&B Chocolate', Price: 0.96 }]
    let html = "<table>\n  <tr>".trim();
    //<table>
    //  <tr>
    makeKeyRow(arr);
    makeValueRow(arr);

    function makeKeyRow(arr) {
        for (let key of Object.keys(arr[0])) ////need to use for of to get keys of the object within the array.  If you tried arr with out [0], you will only get index numbers.
        //key = Name, Price
            html += `<th>${key}</th>`;
            html += "</tr>\n";
    }

    function makeValueRow(arr) {
        for (let obj of arr) {
            //[{Name: 'Tomatoes & Chips', Price: 2.35}, { Name: 'J&B Chocolate', Price: 0.96 }]
            html += '  <tr>';
            for (let value of Object.keys(obj)) {
                //obj = {Name: 'Tomatoes & Chips', Price: 2.35} , { Name: 'J&B Chocolate', Price: 0.96 }
                //Object.keys(obj) = Name: , Price:
                //obj[value] = Tomatoes & Chips
                html += `<td>${htmlEscape(obj[value])}</td>`;
            }
            html += '</tr>\n';
        }
        console.log(html + "</table> ".trim());
    }

    function htmlEscape(key) {
        const encoded = encodeURIComponent(key);
        return encoded;
    }
}
main(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);

// <table>
//  <tr><th>Name</th><th>Price</th></tr>
//  <tr><td>Tomatoes &amp;
// Chips</td><td>2.35</td></tr>
//  <tr><td>J&amp;B
// Chocolate</td><td>0.96</td></tr>
// </table> 




// Input 
// ['[{"Name":"Peter <div>-
// a","Age":20,"City":"Sydney"},
// {"Name":"George","Age":18,"City":"Perth
// "},{"Name":"Angel","Age":18,"City":"Mel
// bourne"}]'] 

// Output 
// <table>

// <tr><th>Name</th><th>Age</th><t>City</t
// h></tr>
//  <tr><td>Peter &lt;div&gt;-
// a</td><td>20</td><td>Sydney</td></tr>

// <tr><td>George</td><td>18</td><td>Perth<
// /td></tr>

// <tr><td>Angel</td><td>18</td><td>Melbour
// ne</td></tr>
// </table>/tr>
// </table>