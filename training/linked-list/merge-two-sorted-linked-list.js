var LinkedList = require('./linked-list');
var Node = LinkedList.Node;

function sortMerge(a, b) {
    var dummy = new Node();
    var tail = dummy;
    dummy.next = null;
    while (true) {
        if (a == null) {
            tail.next = b;
            break;
        } else if (b == null) {
            tail.next = a;
            break;
        }
        if (a.data < b.data) {
            movenode(tail.next, a);
        } else {
            movenode(tail.next, b);
        }

        tail = tail.next;
    }
    return dummy.next;
}
/**
 * takes the node from the front of the source,
 * and move it to the front of the dest.
 * It is an error to call this with the source list empty.
 * @param des
 * @param src
 */
function movenode(des, src) {
    var newNode = src;
    src = newNode.next;
    newNode.next = des;
    des = newNode;
}

var ll1 = new LinkedList();
ll1.push(9);
ll1.push(8);
ll1.push(7);
ll1.push(4);
ll1.push(3);

var ll2 = new LinkedList();
ll2.push(6);
ll2.push(5);
ll2.push(2);
ll2.push(1);

console.log("ll1: ");
ll1.printLList();
console.log("ll2: ");
ll2.printLList();

var ll3 = sortMerge(ll1.head, ll2.head);
ll3.printLList();