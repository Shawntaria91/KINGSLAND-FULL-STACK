/**
 *The dance consists of N steps, which are being distributed between the dancers. 
 The whole choreography must be learned for a certain number of days. 
 All dancers can memorize no more than 13% of the total steps per day.
 calculates whether the dancers are going to manage to memorize the new dance 
 and what percent of the steps should each dancer memorize.
When calculating the percent of steps per day, round the number to the bigger integer.
Input
The input consists of 3 lines:
1. Number of steps - an integer in the range [1 … 100 000]
2. Number of dancers - an integer in the range [1 … 50]
3. Number of days to rehearse – an integer in the range [1 … 31]

Output
What you print on the console depends on the result:
● If the total percentage of the steps is less than or equal to 13%, print:
o "Yes, they will succeed in that goal! {the percent of steps which every dancer
should memorize per day}%."
● If the total percentage of steps is more than 13%, print:
o "No, they will not succeed in that goal! Required {the percent of steps which
every dancer should memorize per day}% steps to be learned per day."
Both outputs should be formatted to two decimal places.

 */

 function main(steps, dancers, days) {

    var stepsPerDay =((steps / days) / steps) * 100;
    stepsPerDay = Math.ceil(stepsPerDay);
    var percStepsPerDancer = (stepsPerDay / dancers);
    
    if (stepsPerDay <= (0.13) * 100) {
        console.log(`Yes, they will succeed in that goal! ${percStepsPerDancer.toFixed(2)}%.`);
    } else {
        console.log(`No, they will not succeed in that goal! Required ${percStepsPerDancer.toFixed(2)}% steps to be learned per day.`);
    }
 }
 main(10464, 20, 20);