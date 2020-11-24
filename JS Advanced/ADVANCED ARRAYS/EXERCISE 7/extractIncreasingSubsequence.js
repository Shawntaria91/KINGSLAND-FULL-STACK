// Write a function that extracts only those numbers that form a non-decreasing subsequence. In other
// words, you start from the first element and continue to the end of the given array of numbers. Any
// number which is LESS THAN the current biggest one is ignored, alternatively if it’s equal or higher than the
// current biggest one you set it as the current biggest one and you continue to the next number.
// The input comes as an array of numbers.
// The output is the processed array after the filtration, which should be a non-decreasing subsequence.
// Each element should be printed on a new line.
function main(nums) {
    nums = nums.map(Number);
    let output = [];
    let currBiggest = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= currBiggest) {
            output.push(nums[i]);
            currBiggest = nums[i];
        }
    }
    console.log(output.join('\n'));
}
main([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]);