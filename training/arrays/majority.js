/**
 * Created by John on 2/13/2017.
 */

function findCandidate(arr) {
    var map = {};

    for (var i = 0; i < arr.length; i++) {
        if (!map.hasOwnProperty(arr[i]))
            map[arr[i]] = 1;
        else
            map[arr[i]]++;
    }

    var sortable = [];
    for (var candidate in map) {
        sortable.push([candidate, map[candidate]]);
    }

    sortable.sort(function(a,b) {
        return a[1] - b[1] < 0;
    })

    return sortable[0][1] >= arr.length/2 ? sortable[0][0] : 0;
}

function findCandidate2(arr) {
    for (var i = 0; i < arr.length; i++) {
        var count = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] = arr[i]) {
                count++;
            }

            if (count >= arr.length/2)
                return arr[i];
        }
    }
}

function findCandidate3(arr) {
    var maj_index = 0, count = 1;

    for (var i = 1; i < arr.length; i++) {
        if (arr[maj_index] == arr[i]) {
            count++;
        } else {
            count--;
        }

        if (count == 0) {
            maj_index = i;
            count = 1;
        }

    }

    return arr[maj_index];
}

function isMajority(arr, cand) {
    var count = 0;

    for (var i = 0; i < arr.length; i++) {
        if (cand == arr[i])
            count++;
    }

    return count > arr.length/2;
}

function printMajority(arr) {
    var candidate = findCandidate3(arr);

    if (isMajority(arr, candidate))
        console.log(candidate)
    else
        console.log('None');
}

printMajority([1,2,1,2,2,1,1,1])
