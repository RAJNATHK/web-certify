/**
 * CertifyCode Academy - Python Software Engineering Question Bank
 * Total Questions: 50
 */

export const pythonQuestions = [
  // EASY (20)
  {
    id: 1,
    topic: "Python Syntax & Types",
    difficulty: "Easy",
    question: "Which keyword is used to define a function in Python?",
    options: ["function", "def", "func", "define"],
    correctAnswer: 1,
    explanation: "In Python, the `def` keyword is used to declare user-defined functions."
  },
  {
    id: 2,
    topic: "Built-in Data Structures",
    difficulty: "Easy",
    question: "What is the primary difference between a Python `list` and a Python `tuple`?",
    options: [
      "Lists are mutable; tuples are immutable",
      "Tuples can only store numbers; lists store any data type",
      "Lists use parentheses `()`; tuples use brackets `[]`",
      "Lists are faster than tuples in loop iteration"
    ],
    correctAnswer: 0,
    explanation: "Lists (`[...]`) are mutable (can be modified after creation); tuples (`(...)`) are immutable sequences."
  },
  {
    id: 3,
    topic: "Python Syntax & Types",
    difficulty: "Easy",
    question: "What built-in function returns the number of items in a Python sequence or collection?",
    options: ["count()", "size()", "len()", "length()"],
    correctAnswer: 2,
    explanation: "The `len()` function returns the number of elements in strings, lists, tuples, dictionaries, and sets."
  },
  {
    id: 4,
    topic: "Built-in Data Structures",
    difficulty: "Easy",
    question: "What is a dictionary in Python?",
    options: [
      "An ordered sequence of character arrays",
      "An unordered or insertion-ordered key-value mapping structure enclosed in `{}`",
      "A linked list of tuple pairs",
      "A binary search tree implementation"
    ],
    correctAnswer: 1,
    explanation: "Dictionaries (`dict`) map unique keys to values using `{ key: value }` syntax."
  },
  {
    id: 5,
    topic: "Functions & Lambdas",
    difficulty: "Easy",
    question: "What is a `lambda` function in Python?",
    options: [
      "A small anonymous inline function defined with the `lambda` keyword",
      "A function that returns a generator object",
      "A function that executes in a separate CPU thread",
      "A mathematical function built into `<math>`"
    ],
    correctAnswer: 0,
    explanation: "Lambda functions are single-expression anonymous functions defined inline, e.g., `lambda x: x * 2`."
  },
  {
    id: 6,
    topic: "Python Syntax & Types",
    difficulty: "Easy",
    question: "What is the output of `type(3.14)` in Python 3?",
    options: ["<class 'int'>", "<class 'float'>", "<class 'double'>", "<class 'decimal'>"],
    correctAnswer: 1,
    explanation: "Floating-point numbers in Python belong to the `<class 'float'>` data type."
  },
  {
    id: 7,
    topic: "Built-in Data Structures",
    difficulty: "Easy",
    question: "What method adds an element to the end of a Python `list`?",
    options: ["append()", "push()", "insert_last()", "add()"],
    correctAnswer: 0,
    explanation: "`list.append(item)` adds a single item to the end of the list."
  },
  {
    id: 8,
    topic: "Built-in Data Structures",
    difficulty: "Easy",
    question: "What is a Python `set`?",
    options: [
      "An unordered collection of unique, hashable elements",
      "A list of key-value tuples",
      "An ordered sequence allowing duplicate elements",
      "A fixed-size array"
    ],
    correctAnswer: 0,
    explanation: "A `set` stores distinct (unique) elements and performs fast O(1) membership testing."
  },
  {
    id: 9,
    topic: "Python Syntax & Types",
    difficulty: "Easy",
    question: "Which operator is used for integer floor division in Python 3?",
    options: ["/", "//", "%", "^"],
    correctAnswer: 1,
    explanation: "The `//` operator performs floor division, rounding down the quotient to the nearest integer."
  },
  {
    id: 10,
    topic: "File I/O & Exceptions",
    difficulty: "Easy",
    question: "Which statement is recommended for opening files to ensure they are automatically closed after processing?",
    options: ["open()", "with open() as f:", "try open()", "file.lock()"],
    correctAnswer: 1,
    explanation: "The `with` statement creates a context manager that automatically closes the file when the block exits."
  },
  {
    id: 11,
    topic: "OOP in Python",
    difficulty: "Easy",
    question: "What is the explicit first parameter convention for instance methods in a Python class?",
    options: ["this", "self", "me", "instance"],
    correctAnswer: 1,
    explanation: "`self` represents the instance of the class and is explicitly passed as the first parameter to instance methods."
  },
  {
    id: 12,
    topic: "OOP in Python",
    difficulty: "Easy",
    question: "Which special initializer method acts as the constructor when creating a class instance in Python?",
    options: ["__init__", "__create__", "__construct__", "__new__"],
    correctAnswer: 0,
    explanation: "`__init__` is the instance initialization method automatically called when a new object is created."
  },
  {
    id: 13,
    topic: "Python Syntax & Types",
    difficulty: "Easy",
    question: "What is the boolean evaluation of an empty list `[]` in a Python `if` statement?",
    options: ["True", "False", "None", "Raises TypeError"],
    correctAnswer: 1,
    explanation: "Empty sequences (lists, strings, tuples, dicts) evaluate to `False` in boolean contexts in Python."
  },
  {
    id: 14,
    topic: "Functions & Lambdas",
    difficulty: "Easy",
    question: "What does `*args` in a Python function parameter list permit?",
    options: [
      "Passing a variable number of non-keyword positional arguments as a tuple",
      "Passing keyword arguments as a dictionary",
      "Enforcing strict type checking",
      "Multiplying parameters automatically"
    ],
    correctAnswer: 0,
    explanation: "`*args` collects arbitrary positional arguments into a tuple."
  },
  {
    id: 15,
    topic: "Functions & Lambdas",
    difficulty: "Easy",
    question: "What does `**kwargs` in a Python function parameter list permit?",
    options: [
      "Passing a variable number of keyword (named) arguments as a dictionary",
      "Passing positional arguments as a list",
      "Passing exponent values",
      "Preventing keyword arguments"
    ],
    correctAnswer: 0,
    explanation: "`**kwargs` collects arbitrary keyword arguments into a dictionary."
  },
  {
    id: 16,
    topic: "Built-in Data Structures",
    difficulty: "Easy",
    question: "What does the expression `'hello'[::-1]` return in Python?",
    options: ["'hello'", "'olleh'", "'h'", "SyntaxError"],
    correctAnswer: 1,
    explanation: "Slice syntax `[start:stop:step]` with a step of `-1` reverses string or list sequences."
  },
  {
    id: 17,
    topic: "File I/O & Exceptions",
    difficulty: "Easy",
    question: "Which block in Python error handling executes when NO exceptions were raised in the `try` block?",
    options: ["except", "finally", "else", "catch"],
    correctAnswer: 2,
    explanation: "The `else` block after `try-except` executes only if the `try` block completes without throwing any exception."
  },
  {
    id: 18,
    topic: "Python Syntax & Types",
    difficulty: "Easy",
    question: "What is `None` in Python?",
    options: [
      "A built-in constant representing the absence of a value or null state",
      "An alias for integer 0",
      "An undefined variable exception",
      "An empty string"
    ],
    correctAnswer: 0,
    explanation: "`None` is the single instance of `NoneType` representing the absence of a value."
  },
  {
    id: 19,
    topic: "Built-in Data Structures",
    difficulty: "Easy",
    question: "What is List Comprehension in Python?",
    options: [
      "A concise syntax to construct lists from existing iterables `[expression for item in iterable if condition]`",
      "A method to compress lists in memory",
      "A type checking tool for arrays",
      "A sorting algorithm"
    ],
    correctAnswer: 0,
    explanation: "List comprehension offers a compact, readable syntax for transforming iterables into new lists."
  },
  {
    id: 20,
    topic: "Python Syntax & Types",
    difficulty: "Easy",
    question: "Which keyword is used to import external modules in Python?",
    options: ["include", "require", "import", "using"],
    correctAnswer: 2,
    explanation: "The `import` statement loads external packages or modules into the current namespace."
  },

  // MEDIUM (20)
  {
    id: 21,
    topic: "Python Syntax & Types",
    difficulty: "Medium",
    question: "What is the Global Interpreter Lock (GIL) in CPython?",
    options: [
      "A mutex mechanism that prevents multiple native threads from executing Python bytecodes simultaneously in a single process",
      "A security lock on global variables",
      "A database isolation lock",
      "A memory allocator lock"
    ],
    correctAnswer: 0,
    explanation: "The GIL in CPython ensures only one thread executes Python bytecode at a time, limiting multi-threaded CPU-bound parallelism."
  },
  {
    id: 22,
    topic: "OOP in Python",
    difficulty: "Medium",
    question: "What is the difference between `@classmethod` and `@staticmethod` in Python?",
    options: [
      "`@classmethod` receives the class (`cls`) as its first argument; `@staticmethod` receives no implicit first argument",
      "`@staticmethod` receives instance `self`; `@classmethod` receives nothing",
      "`@classmethod` cannot access class state; `@staticmethod` can",
      "They are identical"
    ],
    correctAnswer: 0,
    explanation: "`@classmethod` takes `cls` as the first argument to access class variables; `@staticmethod` acts as a regular function bound inside a class namespace."
  },
  {
    id: 23,
    topic: "Functions & Lambdas",
    difficulty: "Medium",
    question: "What is a generator function in Python?",
    options: [
      "A function that returns an iterator using the `yield` keyword instead of `return`",
      "A function that generates random numbers",
      "A function that compiles C extensions",
      "A function without parameters"
    ],
    correctAnswer: 0,
    explanation: "Generators use `yield` to return values lazily one at a time, preserving local execution state between calls."
  },
  {
    id: 24,
    topic: "Built-in Data Structures",
    difficulty: "Medium",
    question: "What is the difference between `deepcopy()` and `copy()` in Python's `copy` module?",
    options: [
      "`copy()` creates a shallow copy sharing nested objects; `deepcopy()` recursively duplicates all nested objects",
      "`deepcopy()` copies strings only; `copy()` copies lists",
      "`copy()` is thread-safe; `deepcopy()` is not",
      "There is no difference"
    ],
    correctAnswer: 0,
    explanation: "Shallow `copy()` copies object references inside containers; `deepcopy()` recursively copies all nested object instances."
  },
  {
    id: 25,
    topic: "OOP in Python",
    difficulty: "Medium",
    question: "What is Method Resolution Order (MRO) in Python?",
    options: [
      "The order in which Python searches parent classes for a method in multiple inheritance, calculated using the C3 linearization algorithm",
      "The compilation order of modules",
      "The order of garbage collection",
      "The order function arguments are evaluated"
    ],
    correctAnswer: 0,
    explanation: "MRO (inspectable via `Class.mro()`) defines the exact linear class hierarchy order Python follows when calling overridden methods."
  },
  {
    id: 26,
    topic: "Functions & Lambdas",
    difficulty: "Medium",
    question: "What is a Decorator in Python?",
    options: [
      "A design pattern/function taking another function as argument and extending its behavior without explicitly modifying it `@decorator`",
      "A formatting string specifier",
      "A CSS parser module",
      "A class destructor"
    ],
    correctAnswer: 0,
    explanation: "Decorators wrap functions using `@decorator_func` syntax to execute code before or after the wrapped function."
  },
  {
    id: 27,
    topic: "Built-in Data Structures",
    difficulty: "Medium",
    question: "What is a dictionary comprehension in Python?",
    options: [
      "Syntax to construct dictionaries: `{key_expr: val_expr for item in iterable}`",
      "A method that converts dicts to lists",
      "A dictionary lookup function",
      "A dictionary sorting method"
    ],
    correctAnswer: 0,
    explanation: "Dict comprehension constructs dictionaries dynamically, e.g. `{x: x**2 for x in range(5)}`."
  },
  {
    id: 28,
    topic: "Python Syntax & Types",
    difficulty: "Medium",
    question: "What is the difference between `is` and `==` in Python?",
    options: [
      "`is` checks identity (same memory address); `==` checks value equality",
      "`==` checks memory addresses; `is` checks value equivalence",
      "`is` is used for numbers; `==` for strings",
      "They are identical"
    ],
    correctAnswer: 0,
    explanation: "`is` evaluates to True if `id(a) == id(b)` (same object in memory). `==` checks if values match."
  },
  {
    id: 29,
    topic: "OOP in Python",
    difficulty: "Medium",
    question: "What is the purpose of `__slots__` in a Python class?",
    options: [
      "It restricts allowed instance attributes to a predefined list, saving memory by suppressing `__dict__` creation per instance",
      "It defines public getter and setter methods",
      "It creates thread pools for class instances",
      "It prevents class inheritance"
    ],
    correctAnswer: 0,
    explanation: "Defining `__slots__ = ('name', 'age')` avoids per-instance `__dict__` overhead, significantly saving memory for large object quantities."
  },
  {
    id: 30,
    topic: "File I/O & Exceptions",
    difficulty: "Medium",
    question: "What is a Context Manager in Python?",
    options: [
      "An object defining `__enter__()` and `__exit__()` methods to manage resource setups and cleanups with `with` statements",
      "A thread context switcher",
      "A module context parser",
      "A memory stack manager"
    ],
    correctAnswer: 0,
    explanation: "Context managers handle resource initialization and teardown automatically via `with` blocks."
  },
  {
    id: 31,
    topic: "Python Syntax & Types",
    difficulty: "Medium",
    question: "What is duck typing in Python?",
    options: [
      "A dynamic typing philosophy: 'If it walks like a duck and quacks like a duck, it's a duck' (focusing on object methods rather than class inheritance)",
      "Converting strings to floats automatically",
      "Strict type checking at compile time",
      "A design pattern for database ORMs"
    ],
    correctAnswer: 0,
    explanation: "Duck typing checks whether an object implements required methods/attributes at runtime rather than requiring strict sub-classing."
  },
  {
    id: 32,
    topic: "Functions & Lambdas",
    difficulty: "Medium",
    question: "What does the `functools.wraps` decorator do when writing custom decorators?",
    options: [
      "It copies the original function's metadata (name, docstrings, annotations) to the wrapper function",
      "It makes the decorator execute in parallel threads",
      "It encrypts function parameters",
      "It caches return values automatically"
    ],
    correctAnswer: 0,
    explanation: "`@wraps(func)` preserves `__name__` and `__doc__` of decorated functions."
  },
  {
    id: 33,
    topic: "Built-in Data Structures",
    difficulty: "Medium",
    question: "What does `collections.defaultdict` do in Python?",
    options: [
      "A dictionary subclass that automatically initializes default values for missing keys using a factory function",
      "A dictionary that cannot be modified",
      "A dictionary sorted by values",
      "A dictionary stored on disk"
    ],
    correctAnswer: 0,
    explanation: "`defaultdict(list)` returns an empty list automatically if a accessed key does not exist yet."
  },
  {
    id: 34,
    topic: "OOP in Python",
    difficulty: "Medium",
    question: "What is the purpose of `@property` in Python?",
    options: [
      "It transforms a class method into a getter attribute, enabling access without parentheses `obj.attr`",
      "It makes a variable private",
      "It serializes class instances",
      "It locks variables in multi-threaded execution"
    ],
    correctAnswer: 0,
    explanation: "`@property` creates managed getters (and setters via `@prop.setter`) using natural attribute syntax."
  },
  {
    id: 35,
    topic: "Python Syntax & Types",
    difficulty: "Medium",
    question: "What is the purpose of `enumerate(iterable)` in Python?",
    options: [
      "It returns an iterator yielding tuple pairs containing counter index and value `(0, item)`",
      "It counts total occurrences of items in a list",
      "It sorts items numerically",
      "It converts strings to integers"
    ],
    correctAnswer: 0,
    explanation: "`for i, val in enumerate(items):` yields index-item pairs cleanly during iteration."
  },
  {
    id: 36,
    topic: "Python Syntax & Types",
    difficulty: "Medium",
    question: "What is the output of `list(zip([1, 2], ['a', 'b', 'c']))` in Python?",
    options: [
      "`[(1, 'a'), (2, 'b')]`",
      "`[(1, 'a'), (2, 'b'), (None, 'c')]`",
      "Raises ValueError",
      "`[1, 2, 'a', 'b', 'c']`"
    ],
    correctAnswer: 0,
    explanation: "`zip()` stops at the shortest input iterable length, yielding `[(1, 'a'), (2, 'b')]`."
  },
  {
    id: 37,
    topic: "Functions & Lambdas",
    difficulty: "Medium",
    question: "What is the difference between `map(func, iterable)` and list comprehension?",
    options: [
      "`map()` returns a lazy iterator; list comprehension constructs an in-memory list immediately",
      "`map()` is only for strings; list comprehension for lists",
      "List comprehension is deprecated in Python 3",
      "There is no difference"
    ],
    correctAnswer: 0,
    explanation: "`map()` computes values lazily on iteration; list comprehension evaluates all elements immediately into a list."
  },
  {
    id: 38,
    topic: "OOP in Python",
    difficulty: "Medium",
    question: "What does `super().__init__()` do inside a subclass constructor?",
    options: [
      "Invokes the constructor method of the parent class according to MRO",
      "Creates a new instance of the superclass",
      "Deletes parent class attributes",
      "Re-initializes all local variables to None"
    ],
    correctAnswer: 0,
    explanation: "`super().__init__()` calls the parent class initialization method ensuring superclass state is properly set up."
  },
  {
    id: 39,
    topic: "File I/O & Exceptions",
    difficulty: "Medium",
    question: "How do custom exceptions inherit in Python?",
    options: [
      "By inheriting from the built-in `Exception` or `BaseException` class",
      "By placing `@exception` decorator above a function",
      "By calling `raise Exception()`",
      "By importing `<sys>`"
    ],
    correctAnswer: 0,
    explanation: "Custom user exceptions are created by defining classes that extend `Exception`: `class MyError(Exception): pass`."
  },
  {
    id: 40,
    topic: "Built-in Data Structures",
    difficulty: "Medium",
    question: "What is `collections.deque` in Python?",
    options: [
      "A double-ended queue providing fast O(1) appends and pops from both left and right ends",
      "A dictionary sorted by key hash",
      "A fixed-length array",
      "A thread-locking queue"
    ],
    correctAnswer: 0,
    explanation: "`deque` provides O(1) performance for `appendleft()` and `popleft()`, outperforming O(N) operations on standard lists."
  },

  // MODERATE (10)
  {
    id: 41,
    topic: "Python Syntax & Types",
    difficulty: "Moderate",
    question: "What is a Metaclass in Python?",
    options: [
      "The 'class of a class' that defines how classes themselves are constructed (inheriting from `type`)",
      "A parent class with abstract methods",
      "A class imported from C extensions",
      "A decorator applied to modules"
    ],
    correctAnswer: 0,
    explanation: "In Python, classes are instances of metaclasses (`type` is the default metaclass). Custom metaclasses intercept class creation."
  },
  {
    id: 42,
    topic: "OOP in Python",
    difficulty: "Moderate",
    question: "What is a Descriptor in Python?",
    options: [
      "An object attribute defining at least one of `__get__()`, `__set__()`, or `__delete__()` special methods to customize attribute access",
      "A docstring parser",
      "A function signature annotations object",
      "A file descriptor wrapper"
    ],
    correctAnswer: 0,
    explanation: "Descriptors power properties, bound methods, classmethods, and ORM fields by binding custom lookup logic to attributes."
  },
  {
    id: 43,
    topic: "Python Syntax & Types",
    difficulty: "Moderate",
    question: "What is the difference between `asyncio` coroutines (`async def`) and threads?",
    options: [
      "Coroutines use single-threaded cooperative multitasking; threads use OS preemptive scheduling",
      "Coroutines run on multiple CPU cores simultaneously without GIL restrictions",
      "Threads do not share memory space",
      "Coroutines are written in C"
    ],
    correctAnswer: 0,
    explanation: "`asyncio` runs single-threaded event-loop cooperative multitasking yielding execution at `await` keywords."
  },
  {
    id: 44,
    topic: "Functions & Lambdas",
    difficulty: "Moderate",
    question: "What is a Closure in Python?",
    options: [
      "A nested function that retains bindings to variables in its lexical enclosing scope even after the outer function finishes execution",
      "Closing a file handle",
      "Ending a generator loop",
      "Deleting a class instance"
    ],
    correctAnswer: 0,
    explanation: "Closures occur when inner functions reference non-local variables from an outer enclosing scope (`__closure__`)."
  },
  {
    id: 45,
    topic: "Python Syntax & Types",
    difficulty: "Moderate",
    question: "What is the output of `bool(type)` in Python?",
    options: ["True", "False", "TypeError", "None"],
    correctAnswer: 0,
    explanation: "In Python, `type` is a class object, and all non-null class objects evaluate to `True`."
  },
  {
    id: 46,
    topic: "Built-in Data Structures",
    difficulty: "Moderate",
    question: "What is `sys.getrefcount(obj)` in Python's CPython implementation?",
    options: [
      "Returns the reference count of an object (including the temporary reference created by getrefcount itself)",
      "Returns memory size in bytes",
      "Returns total garbage collection cycles",
      "Returns total class instances"
    ],
    correctAnswer: 0,
    explanation: "`getrefcount()` inspects CPython's reference counting GC tracker for an object instance."
  },
  {
    id: 47,
    topic: "OOP in Python",
    difficulty: "Moderate",
    question: "What does `__new__()` do vs `__init__()` in Python class instantiation?",
    options: [
      "`__new__()` actually allocates and creates the object instance; `__init__()` initializes the created instance",
      "`__init__()` allocates memory; `__new__()` handles garbage collection",
      "`__new__()` is only called for subclasses",
      "They are aliases"
    ],
    correctAnswer: 0,
    explanation: "`__new__(cls)` is a static method that returns a newly created raw instance; `__init__(self)` then initializes that instance."
  },
  {
    id: 48,
    topic: "Functions & Lambdas",
    difficulty: "Moderate",
    question: "What does `functools.lru_cache(maxsize=128)` do when decorating a function?",
    options: [
      "Wraps the function with a Least Recently Used memoization cache that saves return values for matching arguments",
      "Limits function execution time to 128 milliseconds",
      "Restricts arguments to 128 bytes",
      "Runs the function 128 times in parallel"
    ],
    correctAnswer: 0,
    explanation: "`@lru_cache` memoizes function call results, skipping re-computation for identical inputs."
  },
  {
    id: 49,
    topic: "Python Syntax & Types",
    difficulty: "Moderate",
    question: "What is the Walrus operator (`:=`) introduced in Python 3.8?",
    options: [
      "Assignment expressions operator that allows assigning values to variables inside expressions",
      "Bitwise XOR assignment",
      "Floor division assignment",
      "Async await operator"
    ],
    correctAnswer: 0,
    explanation: "The walrus operator `:=` evaluates and assigns values within expressions e.g. `if (n := len(a)) > 10:`."
  },
  {
    id: 50,
    topic: "Built-in Data Structures",
    difficulty: "Moderate",
    question: "What is the time complexity of `item in set_obj` vs `item in list_obj` in Python?",
    options: [
      "Set lookup is O(1) average time; list lookup is O(N) linear time",
      "Set lookup is O(N); list lookup is O(1)",
      "Both are O(log N)",
      "Both are O(1)"
    ],
    correctAnswer: 0,
    explanation: "Sets use hash tables for O(1) membership checks; lists require linear O(N) scanning."
  }
];
