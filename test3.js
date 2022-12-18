//write a program that returns reverse of the number
const number = 12323;
let convertToArray = Array.from(String(number));
let result = Array.from(String(number));
let j = 0;

for (let i = 0; i < convertToArray.length; i++) {
    result[i] = convertToArray[convertToArray.length - ++j];
}

console.log(result.join(''));