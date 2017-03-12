// list of distances between these towns
// ls = [50, 55, 57, 58, 60]
// doesn't want to drive more than
// t = 174
// and visit only
// k = 3 towns
// sum of the distances is the biggest possible - to please Mary
// less than t - to please John
// [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],
// [50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60]
// 162, 163, 165, 165, 167, 168, 170, 172, 173, 175
// write function chooseBestSum(t,k,ls) t-maximum sum of distances k-number of towns to visit k>=1
// ls - list of distances
// return "best" sum
// null otherwise
/**
 * TODO - find k-subarray of ls
 * tranform to sum
 * find sum stasify sum is closest to t
 * @param t
 * @param k
 * @param ls
 */
function chooseBestSum(t, k, ls) {
    var arr=[],max=0;
    for(var i=0;i<ls.length-2;i++)
        for(var j=i+1;j<ls.length-1;j++)
            for(var k=j+1;k<ls.length;k++)
               arr.push([ls[i],ls[j],ls[k]]);
    for(var i=0;i<arr.length;i++) arr[i]=arr[i][0]+arr[i][1]+arr[i][2];
    for(var i=0;i<arr.length;i++) if(arr[i]>max&&arr[i]<t) max=arr[i];
    return max;
}
var ls=[50, 55, 57, 58, 60];
console.log(chooseBestSum(174,3,ls));