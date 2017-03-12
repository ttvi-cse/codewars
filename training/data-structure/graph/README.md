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
##Motivation
- G(V,E,w)
    - w: weight. (w.e->r)
#Two algos
    - Dijkstra + not neg weight -> 0(VlgV+E)
    - Bellmen-Ford neg weight -> 0(VE)

#TODO

- [] Write cycle detection code
- [] Write topolical sort code