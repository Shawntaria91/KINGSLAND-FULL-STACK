function main(n) {
    let happyNum = [];
  
    for (i = 0; i <= 9999; i++) {
      let num = i.toString().split("").map(Number);
  
      let d1 = num[0];
      let d2 = num[1];
      let d3 = num[2];
      let d4 = num[3];
  
      if (d1 + d2 === n && d3 + d4 === n) {
        happyNum.push(i);
      }
    }
  
    console.log(happyNum.join(" "));
  }
  
  main(3);