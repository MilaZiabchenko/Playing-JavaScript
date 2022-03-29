const getToDosXML = (resource, callback) => {
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

getToDosXML('todos/shaun.json', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }

  getToDosXML('todos/brad.json', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }

    getToDosXML('todos/bucky.json', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  });
});

const getToDosPromise = resource =>
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

getToDosPromise('todos/shaun.json')
  .then(data => {
    console.log('Promise 1 resolved:', data);
    return getToDosPromise('todos/brad.json');
  })
  .then(data => {
    console.log('Promise 2 resolved:', data);
    return getToDosPromise('todos/bucky.json');
  })
  .then(data => {
    console.log('Promise 3 resolved:', data);
  })
  .catch(err => {
    console.log('Promise rejected:', err);
  });

// Fetch API

// Fetch API allows us to hit an endpoint and have response returned to us as a promise of the response provided with the first callback to map it to json, which is also a promise, so we can return that promise from the original then callback and then in the next one we'll have the actual data as a plain JavaScript object:
fetch('todos/shaun.json')
  .then(response => {
    console.log('Resolved', response);
    const promise = response.json();
    console.log('Fulfilled', promise);
    return promise;
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log('Rejected', err);
  });

const getToDosAsync = async () => {
  const response = await fetch('todos/shaun.json');

  if (response.status !== 200) {
    throw new Error('Cannot fetch data');
  }

  const data = await response.json();

  return data;
};

getToDosAsync()
  .then(data => console.log('Resolved:', data))
  .catch(err => console.log('Rejected:', err.message));

const delay = seconds =>
  new Promise((resolve, reject) => {
    if (typeof seconds !== 'number') {
      reject(new Error('Seconds must be a number'));
    }

    setTimeout(resolve, seconds * 1000);
  });

delay(3).then(() => console.log('Resolved with a delay of 3 seconds.'));

const countToThree = async () => {
  console.log('0 seconds');
  await delay(1);
  console.log('1 second');
  await delay(2);
  console.log('2 seconds');
  await delay(3);
  console.log('3 seconds');
};

countToThree();

console.time('id-space');

let getSpacePeople = () =>
  new Promise((resolve, reject) => {
    const api = 'http://api.open-notify.org/astros.json';
    const request = new XMLHttpRequest();

    request.open('GET', api);
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

// fetch() returns the entire response object, and this object has a json() function that parses the results:
getSpacePeople = () =>
  fetch('http://api.open-notify.org/astros.json').then(res => res.json());

getSpacePeople().then(console.log);

const getSpacemenNames = () =>
  getSpacePeople()
    .then(json => json.people)
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

let getCountries = () =>
  fetch('https://restcountries.com/v3.1/all').then(response => response.json());

getCountries()
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
        name: name,
        population: population,
        languages: listOfLanguages,
      });
    });

    countriesArr.length = 22;

    console.log(countriesArr);
  })
  .catch(err => console.log('errors: ' + err.message));

getCountries = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();

  return data;
};

getCountries().then(countries => {
  const myCountry = countries.find(
    country => country.name.common === 'Ukraine'
  );

  console.log(myCountry);
});

const getTodo = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/3');

  const { id, title } = await res.json();

  console.log(`id: ${id}, \ntitle: ${title}`);
};

getTodo();

const tick = Date.now();
const log = value =>
  console.log(`${value} \n \nElapsed: ${Date.now() - tick} ms`);

// The creation of the promise is still blocking because it happens in the main thread. It's only the resolving of the value that is a micro task

const nonBlockingLoop = async () => {
  await Promise.resolve();

  let i = 0;

  while (i < 1000000000) {
    i++;
  }

  return '🐱‍💻 billion loops done';
};

console.log('🥪 Synchronous 1');

// A fulfilled promise will run in the micro task queue after all the synchronous code in the current macro task has completed and before the start of the next event loop

nonBlockingLoop().then(log);

console.log('🥪 Synchronous 2');

// Async function

// Whatever gets returned inside the async function will be a promise of that value.

// If we didn't use the async keyword, we could write this function by just returning a promise that resolves to this value:
const getHearts = hearts => Promise.resolve(hearts);

getHearts('💛💚💖').then(log);

// With the async keyword it takes the return value and automatically resolves it as a promise:
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

getFruit('peach').then(log);

// Async + Await

// Async keyword also sets up a context to use the await keyword. The real power of the async function comes when you combine it with the await keyword to pause the execution of the function until the promise resolves to a value at which point we can use it as a variable

const makeSmoothie = async () => {
  const first = await getFruit('peach');
  const second = await getFruit('strawberry');

  return [first, second];
};

makeSmoothie().then(console.log);
makeSmoothie().then(log);

// Concurrency with Promise.all()

// We only need to await for one thing after the other if the second value is dependant on the first value

const getFruitsForSmoothieConcurrently = async () => {
  const first = getFruit('peach');
  const second = getFruit('apple');
  const third = getFruit('strawberry');

  const smoothie = await Promise.all([first, second, third]);

  return smoothie;
};

getFruitsForSmoothieConcurrently().then(log);

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
  .then(value => console.log({ value }))
  .catch(error => console.log({ error }));

// Running async loops concurrently
const fruits = ['cherries', 'watermelon', 'apple'];
const smoothie = fruits.map(value => getFruit(value));

const fruitLoop = async () => {
  for await (const emoji of smoothie) {
    log(emoji);
  }
};

fruitLoop();

// Conditional expressions with promises
const fruitInspection = async () => {
  (await getFruit('peach')) === '🍑' && console.log('Looks peachy!');
};

fruitInspection();
