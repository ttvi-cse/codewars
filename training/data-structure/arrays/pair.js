/**
 * Created by John on 2/12/2017.
 */

/*
 1) Sort the array in non-decreasing order.
 2) Initialize two index variables to find the candidate
 elements in the sorted array.
 (a) Initialize first to the leftmost index: l = 0
 (b) Initialize second  the rightmost index:  r = ar_size-1
  3) Loop while l < r.
 (a) If (A[l] + A[r] == sum)  then return 1
 (b) Else if( A[l] + A[r] <  sum )  then l++
 (c) Else r--
 4) No candidates in whole array - return 0
 */

function hasArrayTwoCandidates(arr, sum) {
    arr.sort(function(a,b) {
        return a - b > 0;
    });

    var l = 0, r = arr[arr.length - 1];
    while (l < r) {
        if (arr[l] + arr[r] == sum)
            return true;
        else if (arr[l] + arr[r] < sum)
            l++;
        else
            r--;
    }

    return false;
}

function prntpairs(arr, sum) {
    var binmap = [];

    for (var i = 0; i < arr.length; i++) {
        var t = sum - arr[i];

        if (t >= 0 && binmap[t]) {
            console.log('Pair with given sum '
                            + sum + ' is (' + arr[i]
                            + ', ' + t + ')');
        }

        binmap[arr[i]] = true;
    }
}

// console.log(hasArrayTwoCandidates([1,2,3], 1));

prntpairs([1,2,3], 3);