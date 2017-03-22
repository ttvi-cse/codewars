function lineUp(commands) {
    // l,r,a
    // l->r, r->l
    // how many time the students end up facing the same direction
    // if same direction -> 'A' will be same too
    // if same direction -> LL, RR, LR, RL will be same too
    // for each element
    // if arr[i]+arr[j] equal ll,rr,lr,rl, a
    // increase count to 1
    // f('LLL')=f('RRR')
    var arr=commands.split('');
    var count=0;
    var k=0;
    while(k<arr.length) {
        if(arr[k]+arr[k+1]=='LL'
            ||arr[k]+arr[k+1]=='LR'
            ||arr[k]+arr[k+1]=='RL'
            ||arr[k]+arr[k+1]=='RR') {
            console.log(arr[k]+arr[k+1]);
            count++;
            k+=2;
        }
        else if(arr[k]+arr[k+1]=='LA'
            ||arr[k]+arr[k+1]=='RA') {
            count+=1;
            k+=2;
        }
        else if(arr[k]=='A') {
            console.log(arr[k]);
            count++;
            k++;
        }
        else {
            k++
        }

    }
    return count;
}
console.log(lineUp('AALAAALARAR'));