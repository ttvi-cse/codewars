function LCS(x, y) {
  console.log([x,y]);
  if(x.length==0||y.length==0) return 0;
  if(x.slice(-1)==y.slice(-1)) {return 1+LCS(x.slice(0,-1),y.slice(0,-1));}
  else return Math.max(LCS(x.slice(0,-1),y),LCS(x,y.slice(0,-1)));
}
console.log(LCS('AGGTAB','GXTXAYB'))