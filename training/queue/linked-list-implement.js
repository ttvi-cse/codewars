function Node(data) {
    this.data = data;
    this.next = null;
}

function Queue() {
    this.front = null;
    this.rear = null;
}

Queue.prototype.init = function() {
    this.front = this.rear = null;
}

Queue.prototype.enqueue = function(data) {
    var node = new Node(data);
    if (this.rear == null) {
        this.rear = this.front = node;
        return;
    }

    this.rear.next = node;
    this.rear = node;
}

Queue.prototype.dequeue = function() {
    if (this.front == null)
        return null;

    var temp = this.front;
    this.front = this.front.next;

    if (this.front == null)
        this.rear = null;

    return temp.data;
}

Queue.prototype.print = function () {
    var temp = this.front;
    while (temp != null) {
        console.log(temp.data);
        temp = temp.next;
    }
}

var queue = new Queue();
queue.init();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
// queue.print();
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());