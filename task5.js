//Task 5: Implement a simple JavaScript calculator.
function calculator(a,b,operator){
    if(operator === '+'){
        return a+b;
    }
    else if(operator === '-'){
        return a-b;
    }
    else if(operator === '*'){
        return a*b;
    }
    else{
        return a/b;
    }

}
console.log(calculator(2,3,'+'))