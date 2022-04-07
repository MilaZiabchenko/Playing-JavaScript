// Array creation

// 1. Array literal:
let planets = ['Earth', 'Saturn', 'Jupiter'];

console.log(planets);

// 2. Array constructor:
planets = new Array('Earth', 'Saturn', 'Jupiter');

console.log(planets);

planets = Array.of('Earth', 'Saturn', 'Jupiter');

console.log(planets);

planets.length = 2;

console.log(planets);

console.log(planets instanceof Array);
console.log(planets instanceof Object);

// at()
console.log(planets.at(1));
console.log(planets.at(-1));
console.log(planets.at(-5));

let emptyArr = [];

emptyArr[7] = 'Venus';

console.log(emptyArr);
console.log(emptyArr.length);

// Sparse array with empty slots(length)
emptyArr = Array(8);

console.log(emptyArr);

// fill()
const filledArr = emptyArr.fill(planets[0], 0, 8); // dense array

emptyArr[3] = 'Venus';

console.log(emptyArr);
console.log(filledArr);

// Array initialization is an usual task when dealing with collections. JavaScript allows a decent number of ways and flexibility to achieve that.

// The array constructor has a number of situations when its behavior may be surprising. So the array literal is a better and simpler solution to initialize array instances.

// Destructuring
const [planet] = planets;
const [, second] = planets;
const [, , third] = planets;
const [pl1, pl2, pl3] = planets;

console.log(planet, second, third);
console.log(pl1, pl2, pl3);

const physicalState = `I feel tired and need some rest`;

// split()
console.log(physicalState.split());
console.log(physicalState.split(' and '));
console.log(physicalState.split(' '));
console.log(physicalState.split(''));
console.log([...physicalState]);

// Mutable methods

// Array has several mutable operations - push, pop, splice, shift, unshift, reverse and sort. Using them is usually causing side effects and bugs that are hard to track. That’s why it’s important to use an immutable way.

// push()
array = [];

const arrLength = array.push(2020, 'bicycle', 'backpack');

console.log(array);
console.log(arrLength);

// shift()
const shiftedValue = array.shift();

console.log(array);
console.log(shiftedValue);

array[0] = 'bike';

console.log(array);

let years = [2021, 2020, 2015, 2018, 2017, 2016, 2019];

console.log(years);

// splice()
years.splice(0, 1); // removing one item and modifying the original array

// years.splice(years.indexOf(2020), 1);

console.log(years);

// slice()
let slicedYear = years.slice(0, 1); // returning a shallow copy of a portion of an array without modifying the original array

console.log(years);
console.log(slicedYear);

// When we see "..." in the code, it is either rest parameters or the spread syntax. There’s an easy way to distinguish between them:

// When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.

// When ... occurs in a function call or alike, it’s called a “spread syntax” and expands an array into a list.

// Rest parameters ...

// The rest parameter syntax allows us to more easily handle various input as parameters in a function, representing an indefinite number of arguments as an array.

// The dots here mean 'gather the rest of the parameters into the array 'args'
let sumOfYears = (...args) => {
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
};

// Spread operator ... (ES6)

// Spread syntax looks similar to rest parameters, but does quite the opposite: it takes in an iterable (e.g an array) and expands it into individual elements.

// The spread operator turns the elements of an iterable (array, string) into elements of an array literal or into arguments of a function call
console.log([...'Leo']);
console.log(sumOfYears(...years));
console.log(sumOfYears(...years, 2021, 2022, 2023));

// reduce()

// 'reduce' method reduces the array to a single value. It loops over and executes a function for each value of the array. The return value of the function is stored in an accumulator (result/total). This method is doing some operation(s) on the array and returns a result of all the operations

// syntax:

// array.reduce(function(total, currentValue, currentIndex, array), initialValue);
let counter = 0;

sumOfYears = years.reduce((total, val) => {
  ++counter;
  return total + val;
}, 0);

console.log(years, sumOfYears, counter);

counter = 0;

sumOfYears = years.reduce((total, val) => {
  ++counter;
  return total + val;
});

