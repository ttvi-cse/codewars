function MinHeap(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.harr = [];
}

MinHeap.prototype.minHeapify = function(i) {
    var l = left(i);
    var r = right(i);
    var smallest = i;
    if (l < this.size && this.harr[l] < this.harr[r])
        smallest = l;
    if (r < this.size && this.harr[r] < this.harr[smallest])
        smallest = r;
    if (smallest != i) {
        swap(this.harr[i], this.harr[smallest]);
        this.minHeapify(smallest);
    }
};

// MinHeap.prototype.heapSort = function(arr) {
//     for (var i = this.size/2 - 1; i >= 0; i--)
//         this.minHeapify(i);
//
//     for (var i = this.size - 1; i >= 0; i--) {
//         var t = arr[0];
//         arr[0] = arr[i];
//
//         this.minHeapify()
//     }
// }
// TODO implement extractMin function
MinHeap.prototype.extractMin = function() {

};
// TODO implement decreaseKey function
MinHeap.prototype.decreaseKey = function(i, val) {

};
// TODO implement getMin function
MinHeap.prototype.getMin = function() {

};
// TODO read deleteKey function
MinHeap.prototype.deleteKey = function(i, val) {
    this.harr[i] = val;
    while (i != 0 && this.harr[parent(i)] > this.harr[i]) {
        var t = this.harr[i];
        this.harr[i] = this.harr[parent(i)];
        this.harr[parent(i)] = t;
        i  = parent(i);
    }
};
// TODO read insertKey function
MinHeap.prototype.insertKey = function(value) {
    if (this.size == this.capacity)
        return;
    this.size++;
    var i = this.size -1;
    this.harr[i] = value;
    while (i!=0 && this.harr[parent(i)] > this.harr[i]) {
        var t = this.harr[i];
        this.harr[i] = this.harr[parent(i)];
        this.harr[parent(i)] = t;
        i = parent(i);
    }
};

var parent = function(i) {
    return (i-1)/2;
};
var left = function(i) {
    return 2*i + 1;
};
var right = function(i) {
    return 2*i + 2;
};

var swap = function(a,b) {
    var t = a;
    a = b;
    b = t;
}

var minHeap = new MinHeap(100);
minHeap.insertKey(3);
minHeap.insertKey(2);

minHeap.deleteKey(1);

minHeap.insertKey(15);
minHeap.insertKey(5);
minHeap.insertKey(4);
minHeap.insertKey(45);

console.log(minHeap.extractMin());
console.log(minHeap.getMin());
minHeap.decreaseKey(2,1);
console.log(minHeap.getMin());
