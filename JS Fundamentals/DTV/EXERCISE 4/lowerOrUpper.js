function main(character) {
    if (!isNaN(character * 1)) {
        console.log("Character is not a letter.");
    } else if (character == character.toUpperCase()) {
           console.log("upper-case");
    } else if (character == character.toLowerCase()) {
           console.log("lower-case");
    }
}
main("L");
main("f");