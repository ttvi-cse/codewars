function smaller(nums) {
    var i=0;
    while(i++<nums.length-1) {
        console.log(nums.slice(i).reduce((a1,i1)=>a1<nums[i]?1:0,0));
}
// return nums.map((a,i,arr)=>;
}