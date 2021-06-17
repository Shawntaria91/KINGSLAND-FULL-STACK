// 5. Sorted List
// Implement a class, which keeps a list of numbers, sorted in ascending order. It must support the following
// functionality:
//  add(element) - adds a new element to the collection
//  remove(index) - removes the element at position index
//  get(index) - returns the value of the element at position index
//  size - number of elements stored in the collection
// The correct order of the elements must be kept at all times, regardless of which operation is called. Removing and retrieving elements shouldn't work if the provided index points outside the length of the collection (either throw an error or do nothing). Note the size of the collection is not a function.
// What to submit?
// You are only required to submit the List class. No need to include the codes from the example.
// Class Signature: class List
class List {
    constructor() {
        this.arr = [];
        this.size = 0;
    }
    add(element) {
        this.arr.push(element);
        this.arr.sort((a, b) => a - b);
        this.size++;
        return this.arr;
    };
    remove(index) {
        if (index >= 0 && index < this.arr.length) {
            this.arr.splice(index, 1);
            this.arr.sort((a, b) => a - b);
            this.size--;
            return this.arr;
        }
    }
    get(index) {
        if (index >= 0 && index < this.arr.length) {
            return this.arr[index];
        }
    }
}
                                        
let list = new List();                                      
list.add(5);                                                
list.add(6);
list.add(7);
console.log(list.get(1)); //6
list.remove(1);
console.log(list.get(1)); //7
// Input / Output
// All functions that expect input will receive data as parameters. Functions that have validation will be tested with both valid and invalid data. Any result expected from a function should be returned as it's result.
// Your add and remove functions should return a class instance with the required functionality as it's result.
// What to submit?
// You are only required to submit the List class. No need to include the codes from the example above.
// Class Signature: class List