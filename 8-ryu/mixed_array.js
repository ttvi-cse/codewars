/**
 * Created by John on 2/14/2017.
 */

function sumMix(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            sum += parseInt(arr[i]);
        } else {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(sumMix([9, 3, '7', '3']))
