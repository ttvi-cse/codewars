function Node(data) {
    this.data = data;
    this.next = null;
}
function Context(source, dest) {
    this.source = source;
    this.dest = dest;
}
function push(head,data) {
    var node=new Node(data);
    node.next=head;
    head=node;
    return head;
}

/**
 * Node(1,Node(2))->Node(2,Node(3))->Node(3,null)
 * Node(4,Node(4))->Node(5,Node(5))->Node(6,null)
 * Node(1,Node(4)) -> var f=source; f.next=dest;
 * source=(Node(2,Node(3)) -> source=source.next;
 * @param source
 * @param dest
 * @returns {Context}
 */
function moveNode(source, dest) {
    var next = source.next;
    source.next = dest;
    dest = source;
    source = next;
    return new Context(source, dest);
}

function printList(head){
    var curr=head;
    while(curr) {
        console.log(curr.data);
        curr=curr.next;
    }
}

var source=new Node(3);
var dest=new Node(6);
source=push(source,2);
source=push(source,1);
dest=push(dest,5);
dest=push(dest,4);
// Node(1,Node(2))->Node(2,Node(3))->Node(3,Node(4))->Node(4,Node(5))->Node(5,null)
console.log("source");
printList(source);
console.log("des");
printList(dest);
console.log('move node');
var context = moveNode(source,dest);
console.log("source");
printList(context.source);
console.log("des");
printList(context.dest);