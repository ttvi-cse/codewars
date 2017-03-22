function parseHTMLColor(color) {
  var s=[];
  if(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.test(color)) {
    s=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(color);
    return {r:Number('0x'+s[1]),g:Number('0x'+s[2]),b:Number('0x'+s[3])};
  } else if(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(color)) {
    s=/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(color);
    return {r:Number('0x'+s[1]+s[1]),g:Number('0x'+s[2]+s[2]),b:Number('0x'+s[3]+s[3])};
  }
  return PRESET_COLOR[color];
}
console.log(parseHTMLColor('#3B7'));