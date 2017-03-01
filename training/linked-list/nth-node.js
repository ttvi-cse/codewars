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
/**
 * return nth element in linked list
 * null otherwise
 * @param ll
 * @param n
 * @returns {Node|*}
 */
function getNth(ll, n) {
    var curr = ll.head;
    while (curr && n-- > 0) {
        curr = curr.next;
    }
    return curr;
}
var ll = new LinkedList();
push(ll,1);
push(ll,2);
push(ll,3);
push(ll,4);
printLList(ll);
console.log(getNth(ll, 5));
