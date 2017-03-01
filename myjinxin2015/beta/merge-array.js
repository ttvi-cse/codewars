function mergeArrays(a,b) {
    for (var r=[],i=0,j=0;i<a.length||j<b.length;) {
        if(b[j]&&a[i]) {
            if(a[i]<b[j]) {
                r.push(a[i]);
                while(a[++i]==r[r.length-1]);
            }
            else if(a[i]>b[j]) {
                r.push(b[j]);
                while(b[++j]==r[r.length-1]);
            }
            else {
                var n=a[i],x=0,y=0;
                while(a[++i]==n) x++;
                while(b[++j]==n) y++;
                if(x==y) r.push(y);
            }
        }
        else if(a[i]) while(a[i]) {
            if(a[i]!=a[i+1]) r.push(a[i]);
            i++;
        }
        else if(b[j]) while(b[j]) {
            if(b[j]!=b[j+1]) r.push(b[j]);
            j++;
        }
    }
    return r;
}

var a = [1, 3, 40, 40, 50, 60, 60, 60];
var b = [2, 40, 40, 50, 50, 65];
console.log(mergeArrays(a,b));