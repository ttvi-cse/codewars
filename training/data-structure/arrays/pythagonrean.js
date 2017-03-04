function printPythagorean(arr) {
    for (var i = 0; i < arr.length - 2; i++) {
        for (var j = i+1; j < arr.length - 1; j++) {
            for (var k = j+1; k < arr.length; k++) {
                console.log(`checking ${[arr[i], arr[j], arr[k]]}`);
                if (Math.pow(arr[i], 2) == (Math.pow(arr[j], 2) + Math.pow(arr[k], 2))||
                    Math.pow(arr[j], 2) == (Math.pow(arr[i], 2) + Math.pow(arr[k], 2)) ||
                    Math.pow(arr[k], 2) == (Math.pow(arr[i], 2) + Math.pow(arr[j], 2))) {
                    return [arr[i], arr[j], arr[k]];
                }
            }
        }
    }
    return [];
}

var arr = [3,1,4,6,5];
console.log(printPythagorean(arr));