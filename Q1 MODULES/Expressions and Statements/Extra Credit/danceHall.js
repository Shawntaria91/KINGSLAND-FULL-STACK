function main(L, W, A) {
	var hallAreaSqCenti = L * 100 * (W * 100);
	var wardAreaSqCenti = A * 100 * (A * 100);
	var bench = hallAreaSqCenti / 10;
	var availRoom = hallAreaSqCenti - wardAreaSqCenti - bench;
	var spaceNeededEach = 40 + 7000;
	var calculateNumDancers = availRoom / spaceNeededEach;
	console.log(Math.floor(calculateNumDancers));
}

main(50, 25, 2);
