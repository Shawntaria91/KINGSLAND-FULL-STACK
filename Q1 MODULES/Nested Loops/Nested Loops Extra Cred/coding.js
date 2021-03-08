function main(num) {
	let numArr = num.toString().split("").map(Number);

	for (let i = 0; i <= numArr.length; i++) {
		let currNum = numArr[i];
		console.log(currNum);
	}
	console.log(numArr);
}
main(2049);
