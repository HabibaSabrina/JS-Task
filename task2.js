//Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
function posSum(theArr){
    let posSum=0;
    for(let num of theArr){
        if(num>0){
            posSum+=num
        }
    }
    return posSum

}
console.log(posSum([2, -5, 10, -3, 7]))