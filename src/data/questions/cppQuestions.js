/**
 * CertifyCode - C++ Programming Fundamentals Question Bank
 * Total Questions: 50
 * Distribution: 20 Easy, 20 Medium, 10 Moderate
 * Passing Threshold: 35/50 (70%)
 */

export const cppQuestions = [
  // ==========================================
  // SECTION 1: EASY (20 QUESTIONS)
  // ==========================================
  {
    id: 1,
    topic: "Variables & Data Types",
    difficulty: "Easy",
    question: "Which header file in modern C++ is required to use input and output stream objects like std::cin and std::cout?",
    options: [
      "<stdio.h>",
      "<iostream>",
      "<conio.h>",
      "<stdlib.h>"
    ],
    correctAnswer: 1,
    explanation: "In C++, `<iostream>` provides standard input and output stream objects such as `std::cin`, `std::cout`, `std::cerr`, and `std::clog`."
  },
  {
    id: 2,
    topic: "Variables & Data Types",
    difficulty: "Easy",
    question: "What is the typical size of a standard `char` data type in C++ on most systems?",
    options: [
      "1 byte (8 bits)",
      "2 bytes (16 bits)",
      "4 bytes (32 bits)",
      "8 bytes (64 bits)"
    ],
    correctAnswer: 0,
    explanation: "According to the C++ standard, `sizeof(char)` is always guaranteed to be exactly 1 byte."
  },
  {
    id: 3,
    topic: "Operators",
    difficulty: "Easy",
    question: "What does the modulus operator (`%`) return in C++ when applied to integers?",
    options: [
      "The quotient of floating-point division",
      "The remainder after integer division",
      "The exponential power of the first operand",
      "The bitwise inversion of the number"
    ],
    correctAnswer: 1,
    explanation: "The `%` operator computes the remainder after dividing the numerator by the denominator (e.g., `7 % 3` evaluates to `1`)."
  },
  {
    id: 4,
    topic: "Conditions",
    difficulty: "Easy",
    question: "Which keyword is used to terminate a `case` block inside a `switch` statement to prevent fall-through?",
    options: [
      "exit",
      "return",
      "break",
      "continue"
    ],
    correctAnswer: 2,
    explanation: "The `break` statement terminates execution of the switch construct, preventing execution from falling through into subsequent case labels."
  },
  {
    id: 5,
    topic: "Loops",
    difficulty: "Easy",
    question: "Which loop construct guarantees that its body will execute at least once before the condition is evaluated?",
    options: [
      "for loop",
      "while loop",
      "do-while loop",
      "range-based for loop"
    ],
    correctAnswer: 2,
    explanation: "A `do-while` loop evaluates its condition at the bottom of the loop body, guaranteeing at least one execution."
  },
  {
    id: 6,
    topic: "Functions",
    difficulty: "Easy",
    question: "What return type should be specified for a C++ function that does not return any value to the caller?",
    options: [
      "int",
      "null",
      "void",
      "empty"
    ],
    correctAnswer: 2,
    explanation: "`void` specifies that a function completes its task without returning any value."
  },
  {
    id: 7,
    topic: "Arrays",
    difficulty: "Easy",
    question: "What is the index of the first element in a standard C++ array `int arr[10];`?",
    options: [
      "0",
      "1",
      "-1",
      "10"
    ],
    correctAnswer: 0,
    explanation: "C++ uses zero-based indexing, meaning the first element of an array is at index `0` and the last element of `arr[10]` is at index `9`."
  },
  {
    id: 8,
    topic: "Strings",
    difficulty: "Easy",
    question: "Which method of `std::string` returns the number of characters currently in the string?",
    options: [
      "count()",
      "length() or size()",
      "dimension()",
      "capacity_bytes()"
    ],
    correctAnswer: 1,
    explanation: "Both `length()` and `size()` are member functions of `std::string` that return the number of characters in the string."
  },
  {
    id: 9,
    topic: "Pointers & References",
    difficulty: "Easy",
    question: "Which operator is used to obtain the memory address of an existing variable in C++?",
    options: [
      "* (Dereference operator)",
      "& (Address-of operator)",
      "-> (Arrow operator)",
      ":: (Scope resolution operator)"
    ],
    correctAnswer: 1,
    explanation: "The ampersand `&` is the address-of operator; e.g., `&val` evaluates to the memory address where `val` is stored."
  },
  {
    id: 10,
    topic: "Pointers & References",
    difficulty: "Easy",
    question: "What does dereferencing a pointer using the `*` operator do?",
    options: [
      "Deletes the pointer variable from memory",
      "Accesses or modifies the value stored at the address pointed to",
      "Increments the pointer address to the next memory cell",
      "Converts the pointer to an integer"
    ],
    correctAnswer: 1,
    explanation: "Dereferencing `*ptr` accesses the object stored at the memory location pointed to by `ptr`."
  },
  {
    id: 11,
    topic: "Classes & Objects",
    difficulty: "Easy",
    question: "What is the default access specifier for members of a `class` in C++ if not explicitly stated?",
    options: [
      "public",
      "protected",
      "private",
      "internal"
    ],
    correctAnswer: 2,
    explanation: "In a C++ `class`, members are `private` by default. In a `struct`, members are `public` by default."
  },
  {
    id: 12,
    topic: "Classes & Objects",
    difficulty: "Easy",
    question: "What is a constructor in C++?",
    options: [
      "A special member function invoked automatically when an object of the class is instantiated",
      "A function that releases dynamic memory when an object goes out of scope",
      "A global function used to define namespaces",
      "A compiler directive that allocates heap memory"
    ],
    correctAnswer: 0,
    explanation: "A constructor shares the class name, has no return type, and is automatically invoked when an instance of the class is created."
  },
  {
    id: 13,
    topic: "Classes & Objects",
    difficulty: "Easy",
    question: "What symbol precedes the name of a destructor in C++?",
    options: [
      "! (Exclamation mark)",
      "# (Hash symbol)",
      "~ (Tilde)",
      "@ (At symbol)"
    ],
    correctAnswer: 2,
    explanation: "Destructors are named with a tilde `~` followed by the class name (e.g., `~MyClass()`)."
  },
  {
    id: 14,
    topic: "Variables & Data Types",
    difficulty: "Easy",
    question: "Which keyword in C++ declares a variable whose value cannot be modified after initialization?",
    options: [
      "static",
      "const",
      "volatile",
      "immutable"
    ],
    correctAnswer: 1,
    explanation: "The `const` qualifier makes a variable read-only after its initial assignment."
  },
  {
    id: 15,
    topic: "Operators",
    difficulty: "Easy",
    question: "What is the difference between `i++` (postfix) and `++i` (prefix)?",
    options: [
      "`i++` increments the value before expression evaluation; `++i` increments after",
      "`i++` uses the current value in the expression then increments; `++i` increments first and returns the new value",
      "`i++` adds 2; `++i` adds 1",
      "There is no functional difference in any context"
    ],
    correctAnswer: 1,
    explanation: "Prefix `++i` increments `i` immediately and evaluates to the updated value. Postfix `i++` evaluates to the original value, then increments `i`."
  },
  {
    id: 16,
    topic: "STL Basics",
    difficulty: "Easy",
    question: "Which STL container represents a dynamically resizable contiguous array in C++?",
    options: [
      "std::list",
      "std::vector",
      "std::set",
      "std::map"
    ],
    correctAnswer: 1,
    explanation: "`std::vector` is a sequence container that encapsulates dynamic arrays with automatic memory reallocation and contiguous storage."
  },
  {
    id: 17,
    topic: "Inheritance",
    difficulty: "Easy",
    question: "What is the relationship described by class inheritance in object-oriented programming?",
    options: [
      "HAS-A relationship",
      "IS-A relationship",
      "USES-A relationship",
      "OWNS-A relationship"
    ],
    correctAnswer: 1,
    explanation: "Inheritance represents an 'IS-A' relationship (e.g., a `Dog` IS-A `Animal`), whereas composition represents a 'HAS-A' relationship."
  },
  {
    id: 18,
    topic: "Functions",
    difficulty: "Easy",
    question: "What is function overloading in C++?",
    options: [
      "Having multiple functions with the same name but different parameter lists within the same scope",
      "Writing a function inside another function",
      "Calling a function recursively until stack overflow occurs",
      "Overriding a virtual function in a derived class"
    ],
    correctAnswer: 0,
    explanation: "Function overloading allows multiple functions to share the exact same name as long as their parameter signatures (types, count, or order) differ."
  },
  {
    id: 19,
    topic: "Variables & Data Types",
    difficulty: "Easy",
    question: "Which boolean literal in C++ represents logical truth?",
    options: [
      "1",
      "TRUE",
      "true",
      "yes"
    ],
    correctAnswer: 2,
    explanation: "In C++, `true` and `false` are lowercase built-in boolean literal keywords of type `bool`."
  },
  {
    id: 20,
    topic: "STL Basics",
    difficulty: "Easy",
    question: "Which method is used to insert a new element at the end of a `std::vector` in C++?",
    options: [
      "insert_end()",
      "push_back()",
      "append()",
      "add_last()"
    ],
    correctAnswer: 1,
    explanation: "`push_back()` appends a new element to the end of a `std::vector`, extending its size by one."
  },

  // ==========================================
  // SECTION 2: MEDIUM (20 QUESTIONS)
  // ==========================================
  {
    id: 21,
    topic: "Pointers & References",
    difficulty: "Medium",
    question: "What is a key difference between a C++ reference (`int& ref = x;`) and a C++ pointer (`int* ptr = &x;`)?",
    options: [
      "References can be reassigned to bind to another variable at any time",
      "References cannot be null and must be initialized upon declaration",
      "Pointers require less memory overhead than references",
      "References use arrow syntax `->` to access members"
    ],
    correctAnswer: 1,
    explanation: "A reference is an alias for an existing object; it cannot be null, must be initialized at creation, and cannot be rebound to refer to a different object."
  },
  {
    id: 22,
    topic: "Memory Management",
    difficulty: "Medium",
    question: "What operator must be used to deallocate dynamic memory allocated using `int* arr = new int[50];`?",
    options: [
      "delete arr;",
      "free(arr);",
      "delete[] arr;",
      "destroy arr;"
    ],
    correctAnswer: 2,
    explanation: "Memory allocated with the array form `new[]` must be deallocated using `delete[]` so that destructors for each element are properly invoked."
  },
  {
    id: 23,
    topic: "Polymorphism",
    difficulty: "Medium",
    question: "Which keyword enables runtime (dynamic) polymorphism for a member function in a base class?",
    options: [
      "override",
      "virtual",
      "dynamic",
      "polymorphic"
    ],
    correctAnswer: 1,
    explanation: "Marking a base class member function as `virtual` instructs the compiler to use dynamic dispatch (via the vtable) to resolve calls at runtime based on the actual object type."
  },
  {
    id: 24,
    topic: "Classes & Objects",
    difficulty: "Medium",
    question: "What is a pure virtual function in C++, and how is it declared?",
    options: [
      "A function that returns void: `virtual void display() {}`",
      "A virtual function with `= 0` in its declaration, making the containing class abstract: `virtual void draw() = 0;`",
      "A static function that cannot access member variables",
      "A friend function defined inside a header file"
    ],
    correctAnswer: 1,
    explanation: "A pure virtual function is declared with `= 0`. A class containing at least one pure virtual function is an abstract class and cannot be directly instantiated."
  },
  {
    id: 25,
    topic: "Inheritance",
    difficulty: "Medium",
    question: "If class `Derived` inherits publicly from `Base`, what happens to `protected` members of `Base` inside `Derived`?",
    options: [
      "They become `public` in `Derived`",
      "They become `private` in `Derived`",
      "They remain `protected` in `Derived` and are accessible to its member functions",
      "They are inaccessible in `Derived`"
    ],
    correctAnswer: 2,
    explanation: "Under public inheritance, `public` members remain `public`, `protected` members remain `protected`, and `private` members remain inaccessible."
  },
  {
    id: 26,
    topic: "Pointers & References",
    difficulty: "Medium",
    question: "What is a dangling pointer in C++?",
    options: [
      "A pointer that has been declared but never initialized",
      "A pointer pointing to a memory location that has already been deallocated/freed",
      "A pointer set explicitly to `nullptr`",
      "A pointer that points to another pointer"
    ],
    correctAnswer: 1,
    explanation: "A dangling pointer arises when an object is destroyed or deallocated without modifying the value of the pointer, leaving it pointing to invalid memory."
  },
  {
    id: 27,
    topic: "Functions",
    difficulty: "Medium",
    question: "What is the purpose of passing an object by `const` reference (e.g., `void process(const std::string& str);`)?",
    options: [
      "To allow the function to modify the caller's copy without returning it",
      "To avoid the performance overhead of copying large objects while guaranteeing the function will not modify the original data",
      "To make the function execute asynchronously",
      "To restrict the function to only accept literal values"
    ],
    correctAnswer: 1,
    explanation: "Passing by `const&` eliminates expensive object copying while preventing unintended mutations to the caller's argument."
  },
  {
    id: 28,
    topic: "Classes & Objects",
    difficulty: "Medium",
    question: "What is the `this` pointer in C++ member functions?",
    options: [
      "A global reference to the main application context",
      "An implicit pointer passed to all non-static member functions that points to the object on which the function was called",
      "A smart pointer that manages reference counting",
      "A pointer to the parent base class"
    ],
    correctAnswer: 1,
    explanation: "`this` is an implicit pointer available inside non-static member functions holding the memory address of the invoking instance (`*this`)."
  },
  {
    id: 29,
    topic: "STL Basics",
    difficulty: "Medium",
    question: "What is the average time complexity for searching an element in a balanced `std::set` or `std::map` (implemented as Red-Black Trees)?",
    options: [
      "O(1) constant time",
      "O(log N) logarithmic time",
      "O(N) linear time",
      "O(N log N)"
    ],
    correctAnswer: 1,
    explanation: "`std::set` and `std::map` are ordered associative containers typically backed by Red-Black self-balancing binary search trees, yielding `O(log N)` search, insertion, and deletion."
  },
  {
    id: 30,
    topic: "STL Basics",
    difficulty: "Medium",
    question: "Which header file is required to use generic algorithms like `std::sort`, `std::find`, and `std::reverse` in C++?",
    options: [
      "<numeric>",
      "<algorithm>",
      "<utility>",
      "<functional>"
    ],
    correctAnswer: 1,
    explanation: "The `<algorithm>` header defines a collection of functions specifically designed to operate on elements over a range of iterators."
  },
  {
    id: 31,
    topic: "Strings",
    difficulty: "Medium",
    question: "What is the difference between a C-style string (`char str[] = \"hello\";`) and `std::string`?",
    options: [
      "C-style strings are dynamically resizable objects; `std::string` is fixed-size",
      "`std::string` is a safe, dynamic object managing its own memory, whereas C-style strings are null-terminated (`\\0`) arrays of characters",
      "C-style strings require the `<string>` header; `std::string` does not",
      "There is no difference in memory handling"
    ],
    correctAnswer: 1,
    explanation: "C-style strings are null-terminated character arrays prone to buffer overflows. `std::string` is an RAII-compliant class that handles dynamic memory allocation automatically."
  },
  {
    id: 32,
    topic: "Classes & Objects",
    difficulty: "Medium",
    question: "What does the `friend` keyword do when applied to a non-member function inside a class declaration?",
    options: [
      "It allows the function to be inherited by all subclasses",
      "It grants that specific function access to the class's `private` and `protected` members",
      "It prevents the function from throwing exceptions",
      "It forces the function to be inlined by the compiler"
    ],
    correctAnswer: 1,
    explanation: "Declaring a function or another class as `friend` allows it direct access to private and protected members of the declaring class."
  },
  {
    id: 33,
    topic: "Operators",
    difficulty: "Medium",
    question: "Which of the following C++ operators CANNOT be overloaded?",
    options: [
      "Operator `+` and `*`",
      "Operator `[]` and `()`",
      "Scope resolution operator `::`, ternary operator `?:`, and member selector `.`",
      "Stream insertion `<<` and extraction `>>`"
    ],
    correctAnswer: 2,
    explanation: "In C++, operators that cannot be overloaded are `::` (scope resolution), `.` (member access), `.*` (pointer-to-member), `?:` (ternary conditional), and `sizeof`."
  },
  {
    id: 34,
    topic: "Variables & Data Types",
    difficulty: "Medium",
    question: "What does the `auto` keyword signify in C++11 and later when initializing a variable (e.g., `auto x = 42.5;`)?",
    options: [
      "The variable has automatic register storage",
      "The compiler automatically deduces the variable's type from its initialization expression",
      "The variable is converted to dynamic runtime type checking",
      "The variable can hold any data type that changes dynamically at runtime"
    ],
    correctAnswer: 1,
    explanation: "In modern C++, `auto` tells the compiler to deduce the variable's concrete type at compile-time from the initializer (here `double`)."
  },
  {
    id: 35,
    topic: "Control Flow",
    difficulty: "Medium",
    question: "What is the output of this loop?\n`for(int i = 0; i < 5; i++) { if(i == 2) continue; std::cout << i; }`",
    options: [
      "01234",
      "0134",
      "01",
      "234"
    ],
    correctAnswer: 1,
    explanation: "When `i == 2`, the `continue` statement skips the remainder of the current iteration, so `2` is not printed. Output is `0134`."
  },
  {
    id: 36,
    topic: "Classes & Objects",
    difficulty: "Medium",
    question: "What is a copy constructor in C++?",
    options: [
      "A constructor called to initialize an object using another existing object of the same class (e.g., `MyClass(const MyClass& other)`)",
      "A constructor that copies memory byte-for-byte using `memcpy`",
      "A static method that duplicates class definitions across threads",
      "A constructor that assigns default zero values to all fields"
    ],
    correctAnswer: 0,
    explanation: "A copy constructor initializes a new object by copying state from an existing object of the same class, with the signature `ClassName(const ClassName&)`."
  },
  {
    id: 37,
    topic: "STL Basics",
    difficulty: "Medium",
    question: "What is the difference between `std::vector::push_back` and `std::vector::emplace_back` in C++11?",
    options: [
      "`emplace_back` constructs the element directly in-place in the vector's memory, avoiding unnecessary copy/move operations",
      "`push_back` inserts elements at the front; `emplace_back` inserts at the back",
      "`emplace_back` is only available for primitive types like `int` and `char`",
      "`push_back` is faster than `emplace_back` in all scenarios"
    ],
    correctAnswer: 0,
    explanation: "`emplace_back` forwards its arguments directly to the constructor of the element type, creating the object directly in the allocated memory of the vector."
  },
  {
    id: 38,
    topic: "Pointers & References",
    difficulty: "Medium",
    question: "What is the `nullptr` keyword introduced in C++11?",
    options: [
      "A preprocessor macro that expands to integer `0`",
      "A strongly typed null pointer literal of type `std::nullptr_t` that avoids overload ambiguities with integer `0`",
      "A void pointer that points to the beginning of the stack",
      "A function that checks if a pointer is valid"
    ],
    correctAnswer: 1,
    explanation: "`nullptr` is a type-safe literal of type `std::nullptr_t`. Unlike `0` or `NULL`, it converts implicitly only to pointer types, preventing ambiguous function overload resolution."
  },
  {
    id: 39,
    topic: "Functions",
    difficulty: "Medium",
    question: "What is an `inline` function in C++?",
    options: [
      "A function that can only be called from inside its own file",
      "A suggestion to the compiler to substitute the function's body directly at the call site to eliminate call overhead",
      "A function executed in a background worker thread",
      "A function defined without any parameters"
    ],
    correctAnswer: 1,
    explanation: "The `inline` specifier suggests to the compiler to replace function calls with the actual machine code of the function to reduce execution overhead for small, frequently called routines."
  },
  {
    id: 40,
    topic: "Polymorphism",
    difficulty: "Medium",
    question: "Why should a base class intended for polymorphic inheritance almost always declare a `virtual` destructor?",
    options: [
      "To prevent derived classes from having destructors",
      "To ensure that the derived class's destructor is invoked when deleting an object through a base class pointer (`Base* p = new Derived(); delete p;`)",
      "To allocate the object in read-only memory",
      "Because the C++ compiler will generate a syntax error without it"
    ],
    correctAnswer: 1,
    explanation: "Without a virtual destructor, deleting a derived class instance through a base pointer causes undefined behavior, often leaking derived class resources."
  },

  // ==========================================
  // SECTION 3: MODERATE (10 QUESTIONS)
  // ==========================================
  {
    id: 41,
    topic: "Inheritance",
    difficulty: "Moderate",
    question: "What problem does virtual inheritance (`class B : virtual public A`) solve in C++?",
    options: [
      "The Deadlock problem in multi-threaded code",
      "The Diamond Problem in multiple inheritance, preventing multiple duplicate copies of the base class subobject",
      "Preventing stack overflow in recursive method calls",
      "Allowing private members of base classes to become public"
    ],
    correctAnswer: 1,
    explanation: "Virtual inheritance prevents the 'Diamond Problem' by ensuring only a single shared instance of the common ancestor base class exists in the most derived class."
  },
  {
    id: 42,
    topic: "Polymorphism",
    difficulty: "Moderate",
    question: "How does the C++ runtime typically implement dynamic dispatch for virtual functions?",
    options: [
      "By storing function string names in a global hash table",
      "Via a Virtual Method Table (vtable) per class and a virtual pointer (vptr) inside each object instance",
      "By recompiling the function code on every invocation",
      "Using CPU branch prediction hints generated at compile time"
    ],
    correctAnswer: 1,
    explanation: "Classes with virtual functions contain an implicit `vptr` pointing to a class-wide `vtable` (virtual method table) containing function pointers to the appropriate overrides."
  },
  {
    id: 43,
    topic: "Classes & Objects",
    difficulty: "Moderate",
    question: "What is the 'Rule of Three' (or 'Rule of Five' in modern C++)?",
    options: [
      "A class can have at most three constructors and five member functions",
      "If a class manages dynamic resources and defines a destructor, it should also explicitly define or delete the copy constructor and copy assignment operator (plus move constructor and move assignment in C++11)",
      "Inheritance trees should never exceed three levels of depth",
      "Functions should not take more than three value arguments or five reference arguments"
    ],
    correctAnswer: 1,
    explanation: "The Rule of Three/Five states that if a class requires a custom destructor to manage resources (e.g. heap pointers), it likely requires custom copy and move operations to avoid double-free errors or shallow copies."
  },
  {
    id: 44,
    topic: "Pointers & References",
    difficulty: "Moderate",
    question: "Which smart pointer in `<memory>` provides exclusive, non-transferable ownership (cannot be copied, only moved) of a dynamic object?",
    options: [
      "std::shared_ptr",
      "std::weak_ptr",
      "std::unique_ptr",
      "std::auto_ptr (deprecated)"
    ],
    correctAnswer: 2,
    explanation: "`std::unique_ptr` owns and manages another object through a pointer and disposes of that object when the `unique_ptr` goes out of scope. It cannot be copied, only moved."
  },
  {
    id: 45,
    topic: "Pointers & References",
    difficulty: "Moderate",
    question: "What does `std::weak_ptr` prevent when working with circular references in `std::shared_ptr` networks?",
    options: [
      "Stack overflow exceptions",
      "Memory leaks caused by cyclic reference counting where objects never reach a reference count of 0",
      "Segmentation faults during multithreaded writes",
      "Compilation warnings for unused variables"
    ],
    correctAnswer: 1,
    explanation: "`std::weak_ptr` provides a non-owning reference to an object managed by `std::shared_ptr`, breaking cyclic reference cycles that would otherwise prevent reference counts from hitting zero."
  },
  {
    id: 46,
    topic: "Polymorphism",
    difficulty: "Moderate",
    question: "What is the purpose of the `override` specifier in C++11 (e.g., `void sound() override;`)?",
    options: [
      "It forces the base class method to be deleted",
      "It instructs the compiler to check that the member function actually overrides a virtual function in a base class, catching signature mismatches at compile time",
      "It enables run-time reflection on the method",
      "It makes the method execute with higher OS priority"
    ],
    correctAnswer: 1,
    explanation: "The `override` keyword ensures that the function is a virtual function and is overriding a virtual function from the base class. If signatures don't match, the compiler emits an error."
  },
  {
    id: 47,
    topic: "STL Basics",
    difficulty: "Moderate",
    question: "What is iterator invalidation in C++ STL containers?",
    options: [
      "When an iterator variable goes out of lexical scope",
      "When container modifications (such as `vector::push_back` causing reallocation or `erase`) render existing iterators/pointers to its elements undefined or invalid",
      "When comparing iterators from two completely different container types",
      "When dereferencing an iterator pointing to the first element"
    ],
    correctAnswer: 1,
    explanation: "Operations that reallocate buffer memory or shift elements in a container can invalidate existing iterators pointing into that container, leading to undefined behavior if dereferenced."
  },
  {
    id: 48,
    topic: "Variables & Data Types",
    difficulty: "Moderate",
    question: "What is the difference between `const int* ptr` and `int* const ptr`?",
    options: [
      "`const int* ptr` is a pointer to constant data (value cannot change through ptr); `int* const ptr` is a constant pointer (the pointer address cannot change)",
      "`const int* ptr` is a constant pointer; `int* const ptr` is a pointer to constant data",
      "`const int* ptr` allocates memory in the code segment; `int* const ptr` in the data segment",
      "There is no semantic difference"
    ],
    correctAnswer: 0,
    explanation: "Read from right-to-left: `const int* p` is a pointer to `const int` (data is constant). `int* const p` is a `const` pointer to `int` (address held by pointer is immutable)."
  },
  {
    id: 49,
    topic: "Classes & Objects",
    difficulty: "Moderate",
    question: "Why is an explicit constructor (`explicit MyClass(int size);`) useful in C++?",
    options: [
      "It prevents the compiler from using that constructor for implicit type conversions and copy-initialization (e.g., preventing `MyClass obj = 10;`)",
      "It allows the constructor to be called without passing arguments",
      "It guarantees the constructor runs in constant time",
      "It exposes private fields to external callers"
    ],
    correctAnswer: 0,
    explanation: "The `explicit` specifier inhibits single-argument constructors from acting as implicit conversion operators, preventing accidental bugs."
  },
  {
    id: 50,
    topic: "Memory Management",
    difficulty: "Moderate",
    question: "What is RAII (Resource Acquisition Is Initialization) in C++?",
    options: [
      "A memory caching technique used by operating systems to preload headers",
      "A core C++ idiom where resource lifecycle (memory, file handles, mutex locks) is tied to object lifetime, automatically acquiring in constructor and releasing in destructor",
      "A compiler optimization pass that vectorizes for-loops",
      "A standard library namespace containing initialization routines"
    ],
    correctAnswer: 1,
    explanation: "RAII binds the life cycle of a resource to the lifetime of an object. When the object goes out of scope, its destructor automatically frees the resource, ensuring exception safety and preventing leaks."
  }
];
