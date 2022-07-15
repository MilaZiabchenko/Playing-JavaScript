// Regular functions

// Default params
function autumnDays(Sep = 30, Oct = 31, Nov = 30) {
  // The return statement

  // The return statement ends the function's execution, which means any code after it won't be executed. You can also return nothing in order to stop the function's execution with, say, if statement, when the condition is true.

  return Sep + Oct + Nov;
}

console.log(autumnDays());

// Arrow functions
const summerDays = (Jun = 30, Jul = 31, Aug = 31) => Jun + Jul + Aug;

console.log(summerDays());

let vacationDays = (Aug, Sep) => console.log(Aug + Sep);

vacationDays(10, 20);

const calcEnergy = (mass = 5) => mass * 299_792_458 ** 2;

console.log(`Energy equals ${calcEnergy()} Joules`);
console.log(`Energy equals ${calcEnergy(62)} Joules`);

const calcPriceWithDiscount = (price = 43.6, percentage = 75) =>
  (price / 100) * percentage;

console.log(`Today my fav biscuits cost ${calcPriceWithDiscount()} UAH.`);
console.log(
  `Today my fav biscuits cost ${calcPriceWithDiscount(43.6, 70)} UAH.`
);

const calcMaxNumber = (a = 3, b = 30) => Math.max(a, b);

console.log(calcMaxNumber());
console.log(calcMaxNumber(50, 5));
console.log(calcMaxNumber(10, 10));

// Hoisting

// When you execute a piece of code, the JavaScript engine creates the Global Execution Context, which has two phases: creation and execution.

// During the creation phase, the engine moves the variable and function declarations to the top of your code. This feature is known as hoisting in JavaScript

console.log(a);

function a() {}

// During the creation phase, the engine places var variable in the memory and initializes its value to undefined

console.log(b);

var b = function () {};

console.log(b);

console.log(scope);

var scope = 'global';

console.log(scope);

function func() {
  console.log(scope);
  var scope = 'local';
  console.log(scope);
}

func();

console.log(scope);

// var topic = 'JavaScript';
let topic = 'JavaScript';

if (topic) {
  // var topic = 'EcmaScript'; // functional scope
  let topic = 'EcmaScript'; // block scope
  console.log(topic);
}

console.log(topic);

for (var i = 0; i < 9; i += 2) {
  console.log(i);
}

console.log(i);

// The JavaScript engine hoists the variables declared using the let and const keywords, but it doesn’t initialize them

// console.log(c);

let c = function () {};

console.log(c);

// Function declaration

// During the creation phase of the GEC, the JavaScript engine places the function in the heap memory. To be precise, the engine creates an object of the Function type and a function reference called 'greet' that refers to the function object.

greet();

function greet(name = 'my gorgeous friend', time = 'morning') {
  console.log(`Good ${time}, ${name}!`);
}

greet('Leo');
greet('gang', 'evening');

let myFriendsName = 'Oksana';

console.log(myFriendsName);

getMyFriendsName();

console.log(myFriendsName);

function getMyFriendsName() {
  // Hoisting inside a function
  inner();
  return;
  function inner() {
    myFriendsName = 'Hanna';
  }
}

// Function expression

// During the creation phase of the GEC with function expression, the engine creates the variable in the memory and initializes its value to undefined, hence, it isn’t a function, if we try to execute a function expression with a keyword var before initialization. With the keywords let and const, we just can't access the function before initialization. Functions expressions and arrow functions aren’t hoisted.

// console.log(concatStrings('Yes, ', 'but no.'));

// var concatStrings = (a, b) => a + b;
// let concatStrings = (a, b) => a + b;
const concatStrings = (a, b) => a + b;

console.log(concatStrings('No, ', 'but yes.'));

const newString = concatStrings('pretty, smart and assertive ', 'Mila');

console.log(newString);

const greetACoder = name => console.log(`Hey, ${name}!`);

