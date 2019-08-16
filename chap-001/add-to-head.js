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
};