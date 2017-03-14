function findSimilarity(str,word){
    var regstr=word[0]+word.slice(1,-1).replace(/./g,'.')+word.slice(-1);
    var reg=new RegExp("^"+regstr+"$");
    return str.split(' ').filter(a=>reg.test(a));
}
console.log(findSimilarity("bag dog dig dot doog dogs","dog"));