function getFloor(arr, x) {
    if (x < Math.min(...arr))
        return -1;

    var floor = arr[0];
    var min_distance = x - arr[0], distance = 0;

    for (var i = 1; i < arr.length; i++) {
        distance = x - arr[i];
        if (distance >= 0 && distance < min_distance) {
            min_distance = distance;
            floor = arr[i];
        }
    }
    return floor;
}

function ceil(arr) {

}

console.log(getFloor([1,2,8,10,10,12,19], process.argv[2]));