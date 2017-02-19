/**
 * Created by John on 2/14/2017.
 */

function reverse(arr) {
    var start = 0, end  = arr.length - 1;

    while(start < end) {
        var tmp = arr[start];
        arr[start] = arr[end];
        arr[end] = tmp;
        start++;
        end--;
    }

    return arr;
}

console.log(reverse([1,2,3,4,5,6]));
