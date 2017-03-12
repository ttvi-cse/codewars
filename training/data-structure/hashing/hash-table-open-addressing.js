function HashTable(capacity) {
    this.arr=new Array(capacity);
    this.capacity=capacity;
}
/**
 * linear probing
 * @param htable
 * @param key
 * @returns {number}
 */
function insert(htable,key) {
    var i=0;
    do {
        var j=key%11+i;
        if (htable.arr[j]==undefined) { // !htable.arr[j] wrong syntax
            htable.arr[j]=key;
            return j;
        } else {
            i=i+1;
        }
    } while(i<htable.capacity);
    throw new Error('Hash table overflow!!!');
}
function search(htable,key) {
    var i=0;
    do {
        var j=key%11+i;
        // console.log(j);
        if(htable.arr[j]==key)
            return j;
        else
            i+=1;
    } while (i<htable.capacity&&htable.arr[j]!=undefined); //htable.arr[j]=='undefined'
    return -1;
}
function deleteN(htable,key) {
    var i=0;
    do {
        var j=key%11+i;
        if(htable.arr[j]==key) {
            delete htable.arr[j];
            return true;
        } else {
            i+=1;
        }
    } while (i<htable.capacity);
    return false;
}
var htable=new HashTable(20);
insert(htable,7);
insert(htable,36);
insert(htable,18);
insert(htable,62);
insert(htable,7);
insert(htable,36);
insert(htable,18);
insert(htable,62);
insert(htable,7);
insert(htable,36);
insert(htable,18);
insert(htable,62);
console.log(search(htable,62));
console.log(deleteN(htable,7));
console.log(search(htable,18));
console.log(htable);

