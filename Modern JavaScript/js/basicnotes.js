// Comparison operators

// Loose vs strict equality

console.log(null == undefined);
console.log(55 == '55');
console.log(55 != '55');
console.log(55 === '55');
console.log(55 !== '55');
console.log(55 > '53');
console.log(55 === 55 / 1);
console.log('leo' > 'Milu');

// Object.is()

console.log(Object.is(null, undefined));
console.log(Object.is(55, '55'));
console.log(Object.is(55, 55 * 1));

// isNaN()

// isNaN() converts the argument to a Number and returns true if the resulting value is NaN

console.log(isNaN(77));
console.log(isNaN('77'));
console.log(isNaN('Milu'));
console.log(isNaN(NaN));

// Number.isNaN()

// Number.isNaN() does not convert the argument; it returns true when the argument is a Number and is NaN

console.log(Number.isNaN(77));
console.log(Number.isNaN('77'));
console.log(Number.isNaN('Milu'));
console.log(Number.isNaN(NaN));

// Number.isFinite();

console.log(Number.isFinite(NaN));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(-3));

// Number.isInteger()

console.log(Number.isInteger(-3));
console.log(Number.isInteger(0));
console.log(Number.isInteger(3.7));
console.log(Number.isInteger(Infinity));

// Type conversion

// Conversion to number

const string = '55.55';

console.log(Number(true));
console.log(Number(string));
console.log(+string);
console.log(parseFloat(string));
console.log(parseInt(string));
console.log(parseInt('55.55 * 10'));
console.log(parseInt(string * 100));

// Conversion to string

const number = 55.55;

console.log(number + '');
console.log(String(number));
console.log(number.toString());

// Number.toFixed()

console.log(Number(55.55555).toFixed(2));
console.log(Number(55.55555).toFixed(2) + 789);

// Conversion to boolean

console.log(Boolean(string), Boolean(number), Boolean('0'), Boolean(0));

const True = !0;
const alsoTrue = !!1;
const False = !1;
const alsoFalse = !!0;

console.log(True, alsoTrue, False, alsoFalse);

// Conversion to undefined

// void operator

// The void operator evaluates the given expression and then returns undefined

console.log(void 1);
console.log(void { name: 'Banksy' });

// Order of math operations

let m = 60;
const c = 1080000000;
const e = m * c ** 2;

console.log(e);

const day = 25;

// Modulus

if (day % 2 === 0) {
  console.log(`${day} is an even day of the month.`);
} else {
  console.log(`${day} is an odd day of the month.`);
}

const evenOrOdd = day % 2 ? 'odd' : 'even';

console.log(evenOrOdd);

let num = 5;

// Increment and decrement

console.log(num++, num, ++num, num);
console.log(num--, num, --num, num);

let score = 10;

// Shorthand notation

score += 2;

console.log(score);

score -= 2;

console.log(score);

score *= 2;

console.log(`Game is over. ${score} is your final score.`);

// Template strings with HTML templates

const title =
  'Enlightenment Now: The Case for Reason, Science, Humanism, and Progress';
const author = 'Steven Pinker';
const yearOfPublication = '2018';
const likesPercentage = '91%';

const html = `
    <h2>${title}</h2>
    <p>by ${author}, published in ${yearOfPublication}</p>
    <span>liked by ${likesPercentage} of Google users.</span>
`;

console.log(html);

// String methods

const email = 'mi.podgurska@gmail.com';
const editedEmail = email.replace('mi.podgurska', 'milochka.ziablik');

console.log(email.startsWith('mi'));
console.log(email.endsWith('org'));
console.log(email.padStart(email.length + 5, '*'));
console.log(email.padEnd(email.length + 5, '*'));
console.log(email.includes('@'));
console.log(email.search('@'));
console.log(email.indexOf('i'));
console.log(email.lastIndexOf('i'));
console.log(editedEmail.slice(0, 8));
console.log(editedEmail.slice(-9));
console.log(email < editedEmail);

const line = `I don't love you like I did yesterday`;

console.log(line.indexOf('I'));
console.log(line.indexOf('I', 1));
console.log(line.lastIndexOf('I'));
console.log(line.slice(0, 16).toUpperCase());
console.log(`${line.substring(0, 16)} anymore`);
console.log(line.split(' you '));
console.log(line.split(' '));
console.log(line.split(' ', 4));
console.log(line.replace('I did yesterday', 'you do'));

const editedLine = line.replace('I did yesterday', 'you do');

