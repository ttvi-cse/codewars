/**
 * Loop from left - 1 to right -1
 *      if element i equal element
 *          increase counter 1
 * @param arr
 * @param left
 * @param right
 * @param element
 * @returns {number}
 */
function findFrequency(arr, left, right, element) {
    if (left > right || left > arr.length || right > arr.length)
        return - 1;
    var f = 0;
    for (var i = left - 1; i < right - 1; i++) {
        if (arr[i] == element) {
            f++
        }
    }
    return f;
}

// TODO - implement effecient algorithm using hash
function findFrequency2(arr, left, right, element) {

}

var arr = [2, 8, 6, 9, 8, 6, 8, 2, 11];
console.log(findFrequency(arr, 2,8,8));
console.log(findFrequency(arr,2,5,6))