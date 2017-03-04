function mix(s1, s2) {
  // get two array sorted of s1 and s2  
  var obj1 = s1.split('').sort()
                .filter(a => /[a-z]/.test(a))
                .reduce((ac,v,i,a) => {
                  if (!ac.hasOwnProperty(v)) {
                    ac[v] = 1;
                  } else {
                    ac[v]++;
                  }
                  return ac;
                }, {});
  var obj2 = s2.split('').sort()
                .filter(a => /[a-z]/.test(a))
                .reduce((ac,v,i,a) => {
                  if (!ac.hasOwnProperty(v)) {
                    ac[v] = 1;
                  } else {
                    ac[v]++;
                  }
                  return ac;
                }, {});;
  console.log(obj1, obj2);
  
  // count number and get max
  var obj3 = Object.assign(obj1, obj2);
  obj3 = Object.keys(obj3)
    .sort((a,b) => {
      if (obj3[a] < obj3[b]) 
        return -1;
      else if (obj3[a] == obj3[b]) {
        if (a < b)
          return 1;
        else 
          return -1;
      } else {
        return 1;
      }
    });
  console.log(obj3);

  // construct final result
  // var s = '';
  // for (var p in obj3) {
  //   s += p.repeat(obj3[p]) + '/';
  // }
  // console.log(s);
  // return s;
}

mix("Are they here", "yes, they are here")