function balanceStatements(list){
    var r=/(\w+)\s(\d+)\s(\d+(\.\d+)?)\s([bs])/i;//1 2 3 (4) 5
    var b=0,s=0,err=[];
    var re=list.split(/,/).reduce((a,b)=>{
        var p=foo(b.trim());
        if(p) {
            if(p.s=='b') a[0]+=Math.round(p.qa*p.p);
            else if(p.s='s') a[1]+=Math.round(p.qa*p.p);
            console.log(a,b);
        } else {
            err.push(b);
        }
        return a;
    },[0,0]);
    if(err.length==0) return `Buy: ${re[0]} Sell: ${re[1]}`;
    else {
        return `Buy: ${re[0]} Sell: ${re[1]}`+err.reduce((a,e,i)=>a+`; Badly formed ${i+1}; ${e} ;`,'');
    }
    function foo(s) {
        var ps=s.match(r);
        if(!ps) return null;
        var p=new Product(ps[1],ps[2],ps[3],ps[5].toLowerCase());
        return p;
    }
    function Product(qo,qa,p,s) {this.qo=qo;this.qa=+qa;this.p=+p;this.s=s;}
}

console.log(balanceStatements("GOOG 300 542.0 B, AAPL 50 145.0 B, CSCO 250.0 29 B, GOOG 200 580.0 S"));
// console.log(balanceStatements("ZNGA 1300 2.66 B, CLH15.NYM 50 56.32 B, OWW 1000 11.623 B, OGG 20 580.1 B"));


var b=/(\w+)\s(\d+)\s(\d+\.\d+)\s([bs])/i.exec('GOOG 300 542.0 B');
// console.log(b);