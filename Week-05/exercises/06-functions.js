//Exercise 6

console.log('***************');
console.log('Exercise 6');
console.log('***************');
console.log('');

//Exercise 6.a

console.log('Exercise 6.a');

var num1, num2;
 num1 = 20;
 num2 = 40;

 function sumNums(num1, num2){
    return num1 + num2;
 }

 console.log(sumNums(num1, num2));
 console.log('');

//Exercise 6.b

console.log('Exercise 6.b');

var num1, num2;
 num1 = 20;
 num2 = 50;

function sumNum(num1, num2){
    if(typeof value1 === 'number'  && typeof value2 === 'number'){
        alert('One of the parameters it´s not a number');
        return NaN;
    }else{
        return num1 + num2;
    }
 }

 console.log(sumNum(num1, num2));
 console.log('');

//Exercise 6.c

console.log('Exercise 6.c');

var value = 100;

function validateInteger(value){
 if(value % 1 == 0){
    return true;
 }else{
    return false;
 }
}

console.log('The number is integer? ' + validateInteger(value));
console.log('');

//Exercise 6.d

console.log('Exercise 6.d');

var value1, value2;
 value1 = 120;
 value2 = 150;

function sumValue(value1, value2){
    if(typeof value1 !== 'number' || typeof value2 !== 'number'){
        alert('One of the parameters it´s not a number');
        return NaN;
    }else if(!validateInteger(value1) || !validateInteger(value2)){
        alert('One of the numbers it´s not an integer');
        value1 = Math.round(value1);
        value2 = Math.round(value2);
    }
    return value1 + value2;
 }

 console.log(sumValue(value1, value2));
 console.log('');

//Exercise 6.e

console.log('Exercise 6.e');

var value1, value2;
 value1 = 320;
 value2 = 150;

function newValidation(value1, value2){
    if(typeof value1 !== 'number' || typeof value2 !== 'number'){
        alert('One of the parameters it´s not a number');
        return NaN;
    }else if(!validateInteger(value1) || !validateInteger(value2)){
        alert('One of the numbers it´s not an integer');
        value1 = Math.round(value1);
        value2 = Math.round(value2);
    }
}

function totalValidation(value1, value2){
    var validar = newValidation(value1, value2);
    if(typeof validar === 'number'){
        return validar;
    }else{
        return value1 - value2;
    }
}

console.log(totalValidation(value1, value2));