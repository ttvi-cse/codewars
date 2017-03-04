/**
 * 4,3,7,8,6,2,1
 * 3,4
 * 3,7,4
 * 3,7,4,8
 * 3,7,4,8,6
 * 3,7,4,8,2,6
 * 3,7,4,8,2,6,1
 * /
**
 *
 * @param arr
 */
function zigzag(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        console.log(arr);
        if (isOdd(i)) {
            if (arr[i] < arr[i+1]) {
                var t = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = t;
            }
        } else {
            if (arr[i] > arr[i+1]) {
                var t = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = t;
            }
        }

    }
}

function isOdd(a) {
    return !(a%2 == 0);
}

var arr = [4,3,7,8,6,2,1];
zigzag(arr);
console.log(arr);