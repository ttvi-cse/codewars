function parseMolecule(formula) {
  while(/(\w+)(\d+)|\((\w+)\)(\d+)?/.test(formula)) {
    formula=formula.replace(/(\w+)(\d+)/,(m,p1,p2)=>{
      return p1.repeat(+p2);
    }).replace(/\((\w+)\)(\d+)?/,(m,p1,p2)=>{
      return p1.repeat(+p2>1?+p2:1);
    }); //
  }
  var obj={};
  var str=formula.split('');
  for(var i=0;i<str.length;i++) {
    if(obj[str[i]]==undefined) obj[str[i]]=0;
    obj[str[i]]++;
  }
  return obj;
}
console.log(parseMolecule('Mg(OH)2'));
// console.log(/(\(?)(\w+)(\d+)(\)?)/.exec('H2O'));