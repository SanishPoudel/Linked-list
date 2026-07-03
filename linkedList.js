class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = new Node(value);
    }
  }

  prepend(value) {
    let previous = this.head;
    this.head = new Node(value, previous);
  }

  size() {
    let current = this.head;
    let count = 0;
    while (current) {
      count ++;
      current = current.nextNode;
    }
    return count;
  }

  head() {
    let current = this.head;
    if (!current) {
      return undefined;
    }
    return current;
  }

  tail() {
    let current = this.head;
    if (!current) {
      return undefined;
    }
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    let count = 0;
    let current = this.head;
    while (current) {
      if (count === index) {
        return current;
      }
      count ++;
      current = current.nextNode;
    }
    return undefined;
  }

  pop() {
    let current = this.head;
    if (!current) {
      return undefined;
    }
    this.head = current.nextNode;
    return current;
  }

  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }
}