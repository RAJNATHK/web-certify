/**
 * CertifyCode Academy - Java Enterprise Architecture Question Bank
 * Total Questions: 50
 */

export const javaQuestions = [
  // EASY (20)
  {
    id: 1,
    topic: "JVM Architecture & Syntax",
    difficulty: "Easy",
    question: "Which component of the Java platform executes bytecode instructions line by line or via JIT compilation?",
    options: ["JDK (Java Development Kit)", "JRE (Java Runtime Environment)", "JVM (Java Virtual Machine)", "JDB (Java Debugger)"],
    correctAnswer: 2,
    explanation: "The Java Virtual Machine (JVM) is the abstract computing machine that enables a computer to run a Java program by executing bytecode."
  },
  {
    id: 2,
    topic: "JVM Architecture & Syntax",
    difficulty: "Easy",
    question: "Which keyword is used to declare a constant variable in Java whose value cannot be modified after assignment?",
    options: ["const", "final", "static", "immutable"],
    correctAnswer: 1,
    explanation: "The `final` keyword in Java makes a variable constant, preventing re-assignment after initial value binding."
  },
  {
    id: 3,
    topic: "Object-Oriented Programming",
    difficulty: "Easy",
    question: "Which keyword is used by a Java class to inherit properties and methods from a superclass?",
    options: ["implements", "inherits", "extends", "super"],
    correctAnswer: 2,
    explanation: "In Java, single class inheritance is declared using the `extends` keyword."
  },
  {
    id: 4,
    topic: "Object-Oriented Programming",
    difficulty: "Easy",
    question: "Which keyword is used by a class to declare compliance with an `interface` in Java?",
    options: ["extends", "implements", "uses", "interface"],
    correctAnswer: 1,
    explanation: "The `implements` keyword is used by a class to fulfill the contract defined by a Java interface."
  },
  {
    id: 5,
    topic: "Strings & Memory",
    difficulty: "Easy",
    question: "Why are `java.lang.String` objects considered immutable in Java?",
    options: [
      "Once created, their character values cannot be altered in memory",
      "They can only be declared inside static methods",
      "They are stored in thread registers",
      "They cannot be passed as parameters to functions"
    ],
    correctAnswer: 0,
    explanation: "Java strings are immutable for security, thread safety, and string pooling efficiency; modifications produce a new string instance."
  },
  {
    id: 6,
    topic: "JVM Architecture & Syntax",
    difficulty: "Easy",
    question: "What is the size of a primitive `int` data type in Java across all platforms?",
    options: ["16 bits (2 bytes)", "32 bits (4 bytes)", "64 bits (8 bytes)", "Platform dependent"],
    correctAnswer: 1,
    explanation: "In Java, primitive data type sizes are strictly fixed by spec: `int` is always 32 bits (4 bytes) regardless of OS architecture."
  },
  {
    id: 7,
    topic: "Object-Oriented Programming",
    difficulty: "Easy",
    question: "Which entry-point signature is required for executable Java applications?",
    options: [
      "public static void main(String[] args)",
      "public void main(String[] args)",
      "static int main(String args)",
      "public main(String[] args)"
    ],
    correctAnswer: 0,
    explanation: "`public static void main(String[] args)` is the standard entry point required by the JVM runtime."
  },
  {
    id: 8,
    topic: "Collections Framework",
    difficulty: "Easy",
    question: "Which interface in the Java Collections Framework represents an ordered collection that allows duplicate elements?",
    options: ["java.util.Set", "java.util.List", "java.util.Map", "java.util.Queue"],
    correctAnswer: 1,
    explanation: "`java.util.List` maintains an ordered sequence of elements and permits duplicate entries."
  },
  {
    id: 9,
    topic: "Collections Framework",
    difficulty: "Easy",
    question: "Which collection implementation does NOT permit duplicate elements in Java?",
    options: ["ArrayList", "LinkedList", "HashSet", "Vector"],
    correctAnswer: 2,
    explanation: "`HashSet` implements the `Set` interface, which guarantees element uniqueness by backing entries with a HashMap."
  },
  {
    id: 10,
    topic: "Exception Handling",
    difficulty: "Easy",
    question: "Which block in a Java `try-catch` construct is guaranteed to execute regardless of whether an exception occurred?",
    options: ["catch", "finally", "throw", "final"],
    correctAnswer: 1,
    explanation: "The `finally` block always executes after `try-catch` blocks complete, making it ideal for resource cleanup."
  },
  {
    id: 11,
    topic: "Object-Oriented Programming",
    difficulty: "Easy",
    question: "What is the superclass of all classes in Java?",
    options: ["java.lang.Class", "java.lang.Object", "java.lang.System", "java.lang.Base"],
    correctAnswer: 1,
    explanation: "`java.lang.Object` is the root of the Java class hierarchy; every class implicitly extends `Object`."
  },
  {
    id: 12,
    topic: "JVM Architecture & Syntax",
    difficulty: "Easy",
    question: "Which keyword is used to access members or constructors of a superclass from a subclass in Java?",
    options: ["this", "super", "parent", "base"],
    correctAnswer: 1,
    explanation: "`super` refers to the immediate parent class instance, allowing invocation of superclass methods or constructors."
  },
  {
    id: 13,
    topic: "Strings & Memory",
    difficulty: "Easy",
    question: "Which class should be used for efficient mutable string manipulation in single-threaded Java code?",
    options: ["String", "StringBuilder", "StringBuffer", "StringArray"],
    correctAnswer: 1,
    explanation: "`StringBuilder` provides a mutable sequence of characters without thread synchronization overhead, offering better performance than `StringBuffer`."
  },
  {
    id: 14,
    topic: "Exception Handling",
    difficulty: "Easy",
    question: "What is the difference between `throw` and `throws` in Java?",
    options: [
      "`throw` explicitly raises an exception object; `throws` declares potential exceptions in a method signature",
      "`throws` raises exceptions; `throw` handles catch blocks",
      "`throw` is for unchecked exceptions only; `throws` is for checked exceptions",
      "They are syntactically interchangeable"
    ],
    correctAnswer: 0,
    explanation: "`throw` throws an actual exception instance (e.g. `throw new Exception()`); `throws` specifies exceptions a method might propagate."
  },
  {
    id: 15,
    topic: "Object-Oriented Programming",
    difficulty: "Easy",
    question: "What is Method Overloading in Java?",
    options: [
      "Defining multiple methods in the same class with the same name but different parameters",
      "Redefining a superclass method in a subclass with identical signature",
      "Deleting a method at runtime",
      "Calling a method inside a static block"
    ],
    correctAnswer: 0,
    explanation: "Method overloading occurs when multiple methods in the same class share a name but differ in parameter count or types."
  },
  {
    id: 16,
    topic: "Object-Oriented Programming",
    difficulty: "Easy",
    question: "What is Method Overriding in Java?",
    options: [
      "Creating multiple methods with different parameter counts in one class",
      "A subclass providing a specific implementation of a method already declared in its superclass with the exact same signature",
      "Passing arguments by reference",
      "Invoking private methods externally"
    ],
    correctAnswer: 1,
    explanation: "Method overriding lets a subclass provide a concrete implementation of a method defined in its superclass using the `@Override` annotation."
  },
  {
    id: 17,
    topic: "Collections Framework",
    difficulty: "Easy",
    question: "Which Java Map method retrieves a value associated with a given key?",
    options: ["fetch(key)", "get(key)", "find(key)", "lookup(key)"],
    correctAnswer: 1,
    explanation: "`map.get(key)` returns the value to which the specified key is mapped, or `null` if no entry exists."
  },
  {
    id: 18,
    topic: "JVM Architecture & Syntax",
    difficulty: "Easy",
    question: "What does Garbage Collection do in Java?",
    options: [
      "Automatically frees memory occupied by objects that are no longer reachable",
      "Deletes uncompiled `.java` source files",
      "Clears local stack frames on method return",
      "Terminates unresponsive threads"
    ],
    correctAnswer: 0,
    explanation: "Java's automatic Garbage Collector reclaims heap memory by destroying unreferenced objects."
  },
  {
    id: 19,
    topic: "JVM Architecture & Syntax",
    difficulty: "Easy",
    question: "What is the default value of an uninitialized primitive `boolean` class field in Java?",
    options: ["true", "false", "0", "null"],
    correctAnswer: 1,
    explanation: "Uninitialized primitive `boolean` instance and static variables default to `false`."
  },
  {
    id: 20,
    topic: "Object-Oriented Programming",
    difficulty: "Easy",
    question: "Can an `abstract class` in Java be directly instantiated using `new AbstractClass()`?",
    options: [
      "No, abstract classes cannot be instantiated directly",
      "Yes, if it has a public constructor",
      "Yes, if it contains no methods",
      "Only inside static blocks"
    ],
    correctAnswer: 0,
    explanation: "Abstract classes serve as base templates and cannot be instantiated with `new`; only non-abstract subclasses can be instantiated."
  },

  // MEDIUM (20)
  {
    id: 21,
    topic: "JVM Architecture & Syntax",
    difficulty: "Medium",
    question: "What is the difference between Heap Memory and Stack Memory in Java?",
    options: [
      "Heap stores local primitive variables and method frames; Stack stores all objects",
      "Stack stores method call frames and local primitive references; Heap stores all instantiated objects and instances",
      "Heap memory is freed immediately upon method exit; Stack is managed by Garbage Collection",
      "Stack is shared across all threads; Heap is isolated per thread"
    ],
    correctAnswer: 1,
    explanation: "Stack memory holds thread execution frames and local variables; Heap memory stores all instantiated Java objects managed by Garbage Collection."
  },
  {
    id: 22,
    topic: "Collections Framework",
    difficulty: "Medium",
    question: "What is the main difference between `HashMap` and `Hashtable` in Java?",
    options: [
      "`HashMap` is unsynchronized and allows one null key; `Hashtable` is synchronized and disallows null keys/values",
      "`Hashtable` is faster and thread-unsafe; `HashMap` is thread-safe",
      "`HashMap` preserves insertion order; `Hashtable` sorts keys automatically",
      "There is no difference"
    ],
    correctAnswer: 0,
    explanation: "`HashMap` is non-synchronized (better performance) and allows one null key. `Hashtable` is legacy, synchronized, and throws NPE on null keys."
  },
  {
    id: 23,
    topic: "Object-Oriented Programming",
    difficulty: "Medium",
    question: "What is a default method in a Java 8+ interface?",
    options: [
      "A method declared with the `default` keyword that provides a default concrete implementation inside an interface",
      "A private helper method inside an abstract class",
      "A constructor defined inside an interface",
      "A method automatically called on startup"
    ],
    correctAnswer: 0,
    explanation: "Java 8 introduced `default` interface methods allowing interfaces to add new functional implementations without breaking backward compatibility for implementing classes."
  },
  {
    id: 24,
    topic: "Exception Handling",
    difficulty: "Medium",
    question: "What is the distinction between Checked and Unchecked exceptions in Java?",
    options: [
      "Checked exceptions extend `RuntimeException` and are checked at runtime",
      "Checked exceptions (extending `Exception`) must be handled or declared at compile time; Unchecked exceptions (extending `RuntimeException`) do not require compile-time handling",
      "Unchecked exceptions cause JVM crashes immediately",
      "Checked exceptions cannot be caught in try-catch blocks"
    ],
    correctAnswer: 1,
    explanation: "Checked exceptions (e.g. `IOException`) are verified at compile-time by javac. Unchecked exceptions (e.g. `NullPointerException`) extend `RuntimeException`."
  },
  {
    id: 25,
    topic: "Strings & Memory",
    difficulty: "Medium",
    question: "What does the String constant pool in Java accomplish?",
    options: [
      "It caches string literals in heap memory to optimize memory usage by re-using identical string instances",
      "It encrypts string values for database storage",
      "It converts strings into char arrays at compile time",
      "It automatically synchronizes string operations"
    ],
    correctAnswer: 0,
    explanation: "The String Pool is a special storage area in Java heap memory where string literals are reused, saving memory space."
  },
  {
    id: 26,
    topic: "Collections Framework",
    difficulty: "Medium",
    question: "What is the time complexity of element lookup by key in a well-balanced `HashMap`?",
    options: ["O(1) average time", "O(log N)", "O(N)", "O(N log N)"],
    correctAnswer: 0,
    explanation: "`HashMap` offers O(1) average time complexity for `get()` and `put()` operations via hash bucket indexing."
  },
  {
    id: 27,
    topic: "Object-Oriented Programming",
    difficulty: "Medium",
    question: "What is the purpose of the `volatile` keyword in Java concurrency?",
    options: [
      "It guarantees that modifications to a variable are immediately written to and read from main memory across threads, preventing thread caching",
      "It makes a method synchronized and thread-safe",
      "It prevents a field from being serialized",
      "It declares an immutable field"
    ],
    correctAnswer: 0,
    explanation: "`volatile` guarantees visibility of changes to variables across threads by bypassing CPU thread caches and reading directly from main RAM."
  },
  {
    id: 28,
    topic: "JVM Architecture & Syntax",
    difficulty: "Medium",
    question: "What is the purpose of the `transient` keyword in Java?",
    options: [
      "It marks a member field to be skipped during Object Serialization",
      "It marks a variable to be freed immediately after assignment",
      "It marks a method as thread-local",
      "It allows private variables to be edited externally"
    ],
    correctAnswer: 0,
    explanation: "Fields marked `transient` are ignored during serialization and will not have their state saved into a stream."
  },
  {
    id: 29,
    topic: "Object-Oriented Programming",
    difficulty: "Medium",
    question: "Can an interface in Java extend multiple other interfaces?",
    options: [
      "Yes, interfaces support multiple inheritance using `extends`",
      "No, interfaces can only extend one interface",
      "No, interfaces cannot use `extends`",
      "Only if they contain default methods"
    ],
    correctAnswer: 0,
    explanation: "Unlike classes, Java interfaces support multiple inheritance via `extends InterfaceA, InterfaceB`."
  },
  {
    id: 30,
    topic: "Collections Framework",
    difficulty: "Medium",
    question: "What happens when a hash collision occurs in a `HashMap` in Java 8+?",
    options: [
      "The new entry replaces the old entry",
      "Entries sharing a bucket are linked in a LinkedList, converting to a Balanced Red-Black Tree if bucket size exceeds 8",
      "An IndexOutOfBoundsException is thrown",
      "The capacity doubles immediately"
    ],
    correctAnswer: 1,
    explanation: "Java 8 optimizes `HashMap` bucket collisions by converting long linked lists to balanced Red-Black trees when bucket threshold passes 8 entries, maintaining O(log N) worst-case search."
  },
  {
    id: 31,
    topic: "Strings & Memory",
    difficulty: "Medium",
    question: "What is the result of `String s1 = \"hello\"; String s2 = \"hello\"; boolean b = (s1 == s2);`?",
    options: [
      "`true`, because both references point to the exact same object in the String Pool",
      "`false`, because `==` creates new instances",
      "Compilation error",
      "NullPointerException"
    ],
    correctAnswer: 0,
    explanation: "String literals are pooled. Both `s1` and `s2` reference the identical String Pool instance, so `==` reference comparison evaluates to `true`."
  },
  {
    id: 32,
    topic: "Exception Handling",
    difficulty: "Medium",
    question: "What is a try-with-resources statement in Java 7+?",
    options: [
      "A try statement that automatically closes resources implementing `AutoCloseable` at the end of the block",
      "A try statement that allocates extra heap memory",
      "A multi-threaded try block",
      "A try block without catch statements"
    ],
    correctAnswer: 0,
    explanation: "`try-with-resources` automatically invokes `close()` on any resource implementing `AutoCloseable` (e.g. Streams, Readers) upon exiting the try block."
  },
  {
    id: 33,
    topic: "JVM Architecture & Syntax",
    difficulty: "Medium",
    question: "What is the difference between `equals()` and `==` when comparing Java Objects?",
    options: [
      "`==` compares object memory references; `equals()` compares logical equivalence/state if overridden",
      "`==` compares values; `equals()` compares memory addresses",
      "`equals()` is only for primitives",
      "They behave identically for all custom classes"
    ],
    correctAnswer: 0,
    explanation: "`==` tests if two references point to the exact same memory address. `equals()` checks logical equivalence of object contents if overridden."
  },
  {
    id: 34,
    topic: "Object-Oriented Programming",
    difficulty: "Medium",
    question: "What is the purpose of the `@FunctionalInterface` annotation in Java?",
    options: [
      "It designates an interface with exactly one abstract method, enabling use in Lambda expressions",
      "It forces all methods in the interface to be static",
      "It converts the interface into an abstract class",
      "It prevents other interfaces from extending it"
    ],
    correctAnswer: 0,
    explanation: "`@FunctionalInterface` ensures the target interface contains exactly one single abstract method (SAM), qualifying it for lambda syntax."
  },
  {
    id: 35,
    topic: "Collections Framework",
    difficulty: "Medium",
    question: "Which Java collection preserves insertion order while offering unique elements?",
    options: ["HashSet", "TreeSet", "LinkedHashSet", "PriorityQueue"],
    correctAnswer: 2,
    explanation: "`LinkedHashSet` maintains a doubly-linked list running through all its entries, preserving insertion order while enforcing set uniqueness."
  },
  {
    id: 36,
    topic: "Object-Oriented Programming",
    difficulty: "Medium",
    question: "What is the effect of declaring a class as `final` in Java?",
    options: [
      "The class cannot be extended (subclassed)",
      "The class cannot instantiate objects",
      "All methods in the class become static automatically",
      "The class can only be accessed from the default package"
    ],
    correctAnswer: 0,
    explanation: "A `final` class cannot be inherited or subclassed (e.g. `java.lang.String` is a final class)."
  },
  {
    id: 37,
    topic: "JVM Architecture & Syntax",
    difficulty: "Medium",
    question: "What is autoboxing in Java?",
    options: [
      "Automatic conversion performed by the compiler between primitive types and their corresponding object wrapper classes (e.g. `int` to `Integer`)",
      "Converting Java bytecode into native machine code",
      "Packing multiple JAR files into one container",
      "Dynamic allocation of stack memory"
    ],
    correctAnswer: 0,
    explanation: "Autoboxing automatically converts primitive types to wrapper objects (e.g. `int` -> `Integer`), and unboxing converts back."
  },
  {
    id: 38,
    topic: "Collections Framework",
    difficulty: "Medium",
    question: "What is the main difference between `ArrayList` and `LinkedList` in Java?",
    options: [
      "`ArrayList` uses a dynamic array yielding O(1) random access; `LinkedList` uses a doubly-linked list yielding fast O(1) insertions/deletions at ends",
      "`LinkedList` is faster for index lookup than `ArrayList`",
      "`ArrayList` is thread-safe; `LinkedList` is not",
      "`LinkedList` does not allow duplicate elements"
    ],
    correctAnswer: 0,
    explanation: "`ArrayList` is backed by a contiguous array providing O(1) indexed access. `LinkedList` is a doubly-linked list optimal for frequent positional modifications."
  },
  {
    id: 39,
    topic: "Object-Oriented Programming",
    difficulty: "Medium",
    question: "Can a `static` method override a non-static method in Java?",
    options: [
      "No, static methods cannot override instance methods (causes compilation error)",
      "Yes, if the static method has identical return types",
      "Yes, using the `@Override` annotation",
      "Only in abstract classes"
    ],
    correctAnswer: 0,
    explanation: "Static methods belong to the class and are resolved at compile-time (method hiding), so they cannot override dynamic instance methods."
  },
  {
    id: 40,
    topic: "JVM Architecture & Syntax",
    difficulty: "Medium",
    question: "What is the contract between `hashCode()` and `equals()` in Java?",
    options: [
      "If two objects are equal according to `equals()`, they MUST return the same `hashCode()` value",
      "If two objects have the same `hashCode()`, they must be equal according to `equals()`",
      "hashCode() can never return negative numbers",
      "equals() must always compare memory addresses"
    ],
    correctAnswer: 0,
    explanation: "The Object contract mandates: if `a.equals(b)` is true, then `a.hashCode() == b.hashCode()` MUST also be true to avoid bugs in Hash collections."
  },

  // MODERATE (10)
  {
    id: 41,
    topic: "Collections Framework",
    difficulty: "Moderate",
    question: "What happens if a custom key class overrides `equals()` but NOT `hashCode()` and is used in a `HashMap`?",
    options: [
      "Compilation failure",
      "Equal keys may generate different hash codes and land in different buckets, making `map.get(key)` return `null`",
      "HashMap throws ConcurrentModificationException",
      "HashMap automatically generates hashes based on field values"
    ],
    correctAnswer: 1,
    explanation: "Without overriding `hashCode()`, two logically equal objects will hash to different buckets, failing HashMap lookup."
  },
  {
    id: 42,
    topic: "JVM Architecture & Syntax",
    difficulty: "Moderate",
    question: "What is the Java ClassLoader hierarchy delegating model?",
    options: [
      "A ClassLoader checks its parent loader before searching locally (Bootstrap -> Platform -> Application)",
      "ClassLoaders load classes concurrently from network streams",
      "Subclass loaders always override parent loaders",
      "ClassLoaders store compiled `.class` files in system temp"
    ],
    correctAnswer: 0,
    explanation: "Java ClassLoaders follow Parent Delegation: a loader delegates class loading requests to its parent loader first before searching its own path."
  },
  {
    id: 43,
    topic: "Object-Oriented Programming",
    difficulty: "Moderate",
    question: "What is the difference between `Comparable` and `Comparator` in Java?",
    options: [
      "`Comparable` defines natural ordering within the class itself (`compareTo`); `Comparator` defines external custom sort strategies (`compare`)",
      "`Comparator` is built-in; `Comparable` is in third-party libraries",
      "`Comparable` is for Strings only; `Comparator` is for numbers",
      "They are identical"
    ],
    correctAnswer: 0,
    explanation: "`Comparable` implements `compareTo(T o)` inside the target class. `Comparator` implements `compare(T o1, T o2)` as a separate comparison object."
  },
  {
    id: 44,
    topic: "JVM Architecture & Syntax",
    difficulty: "Moderate",
    question: "What is the purpose of the `java.lang.ref.WeakReference` class?",
    options: [
      "An object referenced ONLY by WeakReferences can be garbage-collected immediately during the next GC cycle",
      "It prevents objects from being garbage collected",
      "It creates temporary thread locks",
      "It creates deep copies of objects"
    ],
    correctAnswer: 0,
    explanation: "Unlike strong references, `WeakReference` does not prevent the GC from reclaiming the referent object, making it ideal for memory caches."
  },
  {
    id: 45,
    topic: "Object-Oriented Programming",
    difficulty: "Moderate",
    question: "What is Method Reference syntax in Java 8 (e.g. `System.out::println`)?",
    options: [
      "A compact lambda expression referencing an existing method by name",
      "A pointer to C++ native code",
      "A mechanism to invoke private methods via Reflection",
      "A static initialization block"
    ],
    correctAnswer: 0,
    explanation: "Method references (`Class::method`) provide shorthand, readable syntax for lambda expressions that simply call an existing method."
  },
  {
    id: 46,
    topic: "JVM Architecture & Syntax",
    difficulty: "Moderate",
    question: "What is JIT (Just-In-Time) compilation in the JVM?",
    options: [
      "It compiles frequently executed bytecode loops ('hotspots') into native machine instructions at runtime for near-native performance",
      "It compiles Java code before saving to disk",
      "It verifies class security signatures before execution",
      "It formats source code indentation automatically"
    ],
    correctAnswer: 0,
    explanation: "The JIT compiler analyzes running bytecode, identifies hotspots, and compiles them directly into architecture-native machine instructions."
  },
  {
    id: 47,
    topic: "Collections Framework",
    difficulty: "Moderate",
    question: "What is a `fail-fast` iterator in Java Collections?",
    options: [
      "An iterator that throws `ConcurrentModificationException` immediately if the collection is structurally modified during iteration",
      "An iterator that skips null values",
      "An iterator that processes elements in parallel",
      "An iterator that terminates after 100 milliseconds"
    ],
    correctAnswer: 0,
    explanation: "Fail-fast iterators (like those in `ArrayList` / `HashMap`) detect concurrent structural modifications via a modCount check and throw `ConcurrentModificationException`."
  },
  {
    id: 48,
    topic: "Object-Oriented Programming",
    difficulty: "Moderate",
    question: "What is Type Erasure in Java Generics?",
    options: [
      "The compiler removes all generic type parameter information during compilation, replacing them with bounds or `Object` for backward compatibility",
      "It deletes unreferenced objects from the heap",
      "It converts primitive types to objects dynamically",
      "It suppresses compiler warnings automatically"
    ],
    correctAnswer: 0,
    explanation: "Java generics use Type Erasure: type parameters (like `<T>`) are removed at compile-time, so generic bytecode can run on older JVM versions."
  },
  {
    id: 49,
    topic: "JVM Architecture & Syntax",
    difficulty: "Moderate",
    question: "What does `ThreadLocal` storage provide in multi-threaded Java applications?",
    options: [
      "Variables that are isolated and independently accessible per individual thread",
      "Global thread locks across all CPU cores",
      "Shared memory buffers between process instances",
      "Permanent cache memory in Metaspace"
    ],
    correctAnswer: 0,
    explanation: "`ThreadLocal` creates variables that can only be read and written by the specific thread accessing them, providing thread-isolated state."
  },
  {
    id: 50,
    topic: "JVM Architecture & Syntax",
    difficulty: "Moderate",
    question: "What is Metaspace in Java 8+ JVM memory management?",
    options: [
      "Native memory area used to store class metadata, replacing the legacy PermGen space",
      "Heap memory set aside for primitive arrays",
      "Stack area dedicated to thread registers",
      "CPU L1 cache allocation"
    ],
    correctAnswer: 0,
    explanation: "Java 8 replaced PermGen with Metaspace, which allocates class metadata in OS native memory, avoiding out-of-memory errors caused by fixed PermGen sizes."
  }
];
