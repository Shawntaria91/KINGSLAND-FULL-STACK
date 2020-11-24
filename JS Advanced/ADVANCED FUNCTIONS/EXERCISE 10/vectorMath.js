function main() {
    function add(vec1, vec2) {
        let resX = vec1[0] + vec2[0];
        let resY = vec1[1] + vec2[1];
        let addArr = [];
        addArr.push(resX);
        addArr.push(resY);
        console.log(addArr);
    }
    function multiply(vecM1, scalar) {
        let resX = vecM1[0] * scalar;
        let resY = vecM1[1] * scalar;
        let multArr = [];
        multArr.push(resX);
        multArr.push(resY);
        console.log(multArr);
    }
    function length(vecSq) {
        let resX = vecSq[0] * vecSq[0];
        let resY = vecSq[1] * vecSq[1];
        let secDimen = Math.sqrt(resX + resY);
        console.log(secDimen);
    }
    function dot(dot1, dot2) {
        let newX = dot1[0] * dot1[1];
        let newY = dot2[0] * dot2[1];
        let dotAns = newX + newY;
        console.log(dotAns);
    }
    function cross(cross1, cross2) {
        let newX = cross1[0] * cross2[1];
        let newY = cross1[1] * cross2[0];
        let crossAns = (newX - newY);
        console.log(crossAns);
    }
    let solution = {
        add,
        multiply,
        length,
        dot,
        cross
    };
    return solution;
}