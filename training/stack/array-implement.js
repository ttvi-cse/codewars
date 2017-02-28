function Stack(capacity) {
    this.capacity = capacity;
    this.top = -1;
    this.arr = [];
}

Stack.prototype.isFull = function(){
    return this.top == this.capacity - 1;
}
Stack.prototype.isEmpty = function() {
    return this.top == -1;
}
Stack.prototype.push = function(item) {
    if (this.isFull())
        return;
    this.arr[++this.top] = item;
}
Stack.prototype.pop = function() {
    if (this.isEmpty())
        return -1;
    return this.arr[this.top--];
}
Stack.prototype.peek = function() {
    if (this.isEmpty())
        return -1;
    return this.arr[this.top];
}

var stack = new Stack(5);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

