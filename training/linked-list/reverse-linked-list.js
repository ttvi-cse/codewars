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
 * loop through every element
 * change next to prev, prev to current and current to next
 * @param ll
 */
function reverse(ll) {
    var curr = ll.head; // 1
    var prev = null; // 2
    var next_ptr; // 3
    while (curr) { // 4
        next_ptr = curr.next; // 5
        curr.next = prev; // 6
        prev = curr; // 7
        curr = next_ptr; // 8
    }
    ll.head = prev; // 9
}

var ll = new LinkedList();
push(ll,1);
push(ll,2);
push(ll,3);
push(ll,4);
// 4->3->2->1->undefine
// 1 curr = Node(4)
// 2 prev = null
// 3  next_ptr = undefine

// 4 loop 1: 4->3->2->1
// 5 next_ptr = Node(3, Node(2));
// 6 curr = Node(4, null)
// 7 prev = Node(4,null)
// 8 curr = Node(3, Node(2));

// 4 loop 2:
// 5 next_ptr = Node(2, Node(1)
// 6 curr = Node(3, Node(4))
// 7 prev = Node(3, Node(4))
// 8 curr = Node(2, Node(1))

// 4 loop 3: null<-4<-3<-2->1
// 5 next_ptr = Node(1, null)
// 6 curr = Node(2, Node(3))
// 7 prev = Node(2, Node(3))
// 8 curr = Node(1, Node(undefine, null))

// 4 loop 4: null<-4<-3<-2<-1
// 5 next_ptr = Node(undefine, null)
// 6 curr = Node(1, Node(2))
// 7 prev = Node(1, Node(2))
// 8 curr = Node(undefine, null)

// stop
ll.head = prev;

// printLList(ll);
reverse(ll);
printLList(ll);