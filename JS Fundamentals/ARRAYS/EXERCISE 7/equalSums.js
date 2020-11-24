// no elements to the left/right, the sum = 0
// if the left sum = rigth sum, then print the current index. 
// else, print no. 


function main(list) {

    let element = 1;
    let winner = false;

    while (element < list.length) {
        let leftSum = 0;
        let rightSum = 0;
        for (i = 0; i < element; i++) {
            leftSum += list[i];
        }
        for (i = element + 1; i < list.length; i++) {
            rightSum += list[i];
        }

        if (leftSum == rightSum) {
            winner = true;
            break;
        }
        element++;
    }
    if (list.length == 1) {
        console.log(0);
    } else if (winner) {
        console.log(element);
    } else {
        console.log('no');
    }
}
main([1, 2, 3, 3]);
