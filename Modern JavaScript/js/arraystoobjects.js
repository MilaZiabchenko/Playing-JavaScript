// Array => object
const techArray = ['JavaScript', 'React.js', 'Node.js'];

const techObject_1 = Object.assign({}, techArray);

console.log(techObject_1);

const techObject_2 = { ...techArray };

console.log(techObject_2);

const techObject_3 = techArray.reduce(
  (accumulator, key, index) => ({ ...accumulator, [index + 1]: key }),
  {}
);

console.log(techObject_3);

const techObject_4 = techArray.reduce((accumulator, key, index) => {
  accumulator[index + 1] = key;

  return accumulator;
}, {});

console.log(techObject_4);

// Array => array of objects
const arrayOfTechObjects = techArray.map((technology, index) => ({
  id: index + 1,
  technology: technology,
}));

console.log(arrayOfTechObjects);

// Array of arrays => object
const personData = [
  ['name', 'Kate'],
  ['city', 'New York'],
];

const personObject_1 = personData.reduce(
  (accumulator, current) =>
    Object.assign(accumulator, { [current[0]]: current[1] }),
  {}
);

console.log(personObject_1);

const personObject_2 = personData.reduce(
  (accumulator, current) => ({ ...accumulator, [current[0]]: current[1] }),
  {}
);

console.log(personObject_2);

const personObject_3 = Object.fromEntries(personData);

console.log(personObject_3);

// Array of arrays => array of objects
const arrayOfPersonObjects = personData.map(([key, value]) => ({
  [key]: value,
}));

console.log(arrayOfPersonObjects);

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

const getHslColors = array => {
  const hslColors = array.reduce(
    (accumulator, cur) => ({
      ...accumulator,
      [cur.color]: `hsl(${cur.hue}, 100%, 52%)`,
    }),
    {}
  );

  return hslColors;
};

console.log(getHslColors(colorsData));
console.table(getHslColors(colorsData));

// Here is how it works:

// reduce is initialized with an empty object ({} at the end), therefore first iteration variables are accumulator = {}, cur = { hue: 120, color: 'green' }. This function returns an object - this is why its body is wrapped in parentheses => ({ ... }). Spread operator doesn't do anything on the first iteration, so 'green: hsl(120, 100%, 52%)' is set as the first item.

// On the second iteration variables are accumulator = { green: hsl(120, 100%, 52%) }, cur = { hue: 240, color: 'blue' }. Here the spread operator expands accumulator and the function returns { green: 'hsl(120, 100%, 52%)', blue: 'hsl(120, 100%, 52%)' }.

// Third iteration: accumulator = { green: 'hsl(120, 100%, 52%)', blue: 'hsl(120, 100%, 52%)' }, cur = { hue: 360, color: 'red' }, so when accumulator is spread inside the object, our function returns the final value

const vehicles = [
  'van',
  'bike',
  'bike',
  'car',
  'truck',
  'bike',
  'bike',
  'truck',
  'truck',
  'bike',
  'car',
];

// Counting all occurrences of array elements => object
const countInstances = array => {
  const objectOfInstances = array.reduce((accumulator, item) => {
    !accumulator[item] && (accumulator[item] = 0);

    accumulator[item]++;

    return accumulator;
  }, {});

  return objectOfInstances;
};

const objectOfCountedVehicleInstances = countInstances(vehicles);

console.log(objectOfCountedVehicleInstances);

// Sorting object properties by values

// 1. using Object.keys(), sort(), and reduce()
const sortObjectOfVehiclesByFrequencyOfInstances_1 = object => {
  const sortedObject = Object.keys(object)
    .sort((key1, key2) => object[key2] - object[key1])
    .reduce((accumulator, key) => ({ ...accumulator, [key]: object[key] }), {});

  return sortedObject;
};

let objectOfSortedVehicleInstances =
  sortObjectOfVehiclesByFrequencyOfInstances_1(objectOfCountedVehicleInstances);

console.log(objectOfSortedVehicleInstances);

// 2. using Object.entries(), sort(), and reduce()
const sortObjectOfVehiclesByFrequencyOfInstances_2 = object => {
  const sortedObject = Object.entries(object)
    .sort(([, a], [, b]) => b - a)
    .reduce(
      (accumulator, [key, value]) => ({ ...accumulator, [key]: value }),
      {}
    );

  return sortedObject;
};

objectOfSortedVehicleInstances = sortObjectOfVehiclesByFrequencyOfInstances_2(
  objectOfCountedVehicleInstances
);

console.log(objectOfSortedVehicleInstances);

