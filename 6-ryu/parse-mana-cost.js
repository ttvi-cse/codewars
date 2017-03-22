String.prototype.parseManaCost=function(){
  if(/^\d*[wubrg]*$/i.test(this)) {
    var str;
    var obj={};
    var s=this.match(/^\d+/)?+this.match(/^\d+/)[0]:null;
    if(s&&s>0) obj={'*':s};
    str=this.replace(/^\d+/,'').split('').map(a=>a.toLowerCase());
    for(var i=0;i<str.length;i++) {
      if(!obj[str[i]]) obj[str[i]]=0;
      obj[str[i]]++;
    }
  } else if(/^0*$/.test(this)) {
    return {};
  }
  return null;
}
console.log('\n2R'.parseManaCost());