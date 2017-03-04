function getKLargest(arr, k) {
    var t = 0, swap_count = 0;
    do {
        swapped = false;
        var lastest = arr.length - swap_count;
        for (var i = 1; i <= lastest; i++) {
            if (arr[i] > arr[i+1]) {
                t = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = t;
                swapped = true; swap_count++;
            }
        }
    } while (swapped);
}

function getKLargest2(arr, k) {
    const n = arr.length;
    var t = 0;
    for (var i = n - 1; i > n - k; i--) {
        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                t = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = t;
            }
        }
    }
    return [arr[n-1], arr[n-2], arr[n-3]];
}

function getKLargest3(arr, k) {
    const n = arr.length;
    var min = 100, min_index = 0, tmp = [];
    for (var i = 0; i < k; i++) {
        tmp[i] = arr[i];
        if (tmp[i] < min) {
            min = tmp[i];
            min_index = i;
        }
    }

    for (var i = k; i < n; i++) {
        // console.log(min);
        if (arr[i] > min) {
            tmp[min_index] = arr[i];

        }

        // console.log(tmp);
        min = 100;
        for (var j = 0; j < k; j++) {
            if (tmp[j] < min) {
                min = tmp[j];
                min_index = j;
            }
        }
        // console.log(min, min_index);
    }
    return tmp;
}

function getKLargest4(arr, k) {
    max_heap(arr);
    console.log(arr);
    return [arr[0], arr[1], arr[2]];
}

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

var arr =  [1, 23, 12, 9, 30, 2, 60, 50] ;
console.log(getKLargest4(arr, 3));