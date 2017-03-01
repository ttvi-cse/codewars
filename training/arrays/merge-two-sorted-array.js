function merge(arr1, arr2) {
    var i = 0, j = 0;
    var aux = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j])
            aux.push(arr1[i++]);
        else if (arr1[i] > arr2[j])
            aux.push(arr2[j++]);
    }
    while (i < arr1.length) {
        aux.push(arr1[i++]);
    }
    while (j < arr2.length) {
        aux.push(arr2[j++]);
    }
    return aux;
}

var arr1 = [1,3,5,7];
var arr2 = [2,4,6,8,9,10];
console.log(merge(arr1,arr2));