// 3. using Object.fromEntries(), Object.entries(), and sort()
const sortObjectOfVehiclesByFrequencyOfInstances_3 = object => {
  const sortedObject = Object.fromEntries(
    Object.entries(object).sort(([, a], [, b]) => b - a)
  );

  return sortedObject;
};

objectOfSortedVehicleInstances = sortObjectOfVehiclesByFrequencyOfInstances_3(
  objectOfCountedVehicleInstances
);

console.log(objectOfSortedVehicleInstances);

const arrayOfVehicleInstancesSortedByFrequency = [
  ...Object.keys(objectOfSortedVehicleInstances),
];

console.log(arrayOfVehicleInstancesSortedByFrequency);

const birds = [
  'chaffinch',
  'chaffinch',
  'tit',
  'catbird',
  'rook',
  'catbird',
  'rook',
  'chaffinch',
  'rook',
];

const sizes = [
  'small',
  'small',
  'small',
  'medium',
  'big',
  'medium',
  'big',
  'small',
  'big',
];

const calcBirdsOfEachType = () => {
  const object = birds.reduce((accumulator, bird) => {
    !accumulator[bird] && (accumulator[bird] = 0);

    accumulator[bird]++;

    return accumulator;
  }, {});

  return object;
};

const amountOfBirdsOfEachType = calcBirdsOfEachType();

console.log(amountOfBirdsOfEachType);

const sortBirdsByQuantity = object => {
  const sortedObject = Object.fromEntries(
    Object.entries(object).sort(
      ([, prevValue], [, nextValue]) => nextValue - prevValue
    )
  );

  return sortedObject;
};

const birdsSortedByQuantity = sortBirdsByQuantity(amountOfBirdsOfEachType);

console.log(birdsSortedByQuantity);

const birdsObject = birds.reduce((accumulator, bird, index) => {
  accumulator[index + 1] = bird;

  return accumulator;
}, {});

console.log(birdsObject);

const newBirdsObject = birds.reduce(
  (accumulator, bird, index) => ({
    ...accumulator,
    [`bird_${index + 1}`]: bird,
  }),
  {}
);

console.log(newBirdsObject);

const combineBirdsAndSizesWithMap = () => {
  const arrayOfObjects = birds.map((bird, index) => ({
    bird,
    size: sizes[index],
  }));

  return arrayOfObjects;
};

let arrayOfObjectsWithBirdsAndSizes = combineBirdsAndSizesWithMap();

console.log(arrayOfObjectsWithBirdsAndSizes);

const combineBirdsAndSizesWithReduce = () => {
  const arrayOfObjects = birds.reduce((accumulator, bird, index) => {
    accumulator[index] = { bird, size: sizes[index] };

    return accumulator;
  }, []);

  return arrayOfObjects;
};

arrayOfObjectsWithBirdsAndSizes = combineBirdsAndSizesWithReduce();

console.log(arrayOfObjectsWithBirdsAndSizes);

const createObjectOfBirdsWithSizes_1 = () => {
  const object = birds.reduce(
    (accumulator, bird, index) => ({
      ...accumulator,
      [bird]: sizes[index],
    }),
    {}
  );

  return object;
};

let objectWithBirdsAndSizes = createObjectOfBirdsWithSizes_1();

console.log(objectWithBirdsAndSizes);

const createObjectOfBirdsWithSizes_2 = () => {
  const object = birds.reduce((accumulator, bird, index) => {
    accumulator[bird] = sizes[index];

    return accumulator;
  }, {});

  return object;
};

objectWithBirdsAndSizes = createObjectOfBirdsWithSizes_2();

console.log(objectWithBirdsAndSizes);

const createObjectOfBirdsWithSizes_3 = () => {
  const object = arrayOfObjectsWithBirdsAndSizes.reduce(
    (accumulator, { bird, size }) => ({
      ...accumulator,
      [bird]: size,
    }),
    {}
  );

  return object;
};

objectWithBirdsAndSizes = createObjectOfBirdsWithSizes_3();

console.log(objectWithBirdsAndSizes);

const createObjectOfBirdsWithSizes_4 = () => {
  const object = arrayOfObjectsWithBirdsAndSizes.reduce(
    (accumulator, { bird, size }) => {
      accumulator[bird] = size;

      return accumulator;
    },
    {}
  );

  return object;
};

objectWithBirdsAndSizes = createObjectOfBirdsWithSizes_4();

console.log(objectWithBirdsAndSizes);

const arraysOfBirdsAndSizes = [...Object.entries(objectWithBirdsAndSizes)];

console.log(arraysOfBirdsAndSizes);

const createObjectsWithBirdsAndSizesWithMap = () => {
  const arrayOfObjects = arraysOfBirdsAndSizes.map(([bird, size]) => ({
    bird,
    size,
  }));

  return arrayOfObjects;
};

