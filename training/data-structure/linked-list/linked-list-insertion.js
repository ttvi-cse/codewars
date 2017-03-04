function Node(data) {
    this.data = data;
    this.next = null;
}
function LinkedList() {
    this.head = null;
}
function push(ll, data) {
    var node = new Node(data);
    node.next = ll.head;
    ll.head = node;
}
function pushNode(ll, node) {
    node.next = ll.head;
    ll.head = node;
}
function insertAfter(ll, prev, data) {
    if (prev == null) {
        console.log("the given previous node cannot be null");
        return;
    }
    var node = new Node(data);
    node.next = prev.next;
    prev.next = node;
}
function append(ll, data) {
    var newNode = new Node(data);
    var last = ll.head;
    // newNode.next = null;
    if (ll.head == null) {
        ll.head = newNode;
        return;
    }
    while (last.next != null) {
        last = last.next;
    }
    last.next = newNode;
    return;
}
function deleteNode(ll, key) {
    var tmp = ll.head;
    var prev;

    // if head node itself holds the key to be deleted
    if (tmp == null && temp.data == key) {
        ll.head = tmp.next;
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

function printLList(ll) {
    var tmp = ll.head;
    while (tmp) {
        console.log(tmp.data);
        tmp = tmp.next;
    }
}
var a = new Node(4);
var b = new Node(2);
var c = new Node(3);
var ll = new LinkedList();
push(ll,1);
push(ll,2);
push(ll,3);
pushNode(ll, a);
insertAfter(ll,a,5);
append(ll, 6);
printLList(ll);
console.log('delete 3');
deleteNode(ll, 3);
printLList(ll);