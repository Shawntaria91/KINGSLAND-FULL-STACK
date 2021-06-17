// 5. Vector Math
// Write several functions for performing calculations with vectors in 2D space and collect them all in a
// single object (namespace), so they don’t pollute the global scope. Implement the following functions:
// ● add(vec1, vec2) - Addition of two vectors -
// ● multiply(vec1, scalar) - Scalar multiplication -
// ● length(vec1) - Vector length -
// ● dot(vec1, vec2) - Dot product of two vectors -
// ● cross(vec1, vec2) - Cross product of two vectors -
// The math-savvy may notice that the given cross product formula results in a scalar, instead of a vector - we’re only
// measuring the length of the resulting vector, since cross product is not possible in 2D, it will exist purely in the
// z-dimension. If you don’t know what this all means, ignore this paragraph, it’s irrelevant to the solution.
// Input
// Each separate function in your namespace will be tested with individual values. It must expect one or two
// arguments, as described above, and return a value. Vectors will be 2D arrays with format [x, y].
// Output
// Your program needs to return an object, containing all functions described above. Each individual function must
// return a value, as required. Don’t round any values.

function main() {
    function add(vec1, vec2) {//  [1 + 1], [1 + 0] = [2, 1]
        let newX = vec1[0] + vec2[0];
        let newY = vec1[1] + vec2[1];
        let addArr = [];
        addArr.push(newX);
        addArr.push(newY);
        console.log(addArr);
    }

    function multiply(vecM1, scale) {//  [3.5 * 2, (-2) * 2] = [7, -4]        ([3.5, -2], 2)
        let newX = vecM1[0] * scale;
        let newY = vecM1[1] * scale;
        let multiplyArr = [];
        multiplyArr.push(newX);
        multiplyArr.push(newY);
        console.log(multiplyArr);
    }

    function length(vecSq) {//  sqrt(3 * 3) + ((-4) * (-4))) = 5
        let newX = vecSq[0] * vecSq[0];
        let newY = vecSq[1] * vecSq[1];
        let squareD = Math.sqrt(newX + newY);
        console.log(squareD);
    }

    function dot(dot1, dot2) {//  1 * 0 + 0 * (-1) = 0
        let newX = dot1[0] * dot1[1];//0
        let newY = dot2[0] * dot2[1];//0
        let dotAns = newX + newY;//0
        console.log(dotAns);
    }

    function cross(cross1, cross2) {//  3 * 0 – 7 * 1 = -7    [3, 7], [1, 0]
        let newX = cross1[0] * cross2[1];//0
        let newY = cross1[1] * cross2[0];//7
        let crossAns = (newX - newY);//-7
        console.log(crossAns);
    }

    let solution = {

        add,
        multiply,
        length,
        dot,
        cross,
    };

    return solution;
}
let solution = main();
solution.add([1, 1], [1, 0]); //     [2, 1]          [1 + 1, 1 + 0] = [2, 1]
solution.multiply([3.5, -2], 2);//  [7, -4]          [3.5 * 2, (-2) * 2] = [7, -4]
solution.length([3, -4]); //              5          sqrt(3 * 3 + (-4) * (-4)) = 5
solution.dot([1, 0], [0, -1]); //         0          1 * 0 + 0 * (-1) = 0
solution.cross([3, 7], [1, 0]); //       -7          3 * 0 – 7 * 1 = -7