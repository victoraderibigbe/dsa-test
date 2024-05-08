// Implement a stack with an array
class Stack {
  constructor() {
    this.items = [];
  }

  length() {
    return this.items.length;
  }

  push(item) {
    this.items.push(item);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  peekLast() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.length - 1];
  }

  peekFirst() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[0];
  }

  print() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    console.log(...this.items);
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

stack.print(); // Output: 30 20 10

console.log(stack.pop()); // Output: 30
stack.print(); // Output: 20 10

console.log(stack.peekLast()); // Output: 20
console.log(stack.peekFirst()); // Output: 10