// Date object

const currentDate = new Date();
const currentYear = new Date().getFullYear();
const birthday = new Date(1980, 4, 3);
const birthday1 = new Date(1980, 4, 3, 0, 30, 30);
const birthday2 = new Date(1980, 4, 3, 0, 30, 30);
const birthday3 = birthday1;

console.log(currentDate);
console.log(currentYear);
console.log(birthday);
console.log(birthday1);
console.log(birthday1.getFullYear());
console.log(birthday1.getMonth() + 1);
console.log(birthday1.getDate());
console.log(birthday1.getDay());
console.log(birthday1.getHours());
console.log(birthday1.getTime());
console.log(birthday1 === birthday3);
console.log(birthday1 === birthday2);
console.log(birthday1.getTime() === birthday2.getTime());

// Math object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.5;

console.log(Math.round(area));
console.log(Math.ceil(area));
console.log(Math.floor(area));
console.log(Math.trunc(area));

const random = Math.random();

console.log(random);
console.log(Math.round(random));

// Primitive data types wrapped in objects

// Primitive types in JS are not objects, but still they can actually behave like objects, because JS can wrap them in an object temporarily, when we need to, and it does this silently in the background. And this way we can call properties and methods on primitive types

let ninja = 'Ryu';

console.log(ninja); // regular string
console.log(ninja.length);

// We can see a string wrapper in action by creating a string using a string constructor function

ninja = new String('Ryu');

console.log(ninja); // string wrapped in the object
console.log(ninja.length);

const string = String(500);
const myStringObject = new String(500);

console.log(string); // regular string
console.log(typeof string);
console.log(myStringObject); // string wrapped in the object
console.log(typeof myStringObject);

// Object literal

// Object literal notation is a shorthand notation of 'variable = new Object()'

const blogger = {
  name: 'Crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  hometown: 'Berlin',
  location: 'Berlin',
  blogs: [
    { title: 'Why mac and cheese rule', likes: 30 },
    { title: '10 things to make with marmite', likes: 90 },
  ],

  // When we make methods on an object, we can use a shorthand version of a regular function

  login() {
    console.log('The blogger logged in.');
  },

  logout() {
    console.log('The blogger logged out.');
  },

  logBlogs() {
    // 'this' keyword

    // The 'this' keyword is a context object and it represents the context in which the current code is executed

    console.log(this.blogs);
    console.log('This blogger has written the following blogs:');
    console.log(this.blogs[0].title);
    console.log(this.blogs[1].title);
    this.blogs.forEach(blog => {
      console.log(`The blog '${blog.title}' has received ${blog.likes} likes.`);
    });
  },
};

setTimeout(blogger.login, 0);
setTimeout(blogger.logout, 5000);

blogger.logBlogs();
console.log(blogger);
console.log(blogger.hometown);
console.log(blogger.blogs[0].likes);

console.log(blogger.location); // key location value
console.log(blogger['location']); // key location value
console.log(blogger['location']); // key location value

const key = 'location';

console.log(blogger[key]); // const key value;

let user = {
  // Encapsulation

  // The literal meaning of encapsulation is to enclose a mixture of something inside a capsule. It means that we are capturing everything to do with the user here and we are containing it all together in one piece, one object, and any kind of this user's properties and methods will live inside this object

  // It is a good practice to keep all properties and methods inside the object literal definition, so we can see everything in one place. If at some point in this program a user is gonna have an age property, we should put that property to begin with. Even if we don't know the value of it, we could just set it to null or zero to begin with, then update it later on

  email: 'ryu@ninjas.uk',
  firstName: 'Ryu',
  status: null,

  login() {
    console.log(`${this.email} has logged in.`);
  }, // comma separation inside the object literal

  logout() {
    console.log(`${this.email} has logged out.`);
  },
};

// Accessing/updating/changing/adding the object's properties and methods

// 1. with dot notation (used most of the time)
user.email = 'ryu@ninjascorp.com';

// 2. with bracket notation
user['status'] = 'admin';

// Bracket notation is useful, when we are accessing something dynamic and not necessarily set in stone

let prop = 'status';

console.log(user[prop]); // status value

prop = 'fname';

console.log(user[prop]); // first name value

// Classes

class Car {
  // Constructor function with classes

  // Constructor function is very handy, when we need to create a lot of objects. So for all those objects we create a constructor function once, saving a lot of space in the code and making it much more readable

  // When we want to create a new instance of the class, the constructor function will be responsible for actually constructing or creating a new object, based on this class, and it's gonna fire whenever we want to create a new object

  // Constructor function is used just for the object's properties, not methods

