function main(jsonString) {

        let person = JSON.parse(jsonString);

        for (const [key, value] of Object.entries(person)) {
            console.log(`${key}: ${value}`);
        }
}
main('{"name": "George", "age": 40, "town": "Atlanta"}');