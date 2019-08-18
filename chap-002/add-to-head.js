function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

/* adds new node to head */

LinkedList.prototype.addToHead = function(value) { 
    var newNode = new Node(value, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;  
};

/* adds a new method to the LinkedList */
/* 14 a new method called addToHead */
/* 15 a new node with node constructor function & assigned it to the name new Node*/