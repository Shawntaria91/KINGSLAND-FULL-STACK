function main(magicNum) {
    for (let num1 = 1; num1 <= 9; num1++) {
      for (let num2 = 0; num2 <= 9; num2++) {
        for (let num3 = 0; num3 <= 9; num3++) {
          if (num1 * num2 * num3 === magicNum) {
            console.log(`${num1}${num2}${num3}`);
          }
        }
      }
    }
  }
  
  main(1);