console.log(years, sumOfYears, counter);

sumOfYears = years.reduce((total, year) => total + year, 0);

console.log(sumOfYears);

sumOfYears = years.reduce((total, year) => total + year);

console.log(sumOfYears);

const maxYear = years.reduce((y1, y2) => (y1 > y2 ? y1 : y2));
const minYear = years.reduce((y1, y2) => (y1 < y2 ? y1 : y2));

const getAverage = nums =>
  nums.reduce((acc, num) => acc + num, 0) / nums.length;

console.log(maxYear);
console.log(minYear);
console.log(getAverage(years));

// Sorting arrays

// sort()

// years = years.sort((a, b) => (a > b ? 1 : -1));
years.sort((a, b) => a - b); // ascending array values

console.log(years);

years.sort((a, b) => b - a); // descending array values

console.log(years);

years.reverse();

console.log(years);

years.sort(() => 0.5 - Math.random());

console.log(years);

years.sort();

console.log(years);

const nestYears = ([y1, y2, y3, ...restOfTheYears]) => [
  y1,
  y2,
  y3,
  restOfTheYears,
];

console.log(nestYears(years));

// Merging arrays:

// - using the spread syntax (and combining them with normal values)
const myBikeActivity = [...array, '18-30 km/h', ...years, 2021];

console.log(myBikeActivity);

// - using concat()
const joyride = array.concat(['highway', 'forest', 'lake', 'freedom', 'joy']);

console.log(joyride.slice(-5));

console.log(joyride);

joyride.sort();

console.log(joyride);

// Deleting all elements of the array
let original = ['Delete', 'all', 'elements'];
let linkToArray = original;

console.log(original);
console.log(linkToArray);

linkToArray.length = 0;
// linkToArray.splice(0, linkToArray.length);

console.log(linkToArray);
console.log(original);

const darkSide = ['fearful', 'depressive', 'passive'];
const brightSide = ['kind', 'smiling', 'gregarious', 'funny'];

console.log(darkSide[0]);
console.table(brightSide);

brightSide.splice(2, 1, 'intelligent', 'strong', 'brave', 'happy'); // removing and adding items, modifying the array

console.table(brightSide);

// indexOf()
let index = brightSide.indexOf('brave');

brightSide.splice(index, 1); // deleting from the array in a mutable way

console.table(brightSide);

index = brightSide.indexOf('happy');

const newBrightSide = [
  ...brightSide.slice(0, index),
  ...brightSide.slice(index + 1),
]; // creating a copy of an array, removing one item from the original array in an immutable (redux) way

console.table(brightSide);
console.table(newBrightSide);

const personality = newBrightSide.concat(darkSide);

console.log(personality);

personality.sort();

console.log(personality);

// includes()
console.log(personality.includes('kind'));
console.log(personality.indexOf('kind') in personality);

// Array.isArray()
console.log(Array.isArray(personality));

const B = [
  'man',
  'handsome',
  'tender',
  'smart',
  'creative',
  'designer',
  'unstable',
  'sensitive',
  ['independent', ['unusual', ['faithful']]],
];

// Copying arrays

// deep copy
const Bo = JSON.parse(JSON.stringify(B));
// shallow copy
const BoStar = Object.assign([], B);
const Bogdan = [...B];
const Bodia = B.slice();

console.log(Bo);
console.log(BoStar);
console.log(Bogdan);
console.log(Bodia);
console.log(B === Bo);
console.log(Bogdan.length);
console.log(typeof BoStar); // typeof
console.log(Bo instanceof Object); // instanceof
console.log(Bogdan.indexOf('tender')); // indexOf
console.log(Bogdan[2]);

// unshift()
Bogdan.unshift('1982');

console.log(Bogdan);

Bogdan.push('outgoing', 'strong');

console.log(Bogdan);

// pop()
Bogdan.pop();

console.log(Bogdan);

// reverse()
Bogdan.reverse();

console.log(Bogdan);

Bogdan.splice(3, 2);

console.log(Bogdan);

