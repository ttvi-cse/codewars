function simple(arr) {
    arr.sort((a,b) => a > b);
    return arr.length < 2 ? null : [arr[0], arr[1]];
}

function better(arr) {

}

function efficient(arr) {
    var first = 100, second = 100;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < first) {
            second = first;
            first = arr[i];
        } else if (arr[i] < second) {
            second = arr[i];
        }
    }

    return [first, second];
}

console.log(efficient([1,3,4,5,6,2]));