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
/**
 * find node1
 * find node2
 * swap node1 node2
 * @param ll
 * @param x
 * @param y
 */
function swapNode(ll, x, y) {
    var node1 = ll.head;
    var node2 = ll.head;
    var prev1, prev2;

    // find node1
    if (node1.data == x) {
        // prev1 = .
    } else {
        while (node1 != null && node1.data != x) {
            prev1 = node1;
            node1 = node1.next;
        }
    }

    // find node2
    if (node2.data == y) {
        // prev2 = .
    } else {
        while (node2 != null && node2.data != y) {
            prev2 = node2;
            node2 = node2.next;
        }
    }

    if (node1 == null || node2 ==  null)
        return;
    //swap node1 and node2
    // 1->2->3->4
    // node1.data = 2
    // node1.next = Node(3)
    // node2.data = 4
    // node2.next = null
    // node1.next = node2.next;
    // prev2.next = node1;
    // node2.next = node1.next;
    // prev1.next = node2;
    // not head
    if (prev1 == null) {
        node2.next = node1.next;
        ll.head = node2;
        prev2.next = node1;
        node1.next = node2.next;
    } else if (prev2 == null) {
        node1.next = node2.next;
        ll.head = node1;
        node2.next = node1.next;
        prev1.next = node2;
    } else {
        prev1.next = node2;
        node2.next = node1.next;
        prev2.next = node1;
        node1.next = node2.next;
    }


    return;
}

function swapNode2(ll, x, y) {
    if (x == y)
        return;
    var prevX = null, currX = ll.head;
    while (currX && currX.data != x) {
        prevX = currX;
        currX = currX.next;
    }

    var prevY = null, currY = ll.head;
    while (currY && currY.data != y) {
        prevY = currY;
        currY = currY.next;
    }
    // if either x or y is not present, nothing to do
    if (currX == null || currY == null)
        return;

    // if x is not head of linked list
    if (prevX != null) {
        prevX.next = currY;
    } else  {// else make y as new head
        ll.head = currY;
    }

    // if y is not head of linked list
    if (prevY != null) {
        prevY.next = currX;
    } else { // else make x as new head
        ll.head = currX;
    }

    // swap next pointers;
    var t = currY.next;
    currY.next = currX.next;
    currX.next = t;
}
function printLList(ll) {
    var tmp = ll.head;
    while (tmp) {
        console.log(tmp.data);
        tmp = tmp.next;
    }
}
var ll = new LinkedList();
push(ll,1);
push(ll,2);
push(ll,3);
push(ll,4);
printLList(ll);
console.log('swap: 2,4');
swapNode2(ll, 2, 4);
printLList(ll);