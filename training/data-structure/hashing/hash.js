function Node(data) {
    this.data=data;
    this.next=null;
}
function HashTable(capacitiy) {
    this.capacity=capacitiy;
    this.arr=[];
    // for(var i=0;i<capacity;i++) {
    //     this.arr[i]=new Node();
    // }
}
/**
 * h = key%capacity
 * @param htable
 * @param data
 */
function insert(htable,data) {
    var k=data%htable.capacity;
    var node=new Node(data);
    var curr=htable.arr[k];
    if(!curr) {
        htable.arr[k]=node;
        return htable;
    }
    while(curr.next) curr=curr.next;
    curr.next=node;
    return htable;
}
function deleteN(htable,data) {
    var k=data%htable.capacity;
    var curr=htable.arr[k];
    var prev;
    while(curr&&curr.data!=data) {
        prev=curr;
        curr=curr.next;
    }
    prev.next=curr.next;
    // delete curr;
    return htable;
}
function search(htable,key) {
    var k=key%htable.capacity;
    var curr=htable.arr[k];
    while(curr) {
        if(curr.data==key) return curr;
        curr=curr.next;
    }
    return null;
}

var htable=new HashTable(100);
htable=insert(htable,1);
htable=insert(htable,20);
htable=insert(htable,120);
htable=insert(htable,220);
htable=insert(htable,5);
htable=insert(htable,40);
htable=insert(htable,30);
htable=insert(htable,14);
// htable=deleteN(htable,120);
console.log(search(htable,20));