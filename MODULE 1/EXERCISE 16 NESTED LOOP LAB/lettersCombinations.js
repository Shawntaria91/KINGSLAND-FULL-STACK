function main(start, end, out) {
  let numOfCombos = 0;
  let startAS = start.charCodeAt(0);
  let endAS = end.charCodeAt(0);
  for (let letter1 = startAS; letter1 <= endAS; letter1++) {
      for (let letter2 = startAS; letter2 <= endAS; letter2++) {
          for (let letter3 = startAS; letter3 <= endAS; letter3++) {
              let l1 = String.fromCharCode(letter1);
              let l2 = String.fromCharCode(letter2);
              let l3 = String.fromCharCode(letter3);
              if (l1 != out && l2 != out && l3 != out) {
                  console.log(l1 + l2 + l3);
                  numOfCombos++;
              }
          }
      }
  }
  console.log(numOfCombos);
}
main("a", "c", "b");