function main(n) {
    var combination = "";
    for (var evenNum = 2; evenNum <= n; evenNum += 2) {
      for (var oddNum = 1; oddNum <= n; oddNum += 2) {
        var productNum = evenNum * oddNum;
        combination += `${evenNum}${oddNum}${productNum} `;
      }
    }
    console.log(combination);
  }
  
  main(11);