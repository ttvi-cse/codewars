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

function Context(source, dest) {
    this.source = source;
    this.dest = dest;
}

function printList(head) {
    while(head) {console.log(head.data);head=head.next;}
}

/**
 * take the node from the front of the source,
 * and ove it to the front of the dest
 * @param dest
 * @param source
 */
function moveNode(source,dest) {
    if(!source) {
        throw new Error();
    }
    var next=source.next;
    source.next=dest;
    dest=source;
    source=next;
    return new Context(source,dest);
}
/**
 *
 * @param head
 * @returns {*}
 */
function alternatingSplit(head) {
    // Your code goes here.
    // Remember to return the head of the list.
    var a=null;
    var b=null;
    var curr=head;
    var context;
    while(curr) {
        context=moveNode(curr,a);
        curr=context.source;
        a=context.dest;
        if(curr) {
            context=moveNode(curr,b);
            curr=context.source;
            b=context.dest;
        }
    }
    return new Context(a,b);
}

function buildOneTwo() {
    var one=new Node(1);
    var two=new Node(2);
    one.next=two;
    return one;
    // return [1,2].reduce((head,data)=>{
    //     console.log(head);
    //     push(head,data);
    // });
}

var head;

// head=push(head,5);
// head=push(head,4);
// head=push(head,3);
// head=push(head,2);
// head=push(head,1);

head=buildOneTwo();
printList(head);

var context=alternatingSplit(head);
console.log('source: ');
console.log(context.source.next);
printList(context.source);
console.log('dest: ');
printList(context.dest);

