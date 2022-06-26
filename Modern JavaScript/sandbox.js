// Comparison operators/loose vs strict equality
console.log(NaN == NaN);
console.log(55 == '55');
console.log(55 != '55');
console.log(55 === '55');
console.log(55 !== '55');
console.log(55 > '53');
console.log(55 === 55 / 1);
console.log('leo' > 'Milu');

// Object.is()
console.log(Object.is(NaN, NaN));
console.log(Object.is(55, '55'));

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

// Type conversion: string <==> number
let something = '55.55';

console.log(
  something,
  +something,
  +something + '',
  parseInt(something),
  parseFloat(something),
  (+something).toFixed(2),
  (+something).toFixed(2) + 5,
  Number(something).toFixed(2) + 5,
  parseFloat(something).toFixed(2) + 5
);

// Number constructor
something = Number(something);

console.log(something, typeof something);

// String constructor
something = String(something);

console.log(something, typeof something);

// Boolean constructor
something = Boolean(something);

console.log(something, typeof something);

something = Boolean(0);

console.log(something, typeof something);

something = Boolean('0');

console.log(something, typeof something);

varOrNotVar = 5 + '5';

console.log(varOrNotVar, typeof varOrNotVar);

// Conversion to boolean
const True = !0;
const alsoTrue = !!1;
const False = !1;
const alsoFalse = !!0;

console.log(True, alsoTrue, False, alsoFalse);
console.log(typeof True, typeof False, typeof alsoTrue, typeof alsoFalse);

// void operator

// The void operator evaluates the given expression and then returns undefined

console.log(void 1);
console.log(void { name: 'Banksy' });

// Order of math operations/operators
let e;
let m = 60;
const c = 1080000000;
e = m * c ** 2;

console.log(e);

let day = 25;

// Modulus
if (day % 2 === 0) {
  console.log('This is an even number');
} else {
  console.log('This is an odd number');
}

let evenOrOdd = day % 2 === 0 ? 'even' : 'odd';

console.log(evenOrOdd);

evenOrOdd = day % 2 ? 'odd' : 'even';

console.log(evenOrOdd);

let score;
score = 10;

console.log(score);

// Shorthand notation
score++;

console.log(score);

score--;

console.log(score);

score += 2;

console.log(score);

score -= 2;

console.log(score);
console.log(`Game over. ${(score *= 2)} was your final score.`);

let num = 5;

console.log(num++, num, ++num, num);

// Template strings with HTML templates
const title =
  'Enlightenment Now: The Case for Reason, Science, Humanism, and Progress';
const author = 'Steven Pinker';
const yearOfPublication = '2018';
let likesPercentage = '91%';

let html = `
    <h2>${title}</h2>
    <p>by ${author}, published in ${yearOfPublication}</p>
    <span>was liked by ${likesPercentage} of Google users.</span>
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
console.log(editedEmail.substring(9, 16));
console.log(email < editedEmail);

const line = `I don't love you like I did yesterday`;

console.log(line.indexOf('I'));
console.log(line.indexOf('I', 1));
console.log(line.lastIndexOf('I'));
console.log(line.slice(0, 16).toUpperCase());
console.log(`${line.substring(0, 16)} anymore.`);
console.log(line.split(' you '));
console.log(line.split(' '));
console.log(line.split(' ', 4));
console.log(line.replace('I did yesterday', 'you do'));

const editedLine = line.replace('I did yesterday', 'you do');

console.log(editedLine);

// Array of objects
const today = [
  {
    id: 'morning',
    task: 'Riding a bicycle',
    done: true,
  },
  {
    id: 'midday',
    task: 'Learning JS',
    done: true,
  },
  {
    id: 'evening',
    task: 'Buying a new scratching post for Leo',
    done: false,
  },
];

// JSON data format
const todayJSON = JSON.stringify(today, null, 2);

console.log(todayJSON);

// 'for' loop
for (let i = 0; i < today.length; i++) {
  console.log(today[i].id);
}

const initialArr = [1, 2, 3, 4, 5];
const reversedArr = [];

for (let i = initialArr.length - 1; i >= 0; i--) {
  reversedArr.push(initialArr[i]);
}

console.log(reversedArr);

// Optional 'for' expressions

// All three expressions ([initialization]; [condition]; [final-expression]) in the head of the 'for' loop are optional.

for (let i = 0; i < 4; i++) {
  console.log(i);
}

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
i = 'I send you one message.';
let j = null;

do {
  console.log(i);
  i++;
} while (j === 'You wright me back.');

// 'for-of' statement
const salaries = [1000, 2000, 3000];
salaries[0] += 500;