greetACoder('Ania', 'Kubow');

const song = () => 'My Funny Valentine';

// Invoking a function
let songTitle = song();

console.log(songTitle);

// Invoking a method
songTitle = songTitle.toUpperCase();

console.log(songTitle);

// Anonymous function
let show = function () {
  console.log('Anonymous function 1');
};

show();

show = () => console.log('Anonymous function 2');

show();

// Immediately invoked function expression
(function () {
  console.log('Function executed');
})(); // trailing parenthesis

const personality = {
  firstName: 'Leo',
  lastName: 'Ziablick',
};

(function () {
  console.log(
    `${personality.firstName} ${personality.lastName} is invoked immediately`
  );
})(personality);

// Pure functions

// Pure functions are functions that accept an input and return a value without modifying any data outside its scope (no side effects). A pure function only works with its internal data. For the same input it always returns the same output

const calc1 = (a, b, c, d) => a + b ** c * d;

const calcResult1 = calc1(0, 5, 2, 5);

// Variable shadowing

// In computer programming, variable shadowing occurs when a variable declared within a certain scope has the same name as a variable declared in an outer scope

const defaultValue = 0;

const calc2 = (defaultValue = 7) => defaultValue + 5 ** 2 * 5;

const calcResult2 = calc2();
const calcResult3 = calc2(defaultValue);

console.log(calcResult1);
console.log(calcResult2);
console.log(calcResult3);

// Closures

// A closure is a function combined with references to the variables defined outside of it. Closures maintain the variable references, which allow functions to access variables outside of their scope.

// A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any variables that were in-scope at the time the closure was created.

// The closure is a function that closes over (captures, remembers) variables from its lexical scope. It accesses its lexical scope even executed outside of its lexical scope.

// The lexical scoping means that inside the inner (nested) scope you can access variables of outer scope

const mi = 'Mila';

const outerFunc = () => {
  const le = 'Leo';

  const innerFunc = () => {
    const bo = 'Bogdan';

    const innerInnerFunc = () => {
      // The function body has access to variables that are defined outside the function body
      console.log(`${mi}, ${le} and ${bo} are awesome!`);
    };

    innerInnerFunc();
  };

  innerFunc();
};

outerFunc();

// Returning functions from functions

// Thanks to closures, the returned function has access to the data of the parent function, even after the parent function is run
const ourNames = ['Mila', 'Leo'];

function outerSpace() {
  const ourCity = 'Vinnitsa';

  function innerSpace() {
    const ourHouse = 'a cosy apartment';

    console.log(
      `Hey, I'm ${ourNames[0]}. I live in ${ourHouse} in ${ourCity} with my dear friend ${ourNames[1]}.`
    );
  }

  // The inner function is returned from the outer function before being executed
  return innerSpace;
}

// 'ourSpace' is a reference to the instance of the function 'innerSpace' that is created when outerSpace is run
const ourSpace = outerSpace();

console.log(ourSpace);

// When 'ourSpace' is invoked, the variable 'ourCity' remains available for use because the instance of 'innerSpace' maintains a reference to its lexical environment, within which 'ourCity' exists
ourSpace();

const parentFn = mentor => topic =>
  console.log(`${mentor} and ${mi} are talking about ${topic}.`);

// There are two ways to call the inner function:

// 1. using a variable
const returnedFnInstance = parentFn('Andy');

returnedFnInstance('matrices');

// 2. using double parentheses
parentFn('Andy')('matrices');

const validateParam = param => (param ? () => '😎' : undefined);

const f1 = validateParam(true);
const f2 = validateParam(false);

// When used with function calls, the optional chaining operator returns undefined if the given function does not exist.
console.log(f1?.(), f2?.());

// Returning objects from functions

// The following makePerson function returns an object that can store and change a name thanks to closures
const makePerson = name => {
  let _name = name; // '_name' private variable is not accessible from the outside

  return {
    setName: newName => (_name = newName),
    getName: () => _name, // the only way to get the '_name' value is through the method of the object returned from the function
  };
};

