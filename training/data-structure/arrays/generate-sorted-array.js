/**
 *
 * 10 20
 * 10 20 25 30
 * 10 30
 * 15 20
 * 15 20 25 30
 * 15 30
 * 25 30
 */
/***
 * a,b,c,d,e,f
 * 1,2,3,4,5,6
 * a,1
 * a,1,b
 * a,1,b,2
 */
/**
 * 1. for s = 0 to arr1.length - 1
 *      print arr1[i];
 *      2. while (arr2[j++] > arr[i]);
 *      print arr2[j];
 *      3.while (arr1[i++] > arr[j];
 *      print arr[i]
 *      if (j < arr2.length) go to step 2
 */
/**
 * TODO - implement generate all sorted array from two array
 * @param arr1
 * @param arr2
 */
function generate(arr1, arr2) {
    var j = 0;
    for (var i = 0; i < arr1.length; i++) {
        console.log(`beginning with ${arr1[i]}`);
        while (arr2[j] < arr1[i] && j < arr2.length) {
            console.log(`${arr2[j]} < ${arr1[i]}`)
            j++;
        };
        console.log(arr2[j]);
        j = 0;
    }
}

function solution(arr1, arr2, flag) {
    if (flag) {
        if (true);
    }
}

var arr1 = [10,15,25];
var arr2 = [1,5,20,30];
// console.log();
generate(arr1,arr2)
