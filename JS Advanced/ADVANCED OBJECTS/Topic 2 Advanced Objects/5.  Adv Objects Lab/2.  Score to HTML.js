// 2. Score to HTML
// You will be given a JSON that represents an array of objects. Parse the JSON and create an HTML table using the supplied objects. The table should have 2 columns "name" and "score" and each object in the array will also have these keys.
// Any text elements must also be escaped in order to ensure no dangerous code can be passed. (Use the htmlEscape function we created)
// Input
// The input comes as array with a single string argument (the array of objects as a JSON).
// Output
// The output should be printed on the console - a table with 2 columns - "name" and "score", containing the values from the objects as rows

function main(input){
  scoreToHTMLTable(input);
}

function scoreToHTMLTable(input) {
  //['[{"name":"Peter & Kiro","score":479},{"name":"George, Maria & Viki","score":205}]']
  let scoreArr = JSON.parse(input);
  let html = "<table>\n";
  html += "  <tr><th>name</th><th>score</th></tr>\n";

  for (let score of scoreArr) {
      html += `  <tr>`;
      html += `<td>${htmlEscape(score.name)}</td>`;
      html += `<td>${htmlEscape(score.score)}</td>`;
      html += `</tr>\n`;
  }
  console.log( html + "</table>");

  function htmlEscape(key) {
      const encoded = encodeURIComponent(key);
      return encoded;
  }
}

//main(['[{"name":"Peter","score":479},   {"name":"George","score":205}]']);
/* <table>
<tr><th>name</th><th>score</th></tr>
<tr><td>Peter</td><td>479</td></tr>
<tr><td>George</td><td>205</td></tr>
</table> */
main(['[{"name":"Peter & Kiro","score":479},{"name":"George, Maria & Viki","score":205}]']);
/* <table>
  <tr><th>name</th><th>score</th></tr>
  <tr><td>Peter%20%26%20Kiro</td><td>479</td></tr>
  <tr><td>George%2C%20Maria%20%26%20Viki</td><td>205</td></tr>
</table> */
//main(['[{"name":"Ragnar & Lagertha","score":808},{"name":"Jon and Ygritte","score":999}]']);
/* <table>
  <tr><th>name</th><th>score</th></tr>
  <tr><td>Ragnar%20%26%20Lagertha</td><td>808</td></tr>
  <tr><td>Jon%20and%20Ygritte</td><td>999</td></tr>
</table> */
