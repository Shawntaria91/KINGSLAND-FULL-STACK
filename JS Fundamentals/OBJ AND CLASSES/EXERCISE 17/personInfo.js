function main(firstName, lastName, age) {

    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age

    };

    for (key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}
main("Peter", "Pan", "20");