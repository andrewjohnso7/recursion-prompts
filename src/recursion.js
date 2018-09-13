/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120

var factorial = function(n) {
  if (n < 0){
    return null;
  }
  if(n === 1 || n === 0){
    return 1;
  }
  return n * factorial(n-1);
};

// console.log(factorial(3));

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
// inputs: array
// outputs: sum of individual elements
/*
base case: when we've reached the end of the array.
recursive case: moving across the array.
make a copy of the array?
*/
  var sum = function(array) {
    if(array.length === 0){
      return 0;
    }
    var first = array[0];
    return first + sum(array.slice(1));
  };
// you don't need the sum variable because the function returns a value


// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15

//base case: when array.length = 0;
//recursive case: subtract one from the array on each iteration
// if the array is nested we need to call the function on that nested array and return
// that value. 

// strats: 
// if array.length <= 0;
// return 0;
// if array.length > 0
// array[array.slice(0,1)] + arraySum(array.slice(1));
// let arraySum = function(array){ // [1,2,3] // [2,3] // [3] // []
//   if(array.length <= 0){ // length === 3 // length === 2 // length === 1 // length === 0
//     return 0; // skip // skip // skip // returns zero on fourth call
//   }
//   if(Array.isArray(array[0])){
//     return arraySum(array[0])
//   }
//   return array[0] + arraySum(array.slice(1)); 
//   // return 1 + arraySum([1,2,3].slice(1) === [2,3]) first call
//   // return 1 + return 2 + arraySum([2,3].slice(1) === [2,3]) second call
//   // return 1 + return 2 + return 3 + arraySum([3].slice(1) === []) third call
//   // return 1 + 2 + 3 + 0 === 6
//   // if the begin in array.slice is greater than the length of the array, an empty array
//   // is returned

  let arraySum = function(array){ // [[1,2],3,4]
    var total = 0;
    if(array.length <= 0){
      return 0; 
    }
    for(var i = 0; i < array.length; i++){
      if(Array.isArray(array[i])){  
        total += arraySum(array[i]); 
      } else {
        total += array[i];
      }
    }
    return total; 
}



// 4. Check if a number is even.
/* inputs: a number
  outputs: a boolean
  constraints: use recursion

  Psuedocode:
  base case is when the number can be divided by two and not return a remainder?

  */
var isEven = function(n) {
  var n = Math.abs(n);
  if (n === 0){
    return true;
  }
  if (n === 1){
    return false;
  }
  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 0){
    return 0;
  }
  if(n < 0){
    return (n + 1) + sumBelow(n + 1);
  }
  return (n - 1) + sumBelow(n-1);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
/* inputs: two numbers
   outputs: an array of every number inbetween the two numbers given
   basecase: when the array has every number
   recursive case:
   x and y are not in the returned array, but everything else inbetween them is.
   So if y-x === 1 there are no integers inbetween them.
*/
//[3,0]
var range = function(x, y) { // 3
  let arr = []; // 
  if(x === y){
    return [];
  }
  if(x < y){
    if(x === y - 1){  // false
      return arr;
    }
    arr = [x + 1].concat(range(x + 1, y)); 
    return arr;
  };
  if(x > y){
    if(x === y + 1){
    return arr;
    }
    arr = [x - 1].concat(range(x - 1, y))  
    return arr;
  };
  
};                          
           
// if(x > y){
//   if(x - y === 1 || x - y === 0){
//     return [];
//   }
//   let arr = [x-1].concat(range(x - 1, y))
//   return arr;
// }

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

