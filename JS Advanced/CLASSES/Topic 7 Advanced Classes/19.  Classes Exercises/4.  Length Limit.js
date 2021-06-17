class Stringer {

    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = +innerLength;

        this.tempString = innerString;
        this.tempLength = +innerLength;
    }
    toString() { 
        let currentStr = this.tempString;
        let currentLength = currentStr.length;
        let newIndex = currentLength - this.tempLength;
        let newString = currentStr.slice(0,newIndex);

        currentLength === 0 ? currentStr = '...' :
        currentLength < this.innerLength ?  currentStr = `${newString}...` : 0;
        currentLength >= this.innerLength ? currentStr = this.innerString : 0;
        this.tempString = currentStr;
        return this.tempString;
    } 
    increase(num) {
        let newLength = this.tempLength + num;
        newLength > this.innerLength ? newLength = this.innerLength : 0;
        this.tempLength = newLength;
        return this.tempLength;
    }
    decrease(num) {
        let newLength = this.tempLength - num;
        newLength < 0 ? newLength = 0 : 0;
        this.tempLength = newLength;
        return this.tempLength;
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


