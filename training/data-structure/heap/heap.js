function MinHeap(capacity) {
    this.arr=[];
    this.capacity=capacity;
    this.size=0;
}
function parent(i) {return Math.floor((i-1)/2);}
function left(i) {return 2*i+1;}
function right(i) {return 2*i+2;}
function insertKey(heap,k) {
    if(heap.size==heap.capacity) return;
    heap.size++;
    var i=heap.size-1;
    heap.arr[i]=k;
    while(i!=0&&heap.arr[parent(i)]>heap.arr[i]){
        // console.log(`swap(${heap.arr[i]},${heap.arr[parent(i)]})`);
        var t=heap.arr[i];
        heap.arr[i]=heap.arr[parent(i)];
        heap.arr[parent(i)]=t;
        i=parent(i);
    }
    return heap;
}
function extractMin(heap) {
    if(heap.size<=0) return Number.MAX_VALUE;
    if(heap.size==1) {
        heap.size--;
        return heap.arr[0];
    }
    var root=heap.arr[0];
    heap.arr[0]=heap.arr[heap.size-1];
    heap.size--;
    minHeapify(heap,0);
    return root;
}
function minHeapify(heap,i) {
    var l=left(i);
    var r=right(i);
    var smallest=i;
    if(l<heap.size&&heap.arr[l]<heap.arr[i])
        smallest=1;
    if(r<heap.size&&heap.arr[r]<heap.arr[smallest])
        smallest=r;
    if(smallest!=i) {
        var t=heap.arr[i];
        heap.arr[i]=heap.arr[smallest];
        heap.arr[smallest]=t;
        minHeapify(heap,smallest);
    }
    // return heap;
}
//TODO-delete element in heap
function deletNode(heap,i) {

}
function heapify(arr,n,i) {
    var largest=i;
    var l=left(i);
    var r=right(i);
    if(l<n&&arr[l]>arr[largest])
        largest=l;
    if(r<n&&arr[r]>arr[largest])
        largest=r;
    if(largest!=i) {
        var t=arr[i];
        arr[i]=arr[largest];
        arr[largest]=t;
        heapify(arr,n,largest);
    }
}
function heapSort(arr,n) {
    for(var i=Math.floor(n/2-1);i>=0;i--) {
        heapify(arr,n,i);
    }
    for(var i=n-1;i>=0;i--) {
        var t=arr[0];
        arr[0]=arr[i];
        arr[i]=t;
        // reduce length ???
        heapify(arr,i,0);
    }
}
var heap=new MinHeap(100);
heap=insertKey(heap,3);
heap=insertKey(heap,2);
heap=insertKey(heap,1);
heap=insertKey(heap,15);
heap=insertKey(heap,5);
heap=insertKey(heap,4);
heap=insertKey(heap,45);
// console.log(extractMin(heap));
// console.log(extractMin(heap));
// console.log(extractMin(heap));
// console.log(extractMin(heap));
// console.log(extractMin(heap));

var arr=[3,2,1,15,5,4,45];
// heapify(arr,arr.length,1);
heapSort(arr,arr.length);
console.log(arr);


