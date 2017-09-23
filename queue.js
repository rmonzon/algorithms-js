class Queue {
  constructor() {
    this.data = [];  
  }
	enqueue(val) {
		this.data.push(val);  
	}
	dequeue() {
		return this.data.shift();  
	}
	peek() {
		return this.data[0];  
	}
  isEmpty() {
  	return this.data.length === 0;
  }
  clear() {
	  this.data = [];
  }
}
