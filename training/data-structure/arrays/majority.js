function mySolution(arr, num) {
    const n = arr.length;
    var count = 0;

    for (var i = 0; i < n; i++) {
        if (arr[i] == num)
            count++;
    }

    return count > n/2;
}

function simple(arr, num) {
    const n = arr.length;
    for (var i = 0; i < n; i++) {
        if (arr[i] == num && arr[i+n/2] == num)
            return 1;
    }
    return 0;
}

console.log(simple([1, 2, 3, 3, 3, 3, 10],3));