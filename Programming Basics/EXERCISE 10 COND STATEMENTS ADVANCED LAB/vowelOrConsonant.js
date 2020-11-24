function main(letter) {
    switch(letter) {
        case "A":
        case "a":
        case "E":
        case "e":
        case "I":
        case "i":
        case "O":
        case "o":
        case "U":
        case "u":
            console.log("Vowel");
            break;
        default:
            console.log("Consonant");
    }
}
main("a");