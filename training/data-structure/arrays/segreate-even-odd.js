function segregateEvenOdd(arr) {
    var segreate_arr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0)
            segreate_arr.push(arr[i]);
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0)
            segreate_arr.push(arr[i]);
    }
    return segreate_arr;
}

function segregateEvenOdd2(arr) {
    var l = 0, r = arr.length - 1, t = 0;
    while (l < r) {
        while (arr[l] % 2 != 0 && l < r) {
            l++
        };
        while (arr[r] % 2 == 0 && l < r) {
            r--
        };
        if (l < r) {
            t = arr[l];
            arr[l] = arr[r];
            arr[r] = t;
            l++;
            r--
        }
        return arr;
    }
}

console.log(segregateEvenOdd2([12,34,45,9,8,90,3]));