/**
 * lit of size N, initalized with zeroes.
 * for every operation, given three integers a,b,k
 * add value k to all elements ranging from index a to b (inclusive)
 * n m
 * m lines contain three integers a, b, k
 * list from 1 ot n
 * 5 3
 * 1 2 k
 * [0,0,0,0,..,n]
 * @param input
 */
function processData(input) {
    var lines=input.split('\n');
    var n=+lines[0].split(' ')[0];
    var m=+lines[0].split(' ')[1];
    var arr=[];
    for(var i=0;i<n;i++) {
        arr[i]=0;
    }
    for(var i=1;i<=m;i++) {
        // console.log(arr);
        var a = +lines[i].split(' ')[0];
        var b = +lines[i].split(' ')[1];
        var k = +lines[i].split(' ')[2];
        for(var j=a;j<=b;j++) {
            arr[j-1]+=k;
        }
    }
    for(var i=0,max=Number.MIN_VALUE;i<arr.length;i++) {
        if(arr[i]>max) max=arr[i];
    }
    console.log(max);
}
const input=
    '5 3\n' +
    '1 2 100\n' +
    '2 5 100\n' +
    '3 4 100';
processData(input);