const me = makePerson('Mila');

console.log(me);
console.log(me.getName());

me.setName('Mila Ziablick');

console.log(me.getName());

// The previous example closely resembles a class that stores private state and exposes public getter and setter methods. We can extend this object-oriented parallel further by using closures to implement private methods
const Person = ({ name, job }) => {
  let _name = name;
  let _job = job;

  const privateSetJob = newJob => (_job = newJob); // 'privateSetJob' has access to the private state variable '_job' through a closure, and it is not directly accessible to consumers

  return {
    getName: () => _name,
    getJob: () => _job,
    setJob: newJob => privateSetJob(newJob),
  };
};

const president = Person({ name: 'Volodymyr Zelensky', job: 'Comedian' });

console.log(president.getName());
console.log(president.getJob());

president.setJob('President');

console.log(president.getJob());

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const inBetween = (x, y) => num => num >= x && num <= y;

// With closures we remember parameters passed into the function inBetween and then we use them in the returned function
console.log(nums.filter(inBetween(3, 7)));

// It is common for a callback to reference a variable declared outside of itself
console.log(nums.filter(num => num >= 3 && num <= 7));

// num is available in the callback because of lexical scoping, and the value of num is persisted when the anonymous function is called by filter because of a closure

let countEven = 0;

nums.forEach(num => num % 2 === 0 && ++countEven);

// The callback iterator is a closure because it captures countEven variable

console.log(countEven);

let countClicked = 0;

const btn = document.createElement('button');
btn.textContent = `Click me!`;
document.body.append(btn);

const handleClick = () => {
  countClicked++;
  countClicked === 1
    ? (btn.textContent = `You clicked ${countClicked} time`)
    : (btn.textContent = `You clicked ${countClicked} times`);

  // Being a closure, handleClick() captures countClicked from the lexical scope and updates it when a click happens. Even more, btn.textContent is captured too

  setTimeout(() => {
    btn.textContent = `Clicking session is over!`;
    btn.removeEventListener('click', handleClick);
  }, 10000);
};

btn.addEventListener('click', handleClick);

// Currying

// Currying, an important concept of functional programming, is also possible thanks to closures.

// Currying is when a function — instead of taking all arguments at one time — takes the first one and returns a new function, which takes the second one and returns a new function, which takes the third one, etc. until all arguments are completed. This technique allows us to work with unary functions.

// Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).

const curry = f => a => b => c => f(a, b, c);
const sum = (a, b, c) => a + b + c;
const curriedResult = curry(sum);

console.log(curriedResult(3)(5)(7));

// Functions as objects

// Being an object, functions have built-in properties and methods

console.log(curry.toString());
console.log(curry.name);
console.log(curry.length);
console.log(sum.length);

console.log(sum.call(null, 10, 3, 5));
console.log(sum.apply(null, [10, 3, 5]));

const firstArgument_10 = sum.bind(null, 10);

console.log(firstArgument_10(3, 5));

const args = [10, 3, 5];

console.log(sum(10, 3, 5) === sum.call(null, ...args));
console.log(sum(...args) === sum.apply(null, [10, 3, 5]));
console.log(curriedResult(10)(3)(5) === firstArgument_10(3, 5));

const curryAMessage = greeting => name => message =>
  `${greeting}, ${name}! ${message}?`;

console.log(curryAMessage(`Hey`)(mi)(`What's up`));

// Partial application

// Partial application is having a function with a certain number of arguments and fixing some of them to a set value. This gives us a function with less arguments.

// general function
const makeMultiplier = a => b => a * b;

// specific function
const triple = makeMultiplier(3);

// This function with fixed arguments can then be called from anywhere else in our code, and it will be as if we had called the original function with all of its arguments

console.log(makeMultiplier(3)(33) === triple(33));

