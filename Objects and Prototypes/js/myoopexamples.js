// OOP

// 1. Prototype model

// Prototypes are the mechanism by which JavaScript objects inherit features from one another.

// Constructor function
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}

// Attaching methods to the prototype
Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
};

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

Object.prototype.logInfo = function () {
  return `This info can be logged for every object in this prototype chain.`;
};

// Prototype inheritance

function Director(firstName, lastName, dob, movies) {
  // Inheriting properties
  Person.call(this, firstName, lastName, dob);
  delete this.dob;
  this.movies = movies;
}

const Author = function (...args) {
  // Inheriting properties
  Person.apply(this, args);
};

// Ways of setting a prototype

// Using Object.create()

// The Object.create() method creates a new object and allows you to specify an object that will be used as the new object's prototype.
Director.prototype = Object.create(Person.prototype);

// Using a constructor

// If we set the prototype of a constructor, we can ensure that all objects created with that constructor are given that prototype
Director.prototype.constructor = Director;

// Inheriting methods
Author.prototype = Object.create(Person.prototype);

// Own methods
Author.prototype.addBook = function (title, publicationDate) {
  publicationDate = new Date(publicationDate);

  const bookAge = new Date().getFullYear() - publicationDate.getFullYear();

  return `${this.getFullName()} wrote a memoir called ${title}. It was published ${bookAge} years ago on ${publicationDate}.`;
};

// 2. Classes

class Personality {
  // Encapsulation

  // The hole idea behind encapsulation is that you hide the inner details of a class and only share or expose what is needed for the user of the class
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  get name() {
    return this.firstName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }
}

Personality.prototype.say = function () {
  return `${this.firstName} says meow...`;
};

// Class inheritance
class Programmer extends Personality {
  constructor(firstName, lastName, dob, language) {
    // We must call super constructor in derived class before accessing 'this' or returning from derived constructor

    // Since the super() operator is actually the parent class constructor, passing here its arguments will also initialize the parent class properties in our sub-class, thereby inheriting it

    super(firstName, lastName, dob);
    this.language = language;
  }

  getLanguage() {
    return `${this.getFullName()} is specialized in ${this.language}.`;
  }

  validateLanguage() {
    if (this.language !== 'JavaScript' && this.language !== 'Python') {
      return `Sorry, ${this.firstName}, we are not hiring ${this.language} programmers at the moment.`;
    }

    return `Welcome, ${this.firstName}! Let's create some cool stuff with ${this.language}!`;
  }

  // Static method
  static countCoders() {
    console.log(
      `Actually there is just one creative self-educating coder here, who's having fun and trying not to overwhelm herself.`
    );
  }
}

// A constructor in JS is a function that happens to be called with the new operator
const turtleMan = new Person('Bogdan', 'Starynets', '9-28-1982');
const superHuman = new Author('Edward', 'Snowden', '6-21-1983');
const director = new Director(
  'Martin',
  'Scorsese',
  '',
  'The Last Temptation Of Christ, Gangs Of New York, Silence, The Irishman'
);
const superCat = new Personality('Leo', 'Ziablick', '4-3-2017');
const catWoman = new Programmer('Mila', 'Ziablick', '7-3-1579', 'JavaScript');
const matrixBoy = new Programmer('Neo', 'Nerdy', '9-3-1999', 'Go');

console.log(turtleMan);
console.log(superHuman);
console.log(director);
console.log(superCat);
console.log(catWoman);
console.log(matrixBoy);

console.log(Object.logInfo());

console.log(
  `${matrixBoy.getFullName()} is pretty good at ${matrixBoy.language}.`
);
console.log(matrixBoy.validateLanguage());

console.log(catWoman.getLanguage());
console.log(catWoman.validateLanguage());

console.log(Object.hasOwn(catWoman, 'firstName'));
console.log(catWoman.hasOwnProperty('firstName'));
console.log('firstName' in catWoman);

console.log(catWoman instanceof Personality);
console.log(catWoman instanceof Programmer);
console.log(catWoman instanceof Object);
console.log(Programmer instanceof Object);
console.log(typeof Programmer);
console.log(typeof catWoman);

// Static methods are not attached to any individual object, but instead are invoked on the class itself
Programmer.countCoders();

console.log(
  `${catWoman.getFullName()} enjoys learning ${
    catWoman.language
  }. She creates miscellaneous stuff with ${
    catWoman.language
  } and other web technologies.`
);

