const getToDosWithCallbacks = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback('Could not fetch the data', undefined);
    }
  });

  request.open('GET', resource);
  request.send();
};

const callbackFunc = (err, data) =>
  err ? console.log(err) : console.log(data);

getToDosWithCallbacks(
  'todos/bucky.json',
  callbackFunc,

  getToDosWithCallbacks(
    'todos/brad.json',
    callbackFunc,

    getToDosWithCallbacks('todos/shaun.json', callbackFunc)
  )
);

const getToDosWithPromise = resource =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        resolve(JSON.parse(request.responseText));
      }

      if (request.readyState === 4) {
        reject('Error getting resource');
      }
    });

    request.open('GET', resource);
    request.send();
  });

getToDosWithPromise('todos/shaun.json')
  .then(data => {
    console.log('Promise 1 resolved:', data);
    return getToDosWithPromise('todos/brad.json');
  })
  .then(data => {
    console.log('Promise 2 resolved:', data);
    return getToDosWithPromise('todos/bucky.json');
  })
  .then(data => {
    console.log('Promise 3 resolved:', data);
  })
  .catch(err => {
    console.log('Promise rejected:', err);
  });

// Fetch API

// Fetch API allows us to hit an endpoint and have response returned to us as a promise of the response provided with the callback to map it to json, which is also a promise, so we can return that promise from the first 'then' callback and then in the next one we'll have the actual data as a plain JavaScript object

fetch('todos/shaun.json')
  .then(response => {
    console.log('RESOLVED', response);
    const promise = response.json();
    console.log('JSON', promise);
    return promise;
  })
  .then(data => {
    console.log('DATA', data);
  })
  .catch(err => {
    console.log('REJECTED', err);
  });

const getToDoWithAsync = async () => {
  const response = await fetch('todos/shaun.json');

  if (response.status !== 200) {
    throw new Error('Cannot fetch data');
  }

  const data = await response.json();

  return data;
};

getToDoWithAsync()
  .then(data => console.log(data))
  .catch(err => console.log(err.message));

const showAwaitedValue = async (value, fallback) => {
  const promise = new Promise((resolve, reject) => reject(value)).catch(
    () => fallback
  );

  const awaitedValue = await promise;

  console.log(awaitedValue);
};

showAwaitedValue('Real value', 'Fallback value');

const delay = seconds =>
  new Promise((resolve, reject) => {
    if (typeof seconds !== 'number') {
      reject(new Error('Seconds must be a number'));
    }

    setTimeout(resolve, seconds * 1000);
  });

delay(5)
  .then(() => console.log('Resolved with a delay of 5 seconds.'))
  .catch(error => console.log(`Rejected... :( \n${error.message}`));

const countToThree = async () => {
  console.log('Count starts here...');
  await delay(3);
  console.log('3 seconds delay');
  await delay(6);
  console.log('6 seconds delay');
  await delay(9);
  console.log('9 seconds delay');
};

countToThree();

console.time('id-space');

let getSpacePeople = () =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    const url = 'http://api.open-notify.org/astros.json';

    request.open('GET', url);
    request.onload = () => {
      if (request.status === 200) {
        resolve(JSON.parse(request.response));
      } else {
        reject(Error(request.statusText));
      }
    };
    request.onerror = err => reject(err);
    request.send();
  });

getSpacePeople()
  .then(spaceData => console.log(spaceData))
  .catch(() => console.error(new Error(`Can't load people`)));

console.timeLog('id-space');

getSpacePeople = () =>
  fetch('http://api.open-notify.org/astros.json').then(res => res.json());

// fetch() returns the entire response object, and this object has a json() method that parses the results

getSpacePeople().then(console.log);

const getSpacemenNames = () =>
  getSpacePeople()
    .then(result => result.people)
    .then(people => people.map(p => p.name));

getSpacemenNames().then(console.log);

console.timeEnd('id-space');

const githubRequest = async login => {
  const request = await fetch(`https://api.github.com/users/${login}`);
  const json = await request.json();
  const summary = `${json.name}, \n${json.bio}`;

  console.log(summary);
};

githubRequest('milaziabchenko');

let getCountriesData = () =>
  fetch('https://restcountries.com/v3.1/all').then(response => response.json());

getCountriesData()
  .then(countries => {
    const countriesArr = [];

    countries.map(country => {
      const name = country.name.common;
      const population = country.population;
      const arrOfLanguages = [];

      for (item in country.languages) {
        arrOfLanguages.push(country.languages[item]);
      }

      const listOfLanguages = arrOfLanguages.join(', ');

      countriesArr.push({
        name,
        population,
        languages: listOfLanguages,
      });
    });

    const first20Countries = countriesArr.slice(0, 20);

    console.log(first20Countries);
  })
  .catch(error => console.log(error.message));

