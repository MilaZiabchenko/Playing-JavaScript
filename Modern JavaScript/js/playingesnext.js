// Set data structure

// Sets are collections of values that can be of any type, but the rule with Sets is that each value must be unique

const array = [2, 3, 4, 2, 4, '8', 8, '8', [8, 8]];

const arrayOfUniqueValues = [...new Set(array)];
const setOfUniqueValues = new Set(array);

console.log(arrayOfUniqueValues);
console.log(setOfUniqueValues);

console.log(arrayOfUniqueValues.length === setOfUniqueValues.size);

const setOfBooks = new Set();

setOfBooks
  .add('Pride and Prejudice')
  .add('Pride and Prejudice')
  .add('War and Peace')
  .add('Oliver Twist');

console.log(setOfBooks);
console.log(setOfBooks.size);
console.log(setOfBooks.has('Oliver Twist'));

setOfBooks.delete('War and Peace');

console.log(setOfBooks);

// We can iterate through the elements of a Set in the insertion order

setOfBooks.forEach(book => console.log(book));

for (let book of setOfBooks) console.log(book);

// Map data structure

// The Map object holds 'key - value' pairs. In a Map, any value, both objects and primitive values may be used either as a key or a value

const details = new Map([
  [new Date(), 'today'],
  [{ javascript: ['JS', 'Node', 'React'] }, '82 hours'],
  [
    'modules',
    [{ beginner: [1, 2] }, { intermediate: [3, 4] }, { advanced: 5 }],
  ],
]);

console.log(details);
console.log(details.size);

details.clear();

console.log(details);

details.set('students', 12);

console.log(details);
console.log(details.size);

const course = new Map();

course
  .set('React', { description: 'UI Library' })
  .set('Jest', { description: 'Testing' })
  .set('year', 2022);

console.log(course);

// Unlike a standard object in JavaScript, with Map we must use the get() method to access the values

console.log(course.get('React'));

// Unlike objects, Maps can iterate their elements in their insertion order
for (let item of course) console.log(item);

for (let entry of course.entries()) {
  console.log(entry);
}

for (let key of course.keys()) {
  console.log(key);
}

for (let value of course.values()) {
  console.log(value);
}

// Weak references

// Simply put a weak reference is a reference to an object that doesn’t prevent garbage collection if it is the only reference to the object in the memory, and the object is removed.

// WeakSet data structure

// WeakSet is similar to Set, but it can only store objects, it is not enumerable, and there is no way to loop over the items contained within it because there is no list of current objects stored in the collection; they are weakly referenced and may be removed at any point.

const animals_1 = new WeakSet();
const animals_2 = new Set();

const turtle = { name: 'Tin-tin' };
let lion_1 = { name: 'Mars' };
let lion_2 = { name: 'Saturn' };
let lion_3 = { name: 'Jupiter' };

animals_1.add(turtle).add(lion_1);
animals_2.add(turtle).add(lion_2);

const animals_3 = [turtle, lion_3];

console.log(animals_1.has(lion_1));
console.log(animals_2.has(lion_2));
console.log(animals_3.includes(lion_3));
console.log(animals_3[1] === lion_3);
console.log(animals_3.at(-1));

lion_1 = 'Mars';
lion_2 = 'Saturn';
lion_3 = 'Jupiter';

console.log(animals_1.has(lion_1));
console.log(animals_2.has(lion_2));
console.log(animals_3.includes(lion_3));
console.log(animals_3[1] === lion_3);
console.log(animals_3.at(-1));

console.log(animals_1);
console.log(animals_2);
console.log(animals_3);

// WeakMap data structure

// In comparison to a Map, with a WeakMap we must use objects as the keys, but the values can be any arbitrary value. Also, WeakMap has the side effect of not being enumerable due to the weak references.

let pets = new WeakMap();
let dog = { name: 'Charlie' };

pets.set(dog, { size: 'medium' });

dog = null; // isn't reachable (garbage collected)

console.log(pets);

// While the strong reference to the original 'dog' object still exists, the 'dog' object persists in the WeakMap, and we can access it with no issues. But, when we overwrite the reference to the original 'dog' object by reassigning the variable to null, the only reference to the original object in memory is the weak reference coming from the WeakMap we created. Because it’s a weak reference, when the JavaScript engine runs a garbage collection process again, the 'dog' object will be removed from memory and from the WeakMap we assigned it to.

// If you need to store additional data temporarily and don’t want to worry about cleaning up the memory or how the objects are removed, then using weak references is an absolute lifesaver, but in the majority of situations, use normal (strong) references.

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
console.log(Object.keys(courseInfo));

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
  const obj = entry;
  const id = Symbol();

  obj.id = id;

  return obj;
};

const object_1 = { name: 'Nick' };
const object_2 = { name: 'Veronika' };

addUniqueIdToTheObject(object_1);
addUniqueIdToTheObject(object_2);

console.log(object_1);
console.log(object_2);

console.log(Object.hasOwn(object_1, 'id'));

Object.prototype.keyInheritedFromPrototype = 'valueInheritedFromPrototype';

console.log('keyInheritedFromPrototype' in object_1);
console.log(Object.hasOwn(object_1, 'keyInheritedFromPrototype'));

console.log(Object.keys(object_1));
console.log(Object.getOwnPropertyNames(object_1));
console.log('id' in object_1 && 'id' in object_2);
console.log(object_1.id === object_2.id);

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

const gang = {
  keyOne: 'Bo',
  keyTwo: 'Le',
  keyThree: 'Mi',
};

// Getting keys of an object
const getKeys = obj => {
  const result = [];

  for (let key in obj) {
    result.push(key);
  }

  return result;
};

console.log(getKeys(gang)); // own properties + inherited properties
console.log(Object.keys(gang)); // just own properties

// Getting values of an object
const getValues = obj => {
  const result = [];

  for (let key in obj) {
    result.push(obj[key]);
  }

  return result;
};

console.log(getValues(gang));
console.log(Object.values(gang));
console.log(Object.values(gang).toString().replaceAll(',', ', '));

// Getting Map values
const gangMap = new Map(Object.entries(gang));

console.log(gangMap);

for (let value of gangMap.values()) {
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

// Required parameters (default params)

const isRequired = () => {
  throw new Error(`Param is required`);
};

const add = (a = isRequired(), b = isRequired(), c = isRequired()) => a + b + c;

console.log(add(2, 3, 5));

// String destructuring with rest

const [first, second, ...rest] = isRequired.name;

console.log(first, second);
console.log(...rest);

console.log([...rest].join(''));

// String methods

// padStart()
const hideNumber = number => number.slice(-4).padStart(number.length, '*');

const phoneNumber = '0123456789';

console.log(hideNumber(phoneNumber));

// repeat()
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

const a = undefined ?? 'Hello';
const b = null ?? cat.name;
const c = '' || '! 👻';
const d = '' ?? 'Bye!';

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

cat.age ?? (cat.age = null);

console.log(cat.age);

cat.breed ??= 'Scottish Fold';

console.log(cat);
