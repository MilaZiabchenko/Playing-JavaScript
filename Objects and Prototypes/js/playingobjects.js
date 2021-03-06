// Math object

// Built-in functions of Math object
console.log(Math.max(1980, 2017));

// We can't call Math.max with an array because it expects a list of numeric arguments. Spread syntax to the rescue! When ...arrayName is used in the function call, it 'expands' an iterable array object into the list of arguments

const array_1 = [12, 90, 77, 5, 2020, 33];

console.log(Math.max(...array_1));

const array_2 = [3, 3000, -33];
const mergedArray = [7, ...array_1, -17, ...array_2];

console.log(Math.min(0, 1753, ...mergedArray));

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
const myArray = new Array('????????????', 'have', 'fun', 'with', '????????????');

console.log(myArray);

// Comparing objects
const object_1 = { mushrooms: '????????????' };
const object_2 = object_1;
const object_3 = { mushrooms: '????????????' };

console.log({} === {});
console.log(object_1 === object_2);
console.log(object_1 === object_3);
console.log({ mushrooms: '????????????' } === { mushrooms: '????????????' });

console.log(object_1);

object_2.mushrooms = '????????????????????';

console.log(object_1);

// Object literal

const human = {
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

// Copying a value in JavaScript is almost always shallow, as opposed to deep. That means that changes to deeply nested values will be visible in the copy as well as the original.

// Shallow object copy:

// 1. with Object.assign()
const human_1 = Object.assign({}, human);

// 2. with spread operator
const human_2 = { ...human };

// The expression {...human} iterates over the (enumerable) properties of 'human' using the spread operator. It uses the property name and value, and assigns them one by one to a freshly created, empty object. As such, the resulting object is identical in shape, but with its own copy of the list of properties and values. The values are copied, too, but so-called primitive values are handled differently than non-primitive values.

// Non-primitive values are handled as references, meaning that the act of copying the value is really just copying a reference to the same underlying object, resulting in the shallow copy behavior.

// Deep object copy

// The opposite of a shallow copy is a deep copy. A deep copy algorithm also copies an object???s properties one by one, but invokes itself recursively when it finds a reference to another object, creating a copy of that object as well. This can be very important to make sure that two pieces of code don???t accidentally share an object and unknowingly manipulate each others??? state.

const human_3 = JSON.parse(JSON.stringify(human));

console.log(human);
console.log(human_1);
console.log(human_2);
console.log(human_3);

console.log(human.logName());
console.log(human.logName.call({ firstName: 'Bo' }));

human.logInterests();

console.log(surprise.call(human, 'uzvar'));

// Getting object members

console.log(human.dateOfBirth);
console.log(human_1['dateOfBirth']);
console.log(human_2.interests[1]);
console.log(human_3.address.city);

// Setting/updating object members:

// 1. using dot notation
human.interests = [...human.interests, 'riding a bicycle', 'playing with Leo'];

console.log(human.interests);
console.log(human_1.interests);
console.log(human_2.interests);
console.log(human_3.interests);

// 2. using bracket notation
human['hair'] = 'long curly';

console.log(Object.hasOwn(human, 'hair'));
console.log(Object.hasOwn(human_1, 'hair'));
console.log(Object.hasOwn(human_2, 'hair'));
console.log(Object.hasOwn(human_3, 'hair'));

// 3. using Object.defineProperty()
Object.defineProperty(human, 'eyes', { value: 'dark' });

console.log(Object.hasOwn(human, 'eyes'));
console.log(Object.hasOwn(human_1, 'eyes'));
console.log(Object.hasOwn(human_2, 'eyes'));
console.log(Object.hasOwn(human_3, 'eyes'));

human['address'] = { ...human['address'], country: 'Ukraine' };

console.log(human['address']['country']);
console.log(human['address']);
console.log(human_1['address']);
console.log(human_2['address']);
console.log(human_3['address']);

// Accessing/updating dynamic properties

let property = 'dateOfBirth';

console.log(human[property]); // dateOfBirth value

property = 'special';

console.log(human[property]); // special value
console.log(human['special']); // special value

// Deleting object members

delete human.gender;

console.log(Object.hasOwn(human, 'gender'));
console.log(Object.hasOwn(human_1, 'gender'));
console.log(Object.hasOwn(human_2, 'gender'));
console.log(Object.hasOwn(human_3, 'gender'));

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
  address: { city, country },
  special,
} = human;