getCountriesData = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();

  return data;
};

getCountriesData().then(countries => {
  const myCountry = countries.find(
    country => country.name.official === 'Ukraine'
  );

  console.log(myCountry);

  myCountry.independent &&
    console.log(`${myCountry.name.official} is free and independent`);
});

const getCountryArea = async country => {
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  const data = await res.json();
  const { area } = data[0];

  console.log(
    `The area of ${country.charAt(0).toUpperCase()}${country.slice(
      1
    )} is ${area} square kilometers.`
  );

  return area;
};

const countries = [
  'canada',
  'ukraine',
  'germany',
  'norway',
  'italy',
  'switzerland',
];

countries.forEach(country => getCountryArea(country));

const tick = Date.now();
const logResultAndElapsedTime = value =>
  console.log(`${value} \n \nElapsed: ${Date.now() - tick} ms`);

// The creation of the promise is still blocking because it happens in the main thread. It's only the resolving of the value that is a micro task

const nonBlockingLoop = async () => {
  await Promise.resolve();

  let i = 0;

  while (i < 1000000000) {
    i++;
  }

  return 'One billion loops done 🐱‍💻';
};

// A fulfilled promise will run in the micro task queue after all the synchronous code in the current macro task has completed and before the start of the next event loop

nonBlockingLoop().then(logResultAndElapsedTime);

// Async function

// Whatever gets returned inside the async function will be a promise of that value

// If we didn't use the async keyword, we could write this function by just returning a promise that resolves to this value

const getHearts = hearts => Promise.resolve(hearts);

getHearts('💛💚💖').then(logResultAndElapsedTime);

// With the async keyword it takes the return value and automatically resolves it as a promise

const getFruit = async name => {
  const fruits = {
    peach: '🍑',
    strawberry: '🍓',
    watermelon: '🍉',
    cherries: '🍒',
    apple: '🍏',
  };

  return fruits[name];
};

getFruit('peach').then(logResultAndElapsedTime);

// Async + Await

// Async keyword also sets up a context to use the await keyword. The real power of the async function comes when you combine it with the await keyword to pause the execution of the function until the promise resolves to a value at which point we can use it as a variable

const makeSmoothie = async () => {
  const first = await getFruit('peach');
  const second = await getFruit('strawberry');

  return [first, second];
};

makeSmoothie().then(console.log);

// Concurrency with Promise.all()

// We only need to await for one thing after the other if the second value is dependant on the first value

const getFruitsForSmoothieConcurrently = async () => {
  const first = getFruit('peach');
  const second = getFruit('apple');
  const third = getFruit('strawberry');

  const smoothie = await Promise.all([first, second, third]);

  return smoothie;
};

getFruitsForSmoothieConcurrently().then(console.log);
getFruitsForSmoothieConcurrently().then(logResultAndElapsedTime);

const fruitRace = async () => {
  const first = getFruit('peach');
  const second = getFruit('apple');
  const third = getFruit('strawberry');

  const winner = await Promise.race([first, second, third]);

  return `And the winner of the race is ${winner}!`;
};

fruitRace().then(console.log);

// Error handling
const badSmoothie = async () => {
  try {
    const first = getFruit('apple');
    const second = getFruit('strawberry');
    const smoothie = await Promise.all([first, second]);

    throw `It's broken!`;

    return smoothie;
  } catch (err) {
    console.log(err);

    // catching the error and providing some replacement value
    return `We are going to get some 🍑🍑🍑 and be fine...`;

    // or catching the error and throwing another error
    throw `💩 It's really broken!`;
  }
};

badSmoothie()
  .then(console.log)
  .catch(error => console.log({ error }));

const fruits = ['cherries', 'watermelon', 'apple'];
const smoothie = fruits.map(value => getFruit(value));

// Asynchronous conditional expressions
const fruitInspection = async () => {
  (await getFruit('peach')) === '🍑' && console.log('Looks peachy 😋!');
};

fruitInspection();

//  Asynchronous loops
const fruitLoop = async () => {
  for await (let emoji of smoothie) {
    logResultAndElapsedTime(emoji);
  }
};

fruitLoop();

// Asynchronous generator functions
async function* generate(...items) {
  for (let item of items) {
    await new Promise(resolve => setTimeout(resolve, 3000));

    yield item;
  }
}

(async () => {
  const fruitsGen = generate(...fruits);

  for await (let fruit of fruitsGen) {
    console.log(fruit);
  }
})();
