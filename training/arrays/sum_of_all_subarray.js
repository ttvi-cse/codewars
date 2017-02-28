function sumOfSubarrays(arr) {
    var sum_one = 0;
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        sum_one += arr[i];
    }
    var sum_two = 0;
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
            sum_two += arr[i] + arr[j];
        }
    }
    var sum_three = 0;
    for (var i = 0; i < arr.length -2; i++) {
        for (var j = i + 1; j < arr.length - 1; j++) {
            for (var k = j + 1; k < arr.length; k++) {
                console.log(arr[i], arr[j], arr[k]);
                sum_three += arr[i] + arr[j] + arr[k];
            }
        }
    }
    return sum_one + sum_two + sum_three;
}
/**
 * pick starting point
 * pick ending point
 * sum subarray between current
 * starting and ending points
 * @param arr
 */
function sumOfSubarrays2(arr) {
   var sum = 0;
   for (var i = 0; i < arr.length; i++) {
       for (var j = i; j < arr.length; j++) {
           for (var k = i; k <= j; k++) {
               sum += arr[k];
           }
       }
   }
   return sum;
}
var arr = [1,2,3];
console.log(sumOfSubarrays2(arr));