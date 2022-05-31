console.time('Elapsed');

// Browser Object Model

// BOM is the core of JavaScript on the web. It refers to all the objects exposed by the web browser that allow JavaScript to interact with it

// 1. Window Object

// The object of window represents a browser window and all its corresponding features. A window object is created automatically by the browser itself

console.log(this);
console.log(window.innerWidth);
// window.alert('Yo, coder!');
console.log(typeof alert);
console.log(typeof window.addEventListener === 'function');

// 2. Location Object

// As well as other window objects, it can be written with or without the window or document prefix

console.log(window.location);
console.log(location.pathname);
console.log(document.location.host);
console.log(location.protocol);
console.log(location.href);

// 3. Navigator Object

// The Navigator object has properties that convey the browser’s information. For example, the userAgent is a property of the window.navigator object. It is a long string that identifies the web browser

console.log(window.navigator);
console.log(typeof navigator);
console.log(navigator.vendor);
console.log(navigator.userAgent);
console.log(navigator.geolocation);
console.log(navigator.connection);
console.log(navigator.language);

console.log(navigator.getBattery()); // => Promise
navigator.getBattery().then(battery => console.log(battery));

// 4. Screen object

// It contains the information about the user's screen.

// Usually, 24 bit or 32 bit hardware is used for color resolution.

// 24 bits = 16, 777, 216 different (True Colors)
// 32 bits = 4, 294, 967, 296 different (Deep Colors)

console.log(screen.width); //returned in pixels
console.log(screen.availWidth); // screen width, excluding the interface features
console.log(screen.height);
console.log(screen.availHeight);
console.log(screen.colorDepth); // the bits used to display one color
console.log(screen.pixelDepth);

// 5. History Object

// The window.history object allows you to access the history stack of the browser
console.log(window.history);

// To navigate to a URL in the history, you use the back(), forward(), and go() methods
console.log(window.history.back());
console.log(history.go(-1));
console.log(history.forward());

// The history.length returns the number of URLs in the history stack
console.log(history.length);

// Math object

// Built-in functions of Math object
console.log(Math.max(1980, 2017));

// We can't call Math.max with an array because it expects a list of numeric arguments. Spread syntax to the rescue! When ...arrayName is used in the function call, it 'expands' an iterable array object into the list of arguments
const arr1 = [12, 90, 77, 5, 2020, 33];

console.log(Math.max(...arr1));

const arr2 = [3, 3000, -33];
const merged = [7, ...arr1, -17, ...arr2];

console.log(Math.min(0, 1753, ...merged));

const random = Math.random();

console.log(random);
console.log(Math.round(random * 10));
console.log(Math.ceil(random * 100));
console.log(Math.floor(random * 100));
console.log(Math.trunc(random * 100));

const shape = {
  radius: 10,

  diameter() {
    return this.radius * 2;
  },

  perimeter() {
    return (Math.PI * this.radius * 2).toFixed(2);
  },
};

console.log(
  `shape diameter: ${shape.diameter()}, \nshape perimeter: ${shape.perimeter()}`
);

// Date object
const currentDate = new Date();
const randomDate = new Date(289765388228);

const pastDate = new Date();
pastDate.setFullYear(1770);
pastDate.setMonth(11);
pastDate.setDate(17);

console.log(currentDate);
console.log(currentDate.getTime());
console.log(Date.now() === currentDate.getTime());
console.log(currentDate.toLocaleTimeString());
console.log(currentDate.toTimeString()); // time of the time zone of the browser
console.log(currentDate.toUTCString()); // GMT

console.log(randomDate);
console.log(pastDate);

const birthday = new Date(1977, 6, 3, 19, 30, 37, 555);

console.log(birthday);
console.log(birthday.getFullYear());
console.log(birthday.getMonth() + 1);
console.log(birthday.getDate());
console.log(birthday.getDay());
console.log(birthday.getHours());
console.log(birthday.getTime());
console.log(birthday.getMilliseconds());