console.log(`Last year's Zzz company's minimum salaries were equal to:`);
console.log(`${salaries[0]}`);
console.log(`${salaries[1]}`);
console.log(`${salaries[2]}`);

console.log(`This year's Zzz company's minimum salaries are equal to:`);

for (let salary of salaries) {
  salary += 500;
  console.log(salary);
}

// Logical operators
const resultA = (40 && 2) || 33;
const resultB = 4 * 2 && 3 * 6;
const resultC = 0 && 2;

console.log(resultA, resultB, resultC);

let time = 5;

// 'if-else' statement
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
let func =
  time < 7 || time > 22
    ? 'Sleep'
    : time > 10 && time < 19
    ? 'Be active'
    : 'Relax';

console.log(func);

// Switch statement
switch (func) {
  case 'Be active':
    console.log('Be active');
    break;
  case 'Relax':
    console.log('Relax');
    break;
  default:
    console.log('Sleep');
}

let flat = 62;

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

flat = String(flat);

console.log(flat, typeof flat);

flat = Number(flat);

console.log(flat, typeof flat);

flat = Boolean(flat);

console.log(flat, typeof flat);

if (typeof flat === 'number') {
  console.log(`Flat No. ${flat}`);
} else {
  console.error('Datatype error');
}

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

let heading = document.querySelector('h1');
heading.style.margin = '5rem 0';
heading.style.color = 'limegreen';
heading.classList.toggle('spacing', true);

let substring = heading.textContent.slice(0, 5);
let span = document.createElement('span');
span.textContent = substring;
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

heading = document.querySelector('h2');
heading.classList.toggle('spacing', true);
heading.classList.toggle('spacing', false);
heading.classList.toggle('spacing', true);
heading.style.fontVariant = 'small-caps';
heading.style.marginTop = '5rem';

let error = document.querySelector('p.error > span');
error.style.display = 'none';

error = document.querySelector('div.error');
error.innerText = `Everything can be changed with JavaScript:`;
error.innerHTML += `<p>-elements and content,</p>`;
error.innerHTML += `<p>-attributes,</p>`;
error.innerHTML += `<p>-styles</p>`;
error.innerText += `...`;
error.style.fontStyle = 'italic';
error.style.marginLeft = '5rem';

let paras = document.querySelectorAll('.challenge > p');
paras.forEach(p => {
  if (p.textContent.includes('error')) {
    p.classList.add('error');
  }

  if (p.textContent.includes('success')) {
    p.classList.add('success');
  }
});

let content = document.querySelector('.content');
content.innerHTML = `<h2>The End</h2>`;
content.classList.add('success', 'spacing');

content = document.querySelector('.content > h2');
content.innerText += `, My Gorgeous Friends!`;

const body = document.body;
const copyright = document.createElement('p');
copyright.innerHTML = `Copyright &copy; mil&ugrave; 2020`;
body.appendChild(copyright);
body.removeChild(copyright);
body.append(copyright);
copyright.remove();
body.append(copyright);

// Window object

// Every JavaScript environment has a global object. In a browser environment the global object is the window object, which represents the browser window that contains a web page and all its corresponding features. A window object is created automatically by the browser itself

console.log(window);

// Any variables that are created without using the const, let or var keywords in the global scope are actually properties of this object, and any functions, such as parseInt() and isNaN(), are methods of it.

// The Browser Object Model

// BOM is the core of JavaScript on the web. It refers to all the objects exposed by the web browser that allow JavaScript to interact with it

// BOM is a collection of properties and methods that contain information about the browser and computer screen. For example, we can find out which browser is being used to view a page (though, this method is unreliable). We can also find out the dimensions of the screen it is viewed on, and which pages have been visited before the current page. It can also be used for the rather dubious practice of creating pop-up windows, if you’re into annoying your users.

// Navigator object

// The window object has a navigator property that returns a reference to the Navigator object. The Navigator object contains information about the browser being used. Its userAgent property will return information about the browser and operating system being used.

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

// The window.location property is an object that contains information about the URL of the current page. It contains a number of properties that provide information about different fragments of the URL.

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

// To navigate to a URL in the history, you use the back(), forward(), and go() methods

// The history.length returns the number of URLs in the history stack

console.log(history.length);

// Screen object

// It contains the information about the user's screen.

console.log(screen.width);
console.log(screen.height);

// excluding the operating system menus
console.log(screen.availWidth);
console.log(screen.availHeight);

// Usually, 24 bit or 32 bit hardware is used for color resolution.

// 24 bits = 16, 777, 216 different (True Colors)
// 32 bits = 4, 294, 967, 296 different (Deep Colors)

console.log(screen.colorDepth);
console.log(screen.pixelDepth);
