/* Problem 2 - Even Fibonacci numbers
  Each new term in the Fibonacci sequence is generated by adding the previous
  two terms. By starting with 1 and 2, the first 10 terms will be:

  1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

  # By considering the terms in the Fibonacci sequence whose values do not
  exceed four million, find the sum of the even-valued terms. #
*/

var array = [1,2];
var sum = 2;

while (array[array.length-1] < 4000000) {
  temp = array[array.length-1] + array[array.length-2];
  array.push(temp)
  if (temp % 2 === 0){
    sum += temp;
  }
}

console.log("Problem 2 - Even Fibonacci numbers")
console.log("The sum is " + sum);
console.log("");
