function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var min = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min])
                min = j;
        }
        var t = arr[i];
        arr[i] = arr[min];
        arr[min] = t;
    }
}

function exchange(a,b) {
    var t = a;
    a = b;
    b = t;
}

var arr = [2,5,3,6,2,2,6,7,8,12];
selectionSort(arr);
console.log(arr);