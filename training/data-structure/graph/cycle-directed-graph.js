var Graph = require('./graph')
/**
 * Return true if the graph contains a cycle, else false
 * This function is a variation of dfs()
 * @param graph
 * @param s
 * @returns {*}
 */
function isCyclic(graph) {
    var visited = [];
    var recStack = [];
    for (var i = 0; i < graph.v; i++) {
        visited[i] = false;
        recStack[i] = false
    }
    for (var i = 0; i < this.v; i++)
        if (isCyclicUtil(graph, i, visited, recStack))
            return true;

    return false;
}
function isCyclicUtil(graph, v, visited, recStack) {
    if (visited[v] == false) {
        visited[v] = true;
        recStack[v] = true;

        // recur for all the vertices adjacen to this vertex
        var tmp = graph.array[v].head;
        while (tmp) {
            if (!visited[tmp.dest] && isCyclicUtil(graph, tmp.dest, visited, recStack))
                return true;
            else if (recStack[tmp.dest])
                return true;
            tmp = tmp.next;
        }
    }
    recStack[v] = false; // remove the vertex from recursion stack
    return false;
}

var graph = new Graph(4, true);
graph.addEdge(0,1);
graph.addEdge(0,2);
graph.addEdge(1,2);
graph.addEdge(2,0);
graph.addEdge(2,3);
graph.addEdge(3,3);
graph.printGraph();

console.log(isCyclic(graph));