Bogdan.splice(2, 0, 'avoidant');

console.log(Bogdan);

Bogdan.splice(9, 0, 'September', '28');

console.log(Bogdan);

const boString = Bogdan.join(', '); //array => string

console.log(boString);
console.log(`awesome, ${boString}`);

const boArray = boString.split(', '); // string => array

console.log(boArray);
console.log(Array.isArray(boArray));
console.log(Array.isArray(boString));

// Array of objects
const Saturday = [
  {
    id: 'Morning',
    task: 'Coding',
    done: true,
  },
  {
    id: 'Midday',
    task: 'Cooking',
    done: false,
  },
  {
    id: 'Evening',
    task: {
      0: 'Cycling',
      1: 'Walking',
    },
    done: false,
  },
];

const SaturdayJSON = JSON.stringify(Saturday, null, 2);
const SaturdayDeepCopy = JSON.parse(SaturdayJSON);
SaturdayDeepCopy[2].task[Object.entries(Saturday[2].task).length] = 'Sleeping';

console.log(Saturday);
console.log(typeof Saturday[0].task);
console.log(SaturdayJSON);
console.log(SaturdayDeepCopy);

console.log(Saturday[0].hasOwnProperty('time'));
console.log(Saturday[0].hasOwnProperty('task'));
console.log(Saturday[0].task);

for (let i = 0; i < Saturday.length; i++) {
  console.log(Saturday[i].id);
}

for (let todo of Saturday) {
  console.log(todo.task);
}

// Higher-order array methods

// forEach()
Saturday.forEach(todo => console.log(todo));

// map()
const todoTask = Saturday.map(todo => console.log(todo.task));

// filter()
const todoDone = Saturday.filter(todo => console.log(todo.done)); // returns a subset of the array

// Higher-order array methods with predicate functions

// A predicate function is a function that takes one value as input and returns true or false based on whether the value satisfies the condition.

// find()
const foundTask = Saturday.find(todo => todo.task === 'Coding'); // returns the value of the first element in the array where predicate is true, and undefined otherwise.

console.log({ foundTask });
console.log(foundTask);

// findIndex()
index = Saturday.findIndex(todo => todo.task === 'Coding'); // returns the index of the first element in the array where predicate is true, and -1 otherwise.

console.log(index);

index = Saturday.findIndex(todo => todo.task === 'Slacking');

console.log(index);

// some()
const hasTask = Saturday.some(todo => todo.task === 'Coding');

console.log({ hasTask });

// every()
const allPastYears = years.every(year => {
  const currentYear = new Date().getFullYear();
  return currentYear - year > 0;
});

console.log({ allPastYears });

const areAllTasksCompleted = Saturday.every(todo => todo.done);

console.log({ areAllTasksCompleted });

// sort()
const sortedIds = Saturday.map(todo => todo.id).sort(); // map().sort()

console.log(sortedIds);

const doneTasks = Saturday.filter(todo => todo.done).map(todo => todo.task); // filter().map()

console.log(doneTasks);

const agendaItems = [
  {
    id: 1,
    task: 'Buying a new scratching post for Leo',
    status: true,
  },
  {
    id: 2,
    task: 'Progressing in learning of web development',
    status: true,
  },
  {
    id: 3,
    task: 'Connecting with feelings of Bogdan or disconnecting from him',
    status: false,
  },
  {
    id: 4,
    task: 'Resolving sleep issues',
    status: false,
  },
];

const agenda = [
  ...agendaItems,
  {
    id: 5,
    task: 'Writing a message to Massimo',
    status: false,
  },
];

agenda[4].status = true;

console.log(agenda);

for (let todo of agenda) {
  console.log(todo);
}

for (let idx in agenda) {
  console.log(idx, typeof idx);
}

agenda.forEach(console.log);

const agendaTasks = agenda.map(todo => todo.task);

console.log(agendaTasks);

const agendaIdsWithTasks = agenda.map(todo =>
  console.log(`${todo.id}) ${todo.task}`)
);

const descendingIds = agenda.map(todo => todo.id).sort((a, b) => b - a); // map().sort()

