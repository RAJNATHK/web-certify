/**
 * CertifyCode Academy - Professional Course Certification Tracks Catalog
 */

export const certifications = [
  {
    id: 'cpp-fundamentals',
    slug: 'cpp-programming-fundamentals',
    title: 'C++ Systems Programming & Memory Architecture',
    shortName: 'C++',
    codePrefix: 'CPP',
    badge: 'C++',
    status: 'active',
    difficulty: 'Intermediate',
    courseDuration: '2 Hours (Modules + Exam)',
    rating: 4.9,
    reviewsCount: '3,420 reviews',
    enrolledCount: '18,500+ Engineers Enrolled',
    certificateType: 'Verifiable Digital Credential',
    shortDescription: 'Master foundational C++ syntax, manual memory allocation, pointer arithmetic, object-oriented design patterns, and Standard Template Library fundamentals.',
    fullDescription: 'The C++ Systems Programming & Memory Architecture course certification evaluates software engineering fundamentals in modern C++. Through hands-on conceptual modules and a timed comprehensive examination, learners prove competence in low-level memory mechanics, RAII, class hierarchies, pointers, and STL data structures.',
    modules: [
      { id: 1, title: 'Module 1: Language Primitives & Control Structures', duration: '25 mins', desc: 'Type qualifiers, operator precedence, scope rules, and control flow branching.' },
      { id: 2, title: 'Module 2: Pointers, References & Memory Management', duration: '35 mins', desc: 'Address arithmetic, dynamic allocation (new/delete), RAII, smart pointers, and memory leak prevention.' },
      { id: 3, title: 'Module 3: Object-Oriented Architecture & Polymorphism', duration: '30 mins', desc: 'Encapsulation, inheritance hierarchies, virtual dispatch tables, and abstract base interfaces.' },
      { id: 4, title: 'Module 4: Standard Template Library (STL) Foundations', duration: '20 mins', desc: 'Sequence containers, associative maps, sets, iterators, and std::algorithm functions.' },
      { id: 5, title: 'Final Certification Examination', duration: '45 mins', desc: '50-question comprehensive evaluation testing technical mastery.' }
    ],
    topics: [
      { title: 'Variables & Scope', description: 'Primitive types, sizeof, type qualifiers, auto keyword, scope, and initialization.' },
      { title: 'Operators & Expressions', description: 'Arithmetic, logical, bitwise, relational, increment/decrement, and precedence rules.' },
      { title: 'Conditions & Control Flow', description: 'If-else branching, switch-case constructs, break, continue, and ternary conditionals.' },
      { title: 'Functions & Overloading', description: 'Pass-by-value, pass-by-reference, const parameters, default arguments, inline functions, and overloading.' },
      { title: 'Pointers & References', description: 'Address-of operator, dereferencing, nullptr, pointer arithmetic, references, and const correctness.' },
      { title: 'Classes & Objects', description: 'Encapsulation, public/private/protected access, constructors, destructors, this pointer, and friend functions.' },
      { title: 'Inheritance & Polymorphism', description: 'Base and derived classes, IS-A hierarchy, virtual functions, pure virtual methods, override specifier, and virtual destructors.' },
      { title: 'Memory Management & RAII', description: 'Dynamic allocation (new/delete), memory leak prevention, RAII idiom, and smart pointers (unique_ptr, shared_ptr).' },
      { title: 'STL Algorithms & Containers', description: 'std::vector, std::map, std::set, basic iterators, and <algorithm> functions.' }
    ],
    prerequisites: [
      'Basic familiarity with computer programming logic',
      'Understanding of basic software compilation concepts'
    ],
    audience: 'Software engineers, computer science students, backend developers, and systems programmers.'
  },
  {
    id: 'java-fundamentals',
    slug: 'java-programming-fundamentals',
    title: 'Java Enterprise Architecture & Core OOP',
    shortName: 'Java',
    codePrefix: 'JAVA',
    badge: 'Java',
    status: 'active',
    difficulty: 'Intermediate',
    courseDuration: '2 Hours (Modules + Exam)',
    rating: 4.8,
    reviewsCount: '2,910 reviews',
    enrolledCount: '15,200+ Engineers Enrolled',
    certificateType: 'Verifiable Digital Credential',
    shortDescription: 'Master JVM memory architecture, class inheritance, interfaces, exception handling mechanics, and Java Collections Framework.',
    fullDescription: 'Comprehensive software certification track covering core Java 17+, bytecode compilation, object-oriented design patterns, multi-threading basics, and standard collections framework.',
    modules: [
      { id: 1, title: 'Module 1: JVM Architecture & Syntax', duration: '30 mins', desc: 'Bytecode execution, JIT compilation, garbage collection, and primitive data types.' },
      { id: 2, title: 'Module 2: Object-Oriented Programming & Interfaces', duration: '35 mins', desc: 'Encapsulation, abstract classes, functional interfaces, and polymorphism.' },
      { id: 3, title: 'Module 3: Java Collections & Generics', duration: '30 mins', desc: 'ArrayList, LinkedList, HashSet, HashMap, and generic type bounds.' },
      { id: 4, title: 'Final Certification Examination', duration: '45 mins', desc: '50-question comprehensive evaluation testing technical mastery.' }
    ],
    topics: [
      { title: 'JVM Architecture & Syntax', description: 'JDK, JRE, JVM, compilation to bytecode, and primitive data types.' },
      { title: 'Object-Oriented Programming', description: 'Classes, encapsulation, inheritance, abstract classes, interfaces, and polymorphism.' },
      { title: 'Strings & Memory Management', description: 'String pool, StringBuilder, StringBuffer, and immutability.' },
      { title: 'Collections Framework', description: 'List, ArrayList, LinkedList, Set, HashSet, Map, and HashMap fundamentals.' },
      { title: 'Exception Handling', description: 'Try-catch-finally, checked vs unchecked exceptions, throw and throws keywords.' }
    ],
    prerequisites: ['Basic object-oriented programming logic'],
    audience: 'Backend Java developers, enterprise software engineers, and computer science graduates.'
  },
  {
    id: 'python-fundamentals',
    slug: 'python-programming-fundamentals',
    title: 'Python Software Engineering & Data Architecture',
    shortName: 'Python',
    codePrefix: 'PY',
    badge: 'Python',
    status: 'active',
    difficulty: 'Beginner - Intermediate',
    courseDuration: '2 Hours (Modules + Exam)',
    rating: 4.9,
    reviewsCount: '4,150 reviews',
    enrolledCount: '22,400+ Engineers Enrolled',
    certificateType: 'Verifiable Digital Credential',
    shortDescription: 'Validate your Python expertise in data structures, comprehensions, object-oriented design, modules, and file operations.',
    fullDescription: 'Evaluation of professional Python engineering practices including dynamic typing, built-in data structures, list comprehensions, decorators, generators, and object-oriented paradigms.',
    modules: [
      { id: 1, title: 'Module 1: Python Primitives & Structures', duration: '25 mins', desc: 'Dynamic typing, list/dict/set operations, and comprehensions.' },
      { id: 2, title: 'Module 2: Functional & OOP Paradigms', duration: '35 mins', desc: 'First-class functions, decorators, generators, classes, and dunder methods.' },
      { id: 3, title: 'Module 3: Modules & File I/O', duration: '25 mins', desc: 'Context managers, file handling, and standard library module organization.' },
      { id: 4, title: 'Final Certification Examination', duration: '45 mins', desc: '50-question comprehensive evaluation testing technical mastery.' }
    ],
    topics: [
      { title: 'Python Syntax & Types', description: 'Variables, dynamic typing, strings, type conversion, and operators.' },
      { title: 'Built-in Data Structures', description: 'Lists, tuples, dictionaries, sets, slicing, and comprehensions.' },
      { title: 'Functions & Lambdas', description: 'Scope, *args, **kwargs, lambda functions, and default parameters.' },
      { title: 'OOP in Python', description: 'Classes, __init__, self, inheritance, and magic methods.' },
      { title: 'File I/O & Exceptions', description: 'With statements, file handling, and try-except blocks.' }
    ],
    prerequisites: ['Basic programming logic'],
    audience: 'Python developers, data engineers, backend programmers, and automation specialists.'
  },
  {
    id: 'sql-fundamentals',
    slug: 'sql-fundamentals',
    title: 'Relational Database Engineering & Advanced SQL',
    shortName: 'SQL',
    codePrefix: 'SQL',
    badge: 'SQL',
    status: 'active',
    difficulty: 'Intermediate',
    courseDuration: '2 Hours (Modules + Exam)',
    rating: 4.9,
    reviewsCount: '3,100 reviews',
    enrolledCount: '16,800+ Engineers Enrolled',
    certificateType: 'Verifiable Digital Credential',
    shortDescription: 'Demonstrate relational database query optimization, complex JOIN operations, grouping aggregations, and subqueries.',
    fullDescription: 'Structured certification assessing ANSI SQL standards, relational database design, indexing strategies, inner/outer JOINs, window functions, and transaction isolation levels.',
    modules: [
      { id: 1, title: 'Module 1: Data Retrieval & Filtering', duration: '25 mins', desc: 'SELECT queries, WHERE predicates, logical operators, and ordering.' },
      { id: 2, title: 'Module 2: Relational JOINs & Aggregations', duration: '35 mins', desc: 'INNER, LEFT, RIGHT, FULL JOINs, GROUP BY, and HAVING clause logic.' },
      { id: 3, title: 'Module 3: Subqueries & DDL Schemas', duration: '25 mins', desc: 'Correlated subqueries, EXISTS vs IN, CREATE TABLE, and integrity constraints.' },
      { id: 4, title: 'Final Certification Examination', duration: '45 mins', desc: '50-question comprehensive evaluation testing technical mastery.' }
    ],
    topics: [
      { title: 'Basic Querying & Filtering', description: 'SELECT, DISTINCT, WHERE, LIKE, IN, BETWEEN, and ORDER BY.' },
      { title: 'Aggregations & Grouping', description: 'COUNT, SUM, AVG, MIN, MAX, GROUP BY, and HAVING clause.' },
      { title: 'Table JOINs', description: 'INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, and self-joins.' },
      { title: 'Subqueries & Nested Logic', description: 'Correlated subqueries, EXISTS, IN vs EXISTS.' },
      { title: 'Database Schema & Modification', description: 'CREATE TABLE, ALTER, INSERT, UPDATE, DELETE, and foreign keys.' }
    ],
    prerequisites: ['Basic understanding of database tables'],
    audience: 'Backend engineers, database administrators, data analysts, and full-stack developers.'
  },
  {
    id: 'javascript-fundamentals',
    slug: 'javascript-fundamentals',
    title: 'Modern JavaScript (ES6+) & Asynchronous Architecture',
    shortName: 'JavaScript',
    codePrefix: 'JS',
    badge: 'JS',
    status: 'active',
    difficulty: 'Intermediate',
    courseDuration: '2 Hours (Modules + Exam)',
    rating: 4.8,
    reviewsCount: '5,120 reviews',
    enrolledCount: '24,100+ Engineers Enrolled',
    certificateType: 'Verifiable Digital Credential',
    shortDescription: 'Prove mastery of modern ECMAScript standards, closures, event loops, promises, async/await, and DOM event delegation.',
    fullDescription: 'Comprehensive test covering modern JS semantics, lexical scoping, higher-order function patterns, asynchronous execution stacks, Promises, and browser runtime engines.',
    modules: [
      { id: 1, title: 'Module 1: ES6+ Scoping & Functions', duration: '25 mins', desc: 'Block scoping, arrow functions, destructuring, and rest/spread operators.' },
      { id: 2, title: 'Module 2: Asynchronous Execution & Event Loop', duration: '35 mins', desc: 'Call stack, microtask queue, Promises, and async/await mechanics.' },
      { id: 3, title: 'Module 3: Objects, Prototypes & DOM APIs', duration: '25 mins', desc: 'Prototypal inheritance, event delegation, and DOM manipulation.' },
      { id: 4, title: 'Final Certification Examination', duration: '45 mins', desc: '50-question comprehensive evaluation testing technical mastery.' }
    ],
    topics: [
      { title: 'Variables & Scope', description: 'var, let, const, hoisting, block scope, and lexical scoping.' },
      { title: 'Functions & Closures', description: 'Arrow functions, higher-order functions, closures, and call/apply/bind.' },
      { title: 'Arrays & Objects', description: 'Array methods (map, filter, reduce), destructuring, spread/rest, and JSON.' },
      { title: 'Asynchronous JavaScript', description: 'Event loop, callback queue, Promises, async/await, and Fetch API.' },
      { title: 'DOM & Events', description: 'Element selection, event delegation, bubbling, and DOM manipulation.' }
    ],
    prerequisites: ['Basic HTML and scripting logic'],
    audience: 'Frontend engineers, React developers, and full-stack software engineers.'
  },
  {
    id: 'html-css-fundamentals',
    slug: 'html-css-fundamentals',
    title: 'Modern Web Architecture: Semantic HTML5 & Responsive CSS',
    shortName: 'HTML & CSS',
    codePrefix: 'HTMLCSS',
    badge: 'HTML/CSS',
    status: 'active',
    difficulty: 'Beginner - Intermediate',
    courseDuration: '2 Hours (Modules + Exam)',
    rating: 4.8,
    reviewsCount: '2,650 reviews',
    enrolledCount: '12,900+ Engineers Enrolled',
    certificateType: 'Verifiable Digital Credential',
    shortDescription: 'Evaluate your knowledge of semantic HTML5 layout, CSS Flexbox, Grid systems, responsive media queries, and web accessibility.',
    fullDescription: 'Assessment covering modern web standards, semantic document trees, box model specifics, CSS layout engines (Flexbox & Grid), media queries, and WCAG accessibility guidelines.',
    modules: [
      { id: 1, title: 'Module 1: Semantic Markup & Accessibility', duration: '25 mins', desc: 'HTML5 semantic tags, form controls, ARIA landmark roles, and contrast.' },
      { id: 2, title: 'Module 2: CSS Box Model & Specificity', duration: '35 mins', desc: 'Cascade calculations, specificity hierarchy, and sizing models.' },
      { id: 3, title: 'Module 3: Flexbox, Grid & Responsive Layouts', duration: '25 mins', desc: 'Flex alignment, Grid templates, media queries, and fluid typography.' },
      { id: 4, title: 'Final Certification Examination', duration: '45 mins', desc: '50-question comprehensive evaluation testing technical mastery.' }
    ],
    topics: [
      { title: 'Semantic HTML5', description: 'Semantic tags, document structure, forms, inputs, and validation.' },
      { title: 'CSS Box Model & Specificity', description: 'Margin, padding, border, box-sizing, and selector specificity hierarchy.' },
      { title: 'Modern Layout Engines', description: 'Flexbox alignment, Grid template areas, gap, and alignment properties.' },
      { title: 'Responsive Design', description: 'Media queries, relative units (rem, em, vh, vw, %), and mobile-first principles.' },
      { title: 'Web Accessibility (a11y)', description: 'ARIA labels, keyboard navigation, color contrast, and alt attributes.' }
    ],
    prerequisites: ['Basic web page familiarity'],
    audience: 'UI developers, web designers, and frontend engineers.'
  }
];

export function getCertificationById(id) {
  return certifications.find(c => c.id === id || c.slug === id) || null;
}