  constructor(maxSpeed, driver) {
    this.maxSpeed = maxSpeed;
    this.driver = driver;
  }

  logDriver() {
    console.log(`Driver ${this.driver} logged in.`);

    return this;
  } // no comma separation inside the class

  logMaxSpeed() {
    console.log(
      `Driver ${this.driver}'s maximum speed was ${this.maxSpeed} km/h.`
    );

    return this;
  }

  drive(time, speed) {
    console.log(
      `Driver ${this.driver} travelled ${
        time * speed
      } kilometers in ${time} hours.`
    );

    return time * speed;
  }
}

const car1 = new Car(80, 'Any');
const car2 = new Car(85, 'Brad');
const car3 = new Car(90, 'Dan');

car1.logDriver().logMaxSpeed().drive(3, 90);
car2.logMaxSpeed();
car3.drive(5, 60);

// JavaScript as a language doesn't really have classes built into it, and under the hood classes are doing the same thing as the prototype model

// A class in JS is a bit like a blueprint that describes a particular object in a not specific way because that is specific to each individual instance of that class. So, when we create a new instance of the class, we create a new object, and at that point we pass to the class the parameters

class User {
  constructor(email, fname) {
    // Whenever we refer to 'this' inside the constructor, then it's the new object that 'this' just created

    this.email = email;
    this.fname = fname;

    // We don't pass the score as a parameter because it's the same for every user to begin with

    this.score = 0;
  }

  login() {
    console.log(`${this.email} just logged in`);
    return this;
  }

  logout() {
    console.log(`${this.email} just logged out`);
    return this;
  }

  updateScore() {
    this.score++;
    console.log(`${this.email} score is now ${this.score}`);

    return this;

    // We don't want to return an undefined value whenever we call a method, what we want to do is return the instance of the object stored in 'this'

    // If we are returning that particular object, we are able to do another method on that object, we can chain methods now
  }
}

// The 'new' keyword does 3 things essentially:

// 1. creates a new empty object {};

// 2. binds the context of 'this' inside the class to be equal to that new empty object, so we have access to that empty object via 'this' keyword;

// 3. calls the constructor method inside the class specified right after the 'new' keyword, so then we can go about attaching new properties on to that object by using 'this' keyword. And when we create a new object, we pass in a new information, new values into the constructor method by using arguments

const userOne = new User('ryu@ninjas.com', 'Ryu');
const userTwo = new User('yoshi@mariocorp.com', 'Yoshi');

userOne.login();
userTwo.logout();

// methods chaining
userOne.login().updateScore().updateScore().logout();

console.log(userOne);
console.log(userTwo);

// Class inheritance

class Admin extends User {
  // If we don't have a constructor in the class that extends from another, then it will just use the parent constructor

  // We pass in as an argument the user we want to delete to update users array

  deleteUser(user) {
    // The filter method in JS allows us to cycle through each element inside the array and then filter one or more of them out of the array. We pass in each individual item as a parameter to the arrow function

    users = users.filter(u => {
      // If u === user, we want to filter it out of the array. If we return false for a particular user, it's gonna remove that user from the array. If we return true, it's gonna keep the user inside the array

      return u.email !== user.email;

      // If emails match, then we gonna return false
    });
  }
}

let admin = new Admin('shaun@ninjas.com', 'Shaun');

admin.updateScore();

console.log(admin);

let users = [userOne, userTwo, admin];

admin.deleteUser(userTwo);

console.log(users);

// Prototype model (constructors under the hood)

// Classes are just a thin layer of abstraction built on top of the JS prototype model, but mainly it's the constructor function that binds all of the properties and values to the object, when we create it

function Member(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
}

// Prototype & __proto__ property

// Every object (date, array, custom object) has a prototype. The prototype of each different type in JS is like a map for that object type. It contains the functionality that is the different methods for that object type, and for any object created of that type the __proto__ property will point to that prototype, and it will know how to use these different methods. So this way the methods are not being repeated over and over in each different object instance, but instead we are defining them once on a single object prototype, and the __proto__ property will point to the object's prototype. In this way we kind of borrowing these methods from the prototype instead of having them stored directly on the objects, and this way of working using prototypes is more efficient and will allow us later to work with prototype inheritance.

// Accessing the prototype property

// It's just the constructor function that has the prototype property, not the instances of the object type

console.log(User.prototype);
console.log(Member.prototype);
console.log(Creator.prototype);

// The instances of the object have the __proto__ property which points to the prototype

console.log(admin.__proto__);

// Attaching methods to the prototype

