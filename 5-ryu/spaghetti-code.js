var spaghettiCode = function(plate) {;
  return plate
          .map(a=>a.join('').split(/_+|\s+/).reduce((a,e,i)=>e.length>a.length?e:a))
          .reduce((a,e,i)=>e.length>a.length?e:a).slice(-1);
}
var spaghettiCode2 = function(plate) {
  for(var i=0;i<plate.length;i++) {
    for(var j=0;j<plate[i].length;j++) {

    }
  }
}
var plate = [
  'AAAAAAAAA      '.split(''),
  '________A__CCC_'.split(''),
  ' B   C  A    C '.split(''),
  '_B___C__A____C_'.split(''),
  ' B   C       C '.split(''),
  '_B___CCCCCCCCC_'.split('')
];
console.log(spaghettiCode(plate));

