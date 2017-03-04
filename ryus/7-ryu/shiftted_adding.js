/**
 * Created by John on 2/14/2017.
 */


function addingShifted (arrayOfArrays, shift) {
    var result = [], length = arrayOfArrays[0].length + shift * (arrayOfArrays.length -1);
    for (var i = 0; i < length; i++) {
        result.push(0);
    }
    for(var i = 0; i < arrayOfArrays.length; i++) {
        for (var j = 0; j < arrayOfArrays[i].length; j++) {
            result[j + shift*i] += arrayOfArrays[i][j];
        }
    }

    return result;
}
var arrayOfArrays = [[1, 2, 3, 4, 5, 6], [7, 7, 7, 7, 7, -7]];
console.log(addingShifted(arrayOfArrays, 0));