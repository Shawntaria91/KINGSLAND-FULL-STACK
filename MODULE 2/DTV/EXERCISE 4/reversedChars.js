function main(char1, char2, char3) {
    let reverse = "";
    let together = char1 + " " + char2 + " " + char3;
    reverse = together.split("").reverse().join("");
    console.log(reverse); 
}
main("A", "B", "C");
main("1", "L", "&");