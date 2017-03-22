//TODO - fix this shit plz
function robotTransfer(matrix, k) {
  const N=matrix.length;
  var c=0;
  for(var i=0;i<N;i++) {
    for(var j=0;j<N;j++) {
      var move=0;
      var start=[i,j];
      var curr=matrix[start[0]][start[1]].split(',');
      while(move<k) {
        console.log(curr);
        if((curr[0]==start[0]&&curr[1]==start[1])) {console.log('get back!!!');c++;break;}
        else move++;
        curr=matrix[curr[0]][curr[1]].split(',');
      }
    }
  }
  return c;
}
var matrix=[["7,5","3,1","2,4","8,1","3,3","5,0","2,0","4,1","6,5"],
  ["6,6","8,3","5,0","7,8","6,8","5,6","8,4","1,6","2,3"],
  ["3,6","6,8","1,1","0,2","4,0","7,7","8,3","8,7","7,2"],
  ["2,3","3,3","5,0","8,1","2,7","0,0","7,5","1,5","2,1"],
  ["3,6","7,5","4,6","6,1","0,5","4,0","8,3","1,5","8,7"],
  ["4,1","0,5","5,4","4,0","8,8","6,0","5,4","6,7","3,7"],
  ["3,3","4,5","3,5","4,6","1,7","8,2","6,0","3,4","1,8"],
  ["1,0","5,0","5,8","6,6","4,1","4,0","4,7","5,7","6,6"],
  ["3,6","3,2","3,1","1,2","0,6","1,1","3,2","4,6","6,7"]];
var k=5;
console.log(robotTransfer(matrix,k))