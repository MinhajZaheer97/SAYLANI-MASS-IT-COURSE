Imperative programming is a paradigm that describes how a program should accomplish a task by using explicit, step-by-step instructions. Declarative programming focuses on what the desired outcome should be, abstracting away the control flow and leaving the execution details to the underlying system.

Key DifferencesFocus: Imperative dictates exact steps (control flow) to mutate the program's state. Declarative defines the final target state and lets the framework handle how to reach it.Readability: Declarative code is typically more concise, readable, and focuses on intent. Imperative code can be verbose but offers granular control over performance and resource management.

Real-World Metaphor: Asking a waiter "Table for two, please" is declarative. Searching for an empty table yourself, walking to it, and pulling out a chair is imperative.

Code Example: imparative 

const doubled = [];
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}
// doubled is [2, 4, 6]

Declarative 
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
// doubled is [2, 4, 6]
Common TechnologiesImperative: C, Java, Python (using standard for/while loops), and infrastructure tools like Ansible.Declarative: SQL (fetching data), HTML/CSS (rendering webpages), React/Flutter (UI frameworks).