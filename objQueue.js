// Implement a queue with an object
class Queue {
  constructor(limit) {
    this.limit = limit;
    this.items = {};
    this.firstIndex = 0;
    this.lastIndex = -1;
  }

  isFull() {
    return this.lastIndex === this.limit - 1;
  }

  isEmpty() {
    return this.firstIndex > this.lastIndex;
  }

  enqueue(item) {
    if (this.isFull()) {
      return "Queue is full";
    }

    this.lastIndex++;
    this.items[this.lastIndex] = item;
    return true;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    const item = this.items[this.firstIndex];
    delete this.items[this.firstIndex];
    this.firstIndex++;
    return item;
  }

  size() {
    return this.lastIndex - this.firstIndex + 1;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }

    for (let i = this.firstIndex; i <= this.lastIndex; i++) {
      console.log(this.items[i]);
    }
  }
}

const queue = new Queue(5);

queue.enqueue("Sola");
queue.enqueue("Dada");
queue.enqueue("Tolu");
queue.print();

console.log(queue.dequeue());
queue.print();

console.log(queue.size());
