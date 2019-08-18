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

var ll = new LinkedList();

ll.addToHead(1000);
ll.addToHead(2000);
ll.addToTail(3000);

ll.removeHead();
console.log(ll.removeHead());