console.log(editedLine);

const today = [
  {
    time: 'morning',
    task: 'Riding a bicycle',
    done: true,
  },
  {
    time: 'midday',
    task: 'Learning JS',
    done: true,
  },
  {
    time: 'evening',
    task: 'Buying a new scratching post for Leo',
    done: false,
  },
];

// JSON data format

const todayJSON = JSON.stringify(today, null, 2);
const todayTaskJSON = JSON.stringify(today, ['task'], 4);

console.log(todayJSON);
console.log(todayTaskJSON);

// 'for' loop

for (let i = 0; i < today.length; i++) {
  console.log(today[i].time);
}

const initialArr = [1, 2, 3, 4, 5];
const reversedArr = [];

for (let i = initialArr.length - 1; i >= 0; i--) {
  reversedArr.push(initialArr[i]);
}

console.log(reversedArr);

for (let i = 0; i < 4; i++) {
  console.log(i);
}

// Optional 'for' expressions

// All three expressions ([initialization]; [condition]; [final-expression]) in the head of the 'for' loop are optional

for (let i = 0; ; i++) {
  console.log(i);

  if (i >= 3) break;
}

let i = 0;

for (;;) {
  console.log(i);

  if (i >= 3) break;
  i++;
}

// 'while' loop

while (i < today.length) {
  console.log(today[i].task);

  i++;
}

i = 3;

while (i) {
  console.log(i--);
}

// 'do-while' loop

i = 'I send you a message.';
let j = 'You read my message';

do {
  console.log(i);

  j++;
} while (j === 'You wright me back');

// Nested loops

console.log('Loop start');

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i, j);
  }
  console.log('End of iteration', i);
}

console.log('Loop finish');
console.log('Loop start');

for (let i = 1; i <= 3; i++) {
  for (let j = i; j <= 3; j++) {
    console.log(i, j);
  }
  console.log('End of iteration', i);
}

console.log('Loop finish');
console.log('Loop start');

for (let i = 1; i <= 3; i++) {
  for (let j = i; j > 0; j--) {
    console.log(i, j);
  }
  console.log('End of iteration', i);
}

console.log('Loop finish');

// 'for-of' statement

const bonuses = [1000, 2000, 3000];

console.log(`This year's Zzz company's bonuses are equal to:`);

for (let bonus of bonuses) {
  bonus += 500;
  console.log(bonus);
}

// Logical operators

const resultA = (40 && 2) || 33;
const resultB = 4 * 2 && 3 * 6;
const resultC = 0 && 2;

console.log(resultA, resultB, resultC);

let time = 5;

// 'if-else if-else' statement

if (time <= 6 || time >= 22) {
  console.log('Time to sleep');
} else if (time > 7 && time <= 10) {
  console.log('Time to ride my bicycle or run at the stadium');
} else if (time > 10 && time < 15) {
  console.log('Time to code');
} else if (time === 19) {
  console.log('Time to go for a walk');
} else {
  console.log('Time to do miscellaneous stuff');
}

// Ternary operator

const activity =
  time < 7 || time > 22
    ? 'Sleep'
    : time > 10 && time < 19
    ? 'Be active'
    : 'Relax';

console.log(activity);

// Switch statement

switch (activity) {
  case 'Be active':
    console.log('Be active');
    break;
  case 'Relax':
    console.log('Relax');
    break;
  default:
    console.log('Sleep');
}

const flat = 62;

if (flat === 62) {
  console.log('Mila and Leo live here');
} else if (flat === 65) {
  console.log('Bogdan lives there');
} else if (flat > 0 && flat <= 108) {
  console.log('Neighbors live there');
} else {
  console.log(`There is no flat No. ${flat} in this condo`);
}

const whoLivesHere =
  flat === 62
    ? 'Mila & Leo live here'
    : flat === 65
    ? 'Bogdan lives here'
    : 'We do not live there';

console.log(whoLivesHere);

switch (flat) {
  case 62:
    console.log('It is our home');
    break;
  case 65:
    console.log('It is a home of Bogdan');
    break;
  default:
    console.log('Bogdan, Leo and Mila do not live there');
}

if (typeof flat === 'number') {
  console.log(`Flat No. ${flat}`);
} else {
  console.error('Datatype error');
}

// Setting methods to prototypes

String.prototype.giveLeoMeat = () => `Just give Leo meat!`;

const gang = ['Bo', 'Mi', 'Leo', 'Art'];

// Keywords 'break' and 'continue'

