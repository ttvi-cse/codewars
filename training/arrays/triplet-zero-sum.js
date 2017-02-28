function findTriplet(arr) {
    for (var i = 0; i < arr.length -2; i++) {
        for (var j = i+1; j < arr.length - 2; j++) {
            for (var k = j+1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] == 0)
                    return [arr[i], arr[j], arr[k]];
            }
        }
    }
    return [];
}
/**
 * Run a loop from i = 0 to n - 2
 *  Create a empty hash table
 *  Run inner loop from i+1 to n -1
 *      if -(arr[i] + arr[j]) is present in hash table
 *          print arr[i] arr[j] and -(arr[i] + arr[j])
 *      else
 *          insert arr[j] to hash table
 * @type {[*]}
 */
function findTriplet2(arr) {
    var ht = [];
    for (var i = 0; i < arr.length - 2; i++) {
        for (var j = i+1; j < arr.length - 1; j++) {
            if (ht[-(arr[i] + arr[j])] == 1) {
                console.log([arr[i], arr[j], -(arr[i] + arr[j])]);
            } else {
                ht[-(arr[i] + arr[j])] = 1;
                console.log(ht);
            }

        }
    }
    // console.log(ht);
    // for (var i = 0; i < ht.length; i++)
    //     console.log(ht[i]);
}
var arr = [0, -1, 2, -3, 1];
findTriplet2(arr);