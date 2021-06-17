function jsonToHtmlTable(json) {
	let arr = JSON.parse(json);
	let outputArr = ["<table>"];
	outputArr.push(makeKeyRow(arr));
	arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
	outputArr.push("</table>");

	function makeKeyRow(arr) {
		let tblHeader = `<tr>`;
		//console.log("key row", arr);
		let headerKeys = Object.keys(arr[0]);
		//  console.log(headerKeys, `<tr><th>Name</th><th>Price</th></tr>`);
		for (key of headerKeys) {
			tblHeader += `<th>${key}</th>`;
		}
		tblHeader += `/<tr>`;
		outputArr.push(tblHeader);
		//console.log(tblHeader);
	}

	function makeValueRow(obj) {
		let tblRow = `<tr>`;
		//for (let item of arr) {
			//console.log(item);
			for (const key in obj) {
				//console.log(`obj.${key} = ${obj[key]}`);
				tblRow += `<td>${obj[key]}</td>`;
			}
		//}
		tblRow += `</tr>`;
		//console.log(tblRow);
		outputArr.push(tblRow);
	}
	function escapeHtml(value) {
		// ToDo };
	}
	console.log(outputArr.join(""));
}
jsonToHtmlTable(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);

	/* <table>
    <tr><th>Name</th><th>Price</th></tr>
    <tr><td>Tomatoes &amp; Chips</td><td>2.35</td></tr>
    <tr><td>J&amp;B Chocolate</td><td>0.96</td></tr>
</table> */
