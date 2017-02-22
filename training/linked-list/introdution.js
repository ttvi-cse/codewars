function Node(data) {
    this.data = data;
    this.next = null;
}

function SinglinkedList() {
    this.length = -1;
    this.head = null;
}

SinglinkedList.prototype.addFirst = function(data) {
    var node = new Node(data);
    node.next = this.head;
    this.head = node;
}

SinglinkedList.prototype.addAfter = function(prev, data) {
    if (prev == null)
        return;

    var node = new Node(data);
    node.next = prev.next;
    prev.next = node;
}

SinglinkedList.prototype.addLast = function(data) {
    var node = new Node(data);
    if (this.head == null) {
        this.head = new Node(data);
        return;
    }

    var last = this.head;
    while(last.next != null) {
        last = last.next;
    }
    last.next = node;
}

SinglinkedList.prototype.printList = function() {
    while (this.head != null) {
        console.log(this.head.data);
        this.head = this.head.next;
    }
}

var singLinkedList = new SinglinkedList();
singLinkedList.addFirst(1);
singLinkedList.addFirst(2);
singLinkedList.addLast(3)
singLinkedList.printList();