function main(input) {
    jsonToHTMLTable(input);
} //['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']

function jsonToHTMLTable(input) {
    let arr = JSON.parse(input);
    //[{Name: 'Tomatoes & Chips', Price: 2.35},{Name: 'J&B Chocolate', Price: 0.96}]
    let html = "<table>\n  <tr>".trim();
    // <table>
    // <tr>
    for (let key of Object.keys(arr[0])) //looped to pull the keys (Name, Price)
        html += `<th>${key}</th>`;
    html += "</tr>\n";

    for (let obj of arr) { //obj = {Name: 'Tomatoes & Chips', Price: 2.35}
        html += '  <tr>';
        for (let value of Object.keys(obj)) { //'Tomatoes & Chips',2.35
            html += `<td>${htmlEscape(obj[value])}</td>`;
        }
        html += '</tr>\n';
    }
    console.log(html + "</table>".trim());

    function htmlEscape(key) {
        const encoded = encodeURIComponent(key);
        return encoded;
    }

}
main(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);
// <table>
//   <tr><th>Name</th><th>Price</th></tr>
//   <tr><td>Tomatoes%20%26%20Chips</td><td>2.35</td></tr>
//   <tr><td>J%26B%20Chocolate</td><td>0.96</td></tr>
// </table>



//main(['[{"Name":"Peter <div>-a","Age":20,"City":"Sydney"},  {"Name":"George","Age":18,"City":"Perth"},{"Name":"Angel","Age":18,"City":"Melbourne"}]']);
// <table>
//   <tr><th>Name</th><th>Age</th><th>City</th></tr>
//   <tr><td>Peter%20%3Cdiv%3E-a</td><td>20</td><td>Sydney</td></tr>
//   <tr><td>George</td><td>18</td><td>Perth</td></tr>
//   <tr><td>Angel</td><td>18</td><td>Melbourne</td></tr>
// </table>

//main(['[{"Pizza":"Pepperoni"},{"Pizza":"Hawaiian"},{"Pizza":"Chicago"}]']);
// <table>
//   <tr><th>Pizza</th></tr>
//   <tr><td>Pepperoni</td></tr>
//   <tr><td>Hawaiian</td></tr>
//   <tr><td>Chicago</td></tr>
// </table>