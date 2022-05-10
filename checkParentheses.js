/*
write a function isBalanced to check for balanced parenthese
input: string eg. '([{}]))'
output: boolean. determine if the input's openning and closing brackets are properly nested
*/

// time and space complexity: O(n)

function isBalanced(s) {
  // check if string is empty
  if (s.length <= 1) {
    return false;
  }

  // check if string's length is odd, then it must be unbalanced.
  if (s.length % 2 !== 0) {
    return false;
  }

  // convert string into array, to prevent empty spaces in string, we can trim the string before convertion. eg. s = s.replaceAll(' ', '').split('');
  s = s.split("");
  let s1 = s.slice();

  // declare a variable to prevent the excessive iteration of array.
  let count = 0;

  // iterate through the array, each time compare the current index of value to the last removed value. Once they'are not balanced, return false and end; else keep looping until count === current array's length (which means we already checked all values in the array).
  // return true at the end of function to indicate s is balanced.
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      let otherBracket = s1.pop();
      count++;
      if (
        (s[i] === "(" && otherBracket !== ")") ||
        (s[i] === "[" && otherBracket !== "]") ||
        (s[i] === "{" && otherBracket !== "}")
      ) {
        return false;
      }
    } else {
      return false;
    }
    if (count === s1.length) {
      break;
    }
  }
  return true;
}

// Alternate Solution
function isBalanced1(s) {
  // check if string is empty
  if (s.length <= 1) {
    return false;
  }

  // check if string's length is odd, then it must be unbalanced.
  if (s.length % 2 !== 0) {
    return false;
  }

  let length = -1; // set current length as any negative number;

  // reduce parentheses until string is empty or no pair parentheses can be reduced
  while (s.length !== length) {
    length = s.length;
    s = s.replace("()", "");
    s = s.replace("[]", "");
    s = s.replace("{}", "");
  }

  // check if the remaining string is empty(all matching) or not.
  if (s.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isBalanced("{[({})]}"));
console.log(isBalanced("{[(})]}"));
console.log(isBalanced("{[{(})]}"));
console.log(isBalanced("{"));
console.log(isBalanced("[[]"));
// the first solution can't pass the following test
console.log(isBalanced1("{[]}()"));
