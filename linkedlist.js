class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this._length = 0;
    this.head = null;
  }
  
  add(value) {
    let node = new ListNode(value); 
    let current = this.head;
    
    if (!current) {
      this.head = node;
      this._length++;
      
      return node;
    }
    
    while (current.next) {
      current = current.next;
    }
    
    current.next = node;
    this._length++;
    return node;
  }
  
  remove(value) {
    let curr = this.head;
    let p = curr;
    while (p.next) {
      if (p.next.value === value) {
        const next = p.next;
        p.next = next.next;
      }
      else {
        p = p.next;
      }
    }
    this.head = curr;
  }
  
  getElementAt(pos) {
    let curr = this.head;
    let i = 0;
    if (pos < 0) {
      return this.head.value;
    }
    while (curr) {
      if (pos === i) {
        return curr.value;
      }
      i++;
      curr = curr.next;
    }
    return curr.value;
  }
  
  size() {
    return this._length;
  }
  
  printElements() {
    let array = [];
    let curr = this.head;
    while (curr) {
      array.push(curr.value);
      curr = curr.next;
    }
    return array;
  }
}

// How to use it
let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
console.log(list.printElements());
list.remove(3);
console.log(list.printElements());
console.log(list.getElementAt(2));