for (let i = 0; i < gang.length; i++) {
  if (gang[i] === 'Art') {
    continue;
  }

  if (gang[i] === 'Leo') {
    console.log(`Leo King is here! ${gang[i].giveLeoMeat()}`);
    break;
  }
}

const awesomeCreatures = [...gang];

for (let creature of awesomeCreatures) {
  console.log(creature);
}

awesomeCreatures.forEach(console.log);

// DOM

// Querying and manipulating DOM elements

document.querySelector('.hidden').classList.remove('hidden');

const ul = document.querySelector('.awesome-creatures');

awesomeCreatures.forEach(creature => {
  let li = document.createElement('li');
  li.innerHTML = creature;
  li.style.fontWeight = 'bold';
  li.style.fontStyle = 'italic';
  li.classList.toggle('spacing');
  let upperCase = li.innerText.toUpperCase();
  li.innerText = upperCase;
  ul.appendChild(li);
});

const heading = document.querySelector('h1');

heading.style.margin = '5rem 0';
heading.style.color = 'limegreen';
heading.classList.toggle('spacing', true);

const span = document.createElement('span');

span.textContent = heading.textContent.slice(0, 5);
heading.textContent = ``;
heading.append(span, `, Pussycats!`);

// Setting/removing attributes

span.setAttribute('title', 'Hey!');
span.removeAttribute('title');
span.title = 'Yo, gang!';
span.id = 'greeting';

// Manipulating custom data attributes

span.dataset.longGreeting = span.title;
span.dataset.longGreeting = 'Hello there!';
console.log(span.dataset);
console.log(span.dataset.longGreeting);

const content = document.querySelector('.content');

content.innerHTML = `<h2>The End</h2>`;

const additionalContent = document.querySelector('.content > h2');

additionalContent.textContent += `, My Gorgeous Friends!`;

const copyright = document.createElement('p');

copyright.innerHTML = `Copyright &copy; mil&ugrave; 2020`;
copyright.style.textAlign = 'center';
document.body.append(copyright);
document.body.style.marginBottom = '3rem';

// Window object

// Every JavaScript environment has a global object. In a browser environment the global object is the window object, which represents the browser window that contains a web page and all its corresponding features. A window object is created automatically by the browser itself

console.log(window);

// Any variables that are created without using the const, let or var keywords in the global scope are actually properties of this object, and any functions, such as parseInt() or isNaN(), are methods of it.

// The Browser Object Model

// BOM is the core of JavaScript on the web. It refers to all the objects exposed by the web browser that allow JavaScript to interact with it

// BOM is a collection of properties and methods related to the information about the browser and screen. For example, we can find out which browser is being used to view a page. We can also find out the dimensions of the screen it is viewed on, and which pages have been visited before the current page. It can also be used for the rather dubious practice of creating pop-up windows, if you’re into annoying your users.

// Navigator object

// The window object has a navigator property that returns a reference to the Navigator object. The Navigator object contains information about the browser being used. Its userAgent property will return information about the browser and operating system being used (though, this method is unreliable).

// As well as other window objects, it can be written with or without the window prefix

console.log(window.navigator);
console.log(navigator.vendor);
console.log(navigator.userAgent);
console.log(navigator.geolocation);
console.log(navigator.connection);
console.log(navigator.language);
console.log(navigator.getBattery()); // => Promise
navigator.getBattery().then(battery => console.log(battery));

// Location object

// The window.location property points to the object that contains information about the URL of the current page. It contains a number of properties that provide information about different fragments of the URL.

console.log(window.location);
console.log(window.location.href);
console.log(window.location.origin);
console.log(location.protocol);
console.log(location.hostname);
console.log(location.port);
console.log(location.pathname);

// History object

// The window.history property can be used to access information about any previously visited pages in the current browser session.

console.log(window.history);

// To navigate to a URL in the history, you can use the back(), forward(), and go() methods

// The history.length returns the number of URLs in the history stack

console.log(history.length);

// Screen object

// It contains the information about the user's screen.

console.log(screen.width);
console.log(screen.height);

// Screen width and height, excluding the operating system menus
console.log(screen.availWidth);
console.log(screen.availHeight);

// Usually, 24 bit or 32 bit hardware is used for color resolution.

// 24 bits = 16, 777, 216 different (True Colors)
// 32 bits = 4, 294, 967, 296 different (Deep Colors)

console.log(screen.colorDepth);
console.log(screen.pixelDepth);
