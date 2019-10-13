/*

https://www.codewars.com/kata/two-sum/train/javascript

Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

twoSum [1, 2, 3] 4 === (0, 2)

*/

function twoSum(numbers, target) {
    let result = [];
    
    for (let i = 0; i < numbers.length; i++) {
        const firstIntToSum = numbers[i];
        
        numbers.forEach(SecondIntToSum => {
            if (firstIntToSum + SecondIntToSum === target) {

                result.push(numbers.indexOf(firstIntToSum), numbers.indexOf(SecondIntToSum))

            }
        });
    }

    return result;

    if (result.length !== 2) {
        return 'no sum is possible'
    } else {
        return result;
    }
}

// const bar = Array(2);
// console.log(bar.fill(5, 0, 1).fill(4, 1, 2));


const foo = twoSum([1, 2, 3], 4);

console.log(foo);