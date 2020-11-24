function main(arr) {

    //console.log(Array.from(new Set(arr)).join(" "));
//let newArray = Array.from(new Set(arr));
let output = "";

    output = arr.sort(function (a, b) {
        if (a.length == b.length) {
            if (a < b) return -1;
            else if (a > b) return 1;
            return 0;
            //return a < b;
        } else {
            return a.length - b.length;
        }
    });

    for (i = 0; i < output.length; i++) {
        console.log(output[i]);
    } 
}
//main(["alpha", "beta", "gamma"]);
main(["limousine","motorcycle","car","bike","skateboard","scooters","helicopter","airplane","jet","bus","motorcycle","jet","road bike","van"]);