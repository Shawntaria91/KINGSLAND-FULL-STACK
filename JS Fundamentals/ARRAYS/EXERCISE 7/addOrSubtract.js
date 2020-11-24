function main(nums) {
    let newArray = [];
    let origArraySum = 0;
    let newArraySum = 0;
    
    for (i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            origArraySum += nums[i];
            newArray.push(nums[i] + i);
            newArraySum += nums[i] + i;
        } else {
            origArraySum += nums[i];
            newArray.push(nums[i] - i);
            newArraySum += nums[i] - i;
        }
    }
    console.log(newArray);
    console.log(origArraySum);
    console.log(newArraySum);

}
main([5, 15, 23, 56, 35]);