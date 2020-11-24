 // Write a function that checks if a given password is valid. Password validations are:
    // The length should be 6 - 10 characters (inclusive)
    // It should consists only of letters and digits
    // It should have at least 2 digits
    // If a password is valid print "Password is valid".
    // If it is NOT valid, for every unfulfilled rule print a message:
    // "Password must be between 6 and 10 characters"
    // "Password must consist only of letters and digits"
    // "Password must have at least 2 digits"
    function main(password) {
        let initialArray = password.split('');
        let passwordValid = true;
        const regex = RegExp(/^[0-9a-zA-Z]+$/);
        let counter = 0;
        if (initialArray.length > 10 || initialArray.length < 6) {
            console.log(`Password must be between 6 and 10 characters`);
            passwordValid = false;
        }
        if (regex.test(password)) {} else {
            passwordValid = false;
            console.log(`Password must consist only of letters and digits`);
        }
        for (let i = 0; i < initialArray.length; i++) {
            if (!isNaN(initialArray[i])) {
                counter++;
            }
        }
        if (counter < 2) {
            console.log(`Password must have at least 2 digits`);
            passwordValid = false;
        }
        if (passwordValid == true) {
            console.log(`Password is valid`);
        }
    }
    main('logIn');