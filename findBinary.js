/*
Implement a function findBinary(n), which will generate binary numbers from 1 to n.
input: integer n
output: array of binary numbers
*/

// time and space complexity: O(n)

// for this question, we can use queue(first in first out)
function findBinary(n) {
  let result = [];
  let queue = [];
  queue.push("1");
  for (let i = 0; i < n; i++) {
    let num = queue.shift();
    result.push(num);
    let appendZero = result[i] + "0";
    let appendOne = result[i] + "1";
    queue.push(appendZero);
    queue.push(appendOne);
  }
  for (let j = 0; j < result.length; j++) {
    result[j] = Number(result[j]);
  }

  return result;
}

console.log(findBinary(1));
console.log(findBinary(10));
