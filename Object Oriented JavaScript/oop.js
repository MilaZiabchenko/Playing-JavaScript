const proto = {
  name: 'Mila',
};

const obj = Object.create(proto);

console.log(proto);
console.log(obj);

delete obj.name;

console.log(obj);
console.log(obj.name);

obj.name = 'Bo';

console.log(obj);
console.log(obj.name);

delete obj.name;

console.log(obj);
console.log(obj.name);

obj.name = 'Leo';
Object.seal(obj);
delete obj.name;

console.log(obj);
console.log(obj.name);

obj.name = 'Bogdan';
obj.surname = 'Starynets';
Object.freeze(obj);

console.log(obj);
console.log(obj.name);
console.log(obj.surname);

obj.name = 'Mi';

console.log(obj);
console.log(obj.name);

const UserDataBlueprint = {
  name: '',
  surname: '',
  _password: '',
};

const UserDataValidationBlueprint = {
  validate() {
    return this.name.length >= 2 && this._password.length >= 8;
  },

  __proto__: UserDataBlueprint, //setter
};

const User = function (name = '', password = '') {
  this.name = name;
  this.surname = 'Ziablick';
  this.fullname = `${name} ${this.surname}`;
  this._password = password;
};

User.prototype = UserDataValidationBlueprint;

const user = new User('Leo', '87654321');

console.info(user);
console.info(user.validate());
console.info(user.__proto__);
console.info(UserDataValidationBlueprint.isPrototypeOf(user));
console.info(user.hasOwnProperty('_password'));

// TS:
// interface IValidate {
//   validate: () => boolean;
// }

// class AdminUser extends User implements IValidate {
class AdminUser extends User {
  #level = 0; // private level = 0 in TS;
  _workingHours = 0;

  set workingHours(hours) {
    if (hours < 0) hours = 0;
    this._workingHours = hours;
  }

  get workingHours() {
    return this._workingHours;
  }

  constructor(name = '', password = '', level = 0, workingHours = 0) {
    super(name, password);

    this.#level = level;
    this._workingHours = workingHours;
  }

  validate() {
    return this.name === 'Mila' && this._password.length >= this.#level * 2;
  }
}

const admin = new AdminUser('Mila', '9753579753', 5, 8);

admin.level = 7;
admin.workingHours = -10;

console.info(admin);
console.info(admin.validate());
console.log('name' in user);
console.log('#level' in admin);
console.log(admin.level);
console.log(admin.workingHours);

// getters and setters in regular objects
let attendance = {
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

  get lengthInHours() {
    return `${this.calcTime()} hours`;
  }

  calcTime() {
    return this.distance / this.pace;
  }
}

const mtTallac = new Hike(10, 2);
console.log(mtTallac.lengthInHours);
