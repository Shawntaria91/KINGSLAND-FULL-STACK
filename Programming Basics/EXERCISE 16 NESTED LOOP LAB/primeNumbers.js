function main(firstNum, lastNum) {
    for (let currentNum = firstNum; currentNum <= lastNum; currentNum++) {
      let prime = true,
        divisor = 2;
      let maxDivisor = Math.floor(Math.sqrt(currentNum));
      while (divisor <= maxDivisor) {
        if (currentNum % divisor == 0) {
          prime = false;
          break;
        }
        divisor++;
      }
      if (prime) {
        console.log(currentNum);
      }
    }
  }
  
  main(5, 50);