// Two types of linked lists: singly linked and doubly linked
// In a singly linked list each node only has a ref to the node after it
// In a doubly linked list each node as ref to node after it & before it
// exceptions to the doubly linked list head has no ref before it; tail has none after it

function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

var LL = new LinkedList ();
var userList = new LinkedList();
var toDoList = new LinkedList();

console.log(LL);

// this example is null