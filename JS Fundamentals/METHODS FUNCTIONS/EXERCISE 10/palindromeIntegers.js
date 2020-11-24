// A palindrome is a number which reads the same backward as forward, such as 323 or 1001. 
// Write a function which receives an array of positive integer
// checks if each integer is a palindrome or not.
    function palindrome(num) {
        let currentNum = num.toString().split("");
        let reverseCurrentNum = [...currentNum];
        reverseCurrentNum.reverse();
        for (let i = 0; i < currentNum.length; i++) {
            if (currentNum[i] != reverseCurrentNum[i]) {
                return false;
            }
        }
        return true;
    }
    function main(arr) {
        for (let i = 0; i < arr.length; i++) {
            let returnValue = palindrome(arr[i]);
            if (returnValue == true) {
                console.log(true);
            } else {
                console.log(false);
            }
        }
    }
    main([123, 323, 421, 121]);