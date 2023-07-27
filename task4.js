// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
 function sumUp(theArr, num){
    
    theArr = theArr.sort(function(a, b){return a - b})
    for(i=0; i<theArr.length;i++){
        let sum=0;
        for(let j=i+1; j< theArr.length;j++){
            sum= theArr[i] + theArr[j];
            if(sum == num){
            return [i, j]
            }
        }
    }

 }
 console.log(sumUp([1, 3, 6, 8, 11, 15], 9))