/**
 * CertifyCode - Articles Database
 * Educational guides, tutorials, and interview preparation content.
 */

export const articles = [
  {
    id: 'how-to-get-free-cpp-certificate-online',
    slug: 'how-to-get-free-cpp-certificate-online',
    title: 'How to Get a Free C++ Certificate Online (2026 Step-by-Step Guide)',
    summary: 'A complete guide to evaluating your C++ skills through a structured 50-question online assessment and earning a free downloadable PDF certificate for your portfolio or resume.',
    category: 'Guides',
    readTime: '6 min read',
    publishedDate: 'January 2026',
    author: 'CertifyCode Academic Editorial',
    relatedCertId: 'cpp-fundamentals',
    tableOfContents: [
      { id: 'why-certify', title: '1. Why Take a C++ Skills Assessment?' },
      { id: 'assessment-structure', title: '2. Understanding the 50-Question Format' },
      { id: 'core-topics', title: '3. Essential Topics to Review Before Testing' },
      { id: 'passing-criteria', title: '4. Scoring & Passing Requirements (70%)' },
      { id: 'showcasing-certificate', title: '5. How to Showcase Your Certificate on LinkedIn & Resumes' },
      { id: 'transparency', title: '6. What This Certificate Represents (Honest Disclosure)' }
    ],
    content: `
## 1. Why Take a C++ Skills Assessment? {#why-certify}

C++ remains one of the most foundational, high-performance programming languages in the world. From systems engineering and operating system kernels to game engines, financial high-frequency trading platforms, and embedded microcontrollers, solid C++ knowledge is highly regarded by hiring managers.

While many online courses require expensive monthly subscriptions just to issue a completion badge, **CertifyCode** offers a 100% free, merit-based assessment model. You are evaluated strictly on your demonstration of knowledge through an objective 50-question assessment.

---

## 2. Understanding the 50-Question Format {#assessment-structure}

The assessment is designed to rigorously test both foundational syntax and conceptual depth:

* **50 Multiple-Choice Questions**: Each question offers four curated options with exactly one correct answer.
* **45-Minute Timer**: Gives you sufficient time (~54 seconds per question) to reason through code snippets and conceptual trade-offs.
* **Difficulty Curve**:
  * **20 Easy Questions**: Testing fundamental keywords, basic types, operator precedence, and basic syntax.
  * **20 Medium Questions**: Evaluating pointer manipulation, references, class design, and standard STL containers.
  * **10 Moderate Questions**: Covering advanced concepts like RAII, virtual inheritance, copy/move semantics, and vtables.

---

## 3. Essential Topics to Review Before Testing {#core-topics}

To maximize your chances of passing on your first attempt, ensure you are comfortable with:

1. **Pointers vs. References**: Understand address-of (\`&\`), dereferencing (\`*\`), pointer arithmetic, and \`nullptr\`.
2. **Object-Oriented Design**: Class member visibility (\`public\`, \`private\`, \`protected\`), constructors, copy constructors, and destructors.
3. **Polymorphism & Virtual Functions**: How runtime dispatch works, the necessity of virtual destructors, and the \`override\` specifier.
4. **Memory Management**: The difference between stack allocation and heap allocation (\`new\` / \`delete\` / \`delete[]\`), and why RAII eliminates memory leaks.
5. **Standard Template Library (STL)**: Key containers like \`std::vector\`, \`std::map\`, iterators, and \`<algorithm>\` functions.

---

## 4. Scoring & Passing Requirements (70%) {#passing-criteria}

* **Total Questions**: 50
* **Passing Score**: **35 / 50 (70%)**
* **Attempts**: Unlimited retakes are allowed if you do not meet the passing score on your first try.
* **Review Mode**: Following assessment submission, you can inspect full question-by-question explanations to solidify your understanding.

---

## 5. How to Showcase Your Certificate on LinkedIn & Resumes {#showcasing-certificate}

Once you achieve a score of 35 or higher, you can immediately download a clean, high-resolution **Landscape A4 PDF Certificate of Achievement** generated right in your browser.

### On Your Resume:
Under **Certifications & Assessments**:
> **C++ Programming Fundamentals Certificate of Achievement** — *CertifyCode (Score: 84% / Issue ID: CPP-XXXX-XXXX)*

### On LinkedIn:
Add it under the **Licenses & Certifications** section, listing *CertifyCode* as the Issuing Organization along with your unique Certificate ID.

---

## 6. What This Certificate Represents (Honest Disclosure) {#transparency}

At CertifyCode, we prioritize honesty and credibility. Certificates issued by our platform demonstrate that you have taken and successfully passed our comprehensive 50-question online technical assessment under timed conditions.

They are **not** university-accredited degrees, government credentials, or third-party vendor certifications. They serve as an authentic, verifiable proof of your foundational programming competence.
    `
  },
  {
    id: 'cpp-programming-fundamentals-for-beginners',
    slug: 'cpp-programming-fundamentals-for-beginners',
    title: 'C++ Programming Fundamentals for Beginners: Complete Roadmap',
    summary: 'A structured beginner-friendly roadmap covering C++ basics: variables, pointers, memory allocation, object-oriented programming, and the Standard Template Library.',
    category: 'Tutorials',
    readTime: '8 min read',
    publishedDate: 'February 2026',
    author: 'CertifyCode Academic Editorial',
    relatedCertId: 'cpp-fundamentals',
    tableOfContents: [
      { id: 'introduction', title: '1. Introduction to Modern C++' },
      { id: 'data-types-and-vars', title: '2. Variables, Memory & Data Types' },
      { id: 'control-flow', title: '3. Control Flow & Functions' },
      { id: 'pointers-references', title: '4. Mastering Pointers and References' },
      { id: 'oop-concepts', title: '5. Classes, Objects & Encapsulation' },
      { id: 'stl-overview', title: '6. Introduction to the Standard Template Library (STL)' }
    ],
    content: `
## 1. Introduction to Modern C++ {#introduction}

C++ was developed by Bjarne Stroustrup at Bell Labs as an extension of the C programming language to incorporate object-oriented capabilities without sacrificing raw execution speed and close-to-metal hardware control.

Today, modern C++ (C++11, C++17, C++20, and C++23) offers clean abstractions, type deduction with \`auto\`, RAII-based smart pointers, and zero-cost abstractions.

\`\`\`cpp
#include <iostream>
#include <vector>
#include <string>

int main() {
    std::cout << "Welcome to Modern C++!" << std::endl;
    return 0;
}
\`\`\`

---

## 2. Variables, Memory & Data Types {#data-types-and-vars}

C++ is a statically-typed, compiled language. Every variable has an explicit type known at compile time:

* \`int\` (typically 4 bytes): Represents integers.
* \`double\` / \`float\`: Single and double-precision floating-point numbers.
* \`char\` (guaranteed 1 byte): ASCII or UTF-8 code unit.
* \`bool\` (\`true\` / \`false\`): Logical truth value.

### Const Correctness
Use \`const\` whenever a value should never change after initialization:
\`\`\`cpp
const double PI = 3.1415926535;
\`\`\`

---

## 3. Control Flow & Functions {#control-flow}

Functions in C++ allow modular decomposition. In modern C++, prefer passing large structs or classes by \`const\` reference to prevent expensive copy overhead:

\`\`\`cpp
// Pass-by-value (copies integer)
int add(int a, int b) {
    return a + b;
}

// Pass-by-const-reference (zero copy, read-only)
void printName(const std::string& name) {
    std::cout << "Name: " << name << std::endl;
}
\`\`\`

---

## 4. Mastering Pointers and References {#pointers-references}

Pointers and references are fundamental to C++ memory management:

### Pointers
A pointer stores the memory address of another object:
\`\`\`cpp
int value = 42;
int* ptr = &value; // Holds address of value

std::cout << *ptr; // Dereference: outputs 42
*ptr = 100;        // Modifies value to 100
\`\`\`

### References
A reference is an immutable alias to an existing object:
\`\`\`cpp
int original = 10;
int& ref = original; // ref is another name for original
ref = 20;            // original is now 20
\`\`\`

---

## 5. Classes, Objects & Encapsulation {#oop-concepts}

C++ classes encapsulate state (member variables) and behavior (member methods):

\`\`\`cpp
class BankAccount {
private:
    std::string accountNumber;
    double balance;

public:
    // Constructor
    BankAccount(std::string acc, double initialDeposit)
        : accountNumber(acc), balance(initialDeposit) {}

    void deposit(double amount) {
        if (amount > 0) balance += amount;
    }

    double getBalance() const {
        return balance;
    }
};
\`\`\`

---

## 6. Introduction to the Standard Template Library (STL) {#stl-overview}

The STL provides production-grade containers, iterators, and algorithms:

* **\`std::vector\`**: Contiguous dynamic array.
* **\`std::map\`**: Ordered key-value dictionary (Red-Black tree).
* **\`std::unordered_map\`**: Hash table with O(1) average lookups.
* **\`<algorithm>\`**: \`std::sort\`, \`std::find\`, \`std::accumulate\`.

\`\`\`cpp
#include <algorithm>
#include <vector>

std::vector<int> nums = {5, 2, 8, 1, 9};
std::sort(nums.begin(), nums.end()); // Sorted: {1, 2, 5, 8, 9}
\`\`\`
    `
  },
  {
    id: '50-cpp-interview-questions-for-freshers',
    slug: '50-cpp-interview-questions-for-freshers',
    title: '50 C++ Interview Questions for Freshers & Junior Developers',
    summary: 'Master the top 50 technical interview questions asked by top tech firms and software teams on C++ syntax, pointers, OOP, and memory management.',
    category: 'Interview Prep',
    readTime: '12 min read',
    publishedDate: 'February 2026',
    author: 'CertifyCode Technical Review Team',
    relatedCertId: 'cpp-fundamentals',
    tableOfContents: [
      { id: 'core-syntax', title: '1. Core Syntax & Primitives (Q1 - Q10)' },
      { id: 'pointers-mem', title: '2. Pointers, References & Memory (Q11 - Q25)' },
      { id: 'oop-interviews', title: '3. OOP, Inheritance & Polymorphism (Q26 - Q40)' },
      { id: 'stl-advanced', title: '4. STL & Modern C++ Concepts (Q41 - Q50)' }
    ],
    content: `
## 1. Core Syntax & Primitives (Q1 - Q10) {#core-syntax}

### Q1: What are the key differences between C and C++?
* **Answer**: C is a procedural language focused on functions and structured programming. C++ is a multi-paradigm language that supports both procedural and object-oriented programming (classes, inheritance, polymorphism, templates, exception handling, and the STL).

### Q2: What is the purpose of namespaces in C++?
* **Answer**: Namespaces (e.g., \`namespace CustomName { ... }\`) resolve identifier name collisions in large codebases and third-party libraries.

### Q3: What is the difference between \`struct\` and \`class\` in C++?
* **Answer**: The only difference is default access specifiers: in a \`struct\`, members and base class inheritance default to \`public\`; in a \`class\`, they default to \`private\`.

### Q4: What does the \`const\` keyword do when placed at the end of a member function declaration?
* **Answer**: It denotes a "const member function" (e.g., \`int get() const;\`), guaranteeing that the function will not modify any non-mutable member variables of the calling object.

---

## 2. Pointers, References & Memory (Q11 - Q25) {#pointers-mem}

### Q11: What is a segmentation fault?
* **Answer**: A segmentation fault is a hardware/OS-level error that occurs when a program attempts to access a memory location it does not have permission to access (e.g., dereferencing a null or dangling pointer).

### Q12: What is the difference between \`new\` and \`malloc()\`?
* **Answer**: \`malloc()\` is a C library function that allocates uninitialized raw bytes without calling constructors. \`new\` is a C++ type-safe operator that allocates correctly sized memory, calls the type's constructor, and throws \`std::bad_alloc\` on failure instead of returning \`NULL\`.

### Q13: What is a memory leak, and how do you prevent it in C++?
* **Answer**: A memory leak occurs when heap memory allocated via \`new\` or \`malloc\` is not freed when no longer needed. In modern C++, memory leaks are prevented by using RAII containers (\`std::vector\`, \`std::string\`) and smart pointers (\`std::unique_ptr\`, \`std::shared_ptr\`).

### Q14: What is the difference between shallow copy and deep copy?
* **Answer**: A shallow copy duplicates an object's member values as-is (meaning pointers still point to the same shared memory, leading to double-free issues). A deep copy allocates new dedicated memory for pointed-to resources and copies the underlying data.

---

## 3. OOP, Inheritance & Polymorphism (Q26 - Q40) {#oop-interviews}

### Q26: What is a virtual function and why is it needed?
* **Answer**: A virtual function enables dynamic runtime polymorphism. When a member function is declared \`virtual\` in a base class, calls through a base pointer or reference resolve to the derived class's override at runtime using the virtual method table (vtable).

### Q27: What is the Diamond Problem and how does C++ resolve it?
* **Answer**: The Diamond Problem arises when two classes \`B\` and \`C\` inherit from \`A\`, and class \`D\` inherits from both \`B\` and \`C\`. Without intervention, \`D\` contains two distinct copies of \`A\`. C++ resolves this using **virtual inheritance** (\`class B : virtual public A\`).

### Q28: Why must a base class have a virtual destructor?
* **Answer**: If an object of a derived class is deleted through a base class pointer (\`Base* p = new Derived(); delete p;\`), having a non-virtual destructor causes undefined behavior where the derived destructor is never invoked, leaking resources.

---

## 4. STL & Modern C++ Concepts (Q41 - Q50) {#stl-advanced}

### Q41: What is the difference between \`std::vector\` and \`std::list\`?
* **Answer**: \`std::vector\` is backed by contiguous memory offering O(1) random access and cache-friendly iteration. \`std::list\` is a doubly-linked list with non-contiguous nodes offering O(1) insertions/deletions anywhere once an iterator is located, but slower traversal and memory overhead per node.

### Q42: What is the Rule of Five in modern C++?
* **Answer**: If a class explicitly defines or deletes any of the following five special member functions, it should likely define all five:
1. Destructor
2. Copy Constructor
3. Copy Assignment Operator
4. Move Constructor
5. Move Assignment Operator

### Q43: What is \`std::unique_ptr\` vs \`std::shared_ptr\`?
* **Answer**: \`std::unique_ptr\` maintains exclusive ownership of a dynamic resource and cannot be copied (only moved). \`std::shared_ptr\` implements reference counting to allow multiple owners, deleting the resource only when the last reference is destroyed.
    `
  }
];

export function getArticleBySlug(slug) {
  return articles.find(a => a.slug === slug || a.id === slug) || null;
}
