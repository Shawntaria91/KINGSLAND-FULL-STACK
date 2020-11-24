function main(num) {
    let loadingNum = num / 10;
    if (num == 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    } else if (num < 100) {
        let bar = '[';
        for (i = 0; i < Math.trunc(loadingNum); i++) {
            bar += '%';
        }
        for (; i < 10; i++) {
            bar += '.';
        }
        bar += ']';
        console.log(`${loadingNum * 10}% ${bar}`);
        console.log('Still loading...');
    }
}
main(30);