// String constructor
let myString = '33 whales eat fish';

console.log(myString); // regular string

myString = new String('33 dolphins make love');

console.log(myString); // string wrapped in the object

// Array constructor
const myArray = new Array();
myArray[0] = 'Sea';
myArray[1] = 'turtles';
myArray[2] = 'have';
myArray[3] = 'fun';

console.log(myArray);

// Comparing objects
const obj1 = { mushrooms: '🍄🍄🍄' };
const obj2 = obj1;
const obj3 = { mushrooms: '🍄🍄🍄' };

console.log({} === {});
console.log(obj1 === obj2);
console.log(obj1 === obj3);
console.log({ mushrooms: '🍄🍄🍄' } === { mushrooms: '🍄🍄🍄' });

console.log(obj1);

obj2.mushrooms = '🍄🍄🍄🍄🍄';

console.log(obj1);

// Object literal
const human = {
  // Encapsulation
  firstName: 'Bogdan',
  lastName: 'Starynets',
  dateOfBirth: '09/28/1982',
  gender: 'male',
  special: true,
  interests: ['music', 'sculpture', 'walking in the forest'],
  // Embedded object
  address: {
    number: '52/65',
    street: 'Kyivska',
    city: 'Vinnytsia',
  },

  logName() {
    return this.firstName;
  },

  logInterests() {
    this.interests.forEach(hobby =>
      console.log(`${this.firstName} likes ${hobby}.`)
    );
  },
};

function surprise(drink) {
  return `${this.firstName} surprised me with his delicious ${drink}:)`;
}

// Copying object

// Shallow copy
const h1 = { ...human };
const h2 = Object.assign({}, human);

// Deep copy
const h3 = JSON.parse(JSON.stringify(human));

console.log(human);
console.log(h1);
console.log(h2);
console.log(h3);

console.log(human.logName());
console.log(human.logName.call({ firstName: 'Bo' }));

human.logInterests();

console.log(surprise.call(human, 'uzvar'));

// Getting object members
console.log(human.dateOfBirth);
console.log(h1['dateOfBirth']);
console.log(h2.interests[1]);
console.log(h3.address.city);

// Setting/updating object members

// 1) using dot notation:
human.interests = [...human.interests, 'riding a bicycle', 'playing with Leo'];

console.log(human.interests);
console.log(h1.interests);
console.log(h2.interests);
console.log(h3.interests);

// 2) using bracket notation:
human['hair'] = 'long curly';

console.log(human.hasOwnProperty('hair'));
console.log(h1.hasOwnProperty('hair'));
console.log(h2.hasOwnProperty('hair'));
console.log(h3.hasOwnProperty('hair'));

human['address'] = { ...human['address'], country: 'Ukraine' };

console.log(human['address']['country']);
console.log(human['address']);
console.log(h1['address']);
console.log(h2['address']);
console.log(h3['address']);

// Accessing/updating dynamic properties, using square brackets
let property = 'dateOfBirth';

console.log(human[property]); // dateOfBirth value

property = 'special';

console.log(human[property]); // special value
console.log(human['special']); // special value

// Deleting object members
delete human.gender;

console.log(human.hasOwnProperty('gender'));
console.log(h1.hasOwnProperty('gender'));
console.log(h2.hasOwnProperty('gender'));
console.log(h3.hasOwnProperty('gender'));

let getSelectedInfo = person => ({
  name: person.firstName,
  lastName: person.lastName,
  city: person.address.city,
});

console.log(getSelectedInfo(human));

// Destructuring

// The destructuring assignment syntax is a JS expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables

const {
  firstName,
  lastName,
  address: { city, country },
  special,
} = human;

console.log(country === human.address.country);

// Using destructuring with function parameters
getSelectedInfo = ({ firstName, lastName, address: { city } }) =>
  `${firstName} ${lastName} lives in ${city}`;

