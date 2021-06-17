function main(a, b) {
	gcd(a, b);
}

let gcd = function (a, b) {
	if (!b) {
		return a;
	} else {
		return gcd(b, a % b);
	}
	console.log(a);
};
main(15, 5);
