/*
Fundamentals
1.1 variable (let, const) three types variable  
1.2 condition (<, >, ===, !== <=, >=) && ||, if-else
if-else
1.3 array: declare, length, index push, pop, indexof,
includes
1.4 for loop, while
1.5 fuctionreturn parameter
1.6 objects pro-ert, includin arra, onject


-------------------
ES6
1. template string $()
 2. spread (...)
 2.1 copy an array then add a new element to an array
 2.1 use filter to remove an element from an array
 3. Arrow function
 3.1 no parameter ()
 3.2 single parameters ()
 3.3 multiple parameters ()
 3.4 multi line
 4 destructuring : object destuctuing array destructuring
 5. object shorthand
 6. function parameter default value
 7. optional chaining ?.
 ------------------------------
 Browser API
 1. local stotage session storge
 2, locatioin API
 3. History API
 4. fetch
 ==================
 Othera
 1. array: map, forEach, filter, find
 2, ternary operator
 3. logical and logical or && ||
 4. JOSN (stringify, parse)


*/

// const x = 50;
// const y = 45;
// const obj = {
//     x: x,
//     y: y
// }

// const name = 'Mostofa';
// const area = 'dhaka';
// const nobav ={
//     name: name,
//     area: area
// }

// console.log(nobav);

const name = 'Hero';
const age = 34;
// const person = {name, age}; 
// console.log(person)

const adventurer = {
     name: 'Alice',
     cat: {name: 'Lucy'}
     };
const ratName = adventurer?.name;
// console.log(ratName);

const obj = {a:1};
console.log(Object.keys(obj).length===0);