console.log(superCat.name);
console.log(
  `${superCat.getFullName()} was born in spring of ${superCat.getBirthYear()}. ${
    superCat.firstName
  } has brought huge joy and immense happiness to ${
    catWoman.firstName
  }'s home and life.`
);

// Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype

// An object called Object.prototype is the most basic prototype, that all objects have by default. The prototype of Object.prototype is null, so it's at the end of the prototype chain

// The property of an object that points to its prototype is called __proto__

console.log(Object.prototype.__proto__);
console.log(Object.prototype);
console.log(Date.prototype);
console.log(Date.prototype.__proto__ === Object.prototype);

console.log(superCat.__proto__);
console.log(superCat.__proto__ === Object.getPrototypeOf(superCat));
console.log(Object.prototype.isPrototypeOf(superCat));

let object = superCat;

do {
  object = Object.getPrototypeOf(object);

  console.log(object);
} while (object);

// instanceof

// The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object

console.log(superCat instanceof Object);
console.log(Personality instanceof Object);
console.log(superCat instanceof Personality);

// When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case undefined is returned

console.log(superCat.meow);
console.log(superCat.say);
console.log(superCat.say());
console.log(Object.hasOwn(superCat, 'say'));
console.log(Object.hasOwn(superCat, 'firstName'));

console.log(
  `${turtleMan.getFullName()} has been dark and grumpy recently. Hopefully ${turtleMan.firstName.slice(
    0,
    2
  )} ${turtleMan.lastName.slice(0, 4)} will feel well soon.`
);
console.log(turtleMan.dob);
console.log(turtleMan.getBirthYear());
console.log(turtleMan.dob.getFullYear());
console.log(turtleMan.dob.getMonth() + 1);
console.log(turtleMan.dob.getDate());
console.log(turtleMan.dob.getDay());
console.log(Object.hasOwn(turtleMan, 'dob')); //static method
console.log(turtleMan.hasOwnProperty('dob')); // non-static method

console.log(superHuman.addBook('Permanent Record', '9-17-2019'));

const basics = [
  'HTML5/CSS3/SASS/UI/UX',
  'JS Core/Func&OOP/DOM/BOM',
  'Ajax/HTTP/Fetch/Axios/JSON',
  'DevTools/CLI/Bash/Git/GitHub',
  'NPM/Jarn/Parcel/Netlify',
];

const medium = [
  ...basics, // expanding the array into list with the spread operator
  'Algorithms/Data Structures/Design Patterns',
  'React/Routing/Hooks/Context/Firebase',
  'Material UI/Framer Motion/Tailwind',
  'React Query/Apollo/GraphQL/Strapi',
  'Redux Toolkit/Testing/Storybook',
  'Node/Express/MongoDB/CI/CD',
  'Vercel/NEXT/Remix/Svelte',
  'Webpack/Vite/esbuild',
  'TypeScript',
];

const advanced = [
  ...medium,
  'JAMstack/Web Assembly',
  'PostgreSQL/AWS/Docker',
  'Tauri/Electron/Flutter',
  'Python/Django',
];

const frontEndDeveloper = [
  `Can setup a productive development environment`,
  `Can create responsive layouts`,
  `Can create CSS animations and effects`,
  `Can add dynamic page functionality and work with the DOM`,
  `Understand HTTP and can connect to 3rd party APIs`,
  `Can use your browser's dev tools`,
  `Can utilize Git with GitHub`,
  `Can build websites for individuals and small businesses`,
  `Can build small client side apps with JS`,
  `Can deploy and maintain small projects`,
];

const frontEndWizard = [
  ...frontEndDeveloper,
  `Can build advanced apps and interfaces with a frontend framework`,
  `Can manage application, working with component and global state`,
  `Can interact with back-end APIs and data`,
  `Can write and test clean and efficient code`,
  `Can perform server side rendering and static site generation`,
  `Can write more robust code with TypeScript`,
];

const frontEndMaestro = [
  ...frontEndWizard,
  `Fluent in a server-side language(s) and framework(s)`,
  `Can build back-end apps, APIs, micro-services`,
  `Can work with databases(SQL, ORM)`,
  `Can deploy to production(SSH, Git, Cloud)`,
];

class WebDeveloper {
  constructor(name, basicSalaryMultiplier) {
    this.name = name;
    this.basicSalaryMultiplier = basicSalaryMultiplier;
    this.basicSalary = 1500;
  }

