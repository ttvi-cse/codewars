function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function BinaryTree(root) {
    this.root = root;
}
/**
 * traverse the left subtree
 * visit the root
 * traverse the right subtree
 */
BinaryTree.prototype.inorder = function() {
    var result = [];
    var node = this.root;
    var traverse = function(node) {
        if (node.left != null)
            traverse(node.left);
        result.push(node.data);
        if (node.right != null)
            traverse(node.right)
    }
    traverse(node);
    return result;
}
/**
 * visit the root.
 * traverse the left subtree
 * traverse the right subtree
 */
BinaryTree.prototype.preorder = function() {
    var result = [];
    var node = this.root;
    var traverse = function(node) {
        result.push(node.data);
        if (node.left != null)
            traverse(node.left);
        if (node.right != null)
            traverse(node.right)
    }
    traverse(node);
    return result;
}
/**
 * traverse the left subtree
 * traverse the right subtree
 * visit the root.
 */
BinaryTree.prototype.postorder = function() {
    var result = [];
    var node = this.root;
    var traverse = function(node) {
        if (node.left != null)
            traverse(node.left);
        if (node.right != null)
            traverse(node.right);
        result.push(node.data);
    }
    traverse(node);
    return result;
}


var root = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5)

root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;

var tree = new BinaryTree(root);
console.log(tree.inorder());