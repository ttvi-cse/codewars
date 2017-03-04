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
function printLList(ll) {
    var tmp = ll.head;
    while (tmp) {
        console.log(tmp.data);
        tmp = tmp.next;
    }
}
function printMide(ll) {
    var slow = ll.head;
    var fast = ll.head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    console.log(slow.data);
}
var ll = new LinkedList();
push(ll,1);
push(ll,2);
push(ll,3);
push(ll,4);
push(ll,5);
printLList(ll);
console.log('print mid: ');
printMide(ll);
