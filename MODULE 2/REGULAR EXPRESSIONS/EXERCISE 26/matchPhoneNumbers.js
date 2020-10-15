function main(nums) {

    let regexMatch = /\+404(-|)\d{3}\1\d{4}\b/g;
    let validNums = [];

    while ((validPhoneNumber = regexMatch.exec(nums)) !== null) {

        validNums.push(validPhoneNumber[0]);
    }
    console.log(validNums.toString().replace(/-/g," "));
}
main('+404 222 2222,404-222-2222, +404/222/2222, +404-222 2222 +404 222-2222, +404-222-222, +404-222-22222 +404-222-2222');