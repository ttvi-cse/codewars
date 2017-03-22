function abbreviate(string) {
    var arr1=string.match(/[-\s]/g);
    var arr2=string.split(/[-\s]/).map(a=>a.replace(/(^\w)(\w*)(\w)(.$)/,(m,p1,p2,p3,p4)=>p1+p2.length+p3+p4));
    return arr2.map((a,i)=>i<arr1.length?a+arr1[i]:a).join('');
}
console.log(abbreviate('You need, need not want, to complete this code-wars mission'));