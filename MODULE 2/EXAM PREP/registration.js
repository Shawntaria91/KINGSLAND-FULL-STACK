// username surrounded by "U$"
// username needs to be 3 characters long MINIMUM
// start with uppercase letter, followed only by lowercase letters
// password surrounded by "P@S"
// password needs to start with minimum 5 alphabetical letters (not including digits)
// must end with digit

// (U\$[A-Z][a-z]{3,}U\$)(P@\$[A-Za-z]{5,}\d+P@\$) - regex input 

function main(reg) { //[1, "U$MichaelU$P@$asdqwe123P@$", "U$NameU$P@$PasswordP@$", "U$UserU$P@$ad2P@$"]
    let validReg = [];
    let num = reg.shift();
    let n = Number(num);
    let regComplete = 0;
    matchThisRgx = /U\$[A-Z][a-z]{2,}U\$P@\$[A-Za-z]{5,}\d+P@\$/g; //"U$UserU$P@$ad2P@$"
    //usernameRegextoMatch = /\b([A-Z][a-z]{3,})/g;
    //passwordRegextoMatch = /\b([A-Za-z]{5,}\d+)/g;
    for (i = 0; i < n; i++) {
        if ((validLogs = matchThisRgx.exec(reg[i])) !== null) {
            console.log('Registration was successful');
            validReg.push(validLogs[i]); //['U$MichaelU$P@$asdqwe123P@$']
            userCredList = reg[i].split('U$P@$');
            username = userCredList[0].replace("U$", "");
            password = userCredList[1].replace("P@$", "");
            //username = usernameRegextoMatch.exec(validLogs[1]);
            //password = passwordRegextoMatch.exec(validLogs[2]);
            /* if((username = usernameRegextoMatch.exec(validEmail)) !== null){
                if((password = passwordRegextoMatch.exec(validEmail)) !== null){
                }
            } */
            console.log(`Username: ${username}, Password: ${password}`);
            regComplete += 1;
        } else {
            console.log('Invalid username or password');
        }
    }
    console.log(`Successful registrations: ${regComplete}`);
}