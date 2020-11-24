function main(stopNum, nums) {
    var lastNum = stopNum;
    while (true) {
      var num = nums.shift();
      if ((num == stopNum) || (num == undefined))
      break;
      
      lastNum = num;
  }
    console.log(lastNum * 1.2);
  }