console.log(descendingIds);

const bingo = agenda.filter(todo => todo.status).map(todo => todo.task); // filter().map()

console.log(bingo);

const bingoCopy = JSON.parse(JSON.stringify(bingo));

console.log(bingoCopy);

const foundCompletedTask = agenda
  .filter(todo => todo.status)
  .find(todo => todo.task.includes('of')); // filter().find()

console.log(foundCompletedTask);

const sortedTasks = agenda.map(todo => todo.task).sort(); //map().sort()

console.log(sortedTasks);

const isEveryAgendaTaskEndsWithLeo = agenda.every(todo =>
  todo.task.endsWith('Leo')
);

console.log(isEveryAgendaTaskEndsWithLeo);

const isAnyAgendaTaskEndsWithLeo = agenda.some(todo =>
  todo.task.endsWith('Leo')
);

console.log(isAnyAgendaTaskEndsWithLeo);

const arrOfNums = [1, 2, 3, 4, 5, 6, 7];

// reduceRight()
let sumOfSquareRootsOfEvenNums = arrOfNums
  .filter(element => !(element % 2))
  .reduceRight((acc, element) => acc + Math.sqrt(element), 0); // filter().reduceRight()

console.log(sumOfSquareRootsOfEvenNums);

sumOfSquareRootsOfEvenNums = arrOfNums.reduce(
  (acc, element) => acc + (element % 2 ? 0 : Math.sqrt(element)),
  0
); // filtering right inside reduce() or reduceRight() makes calculations faster

console.log(sumOfSquareRootsOfEvenNums);

// Polyfills: how array methods work internally

// A piece of code that provides native support to the older browsers that don't have support of modern functionalities of JavaScript is known as polyfill.

Array.prototype.myForEachPolyfill = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

function myForEachFunc(arr, cb) {
  arr.forEach(cb);
}

console.log(Array.prototype);
console.log(Array.prototype.myForEachPolyfill);

agenda.myForEachPolyfill(todo => console.log(todo.task));
myForEachFunc(agenda, todo => console.log(todo.task));

Array.prototype.myMapPolyfill = function (cb) {
  const newArr = [];

  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i]));
  }

  return newArr;
};

function double(num) {
  return num + num;
}

function raiseToThePowerOfTwo(num) {
  return num * num;
}

console.log(arrOfNums.myMapPolyfill(double));
console.log(arrOfNums.myMapPolyfill(raiseToThePowerOfTwo));
console.log(
  arrOfNums.myMapPolyfill(raiseToThePowerOfTwo).myMapPolyfill(double)
);

function myMapFunc(arr, transform) {
  let mapped = [];

  for (let el of arr) {
    mapped.push(transform(el));
  }

  return mapped;
}

console.log(myMapFunc(agenda, todo => todo.task));
console.log(myMapFunc(arrOfNums, el => el + 5));
console.log(myMapFunc(arrOfNums, double));

Array.prototype.myFilterPolyfill = function (cb) {
  const output = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      output.push(this[i]);
    }
  }

  return output;
};

function myFilterFunc(arr, test) {
  if (!Array.isArray(arr) || !arr.length || typeof test !== 'function') return;

  let passed = [];

  for (let el of arr) {
    if (test(el)) {
      passed.push(el);
    }
  }

  return passed;
}

function greaterThan(num) {
  return num > 3;
}

console.log(agenda.myFilterPolyfill(todo => !todo.status));
console.log(myFilterFunc(agenda, todo => todo.status).map(todo => todo.task));

console.log(arrOfNums.myFilterPolyfill(greaterThan));
console.log(myFilterFunc(arrOfNums, greaterThan));

console.log(arrOfNums.myFilterPolyfill(num => num % 2));
console.log(myFilterFunc(arrOfNums, num => num % 2 === 0));

const filterReversedNums = (arr, test) => {
  const reversedArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (test(arr[i])) {
      reversedArr.push(arr[i]);
    }
  }

  return reversedArr;
};

