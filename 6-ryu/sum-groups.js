function sumGroups(arr) {
  // loop from each element if even check next element if even sum_even+= next element
  // else odd -> push sum to array check if next element is odd sum_odd +=  next element
  var aux=[];
  for (var i=0;i<arr.length;) {
    if(arr[i]%2==0) {
      var even_sum=arr[i];
      for(var j=i;j<arr.length;j++) {
        if(arr[j]%2==0) even_sum+=arr[j];
        else {aux.push(even_sum);i=j;break;}
      }
    } else {
      var odd_sum=arr[i];
      for(var j=i;j<arr.length;j++) {
        if(arr[j]%2!=0) odd_sum+=arr[j];
        else {aux.push(odd_sum);i=j;break;}
      }
    }
  }
  console.log(aux);
  return [];
}
function sumGroups2(arr) {
  var aux=[];
  for(var i=0;i<arr.length-1;i++) {
    if((arr[i]%2==0&&arr[i+1]%2==0)||(arr[i]%2!=0&&arr[i+1]%2!=0)) {
      aux.push(arr[i] + arr[i + 1]);
    } else {
      aux.push(arr[i]);
    }
  }
  // console.log(aux.length==arr.length-1);
  return aux;
}
function foo(arr) {
  var res=[];
  var i=0;
  while(i<arr.length) {
    var aux=[];
    if(arr[i]%2==0&&arr[i+1]%2==0) {
      while(arr[i++]%2==0&&i<arr.length) {
        aux.push(arr[i]);
      }
    } else if (arr[i]%2!=0&&arr[i+1]%2!=0) {
      while(arr[i++]%2!=0&&i<arr.length) {
        aux.push(arr[i]);
      }
    } else {
      res.push(arr[i++]);
    }
    res.push(aux);
  }
  return res;
}
console.log(foo([2, 1, 2, 2, 6, 5, 0, 2, 0, 5, 5, 7, 7, 4, 3, 3, 9]));