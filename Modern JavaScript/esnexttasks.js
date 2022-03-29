const TWO = 2;
const THREE = 3;
const FOUR = 4;
const FIVE = 5;

const arr = ['1', '52', '17', '3', '4', '16', '5'];

// Higher order functions chaining
const getMaxEvenElement = array => {
  const maxEvenNumber = array
    .filter(el => el % TWO === 0)
    .reduce((acc, value) => Math.max(acc, value));

  return maxEvenNumber;
};

console.log(getMaxEvenElement(arr));

// Destructuring assignment

// With destructuring we can assign a variable name to a position in the array

let firstCity = 'Seattle';
let secondCity = 'Boston';

[firstCity, secondCity] = [secondCity, firstCity];

console.log(firstCity);
console.log(secondCity);

// Set data structure

// Sets are collections of values that can be of any type, but the rule with Sets is that each value must be unique

let books = new Set();

books
  .add('Pride and Prejudice')
  .add('Pride and Prejudice')
  .add('War and Peace')
  .add('Oliver Twist');

console.log(books);
console.log(books.size);
console.log(`books include 'Oliver Twist': ${books.has('Oliver Twist')}`);

books.delete('War and Peace');

console.log(books);

books.forEach(book => console.log(book));

const getArrayWithUniqueElements = array => [...new Set(array)];

const array = [TWO, THREE, FOUR, TWO, FOUR, '8', 8, '8'];

console.log(new Set(array));
console.log(getArrayWithUniqueElements(array));

// Map data structure

// The map object holds 'key - value' pairs. In a map, any value, both objects and primitive values may be used either as a key or a value

let details = new Map([
  [new Date(), 'today'],
  [{ javascript: ['JS', 'Node', 'React'] }, '82 hours'],
  [
    'modules',
    [{ beginner: [1, 2] }, { intermediate: [3, 4] }, { advanced: 5 }],
  ],
]);

details.set('students', 12);
console.log(details);
console.log(details.size);

// Unlike objects, maps iterate its elements in their insertion order

details.forEach(item => console.log(item));

let course = new Map();

course
  .set('React', { description: 'UI Library' })
  .set('Jest', { description: 'Testing' })
  .set('started', true);

console.log(course);
console.log(course.get('React'));

for (key of course.keys()) {
  console.log(key);
}

for (value of course.values()) {
  console.log(value);
}

for (item of course) {
  console.log(item);
}

for (entry of course.entries()) {
  console.log(entry);
}

// Object from entries
const getObjFrom = entry => Object.fromEntries(entry);

console.log(getObjFrom(course));

const arrayOfArrays = [
  ['name', 'Dan'],
  ['age', '21'],
  ['city', 'Lviv'],
];

console.log(getObjFrom(arrayOfArrays));

// Symbol

// Symbols are primarily used as unique IDs. What's nice about them is that they are not going to have naming conflict with object string keys.

// We create a symbol by using a factory function, in other words we are going to call a function to create the symbol.

const id = Symbol();

const courseInfo = {
  title: 'ECMAScript6+',
  topics: ['destructuring', 'maps', 'promises'],
  id: 'ES6-course',
};

courseInfo[id] = 41284;

console.log(courseInfo);
console.log(courseInfo[id]);
console.log(courseInfo['id']);

for (let key in courseInfo) {
  console.log(key);
}

for (let key of Object.keys(courseInfo)) {
  console.log(key);
}

for (let [key, value] of Object.entries(courseInfo)) {
  console.log(`${key}: ${value}`);
}

const addUniqueIdToTheObject = entry => {
  const id = Symbol();
  const obj = entry;
  obj.id = id;
  return obj;
};

const obj1 = { name: 'Nick' };
const obj2 = { name: 'Veronika' };

console.log('id' in obj1);

console.log(addUniqueIdToTheObject(obj1));
console.log(addUniqueIdToTheObject(obj2));
console.log(addUniqueIdToTheObject({ name: 'Buffy' }));

console.log('id' in obj1 && 'id' in obj2);
console.log(obj1.id === obj2.id);

// Object literal enhancement
function skier(name, sound) {
  return {
    name,
    sound,
    powderYell: function () {
      let yell = this.sound.toUpperCase();
      console.log(`${yell}! ${yell}!`);
    },
  };
}

console.log(skier('Sendy', 'woo'));
console.log(skier('Sendy', 'woo').name);
skier('Sendy', 'woo').powderYell();

// Deep object destructuring
const getRegroupedObject = obj => {
  const {
    details: { university } = university,
    details: { faculty } = faculty,
    name: firstName,
  } = obj;
  const student = { faculty, firstName };
  return { university, student };
};

const originalObject = {
  name: 'Rose',
  details: {
    faculty: 'Science and Engineering',
    university: 'Sorbonne',
  },
};

// Shallow object copy with spread operator
const clonedObject = { ...originalObject };

originalObject.details.faculty = 'Engineering';
clonedObject.details.university = 'Berkeley';

console.log(originalObject);
console.log(clonedObject);
console.log(originalObject === clonedObject);
console.log(getRegroupedObject(originalObject));
console.log(getRegroupedObject(clonedObject));

const gang = {
  keyOne: 'Bo',
  keyTwo: 'Le',
  keyThree: 'Mi',
};

// Object keys
function getKeys(obj) {
  const result = [];

  for (let key in obj) {
    result.push(key);
  }

  return result;
}

console.log(getKeys(gang));

// Object values
function getValues(obj) {
  const result = [];

  for (let key in obj) {
    result.push(obj[key]);
  }

  return result;
}

console.log(getValues(gang));
console.log((getValues(gang) + '').replaceAll(',', ', '));
console.log(`${String(getValues(gang)).replaceAll(',', ', ')}`);

// Map values
const gangMap = new Map(Object.entries(gang));

console.log(gangMap);

for (const value of gangMap.values()) {
  console.log(value);
}

// padStart() string method
const hideNumber = number => number.slice(-FOUR).padStart(number.length, '*');

const phoneNumber = '0123456789';

console.log(hideNumber(phoneNumber));

// repeat() string method
const yell = 'Woo! ';

const party = yell.repeat(2);

console.log(party);

const cat = {
  meow(times) {
    console.log('Meow! '.repeat(times));
  },

  purr(times) {
    console.log('prrr '.repeat(times));
  },

  snore(times) {
    console.log('Zzz'.repeat(times));
  },
};

console.log(typeof cat);
console.log(cat instanceof Object);
console.log(Object.entries(cat));

cat.meow(3);
cat.purr(5);
cat.snore(8);

// Required function arguments
const isRequired = arg => {
  throw new Error(`${arg} is required`);
};

const add = (a = isRequired('a'), b = isRequired('b'), c = isRequired('c')) =>
  a + b + c;

console.log(add(TWO, THREE, FIVE));

// Generator functions
function* generateIterableSequence() {
  yield 'I';
  yield 'feel';
  yield 'better';
}

const iterableSequence = generateIterableSequence();

for (let value of iterableSequence) {
  console.log(value);
}

const generateString = [...generateIterableSequence()].join(' ');

console.log(generateString);

// Nullish coalescing operator
a = undefined ?? 'Hello';
b = null ?? 'world';
let c = null ?? '!';
let d = '' ?? 'Bye!';

console.log(`${a}, ${b}${c}${d}`);

const getValue = val => val ?? '-';

console.log(getValue(0));
console.log(getValue(FOUR));
console.log(getValue('someText'));
console.log(getValue(undefined));
console.log(getValue(null));
