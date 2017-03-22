// close open
// 5 sec
// pause resume
// based obstacle detection -> reverse move
// . P O
// P....P....P1 -> 123454321000
// P-1 P 4 [05]-> close open
// OP-22 .PO-232
function door(events) {
  var str=events.split('');
  var res='',stat=0,one=1;
  var first=false, pause=false;
  for(var i=0;i<str.length;i++) {
    if(str[i]=='P')  {
      if(!first) {
        first=true;
        stat+=one;
      } else {
        if(stat==0||stat==5) {pause=false;one=-one;stat+=one;}
        else {
          pause=!pause;
          if(!pause) stat+=one;
        }
      }
    } else if(str[i]=='O') {
      one=-one;
      stat+=one;
    } else if(str[i]=='.') {
      if(!pause&&first) stat+=one;
    }
    if(stat>5) stat=5;
    else if(stat<0) stat=0;
    res+=stat;
  }
  return res;
}
console.log(door('..P...O.....'));