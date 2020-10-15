function main(n) {
    console.log(`<div class="chessboard">`);
    for (i = 0; i < n; i++) {
        console.log('  <div>');
        for (j = 0; j < n; j++) {
            if (i % 2 == 0) {
                if (j % 2 == 0) {
                    console.log(`    <span class="black"></span>`);
                } else {
                    console.log(`    <span class="white"></span>`);
                }
                
            } else {
                if (j % 2 == 0) {
                    console.log(`    <span class="white"></span>`);
                } else {
                    console.log(`    <span class="black"></span>`);
                }
            }
        }
        console.log(`  </div>`);
    }
    console.log(`</div>`);
}
main(3);