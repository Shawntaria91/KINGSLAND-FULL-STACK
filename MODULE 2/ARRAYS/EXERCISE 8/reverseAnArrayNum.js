function main(n, initialArray) {
    let flip = [];

    for (i = 0; i < n; i++) {
        flip.push(initialArray[i]);
    }
    let newArray = "";

    for (let j = flip.length - 1; j >= 0; j--) {
        newArray += `${flip[j]} `;
    }
    console.log(newArray);
}
main(3, [10, 20, 30, 40, 50]); // 30 20 10

