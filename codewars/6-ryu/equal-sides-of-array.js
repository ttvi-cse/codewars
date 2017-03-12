function findEvenIndex(arr) {
    for(var i=0,lsum=0;i<arr.length;i++) {
        lsum+=arr[i];
        for (var j=i+2,rsum=0;j<arr.length;j++) rsum+=arr[j];
        if (lsum==rsum)
            return i+1;
    }
    return -1;
}
console.log(findEvenIndex([1,2,3,4,3,2,1]));
console.log(findEvenIndex([1,100,50,-51,1,1]));
