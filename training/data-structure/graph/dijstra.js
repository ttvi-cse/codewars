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
function addEdge(graph,src,dest,weight) {
    var node=new AdjNode(dest,weight);
    node.next=graph.array[src].head;
    graph.array[src].head=node;

    node=new AdjNode(src,weight);
    node.next=graph.array[dest].head;
    graph.array[dest].head=node;
}
function printGraph(graph) {
    for(var i=0;i<graph.v;i++) {
        console.log('adj list of vertex '+ i);
        var tmp=graph.array[i].head;
        while (tmp) {
            console.log(tmp.dest,tmp.weight);
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

function insertKey(heap,key){
    if(heap.size==heap.capacity) return;
    heap.size++;
    var i=heap.size-1;
    heap.array[i]=key;
    while(i!=0&&heap.array[parent(i)]>heap.array[i]) {
        var t=heap.array[i];
        heap.array[i]=heap.array[parent(i)];
        heap.array[parent(i)]=t;
        i=parent(i);
    }
}
function getMin(heap) {
    return heap.array[0];
}
function minHeapify(heap,i) {
    var l=left(i);
    var r=right(i);
    var smallest=i;
    if(l<heap.size&&heap.array[l]<heap.array[i])
        smallest=1;
    if(r<heap.size&&heap.array[r]<heap.array[smallest])
        smallest=r;
    if(smallest!=i) {
        var t=heap.array[i];
        heap.array[i]=heap.array[smallest];
        heap.array[smallest]=t;
        minHeapify(heap,smallest);
    }
    // return heap;
}
function extractMin(heap) {
    if(heap.size<=0) return Number.MAX_VALUE;
    if(heap.size==1) {
        heap.size--;
        return heap.array[0];
    }
    var root=heap.array[0];
    heap.array[0]=heap.array[heap.size-1];
    heap.size--;
    minHeapify(heap,0);
    return root;
}
function isEmpty(heap) {
    return heap.size==0;
}
function decreaseKey(heap,v,dist) {
    var i=heap.pos[v];
    heap.array[i].dist=dist;

    while(i!=0&&heap.array[i].dist<heap.array[parent(i).dist]) {
        heap.pos[heap.array[i].v]=parent(i);
        heap.pos[heap.array[parent(i)].v]=i;

        var t=heap.array[i];
        heap.array[i]=heap.array[parent(i)];
        heap.array[parent(i)]=t;

        i=parent(i);
    }
}
function isInMinHeap(heap,v) {
    if(heap.pos[v]<heap.size)
        return true;
    return false;
}
function printHeap(heap) {
    console.log(heap.array);
}
/*--------------------------------*/

function dijkstra(graph,src) {
    var V=graph.v;
    var dist=[];
    var minHeap=new MinHeap(V);
    for (var v=0;v<V;v++) {
        dist[v]=Number.MAX_VALUE;
        minHeap.array[v]=new MinHeapNode(v,dist[v]);
        minHeap.pos[v]=v;
    }
    minHeap.array[src]=new MinHeapNode(src,dist[src]);
    minHeap.pos[src]=src;
    dist[src]=0;
    decreaseKey(minHeap,src,dist[src]);

    minHeap.size=V;

    while(!isEmpty(minHeap)) {
        var node=extractMin(minHeap);
        var u=node.v;
        var tmp=graph.array[u].head;
        while(tmp) {
            var v=tmp.dest;
            if(isInMinHeap(minHeap,v)&&dist[u]!=Number.MAX_VALUE&&tmp.weight+dist[u]<dist[v]) {
                dist[v]=dist[u]+tmp.weight;
                decreaseKey(minHeap,v,dist[v]);
            }
            tmp=tmp.next;
        }
    }
    for(var i=0;i<V;i++) {
        console.log(dist[i]);
    }
}

/*--------------------------------*/

var graph=new Graph(9);
addEdge(graph, 0, 1, 4);
addEdge(graph, 0, 7, 8);
addEdge(graph, 1, 2, 8);
addEdge(graph, 1, 7, 11);
addEdge(graph, 2, 3, 7);
addEdge(graph, 2, 8, 2);
addEdge(graph, 2, 5, 4);
addEdge(graph, 3, 4, 9);
addEdge(graph, 3, 5, 14);
addEdge(graph, 4, 5, 10);
addEdge(graph, 5, 6, 2);
addEdge(graph, 6, 7, 1);
addEdge(graph, 6, 8, 6);
addEdge(graph, 7, 8, 7);
dijkstra(graph, 0);