const arr = [9, 'watermelon', 9, 3, null, 9, '99', 3, 'watermelon', 99];

const numbers = myFilterFunc(arr, el => typeof el === 'number');
const reversedNumbers = filterReversedNums(arr, el => typeof el === 'number');

console.log(numbers);
console.log(reversedNumbers);

// More about indexOf
console.log(arr.indexOf(9));
console.log(arr.indexOf(9, 3));
console.log(arr.lastIndexOf(9));
console.log(arr.indexOf('water'));

Array.prototype.myReducePolyfill = function (initialValue, cb) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator += cb(this[i]);
  }

  return accumulator;
};

function myReduceFunc(arr, combine, initialValue) {
  let acc = initialValue;

  for (let cur of arr) {
    acc = combine(acc, cur);
  }

  return acc;
}

console.log(arrOfNums.myReducePolyfill(0, cur => 0 + cur));
console.log(myReduceFunc(arrOfNums, (a, b) => a + b ** b, 0));

// flat()
const twoDArray = [1, [2, 3], [4, 5]];

let flattenedArray = twoDArray.reduce((acc, cur) => acc.concat(cur), []);

console.log(flattenedArray);

flattenedArray = twoDArray.flat();

console.log(flattenedArray);

const arrOfUndef = [...Array(3)];
const numbers1 = Array.of(1000, 2000, 3000);
const numbers2 = [...numbers, ...numbers1];
const numbers3 = [].concat(numbers, numbers1);

console.log(arrOfUndef);
console.log(numbers1);
console.log(...numbers1);
console.log([...numbers1]);
console.log(numbers2);
console.log(numbers3);

// Array.from()

// It accepts an iterable object as the first argument and a mapping function as the second argument (optional)

console.log(Array.from(numbers1, double));
console.log(numbers1.map(num => num + num));

const cats = [
  { name: 'Leo', gender: 'male' },
  { name: 'Mila', gender: 'female' },
];

const catsNames = Array.from(cats, ({ name }) => name);

console.log(catsNames);

console.log(Array.from(catsNames[0]));
console.log([...'Mila']);

console.log(Array.from(Object.values(arr)));
console.log(Object.values(arr));

console.log(Object.getOwnPropertyNames(arr));
console.log(arr.hasOwnProperty('length'));
console.log(arr.hasOwnProperty(10));
console.log(arr.hasOwnProperty(9));

console.log(Object.values(arr));
console.log(Object.entries(arr));
console.log(Object.fromEntries(Object.entries(arr)));

console.log([...new Set(arr)]);

// Copying arrays
let arrCopy = arr;
let arrCopy1 = [...arr];
let arrCopy2 = arr.slice();
let arrCopy3 = Object.assign([], arr);
let arrCopy4 = JSON.parse(JSON.stringify(arr));

// Comparing arrays
console.log(arrCopy === arr);
console.log(arrCopy1 == arr);
console.log(arrCopy2 == arr);
console.log(arrCopy3 == arr);
console.log(arrCopy4 == arr);
console.log([1, 20] == [1, 20]);
console.log([] == []);
console.log([] == true);
console.log(Boolean([]) === true);

console.log(arrCopy.push(999));
console.log(arrCopy);
console.log(arr);

arrCopy = ['ha', 'ha', 'ha'];

console.log(arrCopy);
console.log(arr);

const techArr = ['frontend', 'backend', 'qa'];

// Array => object
let obj = Object.assign({}, techArr);

console.log(obj);

obj = { ...techArr };

console.log(obj);

obj = techArr.reduce((res, key, index) => {
  res[index] = key;

  return res;
}, {});

console.log(obj);

// Array of arrays => array of objects
const arrayOfArrays = [
  ['name', 'Kate'],
  ['city', 'New York'],
];

const arrayOfObjects = arrayOfArrays.map(([key, value]) => ({ [key]: value }));

console.log(arrayOfObjects);

// Array of arrays => object of objects
obj = arrayOfArrays.reduce(
  (acc, current) => Object.assign(acc, { [current[0]]: current[1] }),
  {}
);

