function main(array, rotations) {
    for (i = 0; i < rotations; i++) {
    array.push(array.shift());
    }
    array = array.toString();
    array = array.replace(",", " ");
    let result = array.replace(/,/g, " ");
    console.log(result);
}
main([51, 47, 32, 61, 21], 2);