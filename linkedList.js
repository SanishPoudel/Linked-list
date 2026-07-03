class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor(headnode = null) {
    this.headnode = headnode;
  }

  append(value) {
    if (this.headnode === null) {
      this.headnode = new Node(value);
    } else {
      let current = this.headnode;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = new Node(value);
    }
  }

  prepend(value) {
    let previous = this.headnode;
    this.headnode = new Node(value, previous);
  }

  size() {
    let current = this.headnode;
    let count = 0;
    while (current) {
      count ++;
      current = current.nextNode;
    }
    return count;
  }

  head() {
    let current = this.headnode;
    if (!current) {
      return undefined;
    }
    return current;
  }

  tail() {
    let current = this.headnode;
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
    let current = this.headnode;
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
    let current = this.headnode;
    if (!current) {
      return undefined;
    }
    this.headnode = current.nextNode;
    return current;
  }

  contains(value) {
    let current = this.headnode;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  findIndex(value) {
    let current = this.headnode;
    let count = 0;
    while (current) {
      if (current.value === value) {
        return count;
      }
      count ++;
      current = current.nextNode;
    }
    return -1;
  }

  toString() {
    let current = this.headnode;
    let str = ""
    if (!current) {
      return str;
    }
    while (current) {
      str = str + "( " + current.value + " )" + " -> ";
      current = current.nextNode;
    }
    return str + null;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      throw new RangeError("Index out of bounds");
    }
    if (index === 0) {
      return this.pop();
    }
    let previous = this.at(index - 1);
    let current = previous.nextNode;
    previous.nextNode = current.nextNode;
  }
}


const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());