function buildHeap(arr) {
    var size = arr.length;
    for (var i = Math.floor(size/2); i > 1; i--) {
        heapify(arr, i);
    }
}