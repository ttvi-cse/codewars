/**
 * Created by John on 2/14/2017.
 */


function maxSubArraySum(arr) {
    var max_so_far = 0, max_ending_here = 0;
    var start  = 0, end = 0, s = 0;

    for (var i = 0; i < arr.length; i++) {
        max_ending_here = max_ending_here + arr[i];

        if (max_so_far < max_ending_here) {
            max_so_far = max_ending_here;
            start = s;
            end = i;
        }

        if (max_ending_here < 0) {
            s = i + 1;
            max_ending_here = 0;
        }
    }

    return [max_so_far, arr.slice(start,end+1)];
}

console.log(maxSubArraySum([-2, -3, 4, -1, -2, 1, 5, -3]));