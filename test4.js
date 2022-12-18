// write a program that gets the number and returns even and odd of the number's digit
const number = 456758793;
let convertToArray = Array.from(String(number), Number);

for (let digit of convertToArray) {
    if (digit % 2 === 0) console.log(`Even digit: ${digit}`);
    else console.log(`Odd digit: ${digit}`);
}