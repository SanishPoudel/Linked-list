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
    if (current) {
      return current;
    } else {
      return undefined;
    }
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
}