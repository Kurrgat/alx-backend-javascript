ES6 Basics
### What ES6 Is
- **ES6** (ECMAScript 2015) is the sixth edition of the ECMAScript standard, which is the scripting language specification on which JavaScript is based. It introduced major enhancements to the language to make coding in JavaScript more efficient and expressive.

### New Features Introduced in ES6
- **Arrow Functions**: A concise way to write functions using the `=>` syntax.
- **Let and Const**: Block-scoped variable declarations.
- **Template Literals**: Enhanced string literals using backticks (``) and allowing embedded expressions.
- **Default Parameters**: Allowing function parameters to have default values.
- **Destructuring Assignment**: A convenient way to extract values from arrays or properties from objects into distinct variables.
- **Rest and Spread Operators**: `...` syntax to handle function parameters and arrays.
- **Classes**: A new way to write constructor functions and inheritance using `class` syntax.
- **Modules**: Built-in support for modular code using `import` and `export` statements.
- **Promises**: A new way to handle asynchronous operations.

### The Difference Between a Constant and a Variable
- **Variable** (`let` or `var`): A storage location identified by a variable name, whose value can be changed.
- **Constant** (`const`): A storage location identified by a constant name, whose value cannot be changed once assigned.

### Block-Scoped Variables
- **Let**: Variables declared with `let` are block-scoped, meaning they are only accessible within the block they are defined in (e.g., within `{}`).
- **Const**: Similar to `let`, constants are block-scoped but cannot be reassigned after their initial assignment.

### Arrow Functions and Function Parameters Default to Them
- **Arrow Functions**: A shorthand for writing functions. They do not have their own `this`, `arguments`, `super`, or `new.target` and are not suitable for methods.
  ```javascript
  const add = (a, b) => a + b;
  ```
- **Default Parameters**: Allow setting default values for function parameters.
  ```javascript
  function greet(name = 'Guest') {
    return `Hello, ${name}`;
  }
  ```

### Rest and Spread Function Parameters
- **Rest Parameters**: Collects all remaining arguments into an array.
  ```javascript
  function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
  }
  ```
- **Spread Operator**: Expands an array into individual elements.
  ```javascript
  const numbers = [1, 2, 3];
  console.log(...numbers); // Outputs: 1 2 3
  ```

### String Templating in ES6
- **Template Literals**: Allow embedding expressions inside string literals using `${expression}` syntax.
  ```javascript
  const name = 'John';
  const message = `Hello, ${name}!`;
  ```

### Object Creation and Their Properties in ES6
- **Object Literal Enhancements**: Simplified syntax for defining properties and methods.
  ```javascript
  const x = 10, y = 20;
  const obj = { x, y, greet() { return 'Hello'; } };
  ```
- **Computed Property Names**: Allows using expressions as property names.
  ```javascript
  const prop = 'name';
  const person = { [prop]: 'Alice' };
  ```

### Iterators and For-of Loops
- **Iterators**: Objects that implement the `Iterator` protocol by having a `next()` method that returns an object with `value` and `done` properties.
- **For-of Loops**: A new loop for iterating over iterable objects (like arrays, strings, maps, etc.).
  ```javascript
  const array = [1, 2, 3];
  for (const value of array) {
    console.log(value);
  }
  ```
