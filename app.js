// Q no : 01 Reverse the Number

// function reverce_num () {
//   var enter_num = +prompt("Enter the Number then I Reversed the Number!");
//   return enter_num.toString().split("").reverse().join("");
// }
// console.log(reverce_num())




// Q no : 02 /  passed string is palindrome or not?

// function palindrome_str () {
//    var enter_str = prompt("Enter String Then I reversed your String!");
//    console.log(enter_str.split("").reverse().join(""));
// }
// palindrome_str()






// Q no : 03 / Combination String!

// function combString(str){
//   var lenStr = str.length; // 3
//   var result = []; //  []
//   for (var indexCurrent = 0; indexCurrent < lenStr; indexCurrent++) { // undefined
//   var char = str.charAt(indexCurrent);
//   var x;
//   var arrTemp = [char];
//   for(x in result) {
//       console.log(arrTemp.push(""+result[x]+char))
//   }
//   result = result.concat(arrTemp);
// }
//   return result;
// }

// console.log(combString("dog"));






// Q no : 04 / Write a JavaScript function that returns a passed string with letters in alphabetical order.

// function alphabetic_order() {
//    var arr = ["apple"];
//    return arr[0].split('').sort().join("");
// }

// console.log(alphabetic_order())





// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

// function first_letter_upeercase(str) {
//    var Split_str = str.split(" ");
//    for(var i =0; i< Split_str.length; i++) {
//     console.log(Split_str[i].charAt(0).toUpperCase() + Split_str[i].slice(1))
//    }
// }
// first_letter_upeercase("the quick brown fox")



// 6 : Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

// function find_longest_word(str){
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++){
//     if(result.length < array1[x].length){
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word('Web Development Tutorial'));



// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

// function vowel_count(str1){
//       var vowel_list = 'aeiouAEIOU';
//       var vcount = 0;
//       var test = -1
//       for(var x = 0; x < str1.length ; x++){
//         if (vowel_list.indexOf(str1[x]) !== test) {
//           vcount += 1;
//         }
//       }
//       return vcount;
//     }
//     console.log(vowel_count("The quick brown fox"));


// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.


// take input from the user
// const number = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;

// // check if number is equal to 1
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number > 1) {

//     // looping through 2 to number-1
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }

// // check if number is less than 1
// else {
//     console.log("The number is not a prime number.");
// }


// function detect_data_type(value)
// {
// var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
// if (typeof value === "object" || typeof value === "function") 
//     {
//      for (x = 0, len = dtypes.length; x < len; x++) 
//      {
//             if (value instanceof dtypes[x])
//             {
//                 return dtypes[x];
//             }
//       }
//     }
    
//     return typeof value;
// }
// console.log(detect_data_type(12));
// console.log(detect_data_type('w3resource'));
// console.log(detect_data_type(false));


// function Second_Greatest_Lowest(arr_num)
// {
//   arr_num.sort(function(x,y)
//            {
//            return x-y;
//            });
//   var uniqa = [arr_num[0]];
//   var result = [];
  
//   for(var j=1; j < arr_num.length; j++)
//   {
//     if(arr_num[j-1] !== arr_num[j])
//     {
//       uniqa.push(arr_num[j]);
//     }
//   }
//     result.push(uniqa[1],uniqa[uniqa.length-2]);
//   return result.join(',');
//   }

// console.log(Second_Greatest_Lowest([1,2,3,4,5]));