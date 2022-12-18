const number = 102300;
let convertToArray = Array.from(String(number), Number);

for (let i = 0; i < convertToArray.length; i++) {
    if (convertToArray[i] === 0) {
        convertToArray[i] = null;
    }
}

console.log(convertToArray.join(''));