function findDuplicatePhoneNumbers(phoneNumbers){
  //coding and coding..
  const m=['','abc','def','ghi','jkl','mno','prs','tuv','wxy'];
  var arr=phoneNumbers.map(a=>a.replace(/-/g,'').split('').map(a=>foo(a)).join(''));
  var obj=arr.reduce((a,b)=>{if(b in a) a[b]++; else a[b]=1;return a;},{});
  var r_arr=[];
  for(var e in obj) {
    if(obj[e]>1) r_arr.push(`${e};${obj[e]}`);
  }
  return r_arr;
  function foo(s) {
    if(!isNaN(Number(s))) return Number(s);
    var r=-1;
    for(var i=1;i<m.length;i++)
      if(new RegExp(s,'i').test(m[i])) {r=i+1;break;}
    return r;
  }
}
console.log(findDuplicatePhoneNumbers([
  "4873279",
  "ITS-EASY",
  "888-4567",
  "3-10-10-10",
  "888-GLOP",
  "TUT-GLOP",
  "967-11-11",
  "310-GINO",
  "F101010",
  "888-1200",
  "-4-8-7-3-2-7-9-",
  "487-3279"]));