Member.prototype.login = function () {
  // 'this' will refer to the object that we call this function on

  this.online = true;

  console.log(`${this.email} has logged in.`);
};

Member.prototype.logout = function () {
  this.online = false;

  console.log(`${this.email} has logged out.`);
};

// Prototype inheritance

function Creator(...args) {
  // Inheriting parameters from Member function
  Member.apply(this, args);
  this.role = 'founder';
}

// Inheriting methods from Member prototype

// Calling Object.create() method creates a new object

Creator.prototype = Object.create(Member.prototype);

// The prototype property is an object, that's why we create a new object for the Creator prototype based on the prototype for the Member

console.log(Creator.prototype);

// Prototype chain

// When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.

// In JS any function can be added to an object in the form of a property. An inherited function acts just as any other property

// When an inherited function is executed, the value of 'this' points to the inheriting object, not to the prototype object where the function is an own property.

// We have the __proto__ nested inside the __proto__ because we've not directly added the Member methods on to the Creator prototype as far as we might want to add additional functionality specific to the Creator prototype

Creator.prototype.addMember = function (newMember) {
  members.push(newMember);
  return members;
};

const memberOne = new Member('mila@divchata.com', 'Mila');
const memberTwo = new Member('oksana@divchata.com', 'Oksana');
const creator = new Creator('hanna@divchata.com', 'Hanna'); // a rest parameter 'args' takes in these parameters as an array

memberOne.login();
memberOne.logout();

console.log(memberOne);

creator.login();

console.log(creator);

let members = [creator, memberOne, memberTwo];

console.log(members);

const memberThree = new Member('kate@divchata.com', 'Kate');

creator.addMember(memberThree);

console.log(members);

// All of this good stuff - creating a prototype for our emulated class, adding the methods to that prototype etc - this is all going in the background when we use the 'class' keyword

const proto = {
  name: 'Mila',
};

console.log(proto);

const object = Object.create(proto);

console.log(object);
console.log(object.name);

object.name = 'Leo';
Object.seal(object);
delete object.name;

console.log(object);
console.log(object.name);

object.name = 'Bogdan';
object.surname = 'OldMan';

console.log(object);
console.log(object.name);
console.log(object.surname);

Object.freeze(object);

object.name = 'Mi';

console.log(object);
console.log(object.name);

const UserDataBlueprint = {
  name: '',
  surname: '',
  password: '',
};

const UserDataValidationBlueprint = {
  validate() {
    return this._name.length >= 2 && this._password.length >= 8;
  },

  __proto__: UserDataBlueprint,
};

console.info(UserDataValidationBlueprint);

const ProtectedUser = function (name = '', password = '') {
  this._name = name;
  this._surname = 'Ziablick';
  this._fullName = `${name} ${this._surname}`;
  this._password = password;
};

ProtectedUser.prototype = UserDataValidationBlueprint;

user = new ProtectedUser('Leo', '87654321');

console.info(user);
console.info(user.validate());
console.info(user.__proto__);
console.info(Object.getPrototypeOf(user));
console.info(Object.hasOwn(user, '_password'));

class AdminUser extends ProtectedUser {
  _workingHours = 0; // protected field;
  #level = 0; // private field;

  set workingHours(hours) {
    if (hours < 0) hours = 0;
    this._workingHours = hours;
  }

  get workingHours() {
    return this._workingHours;
  }

  constructor(name = '', password = '', level = 0, workingHours = 0) {
    // Protected fields are inheritable
    super(name, password);

    // Private fields are only accessible inside the class
    this.#level = level;
    this._workingHours = workingHours;
  }

  validate() {
    return this._name === 'Mila' && this._password.length >= this.#level * 2;
  }
}

admin = new AdminUser('Mila', '9753579753', 5, 8);

admin.level = 3;
admin.workingHours = -8;

console.info(admin);
console.info(admin.validate());
console.log('name' in user);
console.log('level' in admin);
console.log('#level' in admin);
console.log(admin.level);
console.log(admin.workingHours);

// getters and setters in regular objects
const attendance = {
  _list: [],

  set addName(name) {
    this._list.push(name);
  },

  get list() {
    return this._list.join(', ');
  },
};

attendance.addName = 'Leo';
attendance.addName = 'Mi';
attendance.addName = 'Bo';

console.log(attendance.list);

// getters and setters in classes
class Hike {
  constructor(distance, pace) {
    (this.distance = distance), (this.pace = pace);
  }

  calcTime() {
    return this.distance / this.pace;
  }

  get lengthInHours() {
    return `${this.calcTime()} hours`;
  }
}

const mtTallac = new Hike(10, 2);
console.log(mtTallac.lengthInHours);
