function main(num1, num2, num3, num4, num5) {
    var biggest = num1;
    if (num2 > biggest) {
        biggest = num2;
    }
    if (num3 > biggest) {
        biggest = num3;
    } 
    if (num4 > biggest) {
        biggest = num4;
    }
    if (num5 > biggest) {
        biggest = num5;
    }
    console.log(biggest);
    
}
main(-1, -2, -3, -4, -5);