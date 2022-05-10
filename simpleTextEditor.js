/* HackerRank Question
Implement a simple text editor. The editor initially contains an empty string, S. Perform Q operations of the following 4 types:

1.append(W) - Append string W to the end of S.
2.delete(k) - Delete the last k characters of S.
3.print(k) - Print the kth character of S.
4.undo() - Undo the last (not previously undone) operation of type 1 or 2, reverting S to the state it was in prior to that operation.

Input Format

The first line contains an integer, Q, denoting the number of operations.
Each line i of the Q subsequent lines (where 0 <= i < Q) defines an operation to be performed. Each operation starts with a single integer, t (where t is in {1, 2, 3, 4}), denoting a type of operation as defined in the Problem Statement above. If the operation requires an argument, t is followed by its space-separated argument. For example, if t and W = 'abcd', line i will be 1 abcd.

Constraints
1 <= Q <= 10^6
1 <= k <= S
The sum of the lengths of all W in the input <= 10^6.
The sum of k over all delete operations <= 2*10^6 .
All input characters are lowercase English letters.
It is guaranteed that the sequence of operations given as input is possible to perform.
Output Format

Each operation of type 3 must print the kth character on a new line.

*/

function processData(input) {
  let s = "";
  const commands = input.split("\n").slice(1);
  let changes = [];
  changes.push(s);

  for (let i = 0; i < commands.length; i++) {
    const type = commands[i][0];
    if (type === "1") {
      s += commands[i].substring(2);
      changes.push(s);
    } else if (type === "2") {
      let k = commands[i].substring(2);
      if (k === s.length) {
        s = "";
      } else {
        s = s.substring(0, s.length - k);
      }
      changes.push(s);
    } else if (type === "3") {
      console.log(s[commands[i].substring(2) - 1]);
    } else {
      changes.pop();
      if (changes.length > 0) {
        s = changes[changes.length - 1];
      }
    }
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
