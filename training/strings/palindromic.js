/**
 * for i = 0 to arr.length-1 // i += 1
 *      print arr[i];
 * for i = 0 to arr.length - 1 // i += 2
 *      for j = 0 to 1
 *          print arr[i+j]
 * for i = 0 to arr.length -1 // i += 3
 *      for j = 0 to 2
 *          print arr[i+j]
 * .......
 * for i = 0 to arr.length -1 // i += k
 *      for j = 0 to k - 1
 *          print arr[i+j]
 */
/**
 *
 * @param s
 * @returns {Array}
 */
function printPalindromic(s) {
    var str = s.split('');
    var arr = [];
    for (var k = 0; k < str.length; k++) {
        for (var i = 0; i < str.length - k; i++) {
            arr.push(slice(str, i, i+k).join(''));
        }
    }
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        if (isPalidromic(arr[i]))
            arr2.push(arr[i]);
    }
    return arr2;
}

function isPalidromic(arr) {
    if (arr.length == 1)
        return true;
    var l = 0, r = arr.length - 1;
    while (l < r) {
        if (arr[l++] != arr[r--])
            return false;
    }
    return true;
}

function slice(arr, start, end) {
    if (start > end || start > arr.length || end > arr.length)
        return;

    var temp_arr = [];
    for (var i = start; i <= end; i++) {
        temp_arr.push(arr[i])
    }
    return temp_arr;
}
var s = 'nitin';
console.log(printPalindromic(s));