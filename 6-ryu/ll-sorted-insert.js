function Node(data) {
    this.data = data;
    this.next = null;
}

function push(head,data) {
    var node=new Node(data);
    if(!head) {head=node;return head;}
    node.next=head;
    head=node;
    return head;
}

function printList(head) {
    while(head) {console.log(head.data);head=head.next;}
}
/**
 * insert before head
 * insert at tail
 * empty list
 * @param head
 * @param data
 * @returns {*}
 */
function sortedInsert(head, data) {
    // Your code goes here.
    // Remember to return the head of the list.

    var node=new Node(data);
    var curr=head;
    var prev;
    if(!curr) {head=node;return head;}
    while(curr&&curr.data<data) {prev=curr;curr=curr.next;}
    if (curr==null) {
        prev.next=node;
        node.next=curr;
    } else if(curr==head) {
        node.next=head;
        head=node;
    } else {
        prev.next=node;
        node.next=curr;
    }
    return head;
}

var head=new Node(5);
head=push(head,3);
head=push(head,2);
head=push(head,1);
head=sortedInsert(head,10);
head=printList(head);
