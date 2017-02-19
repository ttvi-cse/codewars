/**
 * This mehod merges by first copying into the auxiliary array
 * aux[] the mergin back to a[].
 * @param a
 * @param lo
 * @param mid
 * @param hi
 */
function merge(a, lo, mid, hi) {
    var i = lo, j = mid + 1;
    var aux = [];
    for (var k = lo; k <= hi; k++) {
        aux[k] = a[k];
    }
    console.log(aux);
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

var arr = "eegmracert".split('');

var lo = 0;
var hi = arr.length -1;
var mi = (lo + hi) / 2;

merge(arr,lo,mi,hi);

// console.log(arr);

