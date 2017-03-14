var Queue = require('../queue/linked-list-implement');

function AdjListNode(dest,weight) {
    this.dest = dest;
    this.next = null;
}
function AdjList(){
    this.head = null;
}
function Graph(v,di) {
    this.v = v;
    this.array = [];
    this.directed = di;
    for (var i = 0; i < v; i++) {
        this.array[i] = new AdjList();
    }
}
Graph.prototype.addEdge = function(src, dest) {
    var newNode = new AdjListNode(dest);
    newNode.next = this.array[src].head;
    this.array[src].head = newNode;

    if (!this.directed) {
        newNode = new AdjListNode(src);
        newNode.next = this.array[dest].head;
        this.array[dest].head = newNode;
    }
}
Graph.prototype.printGraph = function() {
    var v;
    for (v = 0; v < this.v; v++) {
        var pCrawl = this.array[v].head;
        console.log(`Adjacency list of vertex ${v}.head`);
        while (pCrawl) {
            console.log(`-> ${pCrawl.dest}`);
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
    visited[s] = true;
    queue.enqueue(s);
    while (queue.size != 0) {
        s = queue.dequeue();
        console.log(s);
        var temp = this.array[s].head;
        while (temp != null) {
            var n = temp.dest;
            if (!visited[n]) {
                visited[n] = true;
                queue.enqueue(n);
            }
            temp = temp.next;
        }
    }
}
/**
 * to go forward (in depth) while there is any such possibility,
 * if not then, backtrack
 * @param s
 */
Graph.prototype.dfs = function(s) {
    var visited = [];
    for (var i = 0; i < s; i++)
        visited[i] = false;
    dfsUtil(this, s, visited);
}


function dfsUtil(graph, s, visited) {
    visited[s] = true;
    console.log(s);

    var temp = graph.array[s].head;
    while (temp) {
        if (!visited[temp.dest])
            dfsUtil(graph, temp.dest, visited);
        temp = temp.next;
    }
}

// var v = 4;
// var graph = new Graph(4);
// addEdge(graph, 0, 1);
// addEdge(graph, 0, 4);
// addEdge(graph, 1, 2);
// addEdge(graph, 1, 3);
// addEdge(graph, 1, 4);
// addEdge(graph, 2, 3);
// addEdge(graph, 3, 4);
// printGraph(graph);
// graph.addEdge(0, 1);
// graph.addEdge(1, 2);
// graph.addEdge(2, 3);
// graph.addEdge(3, 3);
// graph.bfs(2);
// graph.dfs(2);
// console.log(graph.isCycle(2));

module.exports = Graph;
