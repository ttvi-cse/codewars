##Recalls: Binary  Search Trees (BSTs)
- rotated binary tree
- each node has
    - key
    - left pointer
    - right pointer
    - parent pointer
- BST property
- BSTs support insert, delete, min, max, next-larger/smaller in 0(h) time.
h = height of bst = length of longest path from root to leaf

##Balanced or not
- balanced if h=0(log(n))

##Height of a node 
=lenght of longest path from that node to leaf = max(height(left child) + height(right child)) + 1

##AVL trees
- require heights of left & right children of every node to differ by at most +=1
- |h(l) - h(r)| <=1

##AVL trees are balanced
- worst case is when right subtree 
has height one more than the left for every node
- N(h) = min numbers of nodes in an AVL tree of height h
    + N(1) = 0(1)
    + N(h) = 1 + N(h-1) + N(h-2)
- N(h) > F(h) = phi^h/sqrt(5), phi > 1
    - phi^h/sqrt(5) < n
    - h-- < log(phi)(n) ~1.440log(n)
- N(h) = 1 + N(h-1) + N(h-2) > 1 + 2N(h-2)> 2N(h-2)
= 0(2^h/2)
    - h < 2log(n)

##AVL insert
1. Simple BST insert
2. Fix AVL property from changed node up
- suppose x is lowest node violating AVL
- assume right(x) higher (x.right)
- if x's right child is right-heavy or balanced -> LR(x)
- else

##Rotation
+ 0(1) time

## AVL Sort
- Insert n items - 0(nlog(n))
- in-order traversal - 0(n)
- Abstract data type
    + insert and delete 
    + min
    + successor/pred


 


