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

// Array has several mutable operations - push, pop, unshift, shift, reverse, sort and splice. Using them is usually causing side effects and bugs that are hard to track. That’s why it’s important to use an immutable way.

// push()
const array = [];

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

// sort()

// years = years.sort((a, b) => (a > b ? 1 : -1));
years.sort((a, b) => a - b); // ascending array values

console.log(years);

years.sort((a, b) => b - a); // descending array values

console.log(years);

// reverse()
years.reverse();

console.log(years);

years.sort(() => 0.5 - Math.random());

console.log(years);

years.sort();

console.log(years);

// When we see "..." in the code, it is either rest parameters or the spread syntax. There’s an easy way to distinguish between them:

// When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.

// When ... occurs in a function call or alike, it’s called a “spread syntax” and expands an array into a list.

// Rest parameters ...

// The rest parameter syntax allows us to more easily handle various input as parameters in a function, representing an indefinite number of arguments as an array.

// The dots here mean 'gather the rest of the parameters into the array 'args'

const nestYears = ([y1, y2, y3, ...restOfTheYears]) => [
  y1,
  y2,
  y3,
  restOfTheYears,
];

console.log(nestYears(years));

let sumOfYears = (...args) => {
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
};

// Spread operator ...

// Spread syntax looks similar to rest parameters, but does quite the opposite: it takes in an iterable (e.g an array) and expands it into individual elements.

// The spread operator turns the elements of an iterable (array, string) into elements of an array literal or into arguments of a function call

console.log([...'Leo']);
console.log(sumOfYears(...years));
console.log(sumOfYears(...years, 2021, 2022, 2023));

// reduce()

// 'reduce' method reduces the array to a single value. It loops over and executes a function for each value of the array. The return value of the function is stored in an accumulator (result/total). This method is doing some operation(s) on the array and returns a result of all the operations

// syntax: array.reduce(function(total, currentValue, currentIndex, array), initialValue);

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

const minYear = years.reduce((prevYear, curYear) =>
  prevYear < curYear ? prevYear : curYear
);
const maxYear = years.reduce((prevYear, curYear) =>
  prevYear > curYear ? prevYear : curYear
);

const getAverageValue = nums =>
  nums.reduce((prevNum, curNum) => prevNum + curNum, 0) / nums.length;

console.log(minYear);
console.log(maxYear);
console.log(getAverageValue(years));

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

// linkToArray.length = 0;
linkToArray.splice(0, linkToArray.length);

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

const agenda = [
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

const newAgenda = [
  ...agenda,
  {
    id: 5,
    task: 'Writing a message to Massimo',
    status: false,
  },
];

newAgenda[4].status = true;

console.log(newAgenda);

for (let todo of newAgenda) {
  console.log(todo);
}

for (let idx in newAgenda) {
  console.log(idx, typeof idx);
}

newAgenda.forEach(console.log);

const agendaTasks = newAgenda.map(todo => todo.task);

console.log(agendaTasks);

const agendaIdsWithTasks = newAgenda.map(todo =>
  console.log(`${todo.id}) ${todo.task}`)
);

const descendingIds = newAgenda.map(todo => todo.id).sort((a, b) => b - a); // map().sort()

console.log(descendingIds);

const bingo = newAgenda.filter(todo => todo.status).map(todo => todo.task); // filter().map()

console.log(bingo);

const bingoCopy = JSON.parse(JSON.stringify(bingo));

console.log(bingoCopy);

const foundCompletedTask = newAgenda
  .filter(todo => todo.status)
  .find(todo => todo.task.includes('of')); // filter().find()

console.log(foundCompletedTask);

const sortedTasks = newAgenda.map(todo => todo.task).sort(); //map().sort()

console.log(sortedTasks);

const isEveryAgendaTaskEndsWithLeo = newAgenda.every(todo =>
  todo.task.endsWith('Leo')
);

console.log(isEveryAgendaTaskEndsWithLeo);

const isAnyAgendaTaskEndsWithLeo = newAgenda.some(todo =>
  todo.task.endsWith('Leo')
);

console.log(isAnyAgendaTaskEndsWithLeo);

const arrOfNums = [1, 2, 3, 4, 5, 6, 7];

// reduceRight()
let sumOfSquareRootsOfEvenNums = arrOfNums
  .filter(element => !(element % 2))
  .reduceRight((accumulator, element) => accumulator + Math.sqrt(element), 0); // filter().reduceRight()

console.log(sumOfSquareRootsOfEvenNums);

// filtering inside reduce() or reduceRight() makes calculations faster
const getSumOfSquareRootsOfEvenNums = array => {
  const sum = array.reduce(
    (accumulator, element) =>
      accumulator + (element % 2 ? 0 : Math.sqrt(element)),
    0
  );

  return sum;
};

console.log(getSumOfSquareRootsOfEvenNums(arrOfNums));

const getMaxOddElement = array => {
  const maxEvenNumber = array.reduce((accumulator, value) =>
    Math.max(accumulator, value % 2 ? value : 0)
  );

  return maxEvenNumber;
};

console.log(getMaxOddElement(arrOfNums));

// Polyfills: how array methods work internally

// A piece of code that provides native support to the older browsers that don't have support of modern functionalities of JavaScript is known as polyfill.

Array.prototype.myForEachPolyfill = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

function myForEachFunc(array, cb) {
  for (let element of array) {
    cb(element);
  }
}

console.log(Array.prototype);
console.log(typeof Array.prototype);
console.log(typeof Array.prototype.myForEachPolyfill === typeof myForEachFunc);

newAgenda.myForEachPolyfill(todo => console.log(todo.task));
myForEachFunc(newAgenda, todo => console.log(todo.task));

Array.prototype.myMapPolyfill = function (cb) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    newArray.push(cb(this[i], i, this));
  }

  return newArray;
};

