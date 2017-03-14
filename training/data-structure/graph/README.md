###BFS
- visite all nodes reachable from given s in V
- 0(V+E) time
- loot at node reachable in 0 moves, 1 moves, 2 moves, ..
- careful to avoid duplicate
#####Erik-BFS(s,Adj)
```
level = {s:empty} // dictionary
parent = {s:None}
i = 1
frontier = [s]
while (frontier):
    next = []
    for (u in frontier)
        for (v in Adj[u])
            if v not in level
                level[v]=i
                parent[v]=u
                next.append(v)
    frontier = next;
    i+=1
```
#####BFS(G,s)
```
for each vertex u in G.V - (x)
    u.color = WHITE
    u.d = 0-0
    u.r = nil
s.color = GRAY
s.d = 0
s.r = NIL
Q = empty
ENQUEUE(Q,s)
while Q != empty
    u = DEQUEUE(Q)
    for each v in G.Adj[u
        if v.color = WHITE
            v.color = GRAY
            v.d = u.d + 1
            v.r = u
            ENQUEUE(Q,v)
    u.color = BLACK            
```

###DFS
- recursively explore graph, backtracking as necessary
- careful not to repeat
- visit any vertex almost one
#####Erik-DFS-Visit(V,Adj,s)
```
parent = {s:None}
DFS-Visit(V,Adj,s)
    for v in Adj[s]
        if v not in parent
            parent[v] = s
            dfs-visit(V,Adj,v)
```
#####Erik-DFS(V,Adj,s)
```
parent = {}
for s in V
    if s not in parent
        parent[s] = none
        dfs-visit(V,Adj,s)
```
#####DFS(G)
```
for each vertex u in G.V
    u.color = WHITE
    u.r = nil
time = 0
for each vertex u in G.V
    if u.color == white
        dfs-visit(G,u)
```
#####DFS-VISIT(G,u)
```
time = time + 1
u.d = time
u.color = GRAY
for each v in G.Adj[u
    if v.color == WHITE
        v.r = u
        dfs-visit(G,v)
u.color = BLACK
time = time + 1
u.f = time        
```

###Analysis

###Edge classification
- tree edge
- forward edge
- backword edge
- cross edges
 
####Cycle detection
- G has a cycle <=> DFS has a back edge

#### Topological sort (Job scheduling)





# Single-Source Shortest Paths Problem
- Weighted graphs
- General approach
- Negative edges
- Optimal substructure
###Motivation
- G(V,E,w)
    - w: weight. (w.e->r)
###Two algos
    - Dijkstra + not neg weight -> 0(VlgV+E)
    - Bellmen-Ford neg weight -> 0(VE)
###Weighted graphs
- d(v) - current distance
- r(v) - preprocessor vertex
### Negative weight graphs
### Negative cycles
### General structure
- Initialize for u in V d[v]=infinite 
r[v] = nil. 
- Repeat select edge(u,v) [somehow].
- Relax edge(u,v)
```
Repeat util all edge have d[v] <= d[u]+w(u,v):
    if d[v]>d[u]+w(u,v): 
        d[v] = d[u] + w(u,v)
        r[v] = u;
```
### Optimal substructure
Subpaths of shortest path are shortest path




# Dijkstra (Greeky algorithm)
### Relax(u,v,w)
```
Repeat util all edge have d[v] <= d[u]+w(u,v):
    if d[v]>d[u]+w(u,v): 
        d[v] = d[u] + w(u,v)
        r[v] = u;
```
- Relaxation is safe
### Lemma
- The relaxation operation maintain the invariant that
d[v] >= delta(s,v) for all v in V
### DAGs 
- Can't have (-ve) cycle
```
1. Topological sort the DAG. Path from u to v
implies that u is before v in the ordering
2. One pass over vertices in topologically sorted order.
Relaxing each edge that leaves each vertex
```
-> 0(V+E) time
### Dijkstra(G,W,s)
- Have the cycle and non negative edge
```
Initialize (G,s) S=empty, Q=V
while Q is not empty
    u <- extract-min(Q) //delete u from Q
    S <- S union {u}
    for each vertex v in Adj[u]
        relax(u,v,w)
```
- 0(V) inserts in to priority Queue
- 0(V) extract-min ops
- 0(E) decrease-key ops
##### Arrays priority queue
- 0(V) ex-min
- 0(1) decrease-key

-> 0(V.V+E.1)=0(V^2)
##### Binary min-heap
- 0(logV) for ex-min
- 0(logV) for decrease-key

-> 0(VlgV+ElgV)
##### Fibonacci heap 
- 0(lgV) for ex-min
- 0(1) amortized for d-key

-> 0(VlgV+E) linear time




# Bellman-Ford (Dynamic programming)
### Generic SP Algo
```
Initialize for v in V 
    d[v] = infinite
d[s]=0
Repeat select edge [somehow] util you can't relax enymore
    relax edge(u,v,w)
```
1. Complexity could be exponent time (even for positive edge)
3. It will not even terminate if there is a negative cycle reachable from the source
### Bellman-Ford(G,W,s)
```
Initialize():
for i = 1 to |V| -1
    for each edge (u,v) in E    //0(VE)
        //relax(u,v,w)
        if d[v] > d[u] + w(u,v)
            d[v]=d[u]+w(u,v)
            r[v]=u;
    for each edge (u,v) in E
        if d[v] > d[u] + w(u,v)
            report negative cycle exist
```