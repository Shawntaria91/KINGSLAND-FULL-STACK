//Use this in terms of inputs and outputs, i.e., functions

var calculateSpeed = function(distance, time) {
    var speed = 0.00;
    speed = distance / time;

    return speed;
};
console.log(calculateSpeed(15,2));

function main(distance, time) {
    calculateSpeed(distance, time);
} 
