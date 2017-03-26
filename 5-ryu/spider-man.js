function findEnemy(totalFloors,totalWindows,spiderPosition,spiderPower){
  var s='';
  do {
    s=getDirection();
    var x=0,y=0;
    if(/Left/.test(s)) x=-1;
    else if(/Right/.test(s)) x=1;
    if(/Up/.test(s)) y=1;
    else if(/Down/.test(s)) y=-1;
    spiderPosition[0]+=x;
    spiderPosition[1]+=y;
    moveTo(spiderPosition[0],spiderPosition[1]);
    spiderPower--;
  } while(s!='Catched!'&&spiderPower>0)
  return `Floor:${spiderPosition[0]},Window:${spiderPosition[0]}`;
}
var step=0;
function bin2DSearch(arr,l,r,key) {
  var mid=Math.floor((l+r)/2);
  if(arr[mid]==key) return step;
  else if(arr[mid]<key) {step++;bin2DSearch(arr,l,mid);}
  else if(arr[mid]>key) {step++;bin2DSearch(arr,mid+1,r);}
  return step;
}
var arr=[];
for(var i=0;i<1000;i++) {
  arr[i]=[];
  for(var j=0;j<1000;j++) {
    arr[i][j]=i*1000+j;
  }
}
console.log()
console.log(arr[999][999]);
// var floors=10000,windows=10000,spider=[1,1],enemy=[1,10000],power=16;
// findEnemy(floors,window,spider,enemy,power);