console.log(obj);

obj = arrayOfArrays.reduce(
  (acc, current) => ({ ...acc, [current[0]]: current[1] }),
  {}
);

console.log(obj);

obj = Object.fromEntries(arrayOfArrays);

console.log(obj);

// Array of objects => object of objects
const data = [
  { hue: 120, color: 'green' },
  { hue: 240, color: 'blue' },
  { hue: 360, color: 'red' },
];

const hslColors = data.reduce(
  (acc, cur) => ({ ...acc, [cur.color]: `hsl(${cur.hue}, 100%, 52%)` }),
  {}
);

// Here is how it works:

// reduce is initialized with an empty object ({} at the end), therefore first iteration variables are acc = {}, cur = { hue: 120, color: 'green' }. This function returns an object - this is why its body is wrapped in parentheses => ({ ... }). Spread operator doesn't do anything on the first iteration, so 'green: hsl(120, 100%, 52%)' is set as the first item.

// On the second iteration variables are acc = { green: hsl(120, 100%, 52%) }, cur = { hue: 240, color: 'blue' }. Here the spread operator expands acc and the function returns { green: 'hsl(120, 100%, 52%)', blue: 'hsl(120, 100%, 52%)' }.

// Third iteration: acc = { green: 'hsl(120, 100%, 52%)', blue: 'hsl(120, 100%, 52%)' }, cur = { hue: 360, color: 'red' }, so when acc is spread inside the object, our function returns the final value:
console.log(hslColors);
console.log({ hslColors });

const entries = [
  ['buy', 'usd', 50],
  ['sell', 'usd', 100],
  ['sell', 'eur', 200],
];

let transactions = entries.map(([operation, currency, amount]) => ({
  operation,
  currency,
  amount,
}));

console.log({ transactions });

transactions = entries.reduce((acc, [operation, currency, amount], index) => {
  acc[index] = { operation, currency, amount };

  return acc;
}, []);

console.log({ transactions });

const budget = entries.reduce((total, [operation, currency, amount]) => {
  currency === 'eur' && (amount *= 1.135);

  console.log(`Total: ${total}$, amount: ${Math.round(amount)}$`);

  operation === 'buy' ? (total -= amount) : (total += amount);

  return total;
}, 1000);

console.log(`Total on the last iteration: ${budget}$`);

const allVehicles = [
  'bike',
  'bike',
  'van',
  'car',
  'truck',
  'car',
  'bike',
  'car',
  'bike',
  'truck',
  'bike',
  'car',
];

// Sum up the instances of each vehicle
const transportation = allVehicles.reduce((obj, item) => {
  !obj[item] && (obj[item] = 0);

  obj[item]++;

  return obj;
}, {});

console.log(transportation);

let typesOfVehicle = Object.assign([], Object.keys(transportation));

console.log(typesOfVehicle);

typesOfVehicle = [...Object.keys(transportation)];

console.log(typesOfVehicle);

typesOfVehicle = { ...Object.keys(transportation) };

console.log(typesOfVehicle);

const pancakes = [
  { name: 'Vika', technology: 'Angular' },
  { name: 'Valery', technology: 'React' },
  { name: 'Roma', technology: 'React' },
  { name: 'Denys', technology: 'Angular' },
  { name: 'Lizo4ka', technology: 'Angular' },
  { name: 'Veronika', technology: 'Node' },
  { name: 'Yaroslava', technology: 'Node' },
  { name: 'Mila', technology: 'React' },
  { name: 'Toma', technology: 'React' },
  { name: 'S L a V u N I A', technology: 'React' },
];

pancakes.push({ name: 'Bodia', technology: 'React' });

const foundPancake = pancakes.find(pancake => pancake.name === 'Roma');
foundPancake.technology = 'MERN';

console.log(pancakes);

const technologies = pancakes.reduce((specialization, pancake) => {
  const technology = pancake.technology;

  !specialization[technology] && (specialization[technology] = []);

  specialization[technology].push(pancake.name);

  return specialization;
}, {});

console.log(technologies);
