ES6 (ECMAScript 2015) introduced a variety of new features that significantly enhance data manipulation capabilities in JavaScript. Below are some of the key features and examples of how to use them for data manipulation:

1. **Let and Const**
2. **Arrow Functions**
3. **Template Literals**
4. **Destructuring**
5. **Spread Operator**
6. **Rest Parameters**
7. **Enhanced Object Literals**
8. **Array Methods**
9. **Promises**
10. **Modules**

### 1. Let and Const
`let` and `const` provide block-scoped variable declarations. `const` is used for variables that shouldn't be reassigned.

```javascript
let variable = 'value';
const constant = 'value';
```

### 2. Arrow Functions
Arrow functions provide a concise syntax for writing functions.

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
```

### 3. Template Literals
Template literals allow for easier string interpolation and multi-line strings.

```javascript
const name = 'John';
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, John!
```

### 4. Destructuring
Destructuring assignment makes it easier to extract values from arrays or properties from objects.

```javascript
const person = { name: 'John', age: 30 };
const { name, age } = person;
console.log(name, age); // John 30

const array = [1, 2, 3];
const [first, second] = array;
console.log(first, second); // 1 2
```

### 5. Spread Operator
The spread operator (`...`) expands iterable objects into individual elements.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }
```

### 6. Rest Parameters
Rest parameters (`...`) allow functions to accept an indefinite number of arguments as an array.

```javascript
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
console.log(sum(1, 2, 3, 4)); // 10
```

### 7. Enhanced Object Literals
ES6 provides shorthand syntax for defining object properties and methods.

```javascript
const name = 'John';
const person = {
  name,
  greet() {
    console.log(`Hello, ${this.name}!`);
  }
};
person.greet(); // Hello, John!
```

### 8. Array Methods
ES6 introduced new array methods such as `find`, `findIndex`, and `includes`.

```javascript
const numbers = [1, 2, 3, 4, 5];

const found = numbers.find(num => num > 3);
console.log(found); // 4

const foundIndex = numbers.findIndex(num => num > 3);
console.log(foundIndex); // 3

const includes = numbers.includes(3);
console.log(includes); // true
```

### 9. Promises
Promises provide a way to handle asynchronous operations.

```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched');
    }, 1000);
  });
};

fetchData()
  .then(data => console.log(data)) // Data fetched
  .catch(error => console.error(error));
```

### 10. Modules
ES6 modules allow for modular code by using `import` and `export`.

```javascript
// module.js
export const greet = name => `Hello, ${name}!`;

// main.js
import { greet } from './module.js';
console.log(greet('John')); // Hello, John!
```

These features provide powerful tools for writing cleaner, more efficient, and more readable JavaScript code.
