//                                  JS ADVANCED CLASSES ~ MORE EXERCISES
//                                           More Exercise: Classes
// 1. Instance Validation
// Write a class for a checking account that validates it's created with valid parameters. A CheckingAccount has a
// clientId, email, firstName, lastName. Each parameter must meet specific requirements:
// ● clientId - Must be a string representing a 6-digit number; if invalid, throw a TypeError with the
// message "Client ID must be a 6-digit number"
// ● email - Must contain at least one alphanumeric character, followed by the @ symbol, followed by one or
// more letters or periods; all letters must be Latin; if invalid, throw a TypeError with message "Invalid
// e-mail"
// ● firstName, lastName - Must be at least 3 and at most 20 characters long, containing only Latin letters;
// o If the length is invalid, throw a TypeError with message:
// "{First/Last} name must be between 3 and 20 characters long"
// o If invalid characters are used, throw a TypeError with message:
// "{First/Last} name must contain only Latin characters" (replace First/Last with
// the relevant word)
// All checks must happen in the order in which they are listed - if more than one parameter is invalid, throw an error
// for the first encountered. Note that error messages must be exact.
// What to submit?
// You are only required to submit the CheckingAccount class. No need to include the codes from the example.
// Class Signature: class CheckingAccount

// class CheckingAccount {
//     constructor(clientId, email, firstName, lastName) {
//             this.clientId = clientId
//             this.email = email
//             this.firstName = firstName
//             this.lastName = lastName
//         }
//         // set clientId(clientId) {
//         //     if (clientId.length < 6) {
//         //         throw new TypeError("Client ID must be a 6-digit number")
//         //     }
//         //     return this._clientId = clientId
//         // }
//     set clientId(clientId) {
//         if (!/ ^ \ D {6} $ /g.test(clientId)) {
//             throw new TypeError(" Client ID must be a 6-digit number ")
//         }
//         return this._clientId = clientId
//     }
//     get clientId() {
//         return this._clientId()
//     }
//     set email(email) {
//         let emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z.]+$/g
//         if (!emailPattern.test(email)) {
//             throw new TypeError("Invalid e-mail")
//         }
//         return this._email = email
//     }
//     get email() {
//         return this._email
//     }
//     set firstName(firstName) {
//         if (!(firstName.length >= 3 && firstName.length <= 20)) {
//             throw new TypeError("First name must be between 3 and 20 characters long")
//         }
//         let pattern = /[a-zA-Z]/g
//         if (!pattern.test(firstName)) {
//             throw new TypeError("First name must contain only Latin characters")
//         }
//         return this._firstName = firstName
//     }
//     get firstname() {
//         return this._firstName
//     }
//     set lastName(lastName) {
//         if (!(lastName.length >= 3 && lastName.length <= 20)) {
//             throw new TypeError("Last name must be between 3 and 20 characters long")
//         }
//         let pattern = /[a-zA-Z]/g
//         if (!pattern.test(lastName)) {
//             throw new TypeError("Last name must contain only Latin characters")
//         }
//         return this._lastName = lastName
//     }
//     get lastName() {
//         return this._lastName
//     }
// }




class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }
    get clientId() {
        return this._clientId;
    }
    set clientId(newClientId) {
        if (typeof newClientId != "string") {
            throw new TypeError("Client ID must be a 6-digit number");
        }
        let clientIdRegex = /^\d{6}$/;
        if (!clientIdRegex.test(newClientId)) {
            throw new TypeError("Client ID must be a 6-digit number");
        }
        this._clientId = newClientId;
    }
    get email() {
        return this._email;
    }
    set email(newEmail) {
        let emailRegex = /^\w+@[a-zA-Z.]+$/;
        if (!emailRegex.test(newEmail)) {
            throw new TypeError("Invalid e-mail");
        }
        this._email = newEmail;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(newFirstName) {
        if (newFirstName.length < 3 || newFirstName.length > 20) {
            throw new TypeError("First name must be between 3 and 20 characters long");
        }
        let firstNameRegex = /^[A-Za-z]+$/;
        if (!firstNameRegex.test(newFirstName)) {
            throw new TypeError("First name must contain only Latin characters");
        }
        this._firstName = newFirstName;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(newLastName) {
        if (newLastName.length < 3 || newLastName.length > 20) {
            throw new TypeError("Last name must be between 3 and 20 characters long");
        }
        let lastNameRegex = /^[A-Za-z]+$/;
        if (!lastNameRegex.test(newLastName)) {
            throw new TypeError("Last name must contain only Latin characters");
        }
        this._lastName = newLastName;
    }
}
// another example for same question
// class CheckingAccount {
//     constructor(clientId, email, firstName, lastName) {
//         this.clientId = clientId;
//         this.email = email;
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     // set clientId(clientId) {
//     //     if (clientId.length < 6) {
//     //         throw new TypeError("Client ID must be a 6-digit number")
//     //     }
//     //     return this._clientId = clientId
//     // }
//     set clientId(clientId) {
//         if (/ ^ \ D {6} $ /g.test(clientId)) {
//             throw new TypeError(" Client ID must be a 6-digit number ");
//         }
//         return this._clientId;
        
//     }
//     get clientId() {
//         return this._clientId();
//     }
//     set email(email) {
//         let emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z.]+$/g;
//         if (!emailPattern.test(email)) {
//             throw new TypeError("Invalid e-mail");
//         }
//         this._email = email;
//         return this._email;
//     }
//     get email() {
//         return this._email;
//     }
//     set firstName(firstName) {
//         if (!(firstName.length >= 3 && firstName.length <= 20)) {
//             throw new TypeError("First name must be between 3 and 20 characters long");
//         }
//         let pattern = /[a-zA-Z]/g;
//         if (!pattern.test(firstName)) {
//             throw new TypeError("First name must contain only Latin characters");
//         }
//         this._firstName = firstName;
//         return this._firstName;
//     }
//     get firstName() {
//         return this._firstName;
//     }
//     set lastName(lastName) {
//         if (!(lastName.length >= 3 && lastName.length <= 20)) {
//             throw new TypeError("Last name must be between 3 and 20 characters long");
//         }
//         let pattern = /[a-zA-Z]/g;
//         if (!pattern.test(lastName)) {
//             throw new TypeError("Last name must contain only Latin characters");
//         }
//         this._lastName = lastName;
//         return this._lastName;
//     }
//     get lastName() {
//         return this._lastName;
//     }
// }

// //// TypeError: Client ID must be a 6-digit number
//  let acc = new CheckingAccount('131455', 'ivan@', 'Ivan', Smith);
// // // TypeError: Invalid e-mail
// // let acc = new CheckingAccount('131455', 'ivan@some.com', 'I', Smith)
// // // TypeError: First name must be between 3 and 20 characters long
// let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'Smith');
// // TypeError: "Last name must contain only Latin characters








// What to submit?
// You are only required to submit the CheckingAccount class. No need to include the codes from the example above.
// Class Signature: class CheckingAccount