/* 
base case: exponent = 0, return 1;
recursive case: if exponent is not zero decrement exponent. 
other cases: if exponent is a negative integer.



*/ // exponent(4,3) // (4, -3)
var exponent = function(base, exp) { // base 4 exp 3 // base 4 exp 2 // base 4 exp 1 // base 4 exp 0
  // base 4 exp -3 // base 4 exp -2 // base 4 exp -1 base 4 exp 0
  if(exp === 0){ // exp 3 // exp 2 // exp 1 // exp === 0!
    return 1; // 1 // returns 1
  }
  if(exp < 0){
    let result = (1 / base * exponent(base, exp + 1)).toFixed(5);  // 1 / base * exp becomes - 2 // 1 /base * exp becomes -1 // 1/base * exp becomes 0//
    return parseFloat(result);                          // 1 / base * 1 /base * 1/base * 1
                                                // 1/4 * 1/4 * 1/4
  }
 return base * exponent(base, exp - 1); //  4 * exp becomes 2 4 * exp becomes 1 4 * exp becomes 0
                                  //  4 * 4 * 4 * 1
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
// base case n = 1 return 1
// recursive case  n / 2
//powerOfTwo(16)
var powerOfTwo = function(n) { // 16 // 8 // 4 // 2 // 1
  if(n === 1){ // 1
    return true;
  }
  if(n < 1){
    return false;
  }
  return powerOfTwo((n / 2)); // (16 / 2) // (8 / 2) (4/2) (2/2)
};
console.log(powerOfTwo(128))

// 9. Write a function that reverses a string.
var reverse = function(string) {
	let arr = [];
//base case: when string is '' return ''
//recursive case: take string.length-1 and push to array, then recurse substr(0, string.length-1)
	if(string.length === 1){
		arr.push(string);
		return arr.join('');
	}; 
	arr.push(string[string.length-1]);
	arr = arr + reverse(string.substr(0, string.length-1));
	return arr;
// 'album'
/*
inputs: a string
outputs: gnirts a 
constraints: use recursion

strategies:
base case: when the string length is zero?
recursive case: subtracting from the end of the string

declare an empty string variable
add characters to it on each call 
subtract characters from the string on each call?
string.slice?? substring??

*/
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) { // 'rotor // oto
/*
inputs: a string
outputs: a boolean
constraints: use recursion
racecar
basecase: if string.length === 1 return true;
recursive case: if string at current is the same as last recurse? 
*/
var string = string.toLowerCase()
if(string.length === 1 || string.length === 0){ // 5 // 3
  return true;
}
if(string[0] === string[string.length - 1]){ // r === r // o === o
  return palindrome(string.slice(1,string.length - 1)) // palindrome('oto')// palindrom('t')
}
return false;

};
console.log(palindrome('sAip puaki v iKaup Pias'));

// nested array use concat
/* 
 11. Write a function that returns the remainder of x divided by y without using the
 modulo (%) operator.
 modulo(5,2) // 1
 modulo(17,5) // 2
 modulo(22,6) // 4

 modulo gives back the remainder of (x / y)
 a remainder is the difference of the greatest number that y can be multiplied by
 without going over x so
 if x = 43 && y = 8, the remainder is 3 because the closest number to 43 that is divisible
 by 8 is 40 or 8 x 5. 43 - 40 = 3.
*/// -22 //-16 // -10 // -4
var modulo = function(x, y) {
  if(y === 0){ 
    return NaN;
  }
  if (x < 0 && y < 0 && y < x){
    return x;
  }
  if(x<0 && y < 0 && x < y){
    y = -y;
    x = -x;
    return - modulo(x - y, y);
  }
  if (x < 0 && y > 0){
    x = -x;
    return - modulo(x + y, y);
  }
  if(x < y){
    return x
  }
  return modulo(x - y, y); 
};
// console.log(modulo(-22, 6))
// console.log(modulo(-275, -274));
// console.log(-275 % -502)
// console.log(-275 % -274)

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
// (2, -4) // (-2, -4) // (-2, -3) // (-2, -2) // (-2, -1) // (-2, 0) 
// false ... true
var multiply = function(x, y) { 
 if(x === 0 || y === 0){ 
   return 0;
 } else if(y < 0){
   return -x + multiply(x, y + 1); 
  } else {
    return x + multiply(x, y - 1);
  }
};
multiply(2,-4); // -8
// -2 + multi(-2, -3) // -2 + -2 + multi(-2, -2) // -2 + -2 + -2 + multi(-2, -1) 
  // -2 + -2 + -2 + -2 + multi(-2, 0) 
// - 2 + -2 + -2 + -2 + 0 = -8
// 13. Write a function that divides two numbers without using the / operator or
// Math methods.
/* x/y
if y is zero, return NaN // (8 / 0)
if y is one, return x (8/1)
if y === x, return 1 (8/8)
if one of them is negative return a negative number return a negative number
(-8/2) (8/-2) === -4
if both of them are negative return a positive number
(-8/-2) (-8/-2) === 4
// basecase when adding y results in y being equal to or greater than x
call modulo when 
*/
var divide = function(x, y) {
  if(y === 0){
    return NaN;
  }
  if (y === 1){
    return x;
  }
  if(y === x){
  return 1;
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if(x === y){
    return x;
  }
  if(x < 0 || y < 0){
    return null;
  }
  if(x < y){
		return gcd(x, y - x);
	} else {
    return gcd(x - y, y);
	}
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
// use slice to compare strings, if str1's character doesn't match str2's character return false
// then recusively slice.
var compareStr = function(str1, str2) {
  if(str1.length === 0 && str2.length === 0){
    return true;
  }  
  if(str1[0] === str2[0]){
    return compareStr(str1.slice(1), str2.slice(1));
  }
  return false; 
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  let arr = [];
  if(str.length === 0){
    return arr
  }
  arr.push(str.slice(0,1));
  arr = arr.concat(createArray(str.slice(1))); // ['t'].concat(['h'].concat([i].concat))
  return arr;
};
// console.log(createArray('this is not a pipe'))

// 17. Reverse the order of an array
var reverseArr = function(array) {
  let arr = [];
  if(array.length === 0){
    return [];
  }
  arr.push(array.pop())
  arr = arr.concat(reverseArr(array))
  return arr;
};
console.log(reverseArr([1,2,3]));


// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  let arr = [];
  if(length === 0){
    return [];
  }
  arr.push(value);
  arr = arr.concat(buildList(value, length - 1));
  return arr;
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
// recursive n - 1 
// basecase = n === 0, return empty array
// recursive case: decrementing n by 1 (n-1) // how I get closer to my base case
// constraints: 
  //use recursion
  //For multiples of three, output 'Fizz' instead of the number.
  // For multiples of five, output 'Buzz' instead of the number.
  // For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
var fizzBuzz = function(n) {  // 3 // 2 // 1 // 0
  if(n === 1){return '1'}
	var x = n + '';	//3	//2	//1
	var outputArr = [];	//[]	//[]	//[]
	if(n % 3 === 0){	//yes	//no	//no
		x = 'Fizz';		//"Fizz"
	};
	if(n % 5 === 0){	//no	//no
		x = 'Buzz';
	};
  if (n % 3 === 0 && n % 5 === 0){	//no	//no	//no	
    x = 'FizzBuzz';
  };
	outputArr.push(x);	//outputArr.push(3) --> [3]		//outputArr.push(2) --> [2]		//outputArr.push(1) ---> [1]
	outputArr.unshift(fizzBuzz(n-1));	
	//[3].unshift([2].unshift(1) ----> [[1,[2],['Fizz]]
	return outputArr.reduce(function(acc, curr){
		return acc.concat(curr);
	},[])
};
// var i; // undefined i // undefined i // undefined i // undefined i
// var arr = []; // [] // [] // [] // []
//   if(n === 0){ // 3 // 2 // 1 // 0
//     return []; // []!!!!!!
//   }
//   if (!i){ // evaluates true // evaluates true // evaluates true
//     i = n; // i = 3 // i = 2
//   }
//   if (i % 3 === 0 && i % 5 === 0){ // false // false // false
//     i = 'Fizzbuzz'
//   }
//   if(i % 5 === 0) { // false // false // false
//      i = 'Buzz'
//   }
//   if(i % 3 === 0) { // true // false // false
//      i = 'Fizz'
//   }
// arr = [i].concat(fizzBuzz(n - 1)); // [1].concat([]) ==> [1]
//  // ['Fizz'].concat(fizzBuzz(3 - 1)) // ['Fizz'].concat([2].concat(fizzBuzz(2-1)))
//   // ['Fizz'].concat([2].concat([1].concat(fizzBuzz(1-1))))
//     // ['Fizz'].concat([2].concat([1].concat([]))))
//       // ['Fizz'].concat([2, 1]))
//         // ['Fizz', 2, 1];
// let brr = []
// for(var i = arr.length - 1; i > 0; i--){

// }
// return arr;
console.log(fizzBuzz(5))

// let arr = [];
// if (n === 1){ 
//   return [1];
// }
// if(n % 3 === 0){ 
// arr.push('Fizz')
// }
// arr = [n].concat(fizzBuzz(n - 1));
// // arr.sort()
// return arr;
// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) { // ([2, 'banana', 2], 2)
  let total = 0 // 0 // 0 // 0 // 0
  console.log(array[0])
  if(array.length === 0){ // 3 // 2 // 1 // 0
    return 0
  }
  if(value === array[0]){ // 2 === 2 // banana !== 2 // 2 === 2
    total++ // 1 // 1
    console.log(value, total)
  }
  console.log(array.slice(1))

  total += countOccurrence(array.slice(1), value);

  return total
};
console.log(countOccurrence(['banana', 2, 'banana'], 'banana'));
// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
/* 
map applies a callback to each item in the array. and then returns an array
*/
let timesTwo = function(item){
  return item * 2
}
console.log(timesTwo(3)); // 6
var rMap = function(array, callback) { // [1,2,3]
let arr = []; // []
  if(array.length === 0){ // 3
    return [];
  }
  arr.push(callback(array[0])); //
  arr = arr.concat(rMap(array.slice(1), callback));
  return arr;
};
let original = [1,2,3];
console.log(rMap(original, timesTwo))
console.log(timesTwo(original[0]))

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
// let original = ['i', 'am', 'learning', 'recursion'];
var capitalizeWords = function(array) {
let arr = [];
  if(array.length === 0){
    return [];
  }
arr.push(array[0].toUpperCase());
arr = arr.concat(capitalizeWords(array.slice(1)));
return arr
};
// console.log(capitalizeWords(original));
// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  if(array.length === 0){
    return [];
  }
};
// let original = ['car','poop','banana']
// original[0] = original[0][0].toUpperCase();
// original
// console.log(original[0][0])

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) { 
  let arr = [];
  for(var i = 0; i < array.length; i++){
    if(typeof array[i] === 'number'){
      arr.push(array[i]); // [1]
    }
    if(Array.isArray(array[i])){
      arr = arr.concat(flatten(array[i])); // [1].concat([2,3].concat([4])).push([5])
    }
  }
  return arr;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
