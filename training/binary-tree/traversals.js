var Queue = require('../queue/linked-list-implement');
var Stack = require('../stack/linked-list-implement')
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
 * inorder traversal using stack
 */
BinaryTree.prototype.inorder2 = function() {
    var stack = new Stack();
    var current = this.root;
    while (!done) {
        if (current != null) {
            stack.push(current);
            current = current.left;
        } else {
            if (!stack.isEmpty()) {
                current = stack.pop();
                console.log(current.data);
                current = current.right;
            } else {
                done = 1;
            }
        }
    }
}
// TODO - implement inorder tree traversal without recursion and without stack
BinaryTree.prototype.inorder3 = function () {

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

BinaryTree.prototype.getHeight = function(node) {
    // console.log(`getHeight(${node != null ? node.data : 'null'})`);
    if (node == null)
        return 0;
    else {
        var lheight = this.getHeight(node.left);
        var rheight = this.getHeight(node.right);

        if (lheight > rheight)
            return lheight + 1;
        else
            return rheight + 1;
    }
}

BinaryTree.prototype.printLevelorder = function(){
    var h = this.getHeight(this.root);
    for (var i = 1; i <= h; i++) {
        this.printGivenLevel(this.root, i);
    }
}

// TODO - implement bft using queue
BinaryTree.prototype.printLevelorder2 = function(node) {
    var queue = new Queue();
    var tmp = node;
    while (tmp != null) {
        console.log(tmp.data);
        if (tmp.left)
            queue.enqueue(tmp.left);
        if (tmp.right)
            queue.enqueue(tmp.right);
        tmp = queue.dequeue();
    }
}

BinaryTree.prototype.printGivenLevel = function(node,level) {
    if (node == null)
        return
    if (level == 1)
        console.log(node.data);
    else if (level > 1) {
        this.printGivenLevel(node.left, level - 1);
        this.printGivenLevel(node.right, level - 1);
    }
}


var root = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5)
var node6 = new Node(6);
var node7 = new Node(7);

root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;
// node5.left = node6;
node3.right = node7;

var tree = new BinaryTree(root);
// console.log(tree.getHeight(tree.root));
tree.printLevelorder2(tree.root);
// console.log(tree.inorder());