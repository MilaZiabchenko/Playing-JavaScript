// Primitive data types

// Comparison operators/loose and strict equality
console.log(NaN == NaN);
console.log(55 == '55');
console.log(55 != '55');
console.log(55 === '55');
console.log(55 !== '55');
console.log(55 > '53');
console.log(55 === 55 / 1);
console.log('leo' > 'Milu');

// Number methods
console.log(Number.isNaN(NaN));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(-3));
console.log(Number.isInteger(-3));
console.log(Number.isInteger(0));
console.log(Number.isInteger(3.7));
console.log(Number.isInteger(Infinity));

// Type conversion
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

console.log(something.toFixed(2) + 5);
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

console.log(today);
console.log(typeof today);
console.log(typeof today[1]);
console.log(typeof today[2].task);
console.log(typeof today[2].done);
console.log(today.length);
console.log(today[0]);
console.log(today[2].id);

// JSON data format
const todayJSON = JSON.stringify(today, null, 2);

console.log(todayJSON);

// 'For' loop
for (let i = 0; i < today.length; i++) {
  console.log(today[i].id);
}

const initialArr = [1, 2, 3, 4, 5];
const reversedArr = [];

for (let i = initialArr.length - 1; i >= 0; i--) {
  reversedArr.push(initialArr[i]);
}

console.log(reversedArr);

// 'While' loop
let i = 0;

while (i < today.length) {
  console.log(today[i].task);
  i++;
}

i = 3;

while (i) {
  console.log(i--);
}

// 'Do/while' loop
i = 'I send you one message.';
let j = null;

do {
  console.log(i);
  i++;
} while (j === 'You wright me back.');

// 'For/of' statement
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

// If/else statement
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

// Method 1:
span.setAttribute('title', 'Hey!');
span.removeAttribute('title');

// Method 2:
span.title = 'Yo, gang!';
span.id = 'greeting';

// Manipulating custom data attributes:
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
