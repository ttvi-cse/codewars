function Element(count, index, val) {
    this.count = count;
    this.index = index;
    this.val = val;
}
var ele = new Element(0,0,0);

var ele1 = new Element(0,0,1);

function mycomp(a,b) {
    return a.val < b.val;
}

function mycomp2(a,b) {
    if (a.count != b.count)
        return a.count < b.count;
    else
        return a.index > b.index;
}

function sortByFrequency(arr) {
    var element = [];

    for (var i = 0; i < arr.length; i++) {
        element[i] = new Element(0,i,arr[i]);
    }

    /* Sort the structure elements  according to value,
    we used stable sort so relative order is maintained.*/

    element.sort(mycomp);
    console.log(element);

    // initialize count of first element as 1
    element[0].count = 1;

    // Count occurences of remaining elements
    for (var i = 1; i < arr.length; i++) {
        if (element[i].val == element[i-1].val) {
            element[i].count += element[i-1].count + 1;

            // set count of previos element as -1, we are
            // do ing this because we'll again sort on the
            // basis of counts (if counts are equal than on
            // the basis of index
            element[i-1].count = -1;

            // Retain the first index (Remember first index
            // is always present in the first duplicate we
            // used stable sort.
            element[i].index = element[i-1].index;
        } else {
            element[i].count = 1;
        }
    }
    console.log(element);

    element.sort(mycomp2);

    console.log(element);

    for (var i = arr.length-1, index = 0; i >= 0; i--) {
        if (element[i].count != -1)
            for (var j = 0;j < element[i].count; j++)
                arr[index++] = element[i].val;
    }
}

var arr = [2, 5, 2, 8, 5, 6, 8, 8];
sortByFrequency(arr);
console.log(arr)