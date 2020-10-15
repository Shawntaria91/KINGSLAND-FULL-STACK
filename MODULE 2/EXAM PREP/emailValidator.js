function main(strArr) { //["AnotherMail.com", "Make Lower", "GetUsername", "Replace a", "Complete"]
    let email = strArr.shift();
    for (i = 0; i < strArr.length - 1; i++) {
        let command = strArr[i].split(' ');
        switch (command[0]) {
            case ('Make'):
                if (command[1] == 'Upper') {
                    email = email.toUpperCase();
                } else {
                    email = email.toLowerCase();
                }
                console.log(email);
                break;
            case ('GetDomain'):
                console.log(email.substr(email.length - command[1], command[1]));
                break;
            case ('GetUsername'):
                if (email.includes('@')) {
                    console.log(email.substring(0, email.indexOf("@")));
                } else {
                    console.log(`The email ${email} doesn't contain the @ symbol.`);
                }
                break;
            case ('Replace'):
                /* let replaceEmail = [];
                    for (let char of email) {
                        if (char == commands[1]) {
                         replaceEmail.push('-');
                        } else {
                        replaceEmail.push(char);
                        } */
                let reg = new RegExp(command[1], 'g');
                email = email.replace(reg, '-');
                console.log(email);
                break;
            case ('Encrypt'):
                let updatedEmail = [];
                for (let char in email) {
                    updatedEmail.push(email.charCodeAt(char));
                }
                console.log(updatedEmail.join(' '));
                break;
        }
    }
}