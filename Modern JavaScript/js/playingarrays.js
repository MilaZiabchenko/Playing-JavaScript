// Array creation:

// 1. Array literal

let planets = ['Earth', 'Saturn', 'Jupiter'];

console.log(planets);

// 2. Array constructor

planets = new Array('Earth', 'Saturn', 'Jupiter');

console.log(planets);

planets = Array.of('Earth', 'Saturn', 'Jupiter');

console.log(planets);

// Array initialization is a usual task when dealing with collections. JavaScript allows a decent number of ways and flexibility to achieve that.

// The array constructor has a number of situations when its behavior may be surprising. So the array literal is a better and simpler solution to initialize array instances.

// Destructuring

const [first] = planets;
const [, second] = planets;
const [, , third] = planets;
const [planet_1, planet_2, planet_3] = planets;

console.log(first, second, third);
console.log(planet_1, planet_2, planet_3);

console.log(planets instanceof Array);
console.log(planets instanceof Object);

// Array methods:

// at()
console.log(planets.at(1));
console.log(planets.at(-1));

// sparse array with empty slots
const emptyArray = Array(5);

console.log(emptyArray);

// Mutable methods

// Array has several mutable operations - fill, pop, push, unshift, shift, reverse, sort and splice. Using them is usually causing side effects and bugs that are hard to track. That’s why it’s important to use an immutable way

// fill()
const filledArray = emptyArray.fill(planets[0]);

// pop()
filledArray.pop();

// push()
filledArray.push('Venus');

console.log(filledArray);

const array = [];

const arrLength = array.push('bicycle', 'backpack');

console.log(array);
console.log(arrLength);

// shift()
const shiftedValue = array.shift();

console.log(array);
console.log(shiftedValue);

// unshift()
array.unshift('bike');

console.log(array);

let years = [2021, 2020, 2015, 2018, 2017, 2016, 2019];

console.log(years);

// Immutable methods

// slice()

// slice() returns a shallow copy of a portion of an array without modifying the original array

const firstYearInTheArray = years.slice(0, 1);
const lastThreeYearsInTheArray = years.slice(years.length - 3);

console.log(firstYearInTheArray);
console.log(lastThreeYearsInTheArray);

// reverse()

// reversing without modifying the original
console.log(years.slice().reverse());
console.log(years);

// reversing and modifying the original array
years.reverse();

console.log(years);

// sort()

// sort() takes in a Comparator function with two arguments. The return value of this function for any two elements determines the order in which these elements will appear in relation to each other in the final array.

const ascendingYears = years
  .slice()
  .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
// or
years.slice().sort((a, b) => a - b);
// or
years.slice().sort();

console.log(ascendingYears);

const descendingYears = years
  .slice()
  .sort((a, b) => (a < b ? 1 : a > b ? -1 : 0));
// or
years.slice().sort((a, b) => b - a);

console.log(descendingYears);

const yearsSortedRandomly = years.slice().sort(() => 0.5 - Math.random());

console.log(yearsSortedRandomly);

// When we see "..." in the code, it is either rest parameters or the spread syntax. There’s an easy way to distinguish between them:

// When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.

// When ... occurs in a function call or alike, it’s called a “spread syntax” and expands an array into a list.

// Rest parameters

// The rest parameter syntax allows us to more easily handle various input as parameters in a function, representing an indefinite number of arguments as an array.

// The dots here mean 'gather the rest of the parameters into the array 'args'

const nestYears = ([y1, y2, y3, ...restOfTheYears]) => [
  y1,
  y2,
  y3,
  ...restOfTheYears,
];

console.log(nestYears(ascendingYears));

let sumOfYears = (...args) => {
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
};

// Spread operator

// Spread syntax looks similar to rest parameters, but does quite the opposite: it takes in an iterable (e.g an array) and expands it into individual elements.

// The spread operator turns the elements of an iterable (array, string) into elements of an array literal or into arguments of a function call

