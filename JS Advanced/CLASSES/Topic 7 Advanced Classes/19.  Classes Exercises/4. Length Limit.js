class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
        this.preservedVal = innerString;
        this.modLength = innerLength;
    }
    toString() {
            let strCompare = this.preservedVal;
            let strLen = strCompare.length;
            // console.log(this.modLength)
            // console.log(this.innerLength)
            // console.log(this.innerString)
            if (Number(this.modLength) === 0) {
                this.innerString = '...';
            } else if (Number(this.modLength) < Number(this.innerLength)) {
                let minusNum = (Number(this.innerLength) - Number(this.modLength) - 1);
                let modWord = this.innerString;
                let otherVar = modWord.slice(0, minusNum);
                this.innerString = otherVar + "...";
            }
            if (Number(this.modLength) >= strLen) {
                this.innerString = this.preservedVal;
            }
            return this.innerString;
    }  
    increase(num) {
        let addNum = (Number(this.modLength) + num);
        if (addNum > Number(this.innerLength)) {
            addNum = Number(this.innerLength);
        }
        this.modLength = addNum
    }
    decrease(num) {
        let minusNum = (Number(this.modLength) - num);
        if (minusNum < 0) {
            minusNum = 0;
        }
        this.modLength = minusNum;
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); //Test
test.decrease(3);
console.log(test.toString()); //Te...
test.decrease(5);
console.log(test.toString()); //...
test.increase(4);
console.log(test.toString()); //Test