console.log(country === human.address.country);

// Using destructuring with function parameters
getSelectedInfo = ({ firstName, lastName, address: { city } }) =>
  `${firstName} ${lastName} lives in ${city}`;

console.log(getSelectedInfo(human));

// Using destructuring with rest parameters
const getRegroupedInfo = ({ firstName, lastName, ...otherInfo }) => ({
  primaryInfo: `${firstName} ${lastName}`,
  secondaryInfo: Object.entries(otherInfo).map(([key, value]) => ({
    [key]: value,
  })),
});

console.log(getRegroupedInfo(human));

const updatedHuman = Object.assign(human, { kind: true });

console.log(updatedHuman === human);
console.log(Object.hasOwn(human, 'kind'));
console.log(Object.hasOwn(human_1, 'kind'));
console.log(Object.hasOwn(human_2, 'kind'));
console.log(Object.hasOwn(human_3, 'kind'));

Object.seal(human);
human.interests[1] = 'drinking coffee with me';
delete human.interests;
delete human_1.interests;

console.log(human_1.interests);
console.log(human_2.interests);
console.log(human_3.interests);
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

const updates = {
  shortName: 'Milina',
};

// Merging objects

const creativeCoder = {
  ...me,
  ...updates, // updating (rewriting) a property
  city,
  passions,
  activities,
  ...coder,
  languages,
  special,
};

console.log({ creativeCoder });

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

console.log(Object.hasOwn(musician, 'genres'));
console.log('genres' in musician);

// Copying object with its methods (shallow copy)

const musicianShallowCopyOneWithMethods = Object.assign({}, musician);
const musicianShallowCopyTwoWithMethods = { ...musician };

// Copying object without its methods (deep copy)

const musicianDeepCopyWithoutMethods = JSON.parse(JSON.stringify(musician));

console.log(musician);
console.log(musicianShallowCopyOneWithMethods);
console.log(musicianShallowCopyTwoWithMethods);
console.log(musicianDeepCopyWithoutMethods);

const props = [];
const values = [];

for (let item in musician) {
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

// Strong reference

let keyboardist = { firstName, pro: false };
const bandMember = { ...keyboardist, memberSince: 2022 }; // keyboardist shallow copy, reference is changed

keyboardist = null; //removing the reference to the original object

// We can???t access the object via the 'keyboardist' variable anymore, but there is a strong reference between the 'bandMember' object and the 'keyboardist' object. The original object is kept in memory because the strong reference prevents removing the object from memory via garbage collection.

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

const time = ['morning_', 'night_'];

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

// Nested Object Access Patterns:

// 1. Logical && operator

let info =
  object &&
  object.littleFriends &&
  object.littleFriends.Danny &&
  object.littleFriends.Danny.actions;

console.log(info);

// 2. Helper object

// With this notation, you???ll never run into Cannot read property '...' of undefined. You basically check if object exists, if not, you create an empty object on the fly. This way, the next level key will always be accessed from an object that exists or an empty object, but never from undefined:

info = (((object || {}).littleFriends || {}).Danny || {}).says;

console.log(info);

// 3. Optional chaining

// The optional chaining operator (?.) enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid.

// The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined.

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

// Changing deeply nested properties affects shallow copies, but doesn't affect deep copies

object.littleFriends.Peter = 'On his way...';

// Changing direct properties does't affect neither shallow nor deep copies

object.littleFriends = '4 Little Friends';

console.log(object);
console.log(objectCopyOne);
console.log(objectCopyOne.littleFriends.Peter);
console.log(objectCopyTwo.littleFriends.Peter);
console.log(objectCopyThree.littleFriends.Peter);
console.log(objectCopyFour.littleFriends.Peter);
