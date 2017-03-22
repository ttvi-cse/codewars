function findAB(numbers,c){
    if(c==0&&numbers.includes(0)) return [numbers[0],0];
    var ht=[],a=0,b=0;
    for(var i=0;i<numbers.length;i++) {
        a=numbers[i];
        b=c/a;
        if(numbers.includes(b)) {
            ht[b]=a;
        }
    }
    console.log(ht);
    for(var e in ht) {if(e*ht[e]==c) return [+e,+ht[e]];}
    return null;
}

console.log(findAB([-3,-2,-2,-1,0,1,2,3,4],4));