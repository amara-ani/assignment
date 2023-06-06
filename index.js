// Create a function that will be able to convert figures from Fahrenheit to Celsius.
function FahtoCel(fahrenheit) {
  fah = fahrenheit - 32;
  celsius = fah * (5 / 9);
  return celsius;
}
console.log(FahtoCel(73)); //22.77777777777778

// Create a function that will calculate the average of numbers in an array.
function AveNum() {
  var array_to_check = [5, 10, 16];
  var len = array_to_check.length;
  var sum = 0;
  var not_num = 0;
  for (let i = 0; i < len; i++) {
    if (array_to_check[i] <= 0 || array_to_check[i] >= 0) {
      var sum = sum + array_to_check[i];
    } else {
      not_num = not_num + 1;
    }
  }
  var average = sum / (len - not_num);
  return average;
}
console.log(AveNum()); //10.333333333333334

// Create a function that checks if a numb n is divisible by two numbers x and y. All inputs are positive, non-zero digits.
function divible(n) {
  var count = 0;
  if (n >= 0) {
    for (let i = 0; i <= 100; i++) {
      if (n % i == 0 && i != n) {
        count = count + 1;
      }
      if (count == 2) {
        a = `${n} is not a prime number`;
        return a;
        break;
      }
    }
    if (count < 2) {
      b = `${n} is a prime number`;
      return b;
    }
  } else {
    c = `All inputs must be greater than 0`;
    return c;
  }
}
console.log(divible(83)); //83 is a prime number

// Create a function that will output the first 100 prime numbers.
function primeNum() {
  var count = 0;
  total_number = 0;
  for (let i = 1; i <= 1000; i++) {
    var count = 0;
    for (let j = 1; j <= 1000; j++) {
      if (i % j == 0 && i != j) {
        count = count + 1;
      }
    }
    if (count < 2) {
      total_number = total_number + 1;

      if (total_number > 100) {
        break;
      }
      console.log(i);
    }
  }
}
console.log(primeNum()); // 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523

// Create a function that will return a boolean specifying if a number is a prime number.
function divible_in_boolean(n) {
  var count = 0;
  for (let i = 0; i <= 100; i++) {
    if (n % i == 0 && i != n) {
      count = count + 1;
    }
    if (count == 2) {
      return 0; //not a prime number
      break;
    }
  }
  if (count < 2) {
    return 1; //prime number
  }
}
console.log(divible_in_boolean(103)); //1

// Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.
function DiffArray() {
  var my_array = ["b", 3, 13, -2, 24, 4, -25, -1, 2, "v", 19, -3, -4, 6];
  var a = my_array.length;
  var b = [];
  for (let i = 0; i < a; i++) {
    if (my_array[i] > 0) {
      const index = my_array.indexOf(my_array[i]);
      var x = my_array.splice(index, 1);
      i = i - 1;
      b.push(x);
    }
  }
  console.log(b);
  return b;
}

DiffArray(); //[3, 13, 24, 4, 2, 19, 6]

/* Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz".
 */
function multiples() {
  for (var i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
      console.log(`FizzBuzz`);
    } else if (i % 5 == 0) {
      console.log(`Buzz`);
    } else if (i % 3 == 0) {
      console.log(`Fizz`);
    } else {
      console.log(i);
    }
  }
  return i;
}
multiples(); //1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, FizzBuzz, 31, 32, Fizz, 34, Buzz, Fizz, 37, 38, Fizz, Buzz, 41, Fizz, 43, 44, FizzBuzz, 46, 47, Fizz, 49, Buzz, Fizz, 52, 53, Fizz, Buzz, 56, Fizz, 58, 59, FizzBuzz, 61, 62, Fizz, 64, Buzz, Fizz, 67, 68, Fizz, Buzz, 71, Fizz, 73, 74, FizzBuzz, 76, 77, Fizz, 79, Buzz, Fizz, 82, 83, Fizz, Buzz, 86, Fizz, 88, 89, FizzBuzz, 91, 92, Fizz, 94, Buzz, Fizz, 97, 98, Fizz, Buzz

/* The marketing team is spending way too much time typing in hashtags. Let’s create a hashtag generator for them, our hashtag generator will meet the following criteria; 
It must start with a hash symbol, #.
*/
function hashtag(full_tag) {
  //If the input or result is an empty string, it should return false.
  if (full_tag != " ") {
    //All words must have their first letter capitalized.
    const str = full_tag;
    const array = str.split(" ");
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
    var word_cap = array.join(" ");
    //Ignore all spaces in the input.
    word_cap = word_cap.replace(/\s+/g, "");
    //If the final result is going to be longer than 140 characters, it should return false.
    if (word_cap.length > 140) {
      return false;
    } else {
      a = `#${word_cap}`;
      console.log(a);
    }
  } else {
    return false;
  }
}
hashtag("yes oo i hope i did it well"); //#YesOoIHopeIDidItWell
