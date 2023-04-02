// 1. Given an array of numbers, find the smallest number
let smallArr = [5, 2, 10, -20, 1, 4];

function smallestNumber(smallArr){
    let smallest = smallArr[0];
    for (let i=0; i<smallArr.length; i++){
        if(smallArr[i]<=smallest){
            smallest=smallArr[i];
        }
    }
    return smallest;
}

console.log(smallestNumber(smallArr));

//2. Given an array of numbers, find the largest number
let largeArr = [5, 100, 10, -20, 1, 4];

function largestNumber(largeArr){
    let largest = largeArr[0];
    for (let i=0; i<largeArr.length; i++){
        if(largeArr[i]>=largest){
            largest=largeArr[i];
        }
    }
    return largest;
}

console.log(largestNumber(largeArr));

// 3. Given an array of numbers, find the sum of all numbers
let sumArr = [5, 100, 10, 20, 1, 4];

function sumOfNumbers(sumArr){
    let sum =0;
    for (let i=0; i<sumArr.length; i++){
        sum+=sumArr[i];
    }
    return sum;
}

console.log(sumOfNumbers(sumArr));

// 4. Given an array of string, create a new array with the first letter of each string

let str=['Hello', 'world', 'by', 'javascript'];

function firstLetter(str){
    let firstLetterArray=[];
    for(let i=0; i<str.length; i++){
        firstLetterArray.push(str[i][0]);
    }
    return firstLetterArray;
}
console.log(firstLetter(str));

// 5. Given an array of numbers, create a new array with only the even numbers
let numArr=[2,4,7,12,17,19];

function evenNum(numArr){
    let evenArr=[];
    for(let i=0; i<numArr.length; i++){
        if (numArr[i]%2==0)
            evenArr.push(numArr[i]);
    }
    return evenArr;
}

console.log(evenNum(numArr));

// 6. Given an array of string, find the longest string

let str2=['Hello', 'world', 'by', 'javascript'];

function findLongest(str2){
    let longestStr = str2[0];

    for(let i=0; i<str2.length; i++){
        if(str2[i].length > longestStr.length){
            longestStr=str2[i];
        }
    }
    return longestStr;
}

console.log(findLongest(str2));

// 7. Given an array of numbers, find the average
numArray=[2,5,7,4,10];

function avgNum(numArray){
    let sum = 0;
    for(let number of numArray){
        sum+=number;
    }
    return sum/numArray.length;
}
console.log(avgNum(numArray));

// 8. Given an array of strings, sort them in alphabetic order
let strAlpha=['hello', 'world', 'by', 'javascript'];

function alphabeticArr(strAlpha){
    strAlpha.sort();
    return strAlpha;
}
console.log(alphabeticArr(strAlpha));

// 9. Given an array of numbers, remove all duplicates
let numDupli=[2,5,5,9,11,13,13,15];

function removeDupli(numDupli){
    let newNumDupli = [...new Set(numDupli)];
    return newNumDupli;
}
console.log(removeDupli(numDupli));

// 10. Given an array of integers, find two numbers that add up to a target value
let intArr=[1,5,7,9,4,11];
let target=13;

function findTarget(intArr, target){
    let flag=false;
    for (let i=0;i<intArr.length; i++){
        for (let j=i+1; j<intArr.length; j++) {
            if (intArr[i] + intArr[j] === target) {
                console.log(intArr[i],intArr[j]);
                flag=true;
            }
        }
    }
    if(!flag){
        console.log("Target not found");
    }
}
(findTarget(intArr, target));

// 11. A food ordering app needs to sort the menu items by price.
