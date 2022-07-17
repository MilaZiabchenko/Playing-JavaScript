// Operations with numbers

// Operators: +, -, *, /, %, **

let radius = 10;
const pi = 3.14;

let modulus = radius % 3;

console.log(modulus);

let area = pi * radius ** 2;

console.log(area);

// Order of math operations (B E D M A S)

let result = 5 * (10 - 3) ** 2;

console.log(result);

// Shorthand notation

let likes = 12;
likes++;

console.log(likes);

likes--;

console.log(likes);

likes += 5; // likes = likes + 5;

console.log(likes);

likes -= 7;

console.log(likes);

likes **= 2;

console.log(likes);

likes /= 4;

console.log(likes);

// Template string

result = `The blog has ${likes} likes.`;

console.log(result);

// Template strings with HTML templates

// A good use case for template strings is to create HTML templates, so say, for example, we have some dynamic content that we got back from a database, and we want to create an HTML template with that content embedded inside it, then output it to the browser somewhere
const title = 'Best reads of 2019';
const author = 'Mario';

let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes.</span>
`;

console.log(html);

// Arrays
let ninjas = ['shaun', 'ryu', 'chun-li'];
ninjas[1] = 'ken';

console.log(ninjas);

// Array methods

ninjas = ninjas.concat(['ryu', 'neo']);

console.log(ninjas);

const ninjasString = ninjas.join(', ');

console.log(ninjasString);

const ninjasArray = ninjasString.split();

console.log(ninjasArray);

// Destructive methods

// Some methods don't alter the original value, while some methods do, and for that reason we call them destructive

result = ninjas.push('rafa');

console.log(result);
console.log(ninjas);

result = ninjas.pop();

console.log(result);
console.log(ninjas);
console.log(ninjas[33]);

let age;

console.log(
  age,
  age + 3,
  age + 'age',
  `The age is ${age}`,
  age + true,
  age + null,
  age + undefined
);

// We can't call any properties or methods on null
age = null;

console.log(
  age,
  age + 3,
  age + 'age',
  `The age is ${age}`,
  age + true,
  age + null,
  age + undefined
);

age = false;

console.log(
  age,
  age + 3,
  age + 'age',
  `The age is ${age}`,
  age + true,
  age + null,
  age + undefined
);

age = true;

console.log(
  age,
  age + 3,
  age + 'age',
  `The age is ${age}`,
  age + true,
  age + false,
  age + null,
  age + undefined
);

console.log(undefined + [], null + [], true + []);

// Methods that return booleans

const email = 'leo@home.com';

result = email.includes('leo') && !!email.includes('@');

console.log(result);

const names = ['mario', 'luigi', 'toad'];

result = names.includes('mario') && names.includes('toad');

console.log(result);

// Comparison operators

// All comparison operators return booleans

// '==' comparison operator stands for an abstract(loose) equality which means that a value's type is not considered when we perform a comparison, and different types can be equal

// Behind the scenes JS is implicitly converting a string into a number before evaluating it

age = 25;

console.log(age == 25);
console.log(age == '25');
console.log(age == 38);
console.log((age = 38));
console.log(age == 25);
console.log(age == 38);
console.log(age != 25);
console.log(age != '25');
console.log(age != '38');
console.log(age > 20);
console.log(age < 20);
console.log(age >= 38);

let firstName = 'shaun';

console.log(firstName == 'shaun');
console.log(firstName == 'Shaun');
console.log(firstName > 'rafa');
console.log(firstName > 'teo');
console.log('teo' > 'Teo');
console.log('Shaun' > firstName);
console.log('Teo' > firstName);

// Strict comparison

// Different types cannot be equal
console.log(age === 38);
console.log(age === '38');
console.log(age !== 38);
console.log(age !== '38');

let score = '100';

console.log(score + 1, typeof (score + 1));
console.log(+score, typeof +score);

score++;

console.log(score, typeof score);

// Explicit type conversion

result = Number('100');

console.log(result + 1, typeof result);

result = Number('Hello');

console.log(result);

result = String(50);

console.log(result, typeof result);

result = Boolean(Infinity);

console.log(result, typeof result);

result = Boolean(-10.25);

console.log(result, typeof result);

result = Boolean(0);

console.log(result, typeof result);

result = Boolean([]);

console.log(result, typeof result);

result = Boolean({});

console.log(result, typeof result);

// Strings of any length are all truthy
result = Boolean('0');

console.log(result, typeof result);

// An empty string (with no length) is falsy
result = Boolean('');

console.log(result, typeof result);

// Loops, conditional statements & control flow

// The concepts of looping and conditionals are collectively known as control flow in JS

// 'For' loop

for (let i = 0; i < names.length; i++) {
  html = `<div>${names[i]}</div>`;
  console.log(html);
}

// 'While' loop

let i = 0;

while (i < names.length) {
  console.log(names[i]);
  i++;
}

// 'Do/while' loop is an extension of 'while' loop. It lets us perform a code at least once regardless of whether the value of the iterator complies or not with the condition

i = 82;

do {
  console.log('The value of i is', i);
  i++;
} while (i < 5);

console.log('Loop finished');

i = 3;

do {
  console.log('The value of i is', i);
  i++;
} while (i < 5);

console.log('Loop finished');

// If(conditional) statement

// Logical operators

const password = 'p@ss123987pss';

if (password.length >= 12 && password.includes('@')) {
  console.log('This password is mighty strong');
} else if (
  password.length >= 8 ||
  (password.includes('@') && password.length > 5)
) {
  console.log('This password is strong enough');
} else {
  console.log('This password is not strong enough');
}

// Logical NOT (!)

console.log(!true);
console.log(!false);

let user = false;

if (!user) {
  console.log('You must be logged in to continue');
}

// Keywords 'break' and 'continue'

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    continue;
  }

  console.log('Your score is:', scores[i]);

  if (scores[i] === 100) {
    console.log('Congrats, you got the top score!');
    break;
  }
}

// Switch statement

// Switch statements use strict equality to check
const grade = 'B';

switch (grade) {
  case 'A':
    console.log('You got an A');
    break;
  case 'B':
    console.log('You got a B');
    break;
  case 'C':
    console.log('You got a C');
    break;
  case 'D':
    console.log('You got a D');
    break;
  case 'E':
    console.log('You got an E');
    break;
  default:
    console.log('Not a valid grade');
}

// Block level scope with variables

// Scope means the area in which a variable value is relevant

// If we define a variable, using let or const, in the root of the document, meaning not inside any code block, that will have global scope, and that means it can be accessed anywhere in the file, including block area

// We are allowed to redefine a global variable inside a (nested) code block, but not in the root of the document

console.log(`The age is ${age} outside code block`);

if (age) {
  let age = 30;
  console.log(`The age is ${age} inside code block`);

  if (age) {
    let age = 35;
    console.log(`The age is ${age} inside 1st nested code block`);
  }

  if (age) {
    console.log(`The age is ${age} inside 2nd nested code block`);
  }
}

// Functions

// Hoisting with function declaration
greet();

// Function declaration

function greet() {
  console.log('Hello there!');
}

greet();

// Function expression

// We can also store functions in variables and invoke them in a very similar way

// We can pass values into functions, creating local variables inside the function parentheses and using them inside a code block

const speak = function (name = 'guys', time = 'night') {
  console.log(`Good ${time}, ${name}!`);
}; // When we store a function in a variable (like with any other variable expression), there's a semicolon at the end of a code block

// A function assigns default values to the parameters, when we don't pass arguments into it
speak();
speak('Shaun');

// The order of the arguments must match the order of the parameters of the function
speak('Mario', 'day');

// Most of the time these two ways of creating functions behave the same way, but there's a subtle difference when it comes to hoisting in JS. This term loosely describes how a function is hoisted to the top of a file before the rest of our JS actually runs. It does this with function declaration, but it doesn't do it with function expression

// Arrow function

const calcArea = radius => 3.14 * radius ** 2;

// When a function returns a value, to use it later on we need to store that value in a variable which has global scope

area = calcArea(5);

console.log(`The area is ${area}`);

const bill = (products, tax) => {
  let total = 0;

  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }

  return total;
};

result = bill([30, 15, 10], 0.2);
console.log(`Your bill is $${result}.`);

// The difference between functions and methods is just the way we invoke them and where they are defined
const greeting = () => 'Hello';

// Invoking a function
const greeting1 = greeting();

console.log(greeting1);

// Invoking a method
const greeting2 = greeting1.toUpperCase();

console.log(greeting2);

// Callback

// Callback functions are functions that we pass in as an argument of another function

const myFunc = callbackFunc => {
  let value = 50;
  // We invoke a callback function inside of a parent function:
  callbackFunc(value);
};

myFunc(value => console.log(value + 12));

// ForEach

// ForEach is a more elegant kind of a loop which iterates over some kind of array

ninjas = ['Leo', 'Ryu', 'Shaun'];

ninjas.forEach((ninja, index) => console.log(index, ninja));

const logNinja = (ninja, index) =>
  console.log(`${index}. Ninja ${ninja} logged in.`);

ninjas.forEach(logNinja);

// Stack & Heap

// Primitive & Reference Types

// When we make copies of primitive values, we make a new copy of the value on the stack. When we try to make a copy of a reference type, we only make a copy of the pointer on the stack, which points to the data on the heap - we don't make a copy of the actual data, so when we then change the copies, it does have an effect on the original value and vice versa

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`Score 1 is ${scoreOne} and score 2 is ${scoreTwo}.`);

scoreOne = 100;
console.log(`Score 1 is ${scoreOne} and score 2 is ${scoreTwo}.`);

scoreTwo = scoreOne;
console.log(`Score 1 is ${scoreOne} and score 2 is ${scoreTwo}.`);

const userOne = { name: 'Shaun', score: 50 };
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.score = 100;

console.log(userOne, userTwo);

userTwo.name = 'Ryu';

console.log(userOne, userTwo);
