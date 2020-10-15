function main(x) {
    let reverse = "";
	x = x + "";
    reverse = x.split("").reverse().join("");
    console.log(reverse);
}
main("hello");