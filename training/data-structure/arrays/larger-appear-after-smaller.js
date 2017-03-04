function maxDiff(arr) {
    var max = 0;
    var l = 0, r = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i+1; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                if (arr[j] - arr[i] > max) {
                    max = arr[j] - arr[i];
                    l = i;
                    r = j;
                }
            }
        }
    }
    return [arr[l], arr[r]];
}

function maxDiff2(arr) {
    var max_diff = arr[1] - arr[0];
    var min_element = arr[0];
    var i = 0;
    for (i = 1; i < arr.length; i++) {
        if (arr[i] - min_element > max_diff)
            max_diff = arr[i] - min_element;
        if (arr[i] < min_element)
            min_element = arr[i];
    }
    return max_diff;
}

function maxDiff3(arr) {
    var diff = [];
    for (var i = 0; i < arr.length-1; i++ ) {
        diff[i] = arr[i+1] - arr[i];
    }
    console.log(diff);
    var max_diff = diff[0];
    for (var i = 1; i < arr.length -1; i++) {
        if (diff[i-1] > 0) {
            diff[i] += diff[i-1];
        }
        if (max_diff < diff[i]) {
            max_diff = diff[i];
        }
    }
    console.log(max_diff)
    return max_diff;
}

function maxDiff4(arr) {
    var diff = arr[1] - arr[0];
    var curr_sum = diff;
    var max_sum = curr_sum;

    for (var i = 1; i < n-1; i++) {
        diff = arr[i+1] - arr[i];
        if (curr_sum > 0)
            curr_sum += diff;
        else
            curr_sum = diff;

        if (curr_sum > max_sum)
            max_sum = curr_sum;
    }

    return max_sum;
}

console.log(maxDiff3([7,9,5,6,3,2]));