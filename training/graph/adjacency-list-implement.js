var Queue = require('../queue/linked-list-implement');

console.log(Queue);

function AdjListNode(dest) {
    this.dest = dest;
    this.next = null;
}

function AdjList() {
    this.head = null;
}

function Graph(v) {
    this.v = v;
    this.array = [];
    for (var i = 0; i < v; i++) {
        this.array[i] = new AdjList();
    }
}

Graph.prototype.addEdge = function(src, des) {
    var newNode = new AdjListNode(des);
    newNode.next = this.array[src].head;
    this.array[src].head = newNode;

    // Sice graph is undirected, add an edge from dest to src also
    newNode = new AdjListNode(src);
    newNode.next = this.array[des].head;
    this.array[des].head = newNode;
}

Graph.prototype.printGraph = function() {
    var v = 0;
    for (v = 0; v < this.v; ++v) {
        var pCrawl = this.array[v].head;
        console.log('Adjacency list of vertex ' + v + ' head.');
        while (pCrawl) {
            console.log('-> ' + pCrawl.dest);
            pCrawl = pCrawl.next;
        }
    }
}

Graph.prototype.bfs = function(s) {
    var visited = [];
    for (var i = 0; i < this.v; i++) {
        visited[i] = false;
    }
    var queue = new Queue();
    queue.init();
    visited[s] = true;
    queue.enqueue(s);
    while (queue.size != 0) {
        s = queue.dequeue();
        console.log(s);

        // TODO - Fix bug: Cannot read property 'data' of null
        var temp = this.array[s].head;
        while (temp) {
            var n = temp.next.data;
            if (!visited[n]) {
                visited[n] = true;
                queue.enqueue(n);
            }
            temp = temp.next;
        }
    }
}

var v = 5;
var graph = new Graph(v);
graph.addEdge(0,1);
graph.addEdge(0,4);
graph.addEdge(1,2);
graph.addEdge(1,3);
graph.addEdge(1,4);
graph.addEdge(2,3);
graph.addEdge(3,4);

graph.bfs(2)