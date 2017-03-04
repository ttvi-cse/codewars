function union(arr1, arr2) {
    var union_array = [];
    for (var i = 0; i < arr1.length; i++) {
        union_array[i] = arr1[i];
    }
    console.log(union_array);
    for (var i = 0; i < arr2.length; i++) {
        var c = false;
        for (var j = 0; j < union_array.length; j++) {
            if (arr2[i] == union_array[j]) {
                c = true;
                break;
            }
        }
        if (c)
            continue;
        union_array.push(arr2[i]);
    }
    console.log(union_array);
}

function intersection(arr1, arr2) {
    var intersec_array = [];
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j])
                intersec_array.push(arr1[i]);
        }
    }
    return intersec_array;
}

function union2(arr1, arr2) {
    var i = 0, j = 0;
    var union_array = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j])
            union_array.push(arr1[i++]);
        else if (arr2[j] < arr1[i])
            union_array.push(arr2[j++]);
        else {
            union_array.push(arr2[j++]);
            i++;
        }
    }

    while (i < arr1.length) {
        union_array.push(arr1[i++]);
    }
    while (j < arr2.length) {
        union_array.push(arr2[j++]);
    }
    return union_array;
}

function intersection2(arr1, arr2) {
    var i = 0, j = 0;
    var intersec_array = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j])
            i++;
        else if (arr2[j] < arr1[i])
            j++;
        else {
            intersec_array.push(arr1[i++]);
            j++;
        }
    }
    return intersec_array;
}
var arr1 = [1,3,4,5,7];
var arr2 = [2,3,5,6];
console.log(intersection2(arr1,arr2));