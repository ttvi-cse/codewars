function getInvCount(arr) {
    var inv_count = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            if (arr[i] > arr[[j]])
                inv_count++;
        }
    }

    return inv_count;
}

console.log(getInvCount([2,4,1,3,5]));