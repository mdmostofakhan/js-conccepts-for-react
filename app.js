const numbers = [33, 33, 21, 75, 43, 23]
numbers[2] = 555;
// console.log(numbers);

for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i, len, text;
for (let i = 0, len = cars.length, text = ""; i < len; i++) {
   const text = cars[i];
   console.log(text);
  }