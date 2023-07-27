// Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
function secondSmall(theArr){
    theArr = theArr.sort(function(a, b){return a - b})
    return theArr[1] ? theArr[1] : theArr[0]

}
console.log(secondSmall([1,9,8,4,6,10,5]))