// Array => object
const techArray = ['JavaScript', 'React.js', 'Node.js'];

const techObject1 = Object.assign({}, techArray);

console.log(techObject1);

const techObject2 = { ...techArray };

console.log(techObject2);

const techObject3 = techArray.reduce(
  (accumulator, key, index) => ({ ...accumulator, [index + 1]: key }),
  {}
);

console.log(techObject3);

const techObject4 = techArray.reduce((accumulator, key, index) => {
  accumulator[index + 1] = key;

  return accumulator;
}, {});

console.log(techObject4);

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

const personObject1 = personData.reduce(
  (accumulator, current) =>
    Object.assign(accumulator, { [current[0]]: current[1] }),
  {}
);

console.log(personObject1);

const personObject2 = personData.reduce(
  (accumulator, current) => ({ ...accumulator, [current[0]]: current[1] }),
  {}
);

console.log(personObject2);

const personObject3 = Object.fromEntries(personData);

console.log(personObject3);

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

const createObjectOfBirdsWithSizesVersion1 = () => {
  const object = birds.reduce(
    (accumulator, bird, index) => ({
      ...accumulator,
      [bird]: sizes[index],
    }),
    {}
  );

  return object;
};

let objectWithBirdsAndSizes = createObjectOfBirdsWithSizesVersion1();

console.log(objectWithBirdsAndSizes);

const createObjectOfBirdsWithSizesVersion2 = () => {
  const object = arrayOfObjectsWithBirdsAndSizes.reduce(
    (accumulator, { bird, size }) => ({
      ...accumulator,
      [bird]: size,
    }),
    {}
  );

  return object;
};

objectWithBirdsAndSizes = createObjectOfBirdsWithSizesVersion2();

console.log(objectWithBirdsAndSizes);

const createObjectOfBirdsWithSizesVersion3 = () => {
  const object = arrayOfObjectsWithBirdsAndSizes.reduce(
    (accumulator, { bird, size }) => {
      accumulator[bird] = size;

      return accumulator;
    },
    {}
  );

  return object;
};

objectWithBirdsAndSizes = createObjectOfBirdsWithSizesVersion3();

console.log(objectWithBirdsAndSizes);

const arraysOfBirdsAndSizes = [...Object.entries(objectWithBirdsAndSizes)];

console.log(arraysOfBirdsAndSizes);

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

let objectsOfBirdsAndSizes = createObjectsWithBirdsAndSizesWithReduce();

console.log(objectsOfBirdsAndSizes);

const createObjectsWithBirdsAndSizesWithMap = () => {
  const arrayOfObjects = arraysOfBirdsAndSizes.map(([bird, size]) => ({
    bird,
    size,
  }));

  return arrayOfObjects;
};

objectsOfBirdsAndSizes = createObjectsWithBirdsAndSizesWithMap();

console.log(objectsOfBirdsAndSizes);

const createArrayOfUniqueBirdsAndSizes = () => {
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

const arrayOfObjectsOfUniqueBirdsAndSizes = createArrayOfUniqueBirdsAndSizes();
console.log(arrayOfObjectsOfUniqueBirdsAndSizes);

const createDescriptiveBirdsObjects = () => {
  const descriptiveBirdsObjects = arrayOfObjectsOfUniqueBirdsAndSizes.reduce(
    (accumulator, { key, bird, size }, index) => {
      accumulator[index] = {
        [key]: `${bird.charAt(0).toUpperCase()}${bird.slice(
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

      console.log({
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

  console.log(`Total sum after the last iteration is ${budget}$.`);

  return budget;
};

calcBudget();

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

  return accumulator;
}, {});

console.log(transportation);

const typesOfVehicle = { ...Object.keys(transportation) };

console.log(typesOfVehicle);

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

const combineNameWithTechVersion1 = () => {
  const object = pancakesGroup.reduce((accumulator, { name, technology }) => {
    accumulator[name] = technology;

    return accumulator;
  }, {});

  return object;
};

let pancakesGroupObject = combineNameWithTechVersion1();

console.log(pancakesGroupObject);

const combineNameWithTechVersion2 = () => {
  const object = pancakesGroup.reduce(
    (accumulator, { name, technology }) => ({
      ...accumulator,
      [name]: technology,
    }),
    {}
  );

  return object;
};

pancakesGroupObject = combineNameWithTechVersion2();

console.log(pancakesGroupObject);

const groupMembersByTechnology = () => {
  const technologies = pancakesGroup.reduce((specialization, pancake) => {
    const technology = pancake.technology;

    !specialization[technology] && (specialization[technology] = []);

    specialization[technology].push(pancake.name);

    return specialization;
  }, {});

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
