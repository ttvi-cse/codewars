function sortPoker(john,uncle){
  const cards='2345678910JQKA';
  const suites=uncle.split(/\d|\w/).reduce((a,e,i,arr)=>e!=arr[i-1]?a+e:a,'');
  var p1=john.match(/[♠♣♦♥]\d{1,2}/g); //)/[♠♣♦♥]\d{1,2}/g.exec(john);
  // console.log(p1);
  return p1.sort((a,b)=>{
    if(suites.indexOf(a[0])<suites.indexOf(b[0])) return -1;
    else if (suites.indexOf(a[0])>suites.indexOf(b[0])) return 1;
    else {
      if(cards.indexOf(a[1])<cards.indexOf(b[1])) return -1;
      else if(cards.indexOf(a[1])>cards.indexOf(b[1])) return 1;
      else return 0;
    }
  }).join('');
}
var johnSorted=sortPoker("♦6c2♠3♦5♠J♣Q♠K♣7♦2♣5♥5♥10♠A","♣8♣9♣10♦4♦5♦6♦7♠2♠3♠5♥J♥Q♥K");
console.log(johnSorted);
