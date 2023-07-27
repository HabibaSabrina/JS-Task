//Task 3: Write a JavaScript program to find the most frequent element in an theArray and return it. 
function frequentNum(theArr) {
    const numberCount = {};
    let higherFrequent = 0;
    let mostFrequentElement = null;
    for(let num of theArr){
        if (numberCount[num]) {
            numberCount[num]++;
          } else {
            numberCount[num]=1;
          }
        if (numberCount[num] > higherFrequent) {
            higherFrequent = numberCount[num];
            mostFrequentElement = num;
        }
    }
    return mostFrequentElement;
}
console.log(frequentNum([3, 5, 2, 3, 3, 1, 4, 5]))