function foldArray(arr, runs) {
    // while runs > 0
    // loop foreach left half of array element
    // add element from left hafl to right half
    // run--

    // val l = 0
    // val r = arr.length -1
    // while l < r
    // arr[l] = arr[l] + arr[r]
    // l++ r--
    //
    const ha = Math.floor(arr.length/2)
    var l = 0, r = ha + 1;
    while (l < ha) {
        arr[l] = arr[l] + arr[r];
        l++;
        r++;
    }

    return arr;
}

console.log(foldArray([1,2,3,4], 1))