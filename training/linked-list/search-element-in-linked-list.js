function search(ll, value) {
    var current = ll.head;
    while (current && current.data != value)
        current = current.next;
    return current? true : false;
}
/**
 * if head is null, return false
 * if head's key is same as value, return true
 * else return search(head.next,value)
 */
function search2(node, value) {
    if (node == null)
        return false;
    if (node.data == value)
        return true;
    else
        return search(node.next, value);
}