function sumOfRegularNumbers(arr) {
  //coding and coding..
  // [54, 70, 86, 1, -2, -5, 0, 5, 78, 145, 212, 15]
  var old_step,step,sum_ending,sum;
  sum=0;
  sum_ending=arr[0]+arr[1];
  old_step=arr[1]-arr[0];
  for(var i=2;i<arr.length;i++) {
    step=arr[i]-arr[i-1];
    if(step==old_step) sum_ending+=arr[i];
    else {sum+=sum_ending;sum_ending=0;old_step=step;}
  }
  return sum;
}
console.log(sumOfRegularNumbers([54, 70, 86, 1, -2, -5, 0, 5, 78, 145, 212, 15]))