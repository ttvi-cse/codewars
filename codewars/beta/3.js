function lateRide(n) {
    var hour=(n/60)>12?12+Math.floor((n/60)%12):Math.floor((n/60));
    var minute=n%60;
    return Math.floor(hour/10)+hour%10+Math.floor(minute/10)+minute%10;
}
function mjxLateRide(n) {
    return new Date(n*60000).toString().match(/\d\d(?=:)/g).join("").split("").reduce((a,b)=>a+ +b,0);
}
console.log(mjxLateRide(240));
console.log(mjxLateRide(808));
console.log(lateRide(808));
console.log(lateRide(0));
console.log(lateRide(23));
console.log(lateRide(8));

