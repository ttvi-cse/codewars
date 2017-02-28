/**
 * [1, 56, 58, 57, 90, 92, 94, 93, 91, 45]
 * 1,56,58
 * 57,90,92,94,
 * 93,
 * 91
 * 45
 * index
 * count
 * max
 * i
 * one loop
 *
 */
/**
 *
 * @param arr
 * @returns {number}
 */
function lengthLastestContigous(arr) {
    var count =  1, max = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i-1]) {
            console.log(`${arr[i]} > ${arr[i-1]}`);
            count++;
        } else {
            console.log(`${arr[i]} < ${arr[i-1]}`);
            if (count > max) {
                max = count;
            }
            count = 1;
        }
    }
    return max;
}
var arr = [1, 56, 58, 57, 90, 92, 94, 93, 91, 45];
console.log(lengthLastestContigous(arr));