let objectsOfBirdsAndSizes = createObjectsWithBirdsAndSizesWithMap();

console.log(objectsOfBirdsAndSizes);

const createObjectsWithBirdsAndSizesWithReduce = () => {
  const arrayOfObjects = arraysOfBirdsAndSizes.reduce(
    (accumulator, [bird, size], index) => {
      accumulator[index] = { bird, size };

      return accumulator;
    },
    []
  );

  return arrayOfObjects;
};

objectsOfBirdsAndSizes = createObjectsWithBirdsAndSizesWithReduce();

console.log(objectsOfBirdsAndSizes);

const createArrayOfObjectsOfUniqueBirds = () => {
  let key = 0;

  const arrayOfObjectsOfUniqueBirdsAndSizes = birds.reduce(
    (accumulator, bird, index) => {
      birds.indexOf(bird) === index &&
        accumulator.push({ key: ++key, bird, size: sizes[index] });

      return accumulator;
    },
    []
  );

  return arrayOfObjectsOfUniqueBirdsAndSizes;
};

const arrayOfObjectsOfUniqueBirdsAndSizes = createArrayOfObjectsOfUniqueBirds();
console.log(arrayOfObjectsOfUniqueBirdsAndSizes);

const createDescriptiveBirdsObjects = () => {
  const descriptiveBirdsObjects = arrayOfObjectsOfUniqueBirdsAndSizes.reduce(
    (accumulator, { key, bird, size }, index) => {
      accumulator[index] = {
        [`Description_${key}`]: `${bird.charAt(0).toUpperCase()}${bird.slice(
          1
        )} is a ${size} bird.`,
      };

      return accumulator;
    },
    []
  );

  return descriptiveBirdsObjects;
};

const arrayOfDescriptiveBirdsObjects = createDescriptiveBirdsObjects();

console.log(arrayOfDescriptiveBirdsObjects);

const financesData = [
  ['buy', 'usd', 50],
  ['sell', 'usd', 100],
  ['sell', 'eur', 200],
];

const makeTableOfTransactionsWithMap = () => {
  const transactions = financesData.map(([operation, currency, amount]) => ({
    operation,
    currency,
    amount,
  }));

  return transactions;
};

console.table(makeTableOfTransactionsWithMap());

const makeTableOfTransactionsWithReduce = () => {
  const transactions = financesData.reduce(
    (accumulator, [operation, currency, amount], index) => {
      accumulator[index] = { operation, currency, amount };

      return accumulator;
    },
    []
  );

  return transactions;
};

console.table(makeTableOfTransactionsWithReduce());

const calcBudget = () => {
  const budget = financesData.reduce(
    (total, [operation, currency, amount], index) => {
      currency === 'eur' && (amount *= 1.05);

      console.info({
        iteration: index + 1,
        total: `${total}$`,
        operation,
        amount: `${amount}$`,
      });

      operation === 'buy' ? (total -= amount) : (total += amount);

      return total;
    },
    1000
  );

  console.info(`Total sum after the last iteration is ${budget}$.`);

  return budget;
};

calcBudget();

const pancakesGroup = [
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

const combineNameWithTech_1 = () => {
  const object = pancakesGroup.reduce((accumulator, { name, technology }) => {
    accumulator[name] = technology;

    return accumulator;
  }, {});

  return object;
};

let pancakesGroupObject = combineNameWithTech_1();

console.log(pancakesGroupObject);

const combineNameWithTech_2 = () => {
  const object = pancakesGroup.reduce(
    (accumulator, { name, technology }) => ({
      ...accumulator,
      [name]: technology,
    }),
    {}
  );

  return object;
};

pancakesGroupObject = combineNameWithTech_2();

console.log(pancakesGroupObject);

const groupMembersByTechnology = () => {
  const technologies = pancakesGroup.reduce(
    (specialization, { technology, name }) => {
      !specialization[technology] && (specialization[technology] = []);

      specialization[technology].push(name);

      return specialization;
    },
    {}
  );

  return technologies;
};

console.log(groupMembersByTechnology());

// Updating one object in an array in an immutable way
const updatedPancakesGroup = pancakesGroup.map(pancake =>
  pancake.name === 'Roma'
    ? Object.assign({}, pancake, { technology: 'React Native' })
    : pancake
);

// Adding new items to the end of the array of objects in an immutable way
const expandedPancakesGroup = [
  ...updatedPancakesGroup,
  { name: 'Bodia', technology: 'Angular' },
  { name: 'Maria', technology: 'React' },
];

console.log(pancakesGroup);
console.log(updatedPancakesGroup);
console.log(expandedPancakesGroup);