// In general, if there is a function that we use often in our code, where one or more arguments are the same, it is a good candidate for using partial application

const getAllFriends = (friend_1, friend_2, friend_3) =>
  `${friend_1} is a faithful friend of ${friend_2} & ${friend_3} 🤗💖`;

const getFriendsPartially = friend_1 => (friend_2, friend_3) =>
  getAllFriends(friend_1, friend_2, friend_3);

const getFriendsOfMila = getFriendsPartially(mi);

console.log(getAllFriends(mi, 'Leo', 'Bogdan'));
console.log(getFriendsPartially(mi)('Ania', 'Oksana'));
console.log(getFriendsOfMila('Suzan', 'Andrea'));

const func_1 = x => y => y ** x;
const func_2 = x => y => y * x;
const func_3 = x => y => y + x;
const func_4 = x => y => y / x;
const func_5 = x => y => y - x;

const partialFunctionsOf5 = [func_1, func_2, func_3, func_4, func_5].map(func =>
  func(5)
);

// array of functions
const arrayOfFunctions = [...partialFunctionsOf5, Math.abs];

const resultOfAllOperations = arrayOfFunctions.reduce(
  (acc, func) => func(acc),
  1
);

console.log(
  `The cumulative result of all functions' operations is ${resultOfAllOperations}.`
);

const getRoles = () => Object.entries(getRoles.team).map(([, role]) => role);

// Assigning properties to functions
getRoles.team = {
  Hanna: 'QA Engineer',
  Mila: 'Software Engineer',
};

console.log(getRoles.team);
console.log(getRoles());

// Recursive functions

// All recursive algorithms work on the same principle. The function calls itself and passes results from the previous calculation.

// In recursion, we always have to tell our function when to stop. Without a stop condition any recursive function will go on infinitely

const countUpTo = (num, max) => {
  if (num > max) return;

  console.log(num);

  countUpTo(num + 1, max);
};

countUpTo(1, 3);

const recursiveSum = num => (num <= 1 ? num : num + recursiveSum(num - 1));

console.log(recursiveSum(5));

const fibonacciValue = index =>
  index < 2 ? index : fibonacciValue(index - 2) + fibonacciValue(index - 1);

console.log(fibonacciValue(10));

const factorial_1 = num =>
  num === 0 || num === 1 ? 1 : num * factorial_1(num - 1);

console.log(factorial_1(5));
console.log(factorial_1(10));

// The downside of a recursive algorithm is that it needs to recalculate all previous values each time. Thus, it’s not very effective and time complexity is exponential: O(2^N). Therefore, we can refactor our code, using the iterative algorithm

const factorial_2 = num => {
  if (num === 0 || num === 1) return 1;

  for (let i = num - 1; i > 1; i--) num *= i;

  return num;
};

console.log(factorial_2(5));
console.log(factorial_2(10));

const factorial_3 = num => {
  let result = num;

  if (num === 0 || num === 1) return 1;

  while (num > 1) {
    num--;
    result = result *= num;
  }

  return result;
};

console.log(factorial_3(5));
console.log(factorial_3(10));

const categories = [
  { id: 'animals', parent: null },
  { id: 'mammals', parent: 'animals' },
  { id: 'cats', parent: 'mammals' },
  { id: 'dogs', parent: 'mammals' },
  { id: 'Siberian Husky', parent: 'dogs' },
  { id: 'Akita Inu', parent: 'dogs' },
  { id: 'Abyssinian', parent: 'cats' },
  { id: 'Norwegian Forest', parent: 'cats' },
  { id: 'Scottish Fold', parent: 'cats' },
];

const makeTree = (categories, parent) => {
  const node = {};

  categories
    .filter(c => c.parent === parent)
    .forEach(c => (node[c.id] = makeTree(categories, c.id)));

  return node;
};

console.log(JSON.stringify(makeTree(categories, null), null, 2));
console.log(makeTree(categories, null));

