function getCount(ll) {
if (head = null)
    return 0;
else
    return 1 + getCount(ll.next);
}
// 1->2->3->4
// getCount(1)
// 1 + getCount(2)
// 1 + 1 + getCount(3)
// 1 + 1 + 1 + getCount(4)
// 1 + 1 + 1 + 1 + getCount(null)