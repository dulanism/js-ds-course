function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}


LinkedList.prototype.addToHead = function(value) { 
    var newNode = new Node(value, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;  
};

/* Creates new linkedlist */
var ll = new LinkedList();

/* 25 Since this is the only node in the list it's the head and tail */
/* Two new nodes added */
ll.addToHead(100);
ll.addToHead(200);
ll.addToHead(300);

/*console.log(ll);*/