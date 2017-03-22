/**
 *
 * @param arr
 * @returns {*}
 */
function sortArray(arr) {
    // Return a sorted array.
    var min=Number.MAX_VALUE;
    for(var i=0;i<arr.length;i++) {
        min=i;
        for(var j=i;j<arr.length;j++) {
            if(arr[j]%2!=0&&arr[j]<arr[min]) min=j;
        }
        if(arr[i]%2!=0) {
            var t=arr[i];
            arr[i]=arr[min];
            arr[min]=t;
        }
        // console.log(arr);
    }
    return arr;
}
var arr1=[5, 3, 2, 8, 1, 4];
var arr2=[5, 3, 1, 8, 0];
console.log(sortArray(arr1));
console.log(sortArray(arr2));
