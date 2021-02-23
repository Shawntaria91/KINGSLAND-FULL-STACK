/*Write a program, which reads three numbers, 
which represents seconds (between 1 and 50) and sum them
Print the results in the format minutes:seconds
The seconds should be printed with a leading zero*/

function main(sec1, sec2, sec3) {
	var totalSeconds = sec1 + sec2 + sec3;
	var seconds = totalSeconds % 60;
	var minutes = Math.floor(totalSeconds / 60);

	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	console.log(`${minutes}:${seconds}`);
}
main(35, 45, 44);
