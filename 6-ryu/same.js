/**
 * Created by John on 2/8/2017.
 */


function comp(array1, array2){
    //your code here
    array1.sort(function(a,b) {return a > b});
    array2.sort(function(a,b) {return a > b});

    // console.log(array1, array2);

    for (var i = 0; i < array1.length; i++) {
        array1[i] = Math.pow(array1[i], 2);
    }

    // console.log(array1, array2);

    for (var i = 0; i < array2.length; i++) {
        if (array2[i] != array1[i])
            return false;
    }

    return true;
}

a1 = [67, 15, 42, 9, 33];
a2 = [4489, 225, 1764, 81, 1089];
console.log(comp(a1, a2));