console.log([...'Leo']);
console.log(sumOfYears(...ascendingYears));
console.log(sumOfYears(...ascendingYears, 2021, 2022, 2023));

const physicalState = `I feel tired and need some rest`;

// split()
console.log(physicalState.split());
console.log(physicalState.split(' and '));
console.log(physicalState.split(' '));
console.log(physicalState.split(''));
console.log([...physicalState]);

// reduce()

// 'reduce' method reduces the array to a single value. It loops over and executes a function for each value of the array. The return value of the function is stored in an acc (result/total). This method is doing some operation(s) on the array and returns a result of all the operations

let counter = 0;

sumOfYears = ascendingYears.reduce((total, val) => {
  ++counter;
  return total + val;
}, 0);

console.log(ascendingYears, sumOfYears, counter);

counter = 0;

sumOfYears = ascendingYears.reduce((total, val) => {
  ++counter;
  return total + val;
});

console.log(ascendingYears, sumOfYears, counter);

const minYear = ascendingYears.reduce((prevYear, curYear) =>
  prevYear < curYear ? prevYear : curYear
);
const maxYear = ascendingYears.reduce((prevYear, curYear) =>
  prevYear > curYear ? prevYear : curYear
);

const getAverageValue = nums =>
  nums.reduce((prevNum, curNum) => prevNum + curNum, 0) / nums.length;

console.log(minYear);
console.log(maxYear);
console.log(getAverageValue(ascendingYears));

// Merging arrays:

// 1. using the spread syntax
const myBikeActivity = [...array, '18-30 km/h', ...ascendingYears, 2021];

console.log(myBikeActivity);

// 2. using concat()
const joyride = array.concat(['highway', 'forest', 'lake', 'freedom', 'joy']);

console.log(joyride.slice(-5));

console.log(joyride);

joyride.sort();

console.log(joyride);

const darkSide = ['fearful', 'depressive', 'passive'];
const brightSide = ['kind', 'smiling', 'gregarious', 'funny'];

console.log(darkSide[0]);
console.table(brightSide);

// splice()
brightSide.splice(2, 1, 'intelligent', 'strong', 'brave', 'happy'); // removing and adding items, modifying the array

console.table(brightSide);

// indexOf()
let index = brightSide.indexOf('brave');

// deleting from the array in a mutable way
brightSide.splice(index, 1);

console.table(brightSide);

index = brightSide.indexOf('happy');

// creating a copy of an array, removing one item from the original array in an immutable (redux) way
const newBrightSide = [
  ...brightSide.slice(0, index),
  ...brightSide.slice(index + 1),
];

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
  'faithful',
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

Bogdan.unshift('1982');
Bogdan.push('outgoing');
Bogdan.reverse();

console.log(Bogdan);

Bogdan.splice(3, 2);

console.log(Bogdan);

Bogdan.splice(2, 0, 'avoidant');

console.log(Bogdan);

Bogdan.splice(9, 0, 'September', '28');

console.log(Bogdan);

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
console.log(Saturday[0].task);
console.log(typeof Saturday[0].task);
console.log(SaturdayJSON);
console.log(SaturdayDeepCopy);

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

// Map performs a function for each todo and returns a transformed array of the same length

// The way we use map is by calling it on an array and passing it some function we want to apply to each element in the array. Map then returns another array that contains the return values of the function for each element in the original array

const todoTask = todo => todo.task;

const tasks = Saturday.map(todoTask);

console.log(tasks);

// filter()

// Filter returns a subset of the original array with elements that meet the condition

// Filter is used when you want to find all of the elements in the array that fit some criteria

// The main difference between filter and map is the type of function that we pass into it. In map we pass in a function that returns a value for each element in the array. And the return value of this function represents what the element becomes in our new array. On the other hand, for filter we pass it a function that returns either true or false for each element. If the function that we pass returns true for a given element, then that element's included in the final array. Otherwise, it's left out.

