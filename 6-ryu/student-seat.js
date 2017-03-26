function arrangeSeats(list){
  //coding and coding..
  var seat1s=list.filter(a=>a['sex']=='M');
  var seat2s=list.filter(a=>a['sex']=='F');
  seat1s.sort((a,b)=>a['height']-b['height']==0?a['name'].localeCompare(b['name']):a['height']-b['height']);
  seat2s.sort((a,b)=>a['height']-b['height']==0?a['name'].localeCompare(b['name']):a['height']-b['height']);
  console.log(seat1s);
  console.log(seat2s);
  if(seat1s.length<seat2s.length) {
  } else if(seat1s.length>seat2s.length) {
  } else {
    var res=[];
    for(var i=0;i<seat1s.length;i++) {
      res.push(new Desk(i+1,seat1s[i]['name'],seat2s[i]['name']));
    }
  }
  return res;
  function Desk(desk,seat1,seat2) {
    this.desk=desk;
    this.seat1=seat1;
    this.seat2=seat2;
  }
}
const sortstu=(list,sex)=>list.filter(x=>x.sex==sex).sort((a,b)=>(a.height-b.height)*1000+[a.name,b.name].sort().indexOf(a.name)-[a.name,b.name].sort().indexOf(b.name))
function mjxArrangeSeats(list){
  for(var boy=sortstu(list,"M"),girl=sortstu(list,"F"),rs=[],i=0;i<boy.length;i++) rs.push({"desk":i+1,"seat1":boy[i].name,"seat2":girl[i].name})
  return rs
}
var list=[
  {name:"John",height:170,sex:"M"},
  {name:"Tom",height:175,sex:"M"},
  {name:"Jack",height:180,sex:"M"},
  {name:"Jone",height:175,sex:"F"},
  {name:"Anne",height:175,sex:"F"},
  {name:"Alice",height:178,sex:"F"}
];
console.log(arrangeSeats(list));