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
 * loop for all element
 * check if nth element left print node
 * else continue loop
 * @param ll
 * @param n
 * @returns {*}
 */
function getNthFromEnd(ll, n) {
    var left_ptr = ll.head;
    var right_ptr;
    var t;
    while (left_ptr) {
        t = n;
        right_ptr = left_ptr.next;
        while (right_ptr && t-- > 0) {
            right_ptr = right_ptr.next;
        }
        // right pointer get end of list with t step
        // return left_ptr
        if (right_ptr == null)
            return left_ptr;

        left_ptr = left_ptr.next;
    }

    return null;
}
/**
 * Maintain two pointer - reference and main pointer.
 * Initialize both to head. First move reference pointer to n nodes from head.
 * Now move both pointer utils reference pointer reaches end.
 * Now main pointer will point to nth node from the end
 * @param ll
 * @param n
 */
function getNthFromEnd2(ll, n) {
    var ref = ll.head;
    var main = ll.head;
    var count = 0;
    while (count < n) {
        ref = ref.next;
        count++;
    }
    while (ref) {
        main = main.next;
        ref = ref.next;
    }
    return main;
}
function getNth(ll, n) {
    var curr = ll.head;
    var count = 0;
    while (count < n) {
        count++;
        curr = curr.next;
    }
    return curr;
}
var ll = new LinkedList();
push(ll,1);
push(ll,2);
push(ll,3);
push(ll,4);
push(ll,5);
push(ll,6);
push(ll,7);
push(ll,8);
printLList(ll);
console.log('print 3th: ');
console.log(getNth(ll, 3));