// Regular function vs arrow function

// 1. 'this' value

// Regular function from the lowest priority to the highest:

// -simple invocation => global object;
// -method invocation => object owning the method;
// -indirect invocation (call, apply) => first argument;
// -constructor invocation (new) => newly created instance

function update(...params) {
  this.arrayOfAddresses.push(...params);
}

const objectOfAddresses = { arrayOfAddresses: [52, 62] };

update.apply(objectOfAddresses, [52, 65]);

console.log(objectOfAddresses.arrayOfAddresses);

update.call(objectOfAddresses, [52, 68]);

console.log(objectOfAddresses.arrayOfAddresses);

update.call(objectOfAddresses, 52, 86);

console.log(objectOfAddresses.arrayOfAddresses);

// Arrow function:

// -No matter how or where being executed, 'this' value inside of an arrow function always equals 'this' value of the outer function. 'this' inside the arrow function is bound lexically.

// Contrary to a regular function, the indirect invocation of an arrow function using myArrowFunc.call(thisVal) or myArrowFunc.apply(thisVal) doesn’t change the value of this: the context value is always resolved lexically.

// 2.Constructors

// The regular function can easily construct objects (instances of a function).

// The arrow function cannot be used as a constructor as a consequence of 'this' resolved lexically

// 3. arguments object

// Inside the body of a regular function, arguments is a special array-like object containing the list of arguments with which the function has been invoked.

// On the other side, no arguments special keyword is defined inside an arrow function. The arrow function accesses arguments from the outer function. Same as with 'this' value, the arguments object is resolved lexically.

const myFunc = function (...args) {
  console.log(this, arguments, args);

  // Inside of the body of myArrowFunc, arguments object equals to the arguments of myFunc invocation. If you’d like to access the direct arguments of the arrow function, you can use the rest parameters feature:
  const myArrowFunc = (...args) => console.log(this, arguments, args);

  myArrowFunc(1, 2, 3);
};

myFunc(10, 20, 30);

// Generators(ES6)

// Generators are functions. They run until you get to the 'yield' keyword. It pretty much says 'pause' until you call 'next' again, and then you keep calling 'next' and keep returning values until it gets to the end of it and has no values to return

function* getOceanGreetings() {
  yield 'Hello, turtles!';
  yield 'Hello, waves!';
  yield 'Hello, whales!';
  yield 'Hello, islands!';

  return 'Hello, adventure!';
}

const greetings = getOceanGreetings();

console.log(greetings.next().value);
console.log(greetings.next().done);
console.log(greetings.next());
console.log(greetings.next());
console.log(greetings.next());
console.log(greetings.next());

function* generateFish() {
  yield 'tuna';
  yield 'trout';
  yield 'salmon';

  console.log(`Hey, I'm just a line after the checkpoint 'salmon'.`);

  yield 'cod';
}

const fishSample = generateFish();

for (let fish of fishSample) {
  console.log(fish);
}

function* getNextFlat() {
  let flat = 62;

  while (flat <= 65) {
    yield flat++;
  }
}

const flatNumbers = [...getNextFlat()];

console.log(flatNumbers);

function* generateMessage() {
  yield 'I';
  yield 'am not';
  yield 'a fan';
  yield 'of generators.';
}

const message = [...generateMessage()].join(' ');

console.log(message);

const birds = ['finch', 'tit', 'catbird', 'rook'];

async function* generate(...items) {
  for (let item of items) {
    await new Promise(resolve => setTimeout(resolve, 1000));

    yield item;
  }
}

(async () => {
  const birdsGen = generate(...birds);

  for await (let bird of birdsGen) {
    console.log(bird);
  }
})();

const generateBirds = () => {
  let index = 0;

  return () => birds[index++];
};

const gen1 = generateBirds();
const gen2 = generateBirds();

console.log(gen1());
console.log(gen1());
console.log(gen2());
console.log(gen2());
console.log(gen2());
