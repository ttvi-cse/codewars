/**
 * take an array arr return all element has sum equal n
 * @param arr
 * @param n
 */
function foo(arr,n) {
    var h=[];
    for(var i=0;i<arr.length-1;i++) {
        for(var j=i+1;j<arr.length;j++) {
            h[n-(arr[i]+arr[j])]=(arr[i]+arr[j]);
            if(h[arr[i]+arr[j]]&&arr.includes(h[arr[i]+arr[j]])) return [arr[i],arr[j],h[arr[i]+arr[j]]];
        }
    }
    return null;
}
console.log(foo([1, 2, 3, 5, 8, 13, 21, 34, 55],70));