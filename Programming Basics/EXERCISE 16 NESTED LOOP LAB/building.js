
function main(floors, rooms) {
    for (let i = floors; i >= 1; i--) {
      let currentFloor = "";
      for (let j = 0; j < rooms; j++) {
        if (i === floors) {
          // Print the last floor
          currentFloor += `L${i}${j} `;
        } else if (i % 2 === 0) {
          currentFloor += `O${i}${j} `;
        } else {
          currentFloor += `A${i}${j} `;
        }
      }
      console.log(currentFloor);
    }
  }
  main(6, 4);
