/**
 * CertifyCode Academy - Modern JavaScript & ES6+ Architecture Question Bank
 * Total Questions: 50
 */

export const javascriptQuestions = [
  // EASY (20)
  {
    id: 1,
    topic: "Variables & Scope",
    difficulty: "Easy",
    question: "Which keyword introduces block-scoped variables in modern JavaScript (ES6+)?",
    options: ["var", "let", "global", "def"],
    correctAnswer: 1,
    explanation: "`let` and `const` introduce block scope (`{}`), whereas `var` is function-scoped."
  },
  {
    id: 2,
    topic: "Variables & Scope",
    difficulty: "Easy",
    question: "What is the difference between `let` and `const` in JavaScript?",
    options: [
      "`const` variables cannot be reassigned after declaration; `let` variables can be reassigned",
      "`let` is global; `const` is local",
      "`const` is only for numbers",
      "`let` variables cannot be mutated"
    ],
    correctAnswer: 0,
    explanation: "`const` creates a read-only reference that prevents variable re-assignment."
  },
  {
    id: 3,
    topic: "Arrays & Objects",
    difficulty: "Easy",
    question: "Which array method creates a new array populated with the results of calling a provided function on every element?",
    options: ["forEach()", "map()", "filter()", "reduce()"],
    correctAnswer: 1,
    explanation: "`Array.prototype.map()` transforms every element and returns a new array of identical length."
  },
  {
    id: 4,
    topic: "Arrays & Objects",
    difficulty: "Easy",
    question: "Which array method creates a new array with all elements that pass a boolean test?",
    options: ["map()", "filter()", "find()", "slice()"],
    correctAnswer: 1,
    explanation: "`Array.prototype.filter()` returns a new array containing elements where the callback returned `true`."
  },
  {
    id: 5,
    topic: "Functions & Closures",
    difficulty: "Easy",
    question: "What is the syntax for an arrow function in JavaScript?",
    options: ["(param) => { ... }", "function => (param)", "def param -> { ... }", "lambda(param)"],
    correctAnswer: 0,
    explanation: "Arrow functions use `(param) => { ... }` syntax and lexically bind the `this` value."
  },
  {
    id: 6,
    topic: "Variables & Scope",
    difficulty: "Easy",
    question: "What data type is returned by `typeof NaN` in JavaScript?",
    options: ["'number'", "'nan'", "'undefined'", "'object'"],
    correctAnswer: 0,
    explanation: "In JavaScript, `NaN` (Not-a-Number) is technically of type `'number'`."
  },
  {
    id: 7,
    topic: "Asynchronous JavaScript",
    difficulty: "Easy",
    question: "Which object represents the eventual completion or failure of an asynchronous operation?",
    options: ["Promise", "AsyncObject", "Callback", "Deferred"],
    correctAnswer: 0,
    explanation: "A `Promise` represents an asynchronous operation that will fulfill with a value or reject with an error."
  },
  {
    id: 8,
    topic: "Asynchronous JavaScript",
    difficulty: "Easy",
    question: "Which keywords are used together for modern async promise-handling in JS?",
    options: ["async / await", "try / catch", "defer / fetch", "launch / yield"],
    correctAnswer: 0,
    explanation: "`async` functions return Promises, and `await` pauses execution until Promises resolve."
  },
  {
    id: 9,
    topic: "DOM & Events",
    difficulty: "Easy",
    question: "Which document API selects the first HTML element matching a specified CSS selector?",
    options: ["document.getElementById()", "document.querySelector()", "document.find()", "document.getElement()"],
    correctAnswer: 1,
    explanation: "`document.querySelector('selector')` returns the first matching Element object."
  },
  {
    id: 10,
    topic: "Variables & Scope",
    difficulty: "Easy",
    question: "What is the result of `'5' + 3` vs `'5' - 3` in JavaScript?",
    options: ["'53' and 2", "8 and 2", "'53' and '53'", "NaN and 2"],
    correctAnswer: 0,
    explanation: "`+` with a string triggers concatenation (`'53'`). `-` forces numeric coercion (`2`)."
  },
  {
    id: 11,
    topic: "Arrays & Objects",
    difficulty: "Easy",
    question: "Which operator unpacks elements of an array or properties of an object into distinct variables?",
    options: ["Rest operator", "Destructuring assignment", "Spread operator", "Template literal"],
    correctAnswer: 1,
    explanation: "Destructuring (`const [a, b] = arr` or `const {x, y} = obj`) unpacks values into distinct variables."
  },
  {
    id: 12,
    topic: "Arrays & Objects",
    difficulty: "Easy",
    question: "What does the spread operator (`...`) do when used inside an array literal `[...arr1, ...arr2]`?",
    options: [
      "Expands elements of the arrays into the new array",
      "Combines arrays into a 2D matrix",
      "Deletes duplicate elements",
      "Converts arrays to strings"
    ],
    correctAnswer: 0,
    explanation: "The spread operator (`...`) expands iterables into individual elements."
  },
  {
    id: 13,
    topic: "Variables & Scope",
    difficulty: "Easy",
    question: "What is the difference between `==` and `===` in JavaScript?",
    options: [
      "`===` compares value and type without coercion; `==` performs type coercion before comparison",
      "`==` is strict; `===` is loose",
      "`===` is used only for strings",
      "There is no difference"
    ],
    correctAnswer: 0,
    explanation: "`===` is strict equality (no type coercion). `==` performs loose type coercion."
  },
  {
    id: 14,
    topic: "Functions & Closures",
    difficulty: "Easy",
    question: "What is hoisting in JavaScript?",
    options: [
      "JavaScript's default behavior of moving function and variable declarations to the top of their containing scope during compilation",
      "Lifting state to parent components",
      "Converting synchronous code to async",
      "Garbage collection of stack memory"
    ],
    correctAnswer: 0,
    explanation: "Hoisting moves declarations to the top of their enclosing scope during parsing."
  },
  {
    id: 15,
    topic: "DOM & Events",
    difficulty: "Easy",
    question: "Which event listener parameter method prevents the browser's default action (e.g. form submission page reload)?",
    options: ["e.preventDefault()", "e.stopPropagation()", "e.stop()", "e.cancel()"],
    correctAnswer: 0,
    explanation: "`e.preventDefault()` prevents the browser default action from firing."
  },
  {
    id: 16,
    topic: "Arrays & Objects",
    difficulty: "Easy",
    question: "How do you check if a variable `arr` is a true JavaScript Array?",
    options: ["typeof arr === 'array'", "Array.isArray(arr)", "arr.isVector()", "arr instanceof Object"],
    correctAnswer: 1,
    explanation: "`Array.isArray(arr)` reliably returns `true` for Array instances."
  },
  {
    id: 17,
    topic: "Variables & Scope",
    difficulty: "Easy",
    question: "What is Template Literal syntax in ES6?",
    options: ["Backtick syntax `` `Hello ${name}` `` allowing embedded expressions", "Double quotes with %s", "Single quotes with +", "HTML string template tags"],
    correctAnswer: 0,
    explanation: "Template literals use backticks (`` ` ``) and `${expr}` string interpolation."
  },
  {
    id: 18,
    topic: "Arrays & Objects",
    difficulty: "Easy",
    question: "What built-in JSON method converts a JavaScript object into a JSON formatted string?",
    options: ["JSON.stringify()", "JSON.parse()", "JSON.encode()", "JSON.toString()"],
    correctAnswer: 0,
    explanation: "`JSON.stringify(obj)` serializes a JS object/array into a JSON string."
  },
  {
    id: 19,
    topic: "Arrays & Objects",
    difficulty: "Easy",
    question: "What built-in JSON method converts a JSON string into a JavaScript object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.decode()", "JSON.toObject()"],
    correctAnswer: 0,
    explanation: "`JSON.parse(string)` parses JSON text into JS objects/arrays."
  },
  {
    id: 20,
    topic: "Functions & Closures",
    difficulty: "Easy",
    question: "What is the return value of a function that has no explicit `return` statement in JavaScript?",
    options: ["null", "undefined", "0", "false"],
    correctAnswer: 1,
    explanation: "Functions without an explicit return statement implicitly evaluate to `undefined`."
  },

  // MEDIUM (20)
  {
    id: 21,
    topic: "Functions & Closures",
    difficulty: "Medium",
    question: "What is a Closure in JavaScript?",
    options: [
      "A function combined with references to its surrounding lexical environment, allowing inner functions to access outer variables even after the outer function returned",
      "Closing an event listener",
      "A function marked private",
      "Terminating an execution context"
    ],
    correctAnswer: 0,
    explanation: "Closures give inner functions access to an outer function's scope variables preserved in memory."
  },
  {
    id: 22,
    topic: "Asynchronous JavaScript",
    difficulty: "Medium",
    question: "What is the Event Loop in JavaScript runtime environments?",
    options: [
      "A single-threaded loop that monitors the Call Stack and Callback/Microtask Queues, pushing queued tasks to the stack when empty",
      "A multi-threaded loop processing CPU instructions",
      "An array iteration loop",
      "A DOM animation loop"
    ],
    correctAnswer: 0,
    explanation: "The Event Loop continuously transfers callbacks from Microtask/Callback queues onto the Call Stack when empty."
  },
  {
    id: 23,
    topic: "Asynchronous JavaScript",
    difficulty: "Medium",
    question: "What is the priority difference between Microtask Queue (Promises, queueMicrotask) and Macrotask Queue (setTimeout, setInterval)?",
    options: [
      "Microtasks execute immediately after the current script completes and before any Macrotask is processed",
      "Macrotasks take precedence over Microtasks",
      "They execute simultaneously in parallel threads",
      "Macrotasks execute first"
    ],
    correctAnswer: 0,
    explanation: "The event loop flushes the entire Microtask queue completely before picking the next Macrotask."
  },
  {
    id: 24,
    topic: "Functions & Closures",
    difficulty: "Medium",
    question: "How does `this` keyword binding differ between standard functions and arrow functions?",
    options: [
      "Standard functions bind `this` dynamically based on how they are called; arrow functions capture `this` lexically from their enclosing scope",
      "Arrow functions bind `this` dynamically; standard functions bind lexically",
      "Arrow functions cannot access `this`",
      "They behave identically"
    ],
    correctAnswer: 0,
    explanation: "Arrow functions do not have their own `this` context; they inherit `this` lexically from the outer scope."
  },
  {
    id: 25,
    topic: "Variables & Scope",
    difficulty: "Medium",
    question: "What is the Temporal Dead Zone (TDZ) for `let` and `const` variables?",
    options: [
      "The period between scope entry and variable declaration where accessing the variable throws a ReferenceError",
      "Memory space allocated to garbage collection",
      "Unreachable code inside a loop",
      "The time taken to parse async functions"
    ],
    correctAnswer: 0,
    explanation: "`let` and `const` are hoisted but uninitialized. Accessing them before initialization in TDZ throws `ReferenceError`."
  },
  {
    id: 26,
    topic: "Arrays & Objects",
    difficulty: "Medium",
    question: "What does `Array.prototype.reduce()` do?",
    options: [
      "Executes a reducer callback on each element, accumulating results into a single output value",
      "Reduces array memory size",
      "Filters out negative numbers",
      "Splits an array in half"
    ],
    correctAnswer: 0,
    explanation: "`reduce((accumulator, current) => ..., initialVal)` aggregates array items into a single result value."
  },
  {
    id: 27,
    topic: "Functions & Closures",
    difficulty: "Medium",
    question: "What do `call()`, `apply()`, and `bind()` methods perform in JavaScript?",
    options: [
      "`call()` and `apply()` invoke functions with a specified `this` context (apply takes an array of args); `bind()` returns a new function with bound `this`",
      "`bind()` executes functions immediately; `call()` returns a new function",
      "They modify DOM elements",
      "They compress function source code"
    ],
    correctAnswer: 0,
    explanation: "`call(thisArg, arg1, arg2)` & `apply(thisArg, [args])` invoke immediately. `bind(thisArg)` returns a bound copy."
  },
  {
    id: 28,
    topic: "Arrays & Objects",
    difficulty: "Medium",
    question: "What is Prototypal Inheritance in JavaScript?",
    options: [
      "Objects inherit properties and methods directly from an underlying prototype object referenced via `__proto__` / `Object.getPrototypeOf()`",
      "Class inheritance compiled from Java",
      "Copying fields from one object to another",
      "Static inheritance"
    ],
    correctAnswer: 0,
    explanation: "JS objects link to prototype objects forming a prototype chain for property lookup."
  },
  {
    id: 29,
    topic: "Variables & Scope",
    difficulty: "Medium",
    question: "What is Optional Chaining operator (`?.`) in modern JavaScript?",
    options: [
      "Short-circuits returning `undefined` if an object reference in a chain is `null` or `undefined` (e.g. `user?.address?.city`)",
      "Ternary operator shorthand",
      "Bitwise OR operation",
      "Optional parameter syntax"
    ],
    correctAnswer: 0,
    explanation: "`a?.b` prevents TypeError exceptions when dereferencing nullish parent properties."
  },
  {
    id: 30,
    topic: "Variables & Scope",
    difficulty: "Medium",
    question: "What is the Nullish Coalescing operator (`??`) in JavaScript?",
    options: [
      "Returns the right-hand value only when left-hand operand is `null` or `undefined` (unlike `||` which checks all falsy values like `0` or `\"\"`)",
      "Checks if two values are equal",
      "Converts values to booleans",
      "Concatenates null strings"
    ],
    correctAnswer: 0,
    explanation: "`??` evaluates default fallback only if left operand is strictly `null` or `undefined`."
  },
  {
    id: 31,
    topic: "DOM & Events",
    difficulty: "Medium",
    question: "What is Event Delegation in browser DOM scripting?",
    options: [
      "Attaching a single event listener to a parent container to manage events triggered on child elements via event bubbling",
      "Passing events to web workers",
      "Disabling default browser actions",
      "Executing events asynchronously"
    ],
    correctAnswer: 0,
    explanation: "Event delegation leverages bubbling by placing one event handler on a parent node to catch events on current/future child nodes."
  },
  {
    id: 32,
    topic: "DOM & Events",
    difficulty: "Medium",
    question: "What is the difference between Event Bubbling and Event Capturing?",
    options: [
      "Capturing propagates down from document root to target element; Bubbling propagates up from target element back to document root",
      "Bubbling propagates down; Capturing propagates up",
      "Capturing is for mouse events only; Bubbling for keyboard",
      "There is no difference"
    ],
    correctAnswer: 0,
    explanation: "DOM Event Flow runs Capturing phase (top-down), Target phase, then Bubbling phase (bottom-up)."
  },
  {
    id: 33,
    topic: "Asynchronous JavaScript",
    difficulty: "Medium",
    question: "What is the result of `Promise.all([p1, p2, p3])` when one promise rejects?",
    options: [
      "The entire returned promise immediately rejects with the reason of the first rejected promise",
      "It resolves with remaining successful promises",
      "It ignores the error and returns null",
      "It retries the failed promise"
    ],
    correctAnswer: 0,
    explanation: "`Promise.all()` is all-or-nothing: if any promise rejects, the entire returned promise rejects immediately."
  },
  {
    id: 34,
    topic: "Asynchronous JavaScript",
    difficulty: "Medium",
    question: "How does `Promise.allSettled()` differ from `Promise.all()`?",
    options: [
      "`Promise.allSettled()` waits for all input promises to either resolve or reject, returning an array of status objects for each",
      "`Promise.allSettled()` rejects faster",
      "`Promise.allSettled()` ignores resolved promises",
      "They behave identically"
    ],
    correctAnswer: 0,
    explanation: "`Promise.allSettled()` never short-circuit rejects; it returns individual status descriptors (`{status: 'fulfilled'|'rejected', ...}`)."
  },
  {
    id: 35,
    topic: "Arrays & Objects",
    difficulty: "Medium",
    question: "What is a `Set` vs `Map` in ES6?",
    options: [
      "`Set` stores unique values; `Map` stores key-value pairs where keys can be of any data type (including objects)",
      "`Set` allows duplicate keys; `Map` does not",
      "`Map` keys can only be strings; `Set` stores numbers",
      "They are identical"
    ],
    correctAnswer: 0,
    explanation: "ES6 `Map` holds key-value pairs with arbitrary key types. `Set` holds unique values."
  },
  {
    id: 36,
    topic: "Arrays & Objects",
    difficulty: "Medium",
    question: "What does `Object.freeze()` do to a JavaScript object?",
    options: [
      "Prevents adding, deleting, or modifying existing properties of the object (shallow freeze)",
      "Makes the object invisible in loops",
      "Converts the object to JSON",
      "Deletes the object from heap memory"
    ],
    correctAnswer: 0,
    explanation: "`Object.freeze(obj)` creates a shallowly immutable object; existing properties cannot be reassigned."
  },
  {
    id: 37,
    topic: "Functions & Closures",
    difficulty: "Medium",
    question: "What is Function Currying in JavaScript?",
    options: [
      "Transforming a function with multiple arguments into a sequence of nested functions each taking a single argument",
      "Binding a function to a class",
      "Executing a function inside a try-catch block",
      "Inlining function code"
    ],
    correctAnswer: 0,
    explanation: "Currying translates `f(a, b, c)` into `f(a)(b)(c)` using nested closure functions."
  },
  {
    id: 38,
    topic: "Arrays & Objects",
    difficulty: "Medium",
    question: "What is the difference between `Object.keys()`, `Object.values()`, and `Object.entries()`?",
    options: [
      "`keys()` returns array of keys; `values()` array of values; `entries()` array of `[key, value]` pairs",
      "`entries()` returns a string",
      "`values()` returns a Set",
      "They are aliases"
    ],
    correctAnswer: 0,
    explanation: "`Object.entries(obj)` returns `[[key1, val1], [key2, val2]]` pairs."
  },
  {
    id: 39,
    topic: "Variables & Scope",
    difficulty: "Medium",
    question: "What is strict mode (`\"use strict\";`) in JavaScript?",
    options: [
      "Opt-in mode enforcing stricter parsing/error handling (e.g. throwing errors for undeclared global variables)",
      "Compiles JS to WebAssembly",
      "Enforces static types",
      "Disables async functions"
    ],
    correctAnswer: 0,
    explanation: "`\"use strict\";` catches silent errors, eliminates bad features, and throws errors for unsafe syntax."
  },
  {
    id: 40,
    topic: "DOM & Events",
    difficulty: "Medium",
    question: "What is `e.stopPropagation()` in DOM event handling?",
    options: [
      "Prevents the event from bubbling further up the DOM tree to parent nodes",
      "Prevents the default browser link action",
      "Removes the event listener",
      "Deletes the DOM node"
    ],
    correctAnswer: 0,
    explanation: "`stopPropagation()` stops the event from propagating to parent container event handlers."
  },

  // MODERATE (10)
  {
    id: 41,
    topic: "Variables & Scope",
    difficulty: "Moderate",
    question: "What is a `WeakMap` in JavaScript?",
    options: [
      "A Map collection where keys MUST be objects and are held as weak references, allowing keys to be garbage collected if no other references exist",
      "A Map limited to 10 items",
      "A Map without get/set methods",
      "A Map stored in LocalStorage"
    ],
    correctAnswer: 0,
    explanation: "`WeakMap` keys are weakly held objects; unreferenced key objects can be garbage collected automatically."
  },
  {
    id: 42,
    topic: "Functions & Closures",
    difficulty: "Moderate",
    question: "What is the difference between Debouncing and Throttling in JavaScript event optimization?",
    options: [
      "Debouncing delays execution until a period of inactivity passes; Throttling limits execution to at most once per specified time interval",
      "Throttling delays execution until user stops typing; Debouncing executes periodically",
      "Debouncing is for mouse movements; Throttling for window scroll",
      "They are identical"
    ],
    correctAnswer: 0,
    explanation: "Debouncing waits for user pause before firing; Throttling enforces a maximum execution frequency rate limit."
  },
  {
    id: 43,
    topic: "Arrays & Objects",
    difficulty: "Moderate",
    question: "What is a `Symbol` in ES6?",
    options: [
      "A primitive data type guaranteed to be unique and immutable, often used as non-enumerable hidden object keys",
      "A string alias",
      "A graphics icon element",
      "A math operator"
    ],
    correctAnswer: 0,
    explanation: "`Symbol('desc')` creates a unique primitive value used for private/well-known object property keys."
  },
  {
    id: 44,
    topic: "Arrays & Objects",
    difficulty: "Moderate",
    question: "What is a `Proxy` object in JavaScript?",
    options: [
      "An object wrapping a target object to intercept and customize fundamental operations like property lookup (`get`), assignment (`set`), or function call",
      "A network HTTP proxy server library",
      "A database connection pool",
      "A DOM event delegate"
    ],
    correctAnswer: 0,
    explanation: "`new Proxy(target, handler)` wraps objects with trap handlers to intercept runtime object operations."
  },
  {
    id: 45,
    topic: "Asynchronous JavaScript",
    difficulty: "Moderate",
    question: "What is a Generator function (`function*`) in JavaScript?",
    options: [
      "A function that can be paused and resumed using the `yield` keyword, returning a Generator object conforming to Iterator protocols",
      "A function generating random numbers",
      "A function compiling DOM elements",
      "An async worker thread"
    ],
    correctAnswer: 0,
    explanation: "`function*` creates generator iterators that yield values lazily on `.next()` calls."
  },
  {
    id: 46,
    topic: "Variables & Scope",
    difficulty: "Moderate",
    question: "What is `Reflect` API in ES6?",
    options: [
      "A built-in object providing methods for inspectable, interceptable JavaScript operations (mirroring Proxy traps like `Reflect.get`)",
      "A UI reflection animation utility",
      "A JSON parser",
      "A DOM rendering engine"
    ],
    correctAnswer: 0,
    explanation: "`Reflect` exposes standardized static methods for object reflection and trap delegation."
  },
  {
    id: 47,
    topic: "Arrays & Objects",
    difficulty: "Moderate",
    question: "What is the difference between `Object.preventExtensions()`, `Object.seal()`, and `Object.freeze()`?",
    options: [
      "`preventExtensions` stops adding new props; `seal` also marks existing props non-configurable; `freeze` also marks existing props read-only",
      "`freeze` is the weakest restriction",
      "`seal` deletes all properties",
      "They are identical"
    ],
    correctAnswer: 0,
    explanation: "Level of restriction rises from `preventExtensions()` (no new keys) -> `seal()` (no new keys or deletes) -> `freeze()` (read-only state)."
  },
  {
    id: 48,
    topic: "Asynchronous JavaScript",
    difficulty: "Moderate",
    question: "What is `queueMicrotask()` in JavaScript?",
    options: [
      "Explicitly queues a microtask function to be executed before the current event loop iteration finishes and control returns to macrotasks",
      "Queues a task in Web Workers",
      "Delays execution by 1 second",
      "Schedules a thread execution"
    ],
    correctAnswer: 0,
    explanation: "`queueMicrotask(fn)` adds callback directly to the microtask queue."
  },
  {
    id: 49,
    topic: "Arrays & Objects",
    difficulty: "Moderate",
    question: "What is `structuredClone()` in modern JavaScript environments?",
    options: [
      "A built-in global function creating deep copies of JS values (including circular references, Dates, Sets, Maps, and ArrayBuffers)",
      "A JSON stringify replacement",
      "A DOM node cloner",
      "A class inheritance utility"
    ],
    correctAnswer: 0,
    explanation: "`structuredClone(obj)` provides native deep copying without JSON serialization limitations."
  },
  {
    id: 50,
    topic: "Variables & Scope",
    difficulty: "Moderate",
    question: "What are private class fields in modern JavaScript (`#privateField`)?",
    options: [
      "Class fields prefixed with `#` that are strictly enforced as private and inaccessible outside the declaring class body at runtime",
      "Fields marked with `private` keyword",
      "Fields starting with underscore `_`",
      "Symbol properties"
    ],
    correctAnswer: 0,
    explanation: "ES2022 `#fieldName` declares hard private instance fields enforced natively by JS engines."
  }
];
