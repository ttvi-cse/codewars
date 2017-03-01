/**
 * two pointer fast and slow.
 * if pointer meet at some node then there is a loop
 * else doen't have loop
 * @param ll
 */
function detectLoop(ll) {
    var slow_p = ll.head;
    var fast_p = ll.head;
    while (slow_p && fast_p && fast_p.next) {
        slow_p = slow_p.next;
        fast_p = fast_p.next;
        if (slow_p == fast_p) {
            return true;
        }
    }
    return false
}