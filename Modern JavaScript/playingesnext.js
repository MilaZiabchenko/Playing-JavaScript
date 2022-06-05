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

// Sets iterate their elements in their insertion order
books.forEach(book => console.log(book));

const getArrayWithUniqueElements = array => [...new Set(array)];

const array = [2, 3, 4, 2, 4, '8', 8, '8', [8, 8]];

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

// Unlike objects, maps iterate their elements in their insertion order

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

const id = Symbol('id');

const courseInfo = {
  title: 'ECMAScript6+',
  topics: ['destructuring', 'maps', 'promises'],
  [Symbol('access_key')]: 12345,
  id: 'ES6-course',
};

courseInfo[id] = 41284;

console.log(courseInfo);
console.log(courseInfo[id]);
console.log(courseInfo['id']);
console.log(Object.getOwnPropertySymbols(courseInfo));
console.log(Object.getOwnPropertyNames(courseInfo));

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
const skier = (name, sound) => ({
  name,
  sound,
  powderYell() {
    const yell = this.sound.toUpperCase();
    console.log(`${yell}! ${yell}!`);
  },
});

console.log(skier('Sendy', 'woo'));
console.log(skier('Sendy', 'woo').name);
skier('Sendy', 'woo').powderYell();

// Destructuring assignment

// With destructuring we can assign a variable name to a position in the array

let firstCity = 'Seattle';
let secondCity = 'Boston';

[firstCity, secondCity] = [secondCity, firstCity];

console.log(firstCity);
console.log(secondCity);

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

// Adding or changing a property directly on the shallow copy will only affect the copy, not the original, and vice versa
clonedObject.city = 'Paris';
originalObject.surname = 'Dean';

// However, adding or changing a deeply nested property affects both the shallow copy and the original, even if they were 'freezed'
Object.freeze(originalObject);
Object.freeze(clonedObject);
originalObject.details.faculty = 'Engineering';
clonedObject.details.university = 'Berkeley';

console.log(originalObject);
console.log(clonedObject);
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

// Required function arguments
const isRequired = arg => {
  throw new Error(`${arg} is required`);
};

const add = (a = isRequired('a'), b = isRequired('b'), c = isRequired('c')) =>
  a + b + c;

console.log(add(2, 3, 5));

// padStart() string method
const hideNumber = number => number.slice(-4).padStart(number.length, '*');

const phoneNumber = '0123456789';

console.log(hideNumber(phoneNumber));

// repeat() string method
const yell = 'Woo! ';

const party = yell.repeat(2);

console.log(party);

const cat = {
  name: 'Leo',

  meow(times) {
    return 'Meow! '.repeat(times);
  },

  purr(times) {
    return 'prrr'.repeat(times);
  },

  snore(times) {
    return 'Zzz'.repeat(times);
  },
};

console.log(cat);
console.log(cat.meow(3));
console.log(cat.purr(5));

// Optional chaining operator
console.log(cat?.snore?.(8) || `The cat doesn't snore`);

// Nullish coalescing operator
console.log(cat?.bark?.(8) ?? `Hey, cats don't bark 😂😂😂`);

a = undefined ?? 'Hello';
b = null ?? cat.name;
let c = '' || '! 👻';
let d = '' ?? 'Bye!';

console.log(`${a}, ${b}${c}${d}`);

const breed = cat.breed ?? 'Scottish Fold';

console.log(`${cat.name}'s breed is ${breed}.`);

const getScore = score => {
  const result = score ?? `Let's start the game and score some points!`;
  return typeof result === 'number' ? { score: score } : result;
};

console.log(getScore(null));
console.log(getScore());
console.log(getScore(0));
console.log(getScore(5));

// Computed properties
const initialProp = 'initialScore';
const finalProp = 'finalScore';

const objectWithResults = {
  [initialProp]: getScore(0).score,
  updatedScore: getScore(10).score,
  updatedScore: getScore(52).score,
  [finalProp]: getScore(99).score,
};

console.log(objectWithResults);

// Logical OR assignment operator

// The logical OR assignment operator (||=) accepts two operands and assigns the right operand to the left operand if the left operand is falsy

let song = '';

console.log(song || (song = 'Map Of Your Head'));
console.log((song ||= 'Map Of Your Head'));

song = 'Diamant';

console.log(song || (song = 'Map Of Your Head'));
console.log((song ||= 'Map Of Your Head'));

// Logical AND assignment operator

// The logical AND assignment operator only assigns the right operand to the left operand if the right operand is truthy

console.log(song && (song = 'Map Of Your Head'));
console.log((song &&= 'Map Of Your Head'));

// The nullish coalescing assignment operator

// The nullish coalescing assignment operator only assigns the right operand to the left operand if the right operand is null or undefined

cat.age ??= 5;

console.log(cat);

cat.age ?? (cat.age = 5.5);

console.log(cat.age);
