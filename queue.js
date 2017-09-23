class Queue {
  constructor() {
    this.data = [];
    this.size = 0;
  }
  enqueue(x) {
    this.data.push(x);
    this.size++;
  }
  dequeue() {
    if (!this.isEmpty()) {
      this.size--; 
    }
    return this.data.shift();
  }
  peek() {
    return !this.isEmpty() ? this.data[0] : null;
  }
  size() {
    return this.size;
  }
  isEmpty() {
    this.size === 0;
  }
  clear() {
    this.data = [];
  }
}
