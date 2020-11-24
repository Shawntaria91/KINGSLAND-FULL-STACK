// Write a function that stores information about a person’s name and his phone number. The input comes as an array

// of strings. Each string contains the name and the number. If you receive the same name twice just replace the

// number. At the end print the result without sorting it. Try using an associative array.



function main(nameAndNum) {

    phoneBookList(nameAndNum);
}

function phoneBookList(nameAndNum) {

    let phonebook = {};

    for (let record of nameAndNum) {

        let sepRecords = record.split(' ');
        let name = sepRecords[0];
        let num = sepRecords[1];

        phonebook[name] = num;
    }

    for (let key in phonebook) {

        console.log(`${key} -> ${phonebook[key]}`);
    }
}
main([

'Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344'

]);