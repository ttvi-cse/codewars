function Node(data) {
    this.data = data;
    this.next = null;
}
function push(head,data) {
    var node=new Node(data);
    node.next=head;
    head=node;
    return head;
}

function removeDuplicates(head) {
    // Your code goes here.
    // Remember to return the head of the list.
    var curr=head;
    var next_next;
    if(!curr)
        return head;

    while(curr.next) {
        if(curr.data==curr.next.data) {
            next_next = curr.next.next;
            curr.next=next_next;
        }
        else {
            curr=curr.next;
        }
    }
    return head;
}

function printList(head){
    var curr=head;
    while(curr) {
        console.log(curr.data);
        curr=curr.next;
    }
}

var head=new Node(5);
head=push(head,4);
head=push(head,3);
head=push(head,3);
head=push(head,3);
head=push(head,2);
head=push(head,2);
head=push(head,2);
head=push(head,1);
head=push(head,1);
head=push(head,1);
head=push(head,1);
// Node(1,Node(2))->Node(2,Node(3))->Node(3,Node(4))->Node(4,Node(5))->Node(5,null)
printList(head);
console.log('remove duplicate:');
head=removeDuplicates(head);
printList(head);