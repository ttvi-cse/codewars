function min_heap(arr) {
    var size = arr.length;
    for (var i = Math.floor(size/2); i > 1; i--) {
        heapify(arr, i);
    }
}

function min_heapify(arr, i) {
    var l = left(i);
    var r = right(i);
    var smallest = i;

    if (l < arr.length && arr[l] < arr[i]) {smallest = l;}
    else smallest = i;

    if (r < arr.length && arr[r] < arr[smallest]) smallest = r;

    if (smallest != i) {
        var t = arr[i];
        arr[i] = arr[smallest];
        arr[smallest] = t;
        min_heapify(arr, smallest);
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
console.log(parent(3));
min_heapify(arr);
console.log(arr);