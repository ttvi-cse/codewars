function AdjNode(dest,weight) {
    this.dest=dest;
    this.weight=weight;
    this.next=null;
}
function AdjList() {
    this.head=null;
}
function Graph(v) {
    this.v=v;
    this.array=[];
    for(var i=0;i<v;i++) {
        this.array[i]=new  AdjList();
    }
}
function addEdge(graph,src,dest) {
    var node=new AdjNode(dest,0);
    node.next=graph.array[src].head;
    graph.array[src].head=node;
}
function printGraph(graph) {
    for(var i=0;i<graph.v;i++) {
        console.log('adj list of vertex '+ i);
        var tmp=graph.array[i].head;
        while (tmp) {
            console.log(tmp.dest);
            tmp=tmp.next;
        }
    }
}

/*--------------------------------*/

function MinHeapNode(v,dist) {
    this.v=v;
    this.dist=dist;
}
function MinHeap(capacity) {
    this.size=0;
    this.capacity=capacity;
    this.array=[];
    this.pos=[];
}

function parent(i) {return Math.floor((i-1)/2);}

function left(i) {return 2*i+1;}

function right(i) {return 2*i+2;}

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
function isEmpty(heap) {
    return heap.size==0;
}
function decreaseKey() {}

/*--------------------------------*/

function dijkstra(graph,src) {
    var V=graph.v;
    var dist=[];
    var minHeap=new MinHeap(V)
    for (var v=0;v<V;v++) {
        dist[v]=Number.MAX_VALUE;
        minHeap.array[v]=new MinHeapNode(v,dist[v]);
        minHeap.pos[v]=v;
    }
    minHeap.array[src]=new MinHeapNode(src,dist[src]);
    minHeap.pos[src]=src;
    dist[src]=0;
    decreaseKey(minHeap,src,dist[src]); // TODO: code decreaseKey function

    minHeap.size=V;

    while(!isEmpty(minHeap)) {
        var node=extractMin(minHeap);
        var u=node.v;
        var tmp=graph.array[u].head;
        while(tmp) {
            var v=tmp.dest;
            if(isInMinHeap(minHeap,v)&&dist[u]!=Number.MAX_VALUE&&tmp.weight+dist[u]<dist[v]) {
                dist[v]=dist[u]+tmp.weight;
                decreaseKey(minHeap,v,dist[v]); // TODO: code decreaseKey function
            }
            tmp=tmp.next;
        }
    }
    for(var i=0;i<V;i++) {
        console.log(dist[i]);
    }
}

/*--------------------------------*/

var graph=new Graph(5);
addEdge(graph,0,1);
addEdge(graph,0,2);
addEdge(graph,0,3);
addEdge(graph,1,2);
addEdge(graph,2,3);
printGraph(graph);