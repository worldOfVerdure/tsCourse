class ListNode<T> {
  next?: ListNode<T>;
  constructor(public value: T){}
}

class LinkedList<T> {
  root?: ListNode<T>; //Question mark makes this an optional property. This allows undefined to be a valid property.
  tail?: ListNode<T>;
  length = 0;

  add(value: T) {
    const node = new ListNode(value);
    if (!this.root) {
      this.root = node;
      this.tail = node;
    } else {
      if (this.tail) {
        this.tail.next = node;
        this.tail = node;
      }
    }
    this.length++;
  }

  printList() {
    let current = this.root;
    while (current?.next) {
      console.log(current?.value);
      current = current.next;
    }
  }
}

const numberList = new LinkedList<number>();

for(let i=0; i <= 10; ++i) {
  numberList.add(Math.floor(Math.random() * 1000) + 1);
}

numberList.printList();
