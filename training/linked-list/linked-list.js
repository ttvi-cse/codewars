function Node(data) {
    this.data = data;
    this.next = null;
}
function LinkedList() {
    this.head = null;
}
 LinkedList.prototype.push = function(data) {
    var node = new Node(data);
    node.next = this.head;
    this.head = node;
}
LinkedList.prototype.pushNode = function(node) {
    node.next = this.head;
    this.head = node;
}
LinkedList.prototype.insertAfter = function(prev, data) {
    if (prev == null) {
        console.log("the given previous node cannot be null");
        return;
    }
    var node = new Node(data);
    node.next = prev.next;
    prev.next = node;
}
LinkedList.prototype.append = function(data) {
    var newNode = new Node(data);
    var last = this.head;
    // newNode.next = null;
    if (this.head == null) {
        this.head = newNode;
        return;
    }
    while (last.next != null) {
        last = last.next;
    }
    last.next = newNode;
    return;
}
LinkedList.prototype.deleteNode = function(key) {
    var tmp = this.head;
    var prev;

    // if head node itself holds the key to be deleted
    if (tmp == null && temp.data == key) {
        this.head = tmp.next;
        return;
    }

    // Search for the key to be deleted, keep track of the
    // previus node as we need to change prev->next
    while (tmp!= null && tmp.data != key) {
        prev = tmp;
        tmp = tmp.next;
    }

    // if key was not present in linked list
    if (tmp == null)
        return;

    prev.next = tmp.next;
}

LinkedList.prototype.printLList = function() {
    var tmp = this.head;
    while (tmp) {
        console.log(tmp.data);
        tmp = tmp.next;
    }
}

module.exports = LinkedList;