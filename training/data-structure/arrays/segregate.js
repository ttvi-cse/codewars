function getSegregate(arr) {
    return arr.sort((a,b) => a > b);
}

function getSegregate2(arr) {
    var count_0 = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 0)
            count_0++;
    }

    for (var i = 0; i < arr.length; i++) {
        if (i < count_0)
            arr[i] = 0;
        else
            arr[i] = 1;
    }
    return arr;
}

function getSegregate3(arr) {
    var left = 0, right = arr.length -1;
    while (left < right) {
        while (arr[left] == 0 && left < right) {
            left++;
        }

        while (arr[right] == 1 && left < right) {
            right--;
        }

        if (left < right) {
            arr[left] = 0;
            arr[right] = 1;
            left++;
            right--;
        }
    }
    return arr;
}

var t0 = Date.now();
console.log(getSegregate3([0, 1, 0, 1, 0, 0, 1, 1, 1, 0]))
var t1 = Date.now();
console.log(t1-t0 + ' milliseconds.');