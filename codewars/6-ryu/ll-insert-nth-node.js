function Node(data) {
    this.data = data;
    this.next = null;
}

function insertNth(head, index, data) {
    var node=new Node(data);
    var curr=head;
    var prev=head;
    if(index==0){node.next=head;head=node;return head;};
    while(curr&&index-->0) {prev=curr;curr=curr.next;}
    prev.next=node;
    node.next=curr;
    return head;

}
function printList(head) {
    var curr=head;
    while(curr) {console.log(curr.data);curr=curr.next;}
}

var head=new Node(1);
insertNth(head,0,2);
printList(head);
