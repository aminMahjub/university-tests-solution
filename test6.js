const twoNumbersConcatenation = Array.from(String('11') + String('0'), Number); 

let evenDigit = [];
let oddDigit = [];

for (let i = 0; i < twoNumbersConcatenation.length; i++) {
    if (twoNumbersConcatenation[i] % 2 === 0) evenDigit.push(twoNumbersConcatenation[i]);
    else oddDigit.push(twoNumbersConcatenation[i]);
}

// 1234453224
// 2 4 4 2 2 4
console.log(`Even number is ${evenDigit.join('')}\nOdd number is ${oddDigit.join('')}`);