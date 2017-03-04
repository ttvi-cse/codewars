function max_heap(arr) {
    for (var i = Math.floor(arr.length/2); i >= 0; i--) {
        max_heapify(arr,i);
    }
}
function max_heapify(arr, i) {
    var l = left(i);
    var r = right(i);
    var largest = 0;

    if (l < arr.length && arr[l] > arr[i]) {largest = l;}
    else largest = i;

    if (r < arr.length && arr[r] > arr[largest]) largest = r;

    if (largest != i) {
        var t = arr[i];
        arr[i] = arr[largest];
        arr[largest] = t;
        max_heapify(arr, largest);
    }
}

function heap_sort(arr) {
    max_heap(arr);
    console.log(`max_heap - ${arr}`);
    for (var i = arr.length - 1;  i >= 0; i--) {
        console.log(`Move current root to end`);
        var t = arr[0];
        arr[0] = arr[i];
        arr[i] = t;
        console.log(arr);
        console.log(`call max heapify on the reduced heap`)
        // TODO - bug in max_heapify (arr, n, i)
        max_heapify(arr, i);
        console.log(arr);
    }
}

function parent(i) {
    return Math.floor((i-1)/2);
}

function left(i) {
    return i*2 + 1;
}

function right(i) {
    return i*2 + 2;
}

var arr = [4,1,3,2,16,9,10,14,8,7];
heap_sort(arr);
console.log('result');
console.log(arr);