console.log(getSelectedInfo(human));

// Using destructuring with rest parameters
getSelectedInfo = ({ firstName, lastName, ...otherInfo }) => otherInfo;

console.log(getSelectedInfo(human));

const updatedHuman = Object.assign(human, { kind: true });

console.log(updatedHuman === human);
console.log(human.hasOwnProperty('kind'));
console.log(h1.hasOwnProperty('kind'));
console.log(h2.hasOwnProperty('kind'));
console.log(h3.hasOwnProperty('kind'));

Object.seal(human);
human.interests[1] = 'drinking coffee with me';
delete human.interests;
delete h1.interests;

console.log(h1.interests);
console.log(h2.interests);
console.log(h3.interests);
console.log(human.interests);
console.log(updatedHuman.interests);

// Using destructuring for renaming variables
const me = { shortName: 'Mi' };
const { shortName } = me;
const { shortName: nickName } = me;

console.log(me);
console.log(shortName);
console.log(nickName);

const { passions, activities } = {
  passions: [
    'playing with Leo',
    'coding and learning web development',
    'computer and cognitive sciences',
  ],
  activities: [
    'biking',
    'running',
    'walking',
    'dancing',
    'swimming',
    'traveling',
  ],
};

console.log([...passions, ...activities]);

const coder = { language: 'JavaScript', technology: 'React' };
const languages = 'Expert';

// Merging objects in an immutable way
const creativeCoder = {
  ...me,
  city,
  passions,
  activities,
  ...coder,
  languages,
  special,
};

console.log({ creativeCoder });

const musician = {
  name: 'Nils Oliver Frahm',
  born: 'September 20, 1982',
  location: 'Berlin',
  site: 'https://www.nilsfrahm.com',
  latestAlbums: [
    {
      title: 'Old Friends New Friends',
      year: 2021,
    },
    {
      title: 'Tripping with Nils Frahm',
      year: 2020,
    },
    {
      title: 'All Melody',
      year: 2018,
    },
  ],

  // logAlbums: function() {
  logAlbums() {
    console.log(this.latestAlbums.map(album => album.title));
    console.log('This musician has recently created the following albums:');
    this.latestAlbums.forEach(album =>
      console.log(`'${album.title}' released in ${album.year}.`)
    );
  },

  logName() {
    return this.name;
  },
};

Object.defineProperty(musician, 'genres', {
  value: ['contemporary classical', 'ambient', 'electronic'],
});

console.log(Object.getOwnPropertyNames(musician));

console.log(musician.hasOwnProperty('genres'));
console.log('genres' in musician);

// Copying object with methods
const musicianShallowCopyOneWithMethods = Object.assign({}, musician);
const musicianShallowCopyTwoWithMethods = { ...musician };

// Copying object without methods
const musicianDeepCopyWithoutMethods = JSON.parse(JSON.stringify(musician));

console.log(musician);
console.log(musicianShallowCopyOneWithMethods);
console.log(musicianShallowCopyTwoWithMethods);
console.log(musicianDeepCopyWithoutMethods);

const props = [];
const values = [];

for (item in musician) {
  props.push(item);
  values.push(musician[item]);
}

console.log(props);
console.log(Object.keys(musician));

console.log(values);
console.log(Object.values(musician));

console.log(Object.entries(musician));
console.log(Object.entries(musician).length);

console.log(Object.fromEntries(Object.entries(musician)));

musician.logAlbums();

console.log(musician.logName());
console.log(musician.name.replace(' Oliver', ''));
console.log(musician.logName.call({ name: 'Oliver' }));

const getMoreInfo = ({ name, site }) =>
  `If you want to know more about ${name}, visit ${site}`;

console.log(getMoreInfo(musician));

const humans = [].concat(human, creativeCoder, musician);

console.log(humans);

