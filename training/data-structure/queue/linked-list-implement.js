function Node(data) {
    this.data = data;
    this.next = null;
}

function Queue() {
    this.front = null;
    this.rear = null;
    this.size = 0;
}

Queue.prototype.enqueue = function(data) {
    var node = new Node(data);
    if (this.rear == null) {
        this.rear = this.front = node;
        this.size = this.size + 1;
        return;
    }

    this.rear.next = node;
    this.rear = node;
    this.size = this.size + 1;
}

Queue.prototype.dequeue = function() {
    if (this.front == null)
        return null;

    var temp = this.front;
    this.front = this.front.next;

    if (this.front == null)
        this.rear = null;

    this.size = this.size - 1;

    return temp.data;
}

Queue.prototype.print = function () {
    var temp = this.front;
    var arr = [];
    while (temp != null) {
        arr.push(temp.data);
        temp = temp.next;
    }
    console.log(arr);
}

// var queue = new Queue();
// queue.init();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// // queue.print();
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());

module.exports = Queue;