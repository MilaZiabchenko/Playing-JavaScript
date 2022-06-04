// Array => object
const techArray = ['frontend', 'backend', 'qa'];
let object = Object.assign({}, techArray);

console.log(object);

object = { ...techArray };

console.log(object);

object = techArray.reduce((result, key, index) => {
  result[index] = key;

  return result;
}, {});

console.log(object);

// Array of arrays => object
const arrayOfArrays = [
  ['name', 'Kate'],
  ['city', 'New York'],
];

object = arrayOfArrays.reduce(
  (accumulator, current) =>
    Object.assign(accumulator, { [current[0]]: current[1] }),
  {}
);

console.log(object);

object = arrayOfArrays.reduce(
  (accumulator, current) => ({ ...accumulator, [current[0]]: current[1] }),
  {}
);

console.log(object);

object = Object.fromEntries(arrayOfArrays);

console.log(object);

// Array of arrays => array of objects
const arrayOfObjects = arrayOfArrays.map(([key, value]) => ({ [key]: value }));

console.log(arrayOfObjects);

// Array of objects => object
const trafficLightsData = [
  { key: 'red', value: '🔴' },
  { key: 'yellow', value: '🟡' },
  { key: 'green', value: '🟢' },
];

const assembleTrafficLight = array => {
  const lights = array.reduce((accumulator, obj) => {
    accumulator[obj.key] = obj.value;

    return accumulator;
  }, {});

  return lights;
};

console.log(assembleTrafficLight(trafficLightsData));

const colorsData = [
  { hue: 120, color: 'green' },
  { hue: 240, color: 'blue' },
  { hue: 360, color: 'red' },
];

const getHslColors = colorsData.reduce(
  (accumulator, cur) => ({
    ...accumulator,
    [cur.color]: `hsl(${cur.hue}, 100%, 52%)`,
  }),
  {}
);

console.log(getHslColors);
console.table(getHslColors);

// Here is how it works:

// reduce is initialized with an empty object ({} at the end), therefore first iteration variables are accumulator = {}, cur = { hue: 120, color: 'green' }. This function returns an object - this is why its body is wrapped in parentheses => ({ ... }). Spread operator doesn't do anything on the first iteration, so 'green: hsl(120, 100%, 52%)' is set as the first item.

// On the second iteration variables are accumulator = { green: hsl(120, 100%, 52%) }, cur = { hue: 240, color: 'blue' }. Here the spread operator expands accumulator and the function returns { green: 'hsl(120, 100%, 52%)', blue: 'hsl(120, 100%, 52%)' }.

// Third iteration: accumulator = { green: 'hsl(120, 100%, 52%)', blue: 'hsl(120, 100%, 52%)' }, cur = { hue: 360, color: 'red' }, so when accumulator is spread inside the object, our function returns the final value

const birds = ['tit', 'catbird', 'rook'];
const sizes = ['small', 'medium', 'big'];

const birdsObject = birds.reduce((accumulator, bird, index) => {
  accumulator[index] = bird;

  return accumulator;
}, {});

console.log(birdsObject);

const newBirdsObject = birds.reduce(
  (accumulator, bird, index) => ({
    ...accumulator,
    [index + 1]: bird,
  }),
  {}
);

console.log(newBirdsObject);

const arrayOfObjectsWithBirdsAndSizes = birds.reduce(
  (accumulator, bird, index) => {
    accumulator[index] = { bird, size: sizes[index] };

    return accumulator;
  },
  []
);

console.log(arrayOfObjectsWithBirdsAndSizes);

let objectOfBirdsAndSizes = arrayOfObjectsWithBirdsAndSizes.reduce(
  (accumulator, { bird, size }) => {
    accumulator[bird] = size;

    return accumulator;
  },
  {}
);

console.log(objectOfBirdsAndSizes);

objectOfBirdsAndSizes = birds.reduce(
  (accumulator, bird, index) => ({
    ...accumulator,
    [bird]: sizes[index],
  }),
  {}
);

console.log(objectOfBirdsAndSizes);

objectOfBirdsAndSizes = arrayOfObjectsWithBirdsAndSizes.reduce(
  (accumulator, { bird, size }) => ({
    ...accumulator,
    [bird]: size,
  }),
  {}
);

console.log(objectOfBirdsAndSizes);

const arraysOfBirdsAndSizes = [...Object.entries(objectOfBirdsAndSizes)];

console.log(arraysOfBirdsAndSizes);

const objectsOfBirdsAndSizes = arraysOfBirdsAndSizes.reduce(
  (accumulator, [bird, size], index) => {
    accumulator[index] = { bird, size };

    return accumulator;
  },
  []
);

console.log(objectsOfBirdsAndSizes);

const newObjectOfBirdsAndSizes = arraysOfBirdsAndSizes.map(([bird, size]) => ({
  bird,
  size,
}));

console.log(newObjectOfBirdsAndSizes);

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

console.table(transactions);

transactions = entries.reduce(
  (accumulator, [operation, currency, amount], index) => {
    accumulator[index] = { operation, currency, amount };

    return accumulator;
  },
  []
);

console.log({ transactions });

const budget = entries.reduce((total, [operation, currency, amount], index) => {
  currency === 'eur' && (amount *= 1.05);

  console.log(
    `Iteration ${
      index + 1
    }: total sum: ${total}$, operation: '${operation}', amount: ${Math.round(
      amount
    )}$`
  );

  operation === 'buy' ? (total -= amount) : (total += amount);

  return total;
}, 1000);

console.log(`Total sum after the last iteration: ${budget}$`);

const vehicles = [
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
const transportation = vehicles.reduce((accumulator, item) => {
  !accumulator[item] && (accumulator[item] = 0);

  accumulator[item]++;

  // Logs the result on each iteration:
  console.log(accumulator['car']);

  return accumulator;
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

console.log(pancakes);

const technologies = pancakes.reduce((specialization, pancake) => {
  const technology = pancake.technology;

  !specialization[technology] && (specialization[technology] = []);

  specialization[technology].push(pancake.name);

  return specialization;
}, {});

console.log(technologies);

// Updating one object in an array in an immutable way
const updatedPancakes = pancakes.map(pancake =>
  pancake.name === 'Roma'
    ? Object.assign({}, pancake, { technology: 'React Native' })
    : pancake
);

console.log(updatedPancakes);

// Adding new item to the end of the array of objects in an immutable way
const newPancakes = [...pancakes, { name: 'Bodia', technology: 'Angular' }];

console.log(newPancakes);
