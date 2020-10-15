// Write a function that receives an array of strings in the following format '{cat name} {age}'.

// Create a Cat class that receives in the constructor the name and the age parsed from the input.

// It should also have a function named "meow" that will print "{cat name}, age {age} says Meow" on the

// console.

// For each of the strings provided you must create a cat object.



function main(arr) {

    class Cat {

        constructor(catName, age) {

            this.catName = catName;
            this.age = age;
            this.meow = () => {

                console.log(`${catName}, age ${age} says Meow`);
            };

            // TODO: can be deleted and still work. 
            var catObj = {
            
                catName: catName,
                age: age,
            };          
        }

    }

    let cats = [];

    for (let i = 0; i < arr.length; i++) {

        let aboutCat = arr[i].split(" ");
        let [catName, age] = [aboutCat[0], aboutCat[1]];
        cats.push(new Cat(catName, age));
    }

// TODO: Iterate through cats[] and invoke .meow() using for-of loop

    for (cat of cats) {

        cat.meow();

    }
}

main(['Mellow 2','Tom 5']);