function findAB(numbers,c){
    var ht=[];
    for(var i=0;i<numbers.length;i++) {
        if(ht[c/numbers[i]]==numbers[i])
            return [c/numbers[i],ht[c/numbers[i]]];
        ht[numbers[i]]=c/numbers[i];
    }
    return null;
}

console.log(findAB([1,2,3],6));