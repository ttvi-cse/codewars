function bubbleSort(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        for (var j = 1; j <= i; j++) {
            if (arr[j] < arr[j-1]) {
                var t = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = t;
            }
        }
    }
}

var arr = [2,5,3,6,1000,2,2,6,7,8,12];
bubbleSort(arr);
console.log(arr);