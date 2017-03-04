function mergeSort(arr, lo, hi) {
    console.log(lo, hi);
    if (hi <= lo)
        return;
    var mid = lo + Math.floor((hi - lo)/2);
    mergeSort(arr, lo, mid);
    mergeSort(arr, mid+1, hi);
    merge(arr, lo, mid, hi);
}
/**
 * This mehod merges by first copying into the auxiliary array
 * aux[] the mergin back to a[].
 * @param a
 * @param lo
 * @param mid
 * @param hi
 */
function merge(a, lo, mid, hi) {
    console.log('merge: ' + lo + ' ' + hi);
    var i = lo, j = mid + 1;
    var aux = [];
    for (var k = lo; k <= hi; k++) {
        aux[k] = a[k];
    }
    for (var k = lo; k <= hi; k++) {
        // left half exhausted (take from the right)
        if (i > mid)
            a[k] = aux[j++];
        // right half exhausted (take from the left)
        else if (j > hi)
            a[k] = aux[i++];
        // current key on right less than current key on left
        // (take from the righ)
        else if (aux[j] < aux[i])
            a[k] = aux[j++];
        // current key on right greater than or equal to
        // current key on left (take from the left)
        else
            a[k] = aux[i++];
    }
}

var arr = [2,5,3,6,1000,2,2,6,7,8,12];
mergeSort(arr, 0, arr.length-1);
console.log(arr);