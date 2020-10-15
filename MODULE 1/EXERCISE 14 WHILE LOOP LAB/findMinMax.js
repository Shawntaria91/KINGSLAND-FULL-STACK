function main(numArray) {
    var min = Infinity;
    var max = -Infinity;
    var check = numArray.shift();
    while ((check !== "End") && (check !== undefined)) {
        var num = Number(check); 
        if (num > max) {
            max = num;
        } 
        if (num < min) {
            min = num;
        }
        check = numArray.shift(); 
    }
    console.log(`Min number: ${min}`);
    console.log(`Max number: ${max}`);
}
main([10, 20, 304, 0, 50, "End"]);