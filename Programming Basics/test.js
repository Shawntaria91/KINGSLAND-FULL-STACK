function main(numList) {

function newArray(unsorted) {
  let sorted = unsorted.sort((a, b) => b-a);
  let output = [];
  for (let i = 0; i < sorted.length/2; i++) {
    output.push(sorted[i]);
    if (i !== sorted.length - 1 - i) {
      output.push(sorted[sorted.length - 1 - i]);
    }
  } 
 return output;
}

let result = newArray(numList);
console.log(result.join(" "));
}
main([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);