const completedTask = todo => todo.done;

const completedTasks = Saturday.filter(completedTask);

console.log(completedTasks);

// Higher-order array methods with predicate functions

// A predicate function is a function that takes one value as input and returns true or false based on whether the value satisfies the condition.

// find()

// returns the value of the first element in the array where predicate is true, and undefined otherwise.

const foundTask = Saturday.find(todo => todo.task === 'Coding');

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
const allPastYears = ascendingYears.every(year => {
  const currentYear = new Date().getFullYear();
  return currentYear - year > 0;
});

console.log({ allPastYears });

const areAllTasksCompleted = Saturday.every(completedTask);

console.log({ areAllTasksCompleted });

// sort()
const sortedIds = Saturday.map(todo => todo.id).sort(); // map().sort()

console.log(sortedIds);

const doneTasks = Saturday.filter(completedTask).map(todoTask); // filter().map()

console.log(doneTasks);

const agenda = [
  {
    id: 1,
    task: 'Buying a new scratching post for Leo',
    done: true,
  },
  {
    id: 2,
    task: 'Progressing in learning of web development',
    done: true,
  },
  {
    id: 3,
    task: 'Riding to the forest with Bogdan',
    done: true,
  },
];

const newAgenda = [
  ...agenda,
  {
    id: 4,
    task: 'Resolving health issues',
    done: false,
  },
];

console.log(newAgenda);

for (let todo of newAgenda) {
  console.log(todo);
}

for (let idx in newAgenda) {
  console.log(idx, typeof idx);
}

newAgenda.forEach(console.log);

const agendaTasks = newAgenda.map(todoTask);

console.log(agendaTasks);

const descendingIds = newAgenda.map(todo => todo.id).sort((a, b) => b - a); // map().sort()

console.log(descendingIds);

const bingo = newAgenda.filter(completedTask).map(todoTask); // filter().map()

console.log(bingo);

const bingoCopy = JSON.parse(JSON.stringify(bingo));

console.log(bingoCopy);

const foundCompletedTask = newAgenda
  .filter(completedTask)
  .find(todo => todo.task.includes('of')); // filter().find()

console.log(foundCompletedTask);

const sortedTasks = newAgenda.map(todoTask).sort(); //map().sort()

console.log(sortedTasks);

const endsWithLeo = todo => todo.task.endsWith('Leo');

const isEveryAgendaTaskEndsWithLeo = newAgenda.every(endsWithLeo);
const isAnyAgendaTaskEndsWithLeo = newAgenda.some(endsWithLeo);

console.log(isEveryAgendaTaskEndsWithLeo);
console.log(isAnyAgendaTaskEndsWithLeo);

const arrOfNums = [1, 2, 3, 4, 5, 6, 7];

// reduceRight()
let sumOfSquareRootsOfEvenNums = arrOfNums
  .filter(element => !(element % 2))
  .reduceRight((acc, element) => acc + Math.sqrt(element), 0); // filter().reduceRight()

console.log(sumOfSquareRootsOfEvenNums);

// filtering inside reduce() or reduceRight() makes calculations faster
const getSumOfSquareRootsOfEvenNums = array => {
  const sum = array.reduce(
    (acc, element) => acc + (element % 2 ? 0 : Math.sqrt(element)),
    0
  );

  return sum;
};

console.log(getSumOfSquareRootsOfEvenNums(arrOfNums));

