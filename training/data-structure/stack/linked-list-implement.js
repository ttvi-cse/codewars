function Node(data) {
    this.data = data;
    this.next = null;
}

function Stack() {
    this.head = null;
}

Stack.prototype.push = function(data) {
    var node = new Node(data);
    node.next = this.head;
    this.head = node;
}

Stack.prototype.isEmpty = function() {
    return !this.head;
}

Stack.prototype.pop = function() {
    if (this.isEmpty())
        return -1;

    var poped = this.head.data;
    this.head = this.head.next;
    return poped;
}

Stack.prototype.peek = function() {
    if (this.isEmpty())
        return -1;

    return this.head.data;
}

// var stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// console.log(stack.peek());
// while (!stack.isEmpty()) {
//     console.log(stack.pop());
// }

module.exports = Stack;
