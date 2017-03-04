function fb(n) {
    console.log(`fb(${n})`)
    var f=0;
    if (n<2) f = 1;
    else f =fb(n-1)+fb(n-2);
    return f;
}
// console.log(fb(0));
// console.log(fb(1));
// console.log(fb(2));
console.log(fb(3));
