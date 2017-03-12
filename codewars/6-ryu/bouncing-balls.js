/*
des:
h>0,
0<bounce<1
window<h
ex:
h=3,bounce=0.66,window=1.5->result=3
h=30,bounce=0.66,window=1.5->result=15
h=3,bounce=1,window=1.5->result=-1
sol:
while h > window
    if (h>window) c++;
    h = bounce*h;
return c;
sequence: h h*bounce h*bounce*bounce ... h*bounce^n=window
 */
function bouncingBall(h,  bounce,  window) {
    var c=0;
    var arr=[];
    while(h>=window) {
        arr.push(h);
        c++;
        h=bounce*h;
    }
    return 2*c-1;
}
function bouncingBall(h,bounce,window) {
    return Math.floor(Math.log((window/h))/Math.log(bounce))*2+1
}
var h=30,bounce=0.66,window=1.5;
console.log(bouncingBall(h,bounce,window));