function myMapFunc(array, transform) {
  const mapped = [];

  for (let element of array) {
    mapped.push(transform(element));
  }

  return mapped;
}

function double(num) {
  return num + num;
}

function raiseToThePowerOfTwo(num) {
  return num * num;
}

console.log(arrOfNums.myMapPolyfill(double));
console.log(myMapFunc(arrOfNums, double));
console.log(arrOfNums.myMapPolyfill(raiseToThePowerOfTwo));
console.log(
  arrOfNums.myMapPolyfill(raiseToThePowerOfTwo).myMapPolyfill(double)
);
console.log(myMapFunc(arrOfNums, element => element + 5));
console.log(myMapFunc(newAgenda, todo => todo.task));

Array.prototype.myFilterPolyfill = function (cb) {
  if (!Array.isArray(this) || !this.length || typeof cb !== 'function') return;

  const output = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      output.push(this[i]);
    }
  }

  return output;
};

function myFilterFunc(array, test) {
  const passed = [];

  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }

  return passed;
}

function greaterThanThree(num) {
  return num > 3;
}

console.log(newAgenda.myFilterPolyfill(todo => !todo.status));
console.log(
  myFilterFunc(newAgenda, todo => todo.status).map(todo => todo.task)
);

console.log(arrOfNums.myFilterPolyfill(greaterThanThree));
console.log(myFilterFunc(arrOfNums, greaterThanThree));

console.log(arrOfNums.myFilterPolyfill(num => num % 2));
console.log(myFilterFunc(arrOfNums, num => num % 2 === 0));

const filterReversedNums = (array, test) => {
  const reversedArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    if (test(array[i])) {
      reversedArray.push(array[i]);
    }
  }

  return reversedArray;
};

const mixedArray = [9, 'watermelon', 9, 3, null, 9, '99', 3, 'watermelon', 99];

const numbers = myFilterFunc(
  mixedArray,
  element => typeof element === 'number'
);
const reversedNumbers = filterReversedNums(
  mixedArray,
  element => typeof element === 'number'
);

console.log(numbers);
console.log(reversedNumbers);

// indexOf() with one argument
console.log(mixedArray.indexOf(9));

// indexOf() with two arguments
console.log(mixedArray.indexOf(9, 3));

// lastIndexOf()
console.log(mixedArray.lastIndexOf(9));

Array.prototype.myReducePolyfill = function (combine, initialValue) {
  let accumulator = initialValue;
  let index = 0;

  typeof accumulator == 'undefined' && (accumulator = this[index++]);

  for (; index < this.length; index++) {
    accumulator = combine(accumulator, this[index], index, this);
  }

  return accumulator;
};

function myReduceFunc(array, combine, initialValue) {
  let accumulator = initialValue;
  let index = 0;

  if (typeof accumulator == 'undefined') {
    accumulator = array[index++];
  }

  while (index < array.length) {
    accumulator = combine(accumulator, array[index]);
    index++;
  }

  return accumulator;
}

