function main(str1, str2, str3) {

    let sumLength;
    let avgLength;

    let str1Length = str1.length;
    let str2Length = str2.length;
    let str3Length = str3.length;

    // Calculate sumLength
    sumLength = Math.floor(str1Length + str2Length + str3Length);
    console.log(sumLength);

    //Calculate avgLength
    avgLength = Math.floor(sumLength / 3);
    console.log(avgLength);

}
main('chocolate', 'ice cream', 'cake');
// Output: 
// 22
// 7