Coding Cookies
==============
Demo application for coding and cookies session.

**Basics (Values, Variables, & Control Flow)**

http://jsbin.com/yubuju/1

```javascript
// Values (and Types)
var sum = 1 + 1;
console.log('Values');
console.log(sum);

// Strings
console.log('Strings');
var name = 'Dan';
var greeting = "Hello, nice to meet you.";

console.log(typeof name === typeof greeting);

// Booleans
console.log('Booleans');
console.log(true && true);
console.log(true || false);

// Arrays and Objects
console.log('Arrays and Objects');
var list = ['Dan', 'Tom', 'Spencer', 'Jenna'];
var numbers = [1, 2, 3];

// Object literal syntax
var schools = {
                ucl: 'London',
                harvard: 'Boston',
                count: 2,
                countries: ['US', 'UK']
              };

// Object access
console.log(schools.ucl);
console.log(schools['harvard']);

// Comparisons
console.log(3 > 2);
console.log('Animal' < 'Plant');
// Comparison is based on unicode standards
console.log('Zebra' < 'elephant');

// Control Flow
if (name === 'Dan') {
  console.log('I know you');
} else if (name === 'Tom') {
  console.log('I know you too');
} else {
  console.log('I do not know you');
}

var fruit = 'Mango';

switch(fruit) {
  case 'Orange':
    console.log('$1.59/lbs');
    break;
  case 'Mango':
    console.log('$2.50/lbs');
    break;
  case 'Banana':
    console.log('$1.33/lbs');
    break;
  default:
    console.log('We do not sell that fruit.');
}

for (var i = 0; i < 10; i++) {
  console.log(i);
}

// Iterates over enumerable properties of an OBJECT
for (var prop in schools) {
  console.log(schools[prop]);
}
```

**Functions**

http://jsbin.com/vuzav/1

```javascript
var hello = function(name) {
  console.log('Hello ' + name);
};

function goodbye(name) {
  console.log('Goodbye ' + name);
}

hello('Dan');
goodbye('Tom');
```

**Namespaces & OOP**

http://jsbin.com/boxaze/1

```javascript
// Namespace
var Package = Package || {};

// Class
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.announce = function() {
    console.log('Hello, my name is ' + firstName + ' ' + lastName + '!');
  };
}

Person.prototype.bidFarewell = function() {
  console.log('Farewell all!');
};

var me = new Person('Jon', 'Doe');
me.announce();
me.bidFarewell();
```
