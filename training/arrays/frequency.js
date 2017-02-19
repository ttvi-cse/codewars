/**
 * 1. Sort array
 * 2. Construct the 2D arrays as
 * Index, Count
 * 3. Sort by count (consider indexes in case of tie)
 * 4. Print the elememts using indexes in the above 2D array.
 * @param arr
 */
function sortByFrequency(arr) {

}

function selectionSort(arr) {
    var indexs = [];
    for (var i = 0; i < arr.length; i++) {
        indexs.push(i);
    }

    for (var i = 0; i < arr.length; i++) {
        var min = i;
        for (var j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        var t  = arr[i];
        arr[i] = arr[min];
        arr[min] = t;

        var t2 = indexs[i];
        indexs[i] = indexs[min];
        indexs[min] = t2;

        console.log('arr: ' + arr);
        console.log('indexs: ' + indexs);

        var htable = [];
        for (var i = 0; i < arr.length; i++) {
            if (!htable[arr[i]])
                htable[arr[i]] = 0;

            htable[arr[i]]++;
        }
        console.log(htable);

        for (var i = 0; i < arr.length; i++) {
            var min = i;
            for (var j = i+1; j < arr.length; j++) {
                if (htable[arr[j]]<htable[arr[min]])
                    min = j;
            }
            var t = arr[i];
            arr[i] = arr[min];
            arr[min] = t;
        }
    }


    return arr;
}

function exchange(a,b) {
    var t = a;
    a = b;
    b = t;
}

console.log(selectionSort([2, 5, 2, 8, 5, 6, 8, 8]));