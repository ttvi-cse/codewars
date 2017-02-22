function quickSort(arr, lo, hi) {
    if (hi <= lo)
        return;
    var j = partition(arr, lo, hi);
    quickSort(arr, lo, j-1);
    quickSort(arr, j+1, hi);
}

function partition(arr, lo, hi) {
    var i = lo, j = hi+1;
    var v = arr[lo];
    while (true) {
        while (arr[++i] < v)  {
            if (i == hi) break;
        }
        while (v < arr[--j])  {
            if (j == lo) break;
        }

        if (i >= j)
            break;

        var t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
        console.log(arr);
    }
    var t = arr[lo];
    arr[lo] = arr[j];
    arr[j] = t;
    return j;
}

var arr = [3,2,1,4];
quickSort(arr,0,arr.length-1);
console.log(arr);