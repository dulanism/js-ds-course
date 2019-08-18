function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

// Creating Head Nodes
LinkedList.prototype.addToHead = function(value) { 
    var newNode = new Node(value, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;  
};

// Creating Tail Nodes
LinkedList.prototype.addToTail = function(value) {
    var newNode = new Node(value, null, this.tail);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
};

// if the list is empty
// LinkedList.prototype.removeHead = function() {
//    if(!this.head) return null;
//};

// function to remove head
LinkedList.prototype.removeHead = function() {
    if(!this.head) return null;
    var val = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    return val;
 };

// function to remove tail
LinkedList.prototype.removeTail = function() {
    if (!this.tail) return null;
    var val = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    return val;
};

// search function to find data in linked list
LinkedList.prototype.search = function(searchValue) {
    var currentNode = this.head;
    var counter = 0;
    while(counter < 10) {
        console.log(counter);
        counter++;
    }
};

var ll = new LinkedList();
ll.search();
