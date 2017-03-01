function deleteNode(ll, key) {
    var tmp = ll.head;
    var prev;

    // if head node itself holds the key to be deleted
    if (tmp == null && temp.data == key) {
        ll.head = tmp.next;
        return;
    }

    // Search for the key to be deleted, keep track of the
    // previus node as we need to change prev->next
    while (tmp!= null && tmp.data != key) {
        prev = tmp;
        tmp = tmp.next;
    }

    // if key was not present in linked list
    if (tmp == null)
        return;

    prev.next = tmp.next;
}