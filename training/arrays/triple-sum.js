function countTriplets(arr, sum) {
    var count = 0;
    var tmp_arr = [];
    for (var i = 0; i < arr.length - 2; i++) {
        for (var j = i+1; j < arr.length - 1; j++) {
            for (var k = j + 1; k < arr.length; k++) {
                tmp_arr.push(arr[i] + arr[j] + arr[k]);
                if (arr[i] + arr[j] + arr[k] < sum)
                    count++;
            }
        }
    }
    console.log(tmp_arr);
    return count;
}
var arr = [-2, 0, 1, 3];
console.log(countTriplets(arr, 2));