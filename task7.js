//Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
function convertor(theRoman){
    let theValueArr = []
    let sum =0
    for(let char of theRoman){
        if(char == 'I'){
            theValueArr.push(1)

        }
        else if(char == 'V'){
            theValue+=5
            theValueArr.push(5)

        }
        else if(char == 'X'){
            theValueArr.push(10)

        }
        else if(char == 'L'){
            theValueArr.push(50)

        }
        else if(char == 'C'){
            theValueArr.push(100)

        }
        else if(char == 'D'){
            theValueArr.push(500)

        }
        else if (char == 'M'){
            theValueArr.push(1000)

        }
        
    }
    let theInstant = 0;
    for(i=theValueArr.length-1; i>=0;i--){
        if(sum == 0){
            sum+=theValueArr[i]
        }
        else if(theInstant > theValueArr[i]){
            sum = sum - theValueArr[i];
        }
        else{
            sum = theValueArr[i] + sum;
        }
        theInstant = theValueArr[i];
    }
    return sum;
}
console.log(convertor("XXI"))