function main(arr) {

    console.log(Array.from(new Set(arr)).join(" "));

}
//main([1, 2, 3, 4]);
main([1, 2, 3, 4, 2, 8]);