  getSalary() {
    return this.basicSalaryMultiplier * this.basicSalary;
  }

  getTech() {
    return basics;
  }

  static displayTechnologies() {
    console.log(`Junior web dev is familiar with technologies:`);
    console.log(basics);
  }

  static displaySkills() {
    console.log(`and has following skills`);
    console.log(frontEndDeveloper);
  }
}

WebDeveloper.displayTechnologies();
WebDeveloper.displaySkills();

class WebDevMaster extends WebDeveloper {
  getTech() {
    return medium;
  }

  static displayTechnologies() {
    console.log(`Middle web dev is familiar with technologies:`);
    console.log(medium);
  }

  static displaySkills() {
    console.log(`and has following skills`);
    console.log(frontEndWizard);
  }
}

WebDevMaster.displayTechnologies();
WebDevMaster.displaySkills();

class WebDevMaestro extends WebDevMaster {
  getTech() {
    return advanced;
  }

  static displayTechnologies() {
    console.log(`Senior web dev is familiar with technologies:`);
    console.log(advanced);
  }

  static displaySkills() {
    console.log(`and has following skills`);
    console.log(frontEndMaestro);
  }
}

WebDevMaestro.displayTechnologies();
WebDevMaestro.displaySkills();

const webDeveloper = new WebDeveloper('Lynn', 1);
const middleWebDev = new WebDevMaster('Andrea', 3);
const seniorWebDev = new WebDevMaestro('Max', 6);

console.log(webDeveloper);
console.log(webDeveloper.getTech());
console.log(middleWebDev);
console.log(middleWebDev.getTech());
console.log(seniorWebDev);
console.log(seniorWebDev.getTech());
console.log(
  `${webDeveloper.name}'s salary is ${webDeveloper.getSalary()}$ per month.`
);
console.log(
  `${middleWebDev.name}'s salary is ${middleWebDev.getSalary()}$ per month.`
);
console.log(
  `${seniorWebDev.name}'s salary is ${seniorWebDev.getSalary()}$ per month.`
);

class Meal {
  constructor(time, first, second, third) {
    // definition => paramaters
    this.time = time;
    this.first = first;
    this.second = second;
    this.third = third;
    this.fourth = null;
  }
}

const breakfast = new Meal('7am', 'coffee', 'milk', 'biscuits'); // instantiation/invocation => arguments
const lunch = new Meal('11am', 'compote', 'chocolate', null);
const dinner = new Meal(
  '3pm',
  'salad',
  'oatmeal with veggies',
  'chicken with zucchini'
);

dinner.fourth = 'watermelon';

console.log(breakfast);
console.log(lunch);
console.log(dinner);

// Array of object instances
const meals = [
  new Meal('8am', 'coffee', 'milk', 'pancakes'),
  new Meal('1pm', 'cottage cheese', 'sour cream', 'jam'),
  new Meal('6pm', 'veggies', 'eggs', 'grapefruit'),
];

meals[0].fourth = 'tangerine';
meals[1].fourth = 'banana';

console.log(meals[0]);
console.log(meals[1]);
console.log(meals[2]);

class Vampire {
  constructor(props) {
    this.name = props.name;
    this.location = props.location;
    this.birthDate = props.birthDate;
    this.deathDate = props.deathDate;
    this.weaknesses = props.weaknesses;
  }

  get age() {
    return this.calcAge();
  }

  // The regular functions are the usual way to define methods on classes
  calcAge() {
    return this.deathDate - this.birthDate;
  }

  // In contrast with regular functions, the method defined using an arrow binds this lexically to the class instance
  logWeaknesses = () => console.log(this.weaknesses);
  getName = () => Promise.resolve(this.name);
}

const Dracula = new Vampire({
  name: 'Vlad',
  location: 'Transylvania',
  birthDate: 1428,
  deathDate: 1476,
  weaknesses: ['sunlight', 'garlic'],
});

console.log(Dracula);
console.log(Dracula.age);
console.log(Dracula instanceof Vampire);

// When we use Dracula.calcAge (method of a Class defined with a regular func) as a callback, we bind 'this' value manually
setTimeout(Dracula.calcAge.bind(Dracula), 0);

// We use Dracula.logWeaknesses (method of a Class defined with an arrow func) as a callback without any manual binding of 'this'
setTimeout(() => Dracula.logWeaknesses(), 1000);
setTimeout(Dracula.logWeaknesses, 2000);
Dracula.getName().then(console.log);
