function max_heap(arr) {
    const heap_size = arr.length;
    var tmp = [];

    for (var i = 0; i < arr.length; i++) {
        tmp [i + 1] = arr[i];
    }

    for (var i = heap_size/2; i >= 1; i--) {
        max_heapify(tmp,i);
    }

    for (var i = 1; i <= heap_size; i++) {
        arr[i-1] = tmp[i];
    }
}
function max_heapify(arr, i) {
    var largest = 0, t = 0;
    var l = i * 2;
    var r = i * 2 + 1;

    if (l <= arr.length && arr[l] > arr[i]) {largest = l;}
    else largest = i;

    if (r <= arr.length && arr[r] > arr[largest]) largest = r;

    if (largest != i) {
        t = arr[i];
        arr[i] = arr[largest];
        arr[largest] = t;
        max_heapify(arr, largest);
    }
}

var arr = [4,1,3,2,16,9,10,14,8,7];
max_heap(arr);
console.log(arr);