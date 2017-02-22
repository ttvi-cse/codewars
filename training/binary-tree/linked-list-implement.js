/***
 * 1) The maximm number of nodes at level i o fa binary tree is  2 ^ (i -1)
 * 2) Maximum number of nodes in a binary tree of height 'h' is 2^h -1
 * 3) Binary Tree with N nodes have minimum possible heigh is log2(n+1)
 * 4) Binary Tree with L leaves has at least log2(l) + 1 levels
 * 5) Number of leaf nodes is always one more than nodes with two children
 */

/**
 * Full binary tree if every node has 0 or 2 children
 * L = I + 1
 * Complete binary tree if all levels are completely except the last level
 * Perfect binary tree
 * Balanced binary tree: height of tree is log(n) where n is number of node
 * Degenerate (pathological) tree: every internal node has one child
 *
 */

/**
 *
 * @param data
 * @constructor
 */
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}