function checkPair(arr) {
    var sum = 0, rest_sum = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            sum = arr[i] + arr[j];
            console.log(`Checking arr[${i},${j}] with sum=${sum}`);
            for (var k = 0; k < arr.length; k++) {

                if (arr[k] != arr[i] && arr[k] != arr[j])
                    rest_sum += arr[k];
            }
            console.log(`Sum of rest elements is ${rest_sum}`);
            if (sum == rest_sum)
                return true;

            rest_sum = 0;
        }
    }
    return false;
}

// TODO - implement efficient solution
function checkPair2(arr) {

}

var arr = [2,11,5,1,4,7];
console.log(checkPair(arr));