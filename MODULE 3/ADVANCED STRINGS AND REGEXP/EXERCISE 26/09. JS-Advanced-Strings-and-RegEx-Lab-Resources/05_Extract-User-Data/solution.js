function solve() {
	console.log("Sort data function working");
	const regex = /([A-Z][a-z]+ [A-Z][a-z]+|[A-Z] [A-Z]) (\+359 [0-9] [0-9]{3} [0-9]{3}|\+359-[0-9]-[0-9]{3}-[0-9]{3}) ([a-z]+@[a-z]+.[a-z]{2,3})/gm;

	let input = document.getElementById("arr").value;
	let resultHTML = document.getElementById("result");
	input = JSON.parse(input);
	//console.log(input);
	for (people of input) {
		let person = regex.exec(people);
		//	console.log("a person is ", person);
		if (person != null) {
			console.log("Valid data");
			let newDiv = document.createElement("DIV");
			console.log(person);
			newDiv.innerHTML = `
      <p>Name: ${person[1]}</p>
      <p>Phone Number: ${person[2]} </p>
      <p>Email: ${person[3]} </p>`;
			console.log("2nd", newDiv);
			resultHTML.appendChild(newDiv);
		} else {
			console.log("Invalid data");
			let newInvalidDiv = document.createElement("DIV");
			newInvalidDiv.innerText = "\nInvalid data";
			resultHTML.appendChild(newInvalidDiv);
		}

		let dots = "\n- - - \n";
		let newDots = document.createElement("DIV");
		newDots.innerText = dots;
		resultHTML.appendChild(newDots);
	}
}

