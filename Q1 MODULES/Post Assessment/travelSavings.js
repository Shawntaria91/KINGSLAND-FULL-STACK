function main(tripInfo) {
    let destination;
    while ((destination = tripInfo.shift()) != "End") {
      let totalRequired = Number(tripInfo.shift());
      let totalCollected = 0;
      while (totalCollected < totalRequired) {
        totalCollected += Number(tripInfo.shift());
        console.log(`Collected: ${totalCollected}`);
      }
      console.log(`Going to ${destination}!`);
    }
  }
  
  main(["Bali", 3500, 800, 1800, 1000, "Brazil", 4600, 5000, "End"]);