const getMaxOddElement = array => {
  const maxEvenNumber = array.reduce((acc, value) =>
    Math.max(acc, value % 2 ? value : 0)
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

const myForEachFunc = (array, cb) => {
  for (let element of array) {
    cb(element);
  }
};

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

const myMapFunc_1 = (array, transform) => {
  const mapped = [];

  for (let element of array) {
    mapped.push(transform(element));
  }

  return mapped;
};

const myMapFunc_2 = (array, transform) => {
  const mapped = array.reduce((acc, cur) => {
    acc.push(transform(cur));

    return acc;
  }, []);

  return mapped;
};

const myMapFunc_3 = (array, transform) =>
  array.reduce((acc, cur) => [...acc, transform(cur)], []);

const double = num => num + num;
const raiseToThePowerOfTwo = num => num * num;

console.log(arrOfNums.myMapPolyfill(double));
console.log(arrOfNums.myMapPolyfill(raiseToThePowerOfTwo));
console.log(
  arrOfNums.myMapPolyfill(raiseToThePowerOfTwo).myMapPolyfill(double)
);
console.log(myMapFunc_1(arrOfNums, double));
console.log(myMapFunc_2(arrOfNums, element => element + 5));
console.log(myMapFunc_3(newAgenda, todoTask));

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

const myFilterFunc_1 = (array, test) => {
  const passed = [];

  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }

  return passed;
};

const myFilterFunc_2 = (array, test) =>
  array.reduce((acc, cur) => {
    test(cur) && acc.push(cur);

    return acc;
  }, []);

const greaterThanThree = num => num > 3;
const odd = num => num % 2;
const even = num => !(num % 2);

console.log(newAgenda.myFilterPolyfill(todo => !todo.done));
console.log(myFilterFunc_1(newAgenda, completedTask).map(todoTask));

console.log(arrOfNums.myFilterPolyfill(greaterThanThree));
console.log(myFilterFunc_1(arrOfNums, greaterThanThree));
console.log(myFilterFunc_2(arrOfNums, greaterThanThree));

console.log(arrOfNums.myFilterPolyfill(odd));
console.log(myFilterFunc_1(arrOfNums, even));
console.log(myFilterFunc_2(arrOfNums, odd));

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

const isNumber = element => typeof element === 'number';

const numbers = myFilterFunc_1(mixedArray, isNumber);
const reversedNumbers = filterReversedNums(mixedArray, isNumber);

console.log(numbers);
console.log(reversedNumbers);

// indexOf() with one argument
console.log(mixedArray.indexOf(9));

// indexOf() with two arguments
console.log(mixedArray.indexOf(9, 3));

// lastIndexOf()
console.log(mixedArray.lastIndexOf(9));

Array.prototype.myReducePolyfill = function (combine, initialValue) {
  let acc = initialValue;
  let index = 0;

  typeof acc == 'undefined' && (acc = this[index++]);

  for (; index < this.length; index++) {
    acc = combine(acc, this[index], index, this);
  }

  return acc;
};

const myReduceFunc = (array, combine, initialValue) => {
  let acc = initialValue;
  let index = 0;

  if (typeof acc == 'undefined') {
    acc = array[index++];
  }

  while (index < array.length) {
    acc = combine(acc, array[index]);
    index++;
  }

  return acc;
};

const addAllNumbers = (prev, cur) => prev + cur;
const addAllNumbersTimesTen = (prev, cur) => prev + cur * 10;

console.log(arrOfNums.reduce(addAllNumbers, 0));
console.log(arrOfNums.reduce(addAllNumbers));
console.log(arrOfNums.myReducePolyfill(addAllNumbers, 0));
console.log(arrOfNums.myReducePolyfill(addAllNumbers));
console.log(myReduceFunc(arrOfNums, addAllNumbers, 0));
console.log(myReduceFunc(arrOfNums, addAllNumbers));

console.log(arrOfNums.reduce(addAllNumbersTimesTen, 0));
console.log(arrOfNums.reduce(addAllNumbersTimesTen));
console.log(arrOfNums.myReducePolyfill(addAllNumbersTimesTen, 0));
console.log(arrOfNums.myReducePolyfill(addAllNumbersTimesTen));
console.log(myReduceFunc(arrOfNums, addAllNumbersTimesTen, 0));
console.log(myReduceFunc(arrOfNums, addAllNumbersTimesTen));

const mySomeFunc = (array, cb) => {
  for (let element of array) {
    if (cb(element)) return true;
  }

  return false;
};

console.log(mySomeFunc(arrOfNums, isNumber && greaterThanThree && odd));
console.log(mySomeFunc(arrOfNums, element => element === 7));

const myEveryFunc = (array, cb) => {
  for (let element of array) {
    if (!cb(element)) return false;
  }

  return true;
};

console.log(myEveryFunc(arrOfNums, isNumber));
console.log(myEveryFunc(arrOfNums, isNumber && even));
console.log(myEveryFunc(arrOfNums, greaterThanThree));

const myFindLastFunc = (array, cb) => {
  for (let i = array.length - 1; i >= 0; i--) {
    if (cb(array[i], i, array)) return array[i];
  }
};

// findLast()
console.log(arrOfNums.findLast(greaterThanThree));
console.log(myFindLastFunc(arrOfNums, greaterThanThree));
console.log(myFindLastFunc(arrOfNums, odd));

console.log(arrOfNums);

// flat()
const twoDArray = [1, [2, 3], [4, 5]];
const multiDArray = [1, 2, 3, [4, 5, [6, 7, [8, 9, 10]]]];

console.log(twoDArray.flat());
console.log(multiDArray.flat(2));
console.log(multiDArray.flat(3));

const myFlatTwoDArrayFunc = array =>
  array.reduce((prev, next) => prev.concat(next), []);

console.log(myFlatTwoDArrayFunc(twoDArray));

const myFlatArrayOfAnyDepthFunc = (array, depth = 1) =>
  array.reduce((acc, element) => {
    Array.isArray(element) && depth > 0
      ? acc.push(...myFlatArrayOfAnyDepthFunc(element, depth - 1))
      : acc.push(element);

    return acc;
  }, []);

console.log(myFlatArrayOfAnyDepthFunc(twoDArray));
console.log(myFlatArrayOfAnyDepthFunc(multiDArray, 3));

const addUpElementsOfMultiDArray = array =>
  array.reduce(
    (acc, element) =>
      Array.isArray(element)
        ? (acc += addUpElementsOfMultiDArray(element))
        : (acc += element),
    0
  );

console.log(addUpElementsOfMultiDArray(twoDArray));
console.log(addUpElementsOfMultiDArray(multiDArray));

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

console.log(Object.getOwnPropertyNames(mixedArray));
console.log(Object.hasOwn(mixedArray, 'length'));
console.log(Object.hasOwn(mixedArray, 5));
console.log(Object.values(mixedArray));
console.log(Object.entries(mixedArray));
console.log(Object.fromEntries(Object.entries(mixedArray)));

console.log([...new Set(mixedArray)]);

// Copying arrays

let mixedArrayCopy_1 = mixedArray;
const mixedArrayCopy_2 = [...mixedArray];
const mixedArrayCopy_3 = mixedArray.slice();
const mixedArrayCopy_4 = Object.assign([], mixedArray);
const mixedArrayCopy_5 = JSON.parse(JSON.stringify(mixedArray));

// Comparing arrays

console.log(Object.is(mixedArrayCopy_1, mixedArray));
console.log(mixedArrayCopy_1 === mixedArray);
console.log(mixedArrayCopy_2 == mixedArray);
console.log(mixedArrayCopy_3 == mixedArray);
console.log(mixedArrayCopy_4 == mixedArray);
console.log(mixedArrayCopy_5 == mixedArray);
console.log([1, 20] == [1, 20]);
console.log([] == []);
console.log([] == true);
console.log(Boolean([]) === true);

mixedArrayCopy_1.unshift('first element');
mixedArrayCopy_1.push('last element');

console.log(mixedArrayCopy_1);
console.log(mixedArray);

mixedArrayCopy_1 = ['This', 'array', 'has', 'changed', 'completely', '.'];

console.log(mixedArrayCopy_1);
console.log(mixedArray);
