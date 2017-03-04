function printLeaders(arr) {
    var leaders = [];
    for (var i = 0; i < arr.length; i++) {
        var j = i + 1;
        for( ; j < arr.length; j++) {
            if (arr[i] < arr[j])
                break;
        }
        if (j == arr.length)
            leaders.push(arr[i]);
    }
    return leaders;
}

function printLeaders2(arr) {
    var max = arr[arr.length - 1];
    var leaders = [];
    leaders.push(max);
    for (var i = arr.length - 2; i >= 0; i--) {
        if (arr[i] > max) {
            max = arr[i];
            leaders.push(max);
        }
    }
    return leaders;
}
console.log(printLeaders2([16, 17, 4, 3, 5, 2]));