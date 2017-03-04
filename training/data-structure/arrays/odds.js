/**
 * Created by John on 2/13/2017.
 */

function getOddOccurrence(arr) {
    for (var i = 0;  i < arr.length; i++) {
        var count = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++;
            }
        }

        if (count % 2 != 0)
            return arr[i];
    }

    return 'None';
}

function getOddOccurrence2(arr) {
    var res = 0;

    for (var i = 0; i < arr.length; i++) {
        res = res ^ arr[i];
    }

    return res;
}

console.log(getOddOccurrence2([1,2,3,2,3,1,3]));
