function main(hourExam, minExam, hourArrive, minArrive) {
	totalExamMins = hourExam * 60 + minExam;
	totalArriveMins = hourArrive * 60 + minArrive;

	if (totalArriveMins > totalExamMins + 30) {
		console.log("Late");
	} else if (
		totalArriveMins == totalExamMins ||
		(totalArriveMins >= totalExamMins - 30 &&
			totalArriveMins < totalExamMins) ||
		(totalArriveMins <= totalExamMins + 30 &&
			totalArriveMins > totalExamMins)
	) {
		console.log("On time");
	} else if (totalArriveMins < totalExamMins - 30) {
		console.log("Early");
	}
	let minBefore = totalExamMins - totalArriveMins;
	let hourBefore = Math.floor(minBefore / 60);
	let minBeforeNoHours = minBefore - hourBefore * 60;

	let minAfter = totalArriveMins - totalExamMins;
	let hourAfter = Math.floor(minAfter / 60);
	let minAfterNoHours = minAfter - hourAfter * 60;

	if (
		totalArriveMins > totalExamMins - 60 &&
		totalArriveMins < totalExamMins
	) {
		if (minBefore < 10) {
			console.log(`0${minBefore} minutes before the start`);
		} else {
			console.log(`${minBefore} minutes before the start`);
		}
	} else if (totalArriveMins <= totalExamMins - 60) {
		if (minBeforeNoHours < 10) {
			console.log(
				`${hourBefore}:0${minBeforeNoHours} hours before the start`
			);
		} else {
			console.log(
				`${hourBefore}:${minBeforeNoHours} hours before the start`
			);
		}
	} else if (
		totalArriveMins < totalExamMins + 60 &&
		totalArriveMins > totalExamMins
	) {
		if (minAfter < 10) {
			console.log(`0${minAfter} minutes after the start`);
		} else {
			console.log(`${minAfter} minutes after the start`);
		}
	} else if (totalArriveMins > totalExamMins + 60) {
		if (minAfterNoHours < 10) {
			console.log(
				`${hourAfter}:0${minAfterNoHours} hours after the start`
			);
		} else {
			console.log(
				`${hourAfter}:${minAfterNoHours} hours after the start`
			);
		}
	}
}
//main(9, 30, 10, 01);
//main(9, 00, 8, 30);
//main(9, 00, 10, 30);
//main(14, 00, 14, 05);
//main(10, 00, 10, 00);
main(11, 30, 10, 55);
