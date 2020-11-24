/*
You will be given a JSON that represents an array of objects. 
Parse the JSON and create an HTML table using the supplied objects. 
The table should have 2 columns "name" and "score" and each object in the array will also have these keys.
Any text elements must also be escaped in order to ensure no dangerous code can be passed.

Input
The input comes as array with a single string argument (the array of objects as a JSON).

Output
The output should be printed on the console - a table with 2 columns - "name" and "score", 
containing the values from the objects as rows
*/
function main(input) {
    scoreToHTML(input);
}
function scoreToHTML(input) { 
    let scores = JSON.parse(input);
    let html = "<table>\n";
    html += "  <tr><th>name</th><th>score</th></tr>\n";
    function htmlEsc(key) {
        const encoded = encodeURIComponent(key);
        return encoded;
    }
    for (let score of scores) {
        html += `  <tr>`;
        html += `<td>${htmlEsc(score['name'])}</td>`;
        html += `<td>${htmlEsc(score['score'])}</td>`;
        html += `</tr>\n`;
    }
    console.log(html + "</table>");
}
main(['[{"name":"Peter","score":479},{"name":"George","score":205}]']);