console.log(arrOfNums.reduce((prev, cur) => prev + cur, 0));
console.log(arrOfNums.reduce((prev, cur) => prev + cur));
console.log(arrOfNums.myReducePolyfill((prev, cur) => prev + cur, 0));
console.log(arrOfNums.myReducePolyfill((prev, cur) => prev + cur));
console.log(myReduceFunc(arrOfNums, (prev, cur) => prev + cur, 0));
console.log(myReduceFunc(arrOfNums, (prev, cur) => prev + cur));

console.log(arrOfNums.reduce((prev, cur) => prev + cur * 10, 0));
console.log(arrOfNums.reduce((prev, cur) => prev + cur * 10));
console.log(arrOfNums.myReducePolyfill((prev, cur) => prev + cur * 10, 0));
console.log(arrOfNums.myReducePolyfill((prev, cur) => prev + cur * 10));
console.log(myReduceFunc(arrOfNums, (prev, cur) => prev + cur * 10, 0));
console.log(myReduceFunc(arrOfNums, (prev, cur) => prev + cur * 10));

function mySomeFunc(array, cb) {
  for (let element of array) {
    if (cb(element)) return true;
  }

  return false;
}

console.log(mySomeFunc(arrOfNums, greaterThanThree));
console.log(mySomeFunc(arrOfNums, element => element === 7));
console.log(mySomeFunc(arrOfNums, element => element === 8));

function myEveryFunc(array, cb) {
  for (let element of array) {
    if (!cb(element)) return false;
  }

  return true;
}

console.log(myEveryFunc(arrOfNums, greaterThanThree));
console.log(myEveryFunc(arrOfNums, element => element === 7));
console.log(myEveryFunc(arrOfNums, element => typeof element === 'number'));

function myFindLastFunc(array, cb) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (cb(array[i], i, array)) return array[i];
  }
}

// findLast()
console.log(arrOfNums.findLast(greaterThanThree));
console.log(myFindLastFunc(arrOfNums, greaterThanThree));
console.log(myFindLastFunc(arrOfNums, element => element % 2));

console.log(arrOfNums);

// flat()
const twoDArray = [1, [2, 3], [4, 5]];

console.log(twoDArray.flat());

const flattenedTwoDArray = twoDArray.reduce(
  (prev, cur) => prev.concat(cur),
  []
);

console.log(flattenedTwoDArray);

function myFlatFunc(array, depth = 1) {
  const flattenedArray = [];

  for (let element of array) {
    if (Array.isArray(element) && depth > 0) {
      flattenedArray.push(...myFlatFunc(element, depth - 1));
    } else {
      flattenedArray.push(element);
    }
  }

  return flattenedArray;
}

console.log(myFlatFunc(twoDArray));
console.log(myFlatFunc([1, 2, 3, [4, 5, [6, 7, [8, 9, 10]]]], 3));

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
console.log(numbers1.map(double));

const cats = [
  { name: 'Leo', gender: 'male' },
  { name: 'Mila', gender: 'female' },
];

let catsNames = Array.from(cats, ({ name }) => name);

console.log(catsNames);

catsNames = cats.map(cat => cat.name);

console.log(catsNames);

console.log(Array.from(catsNames[0]));
console.log([...'Mila']);

console.log(Array.from(Object.values(mixedArray)));
console.log(Object.values(mixedArray));

console.log(Object.getOwnPropertyNames(mixedArray));
console.log(mixedArray.hasOwnProperty('length'));
console.log(mixedArray.hasOwnProperty(10));

console.log(Object.values(mixedArray));
console.log(Object.entries(mixedArray));
console.log(Object.fromEntries(Object.entries(mixedArray)));

console.log([...new Set(mixedArray)]);

// Copying arrays
let arrCopy = mixedArray;
let arrCopy1 = [...mixedArray];
let arrCopy2 = mixedArray.slice();
let arrCopy3 = Object.assign([], mixedArray);
let arrCopy4 = JSON.parse(JSON.stringify(mixedArray));

// Comparing arrays
console.log(arrCopy === mixedArray);
console.log(arrCopy1 == mixedArray);
console.log(arrCopy2 == mixedArray);
console.log(arrCopy3 == mixedArray);
console.log(arrCopy4 == mixedArray);
console.log([1, 20] == [1, 20]);
console.log([] == []);
console.log([] == true);
console.log(Boolean([]) === true);

console.log(arrCopy.push(999));
console.log(arrCopy);
console.log(mixedArray);

arrCopy = ['ha', 'ha', 'ha'];

console.log(arrCopy);
console.log(mixedArray);