const keyboardist = { firstName, pro: false };
const bandMember = { ...keyboardist, memberSince: 2022 }; // keyboardist shallow copy, reference is changed

const updateInfo = member => {
  const updatedMember = { ...member };
  updatedMember.location = city;
  updatedMember.dateOfBirth = human.dateOfBirth;

  return updatedMember;
};

const updatedBandMember = updateInfo(bandMember);

console.log(keyboardist);
console.log(bandMember);
console.log(updatedBandMember);

const isEmpty = object => Object.entries(object).length === 0;

const schedule = {};

console.log(isEmpty(schedule));

// Dynamic object keys (aka computed properties)
let time = ['morning_', 'night_'];

schedule[time[0] + '7:30'] = 'Get up, greet Leo, and have a cup of coffee :)';
schedule[time[0] + '9:00'] = 'Go for a walk :)';
schedule[time[1] + '22:30'] = 'Sleep well!';

console.log(isEmpty(schedule));
console.log(schedule);

// Nested objects
const object = {
  littleFriends: {
    Wendy: {
      says: `I am here :)`,
    },
    Tim: {
      says: `Can you see me?`,
    },
    Peter: 'Has not come yet...',
    Danny: {
      actions: ['comes last', 'sighs', 'says'],
      says: 'I wanna be seen as well...',
      plays: true,
    },
  },
};

console.log(object.littleFriends.Wendy.says);
console.log(object.littleFriends.Tim.says);

console.log(
  JSON.stringify(object.littleFriends.Danny, ['actions', 'plays'], 2)
); // array replacer
console.log(
  JSON.stringify(
    object.littleFriends.Danny,
    object.littleFriends.Danny.actions.filter(item => item === 'says'),
    2
  )
); // function replacer

// Nested Object Access Patterns

// 1. Logical && operator
let info =
  object &&
  object.littleFriends &&
  object.littleFriends.Danny &&
  object.littleFriends.Danny.actions;

console.log(info);

// 2. Helper object

// With this notation, you’ll never run into Cannot read property '...' of undefined. You basically check if object exists, if not, you create an empty object on the fly. This way, the next level key will always be accessed from an object that exists or an empty object, but never from undefined:

info = (((object || {}).littleFriends || {}).Danny || {}).says;

console.log(info);

// 3. Optional chaining
info = object?.littleFriends?.Danny?.actions;

console.log(info);

info = object?.littleFriends?.Danny?.says;

console.log(info);

// Getting deep object properties
const path1 = 'littleFriends.Wendy.says';
const path2 = 'littleFriends.Tim.says';
const path3 = 'littleFriends.Danny.actions';
const path4 = 'littleFriends.Danny.says';

let getDeepProperty = (object, path) => {
  let paths = path.split('.'),
    prop = { ...object },
    i;

  for (i = 0; i < paths.length; i++) {
    if (prop[paths[i]]) {
      prop = prop[paths[i]];
    }
  }

  return prop;
};

console.log(getDeepProperty(object, path1));

getDeepProperty = (object, path) => {
  let paths = path.split('.');
  let prop = { ...object };

  for (const el of paths) {
    prop = prop[el];
  }

  return prop;
};

console.log(getDeepProperty(object, path2));

getDeepProperty = (object, path) =>
  path.split('.').reduce((o, p) => (o && o[p] ? o[p] : undefined), object); // helper

console.log(getDeepProperty(object, path3));

getDeepProperty = (object, path) =>
  path.split('.').reduce((o, p) => o?.[p], object);

console.log(getDeepProperty(object, path4));

const objectCopyOne = { ...object };
const objectCopyTwo = Object.assign({}, object);
const objectCopyThree = JSON.parse(JSON.stringify(object));
const objectCopyFour = structuredClone(object);

console.log(objectCopyOne);
console.log(objectCopyTwo);
console.log(objectCopyThree);
console.log(objectCopyFour);

console.timeEnd('Elapsed');
