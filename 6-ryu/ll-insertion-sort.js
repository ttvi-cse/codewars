function Node(data) {
    this.data=data;
    this.next=null;
}
function push(head,data) {
    var node=new Node(data);
    if(!head) {head=node;return head;}
    node.next=head;
    head=node;
    return head;
}
/**
 * 1. create an empty sorted (or result) list
 * 2. traverse the given list, do following for every node.
 *  a. insert current node in sorted way in sorted or result list
 * 3. change head of given linked list to head of sorted (or result) list
 * @param head
 */
function insertionSort(head) {
    sorted=null;
    var curr=head;
    while(curr) {
        var next=curr.next;
        sorted=sortedInsert(sorted,curr.data);
        curr = next;
    }
    return sorted;
}

function sortedInsert(head,data) {
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

function printList(head) {
    while(head) {console.log(head.data);head=head.next;}
}
// 5 20 4 3 30
var head;
head=push(head,30);
head=push(head,3);
head=push(head,4);
head=push(head,20);
head=push(head,5);
printList(head);
console.log('insertion sort: ');
head=insertionSort(head);
printList(head);