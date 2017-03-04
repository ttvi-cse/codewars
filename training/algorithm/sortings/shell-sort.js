function shellSort(arr) {
    const n = arr.length;
    var h = 1;
    while (h < n/3) h = 3*h +  1;
    while (h >= 1) {
        for (var i = h; i < n; i++) {
            for (var j = i; j >= h && arr[j] < arr[j-h]; j-=h) {
                var t = arr[j];
                arr[j] = arr[j-h];
                arr[j-h] = t;
            }
        }
        h = h/3;
    }
}

var arr = [2,5,3,6,1000,2,2,6,7,8,12];
shellSort(arr);
console.log(arr);