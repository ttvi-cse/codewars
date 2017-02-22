function Queue(capacity) {
}

Queue.prototype.init = function(capacity) {
    this.front = 0;
    this.rear = capacity -1;
    this.size = 0;
    this.capacity = capacity;
    this.arr = [];
}

Queue.prototype.isFull = function() {
    return this.size == this.capacity;
}

Queue.prototype.isEmpty = function() {
    return this.size == 0;
}

Queue.prototype.enqueue = function(item) {
    if (this.isFull())
        return;
    this.rear = (this.rear + 1) % this.capacity;
    this.arr[this.rear] = item;
    this.size = this.size + 1;
    console.log(`${item} enqueued to queue.`);
}

Queue.prototype.dequeue = function() {
    if (this.isEmpty())
        return -1;
    var item = this.arr[this.front];
    this.front = (this.front + 1) % this.capacity;
    this.size = this.size - 1;
    return item;
}

Queue.prototype.getFront = function() {
    if (this.isEmpty())
        return -1;
    return this.arr[this.front];
}

Queue.prototype.getRear = function() {
    if (this.isEmpty())
        return -1;
    return this.arr[this.rear];
}

// var queue = new Queue();
// queue.init(100);
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// // console.log(queue.dequeue());
// console.log(queue.getFront());
// console.log(queue.getRear());

module.exports = Queue;