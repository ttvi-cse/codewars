// TODO-fix 3 test case
// Test.assertEquals(SubstringTest("test", "lllt"),false);
// Test.assertEquals(SubstringTest("Codewars is sweet!", "is"),true);
// Test.assertEquals(SubstringTest("oBjSguHTou", "gUMeFUFnvX"),true);
function SubstringTest(str1, str2){
  console.log(str1);
  console.log(str2);
  var aux1=[];
  for(var i=2;i<=str1.length;i++) {
    for(var j=0;j<str1.length-i;j++) {
      aux1.push(str1.slice(j,j+i));
    }
  }
  console.log(aux1);
  for(var i=2;i<=str2.length;i++) {
    for(var j=0;j<str2.length-i;j++) {
      var s=str2.slice(j,j+i);
      if(!aux1.includes(s)) aux1.push(s);
      else {console.log('find '+s);return true;}
    }
  }
  return false;
}