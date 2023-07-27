// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

function reverseString(str){
    let str1 = "";
    for(let i= str.length-1; i>=0 ; i--){
        str1 = str1 + str[i]
    }
    return str1;

}
console.log(reverseString("hello world"))