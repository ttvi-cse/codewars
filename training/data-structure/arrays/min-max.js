function Pair(min, max) {
    this.min = min;
    this.max = max;
}


function getMinMax(arr){
    var min = 100, max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min)
            min = arr[i];
        else if (arr[i] > max)
            max = arr[i];
    }
    return [min, max];
}

function getMinMax2(arr, low, high) {
    var mid = 0, mml = 0, mmr = 0, minmax = new Pair(0,0);
    if (arr.length == 1) {
        minmax.min = arr[low];
        minmax.max = arr[high];
        return minmax;
    }

    if (high == low + 1) {
        if (arr[low] > arr[high]) {
            minmax.min = arr[low];
            minmax.max = arr[hight];
        } else {
            minmax.min = arr[high];
            minmax.max = arr[low];
        }
        return minmax;
    }

    mid = (low+high)/2;
    mml = getMinMax(arr, low, mid);
    mmr = getMinMax(arr, mid+1, high);

    if (mml.min < mmr.min)
        minmax.min = mml.min;
    else
        minmax.min = mmr.min;

    if (mml.max > mmr.max)
        minmax.max = mml.max;
    else
        minmax.max = mmr.max;

    return minmax;
}

console.log(getMinMax2([1,2,3,4,5]));