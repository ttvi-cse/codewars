function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if  (numbers[i] + numbers[j] == target)
                return [i,j];
        }
    }
    return [];
}

function twoSum2(numbers, target) {
    numbers.sort((a,b) => a < b);
    var l = 0, r = numbers.length - 1, sum = 0;
    while (l < r) {
        sum = numbers[l] + numbers[r];
        if (sum < target)
            l++;
        else if (sum > target)
            r--
        else
            return [l,r];
    }
    return [];
}

console.log(twoSum2([1,2,3], 4))