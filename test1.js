//write a program that gives some number and until their sum less than 1000 and then 
// calculate average of numbers

const numbers = [120, 400, 600];
let avarage;
let sum = 0;

for (let i of numbers) {
    sum += i;
}

if (sum < 1000) {
    avarage = sum / numbers.length;
    console.log(avarage);
} else {
    console.log('Your numbers are more than 1000');
}

