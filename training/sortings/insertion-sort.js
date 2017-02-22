function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        for (var j = i; j > 0; j--) {
            if (arr[j] < arr[j-1]) {
                var t = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = t;
            }
        }
    }
}

var arr = [2,5,3,6,2,2,6,7,8,12];
insertionSort(arr);
console.log(arr);