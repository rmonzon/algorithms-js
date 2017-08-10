class Stack {
  constructor() {
    this.data = [];
    this._length = 0;
  }
  
  push(value) {
    this.data.push(value);
    this._length++;
  }
  
  top() {
    return !this.isEmpty() ? this.data[this.data.length - 1] : null;  
  }
  
  pop() {
    const topElement = this.data.pop();
    this._length = !this.isEmpty() ? this._length - 1 : 0;
    return topElement;
  } 
  
  isEmpty() {
	  return this._length === 0;
  }
  
  size() {
    return this._length;
  }
}

// How to use it
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.pop());
console.log(stack.size());
