function Node(key) {
    this.key = key;
    this.left = null;
    this.right = null;
}
function Context(first,second) {
    this.first=first;
    this.second=second;
}
function inorder(root) {
    if(root) {
        inorder(root.left);
        console.log(root.key);
        inorder(root.right);
    }
}
function insert(node, key) {
    if (!node) return new Node(key);
    if (key<node.key) node.left = insert(node.left,key);
    else if (key>node.key) node.right = insert(node.right,key);
    return node;
}
function minValueNode(node) {
    var curr=node;
    while(curr.left) curr=curr.next;
    return curr;
}
/**
 * @param root
 * @param key
 * @returns {*}
 */
function deleteNode(root,key) {
    if(!root) return root;
    if(key<root.key) root.left=deleteNode(root.left,key);
    else if(key>root.key) root.right=deleteNode(root.right,key);
    else {
        if(!root.left) return root.right;
        else if(!root.right) return root.left;
        //TODO - fix bug: Cannot read property 'left' of undified
        var temp=minValueNode(root.right);
        root.key=temp.key;
        root.right=deleteNode(root.right,temp.key);
    }
    return root;
}
function findPreSuc(root,key) {
    if(!root) return;
    var pre,suc;
    if(root.key==key) {
        if(root.left) {
            var tmp=root.left;
            while(tmp.right) tmp=tmp.right;
            pre=tmp;
        }
        if(root.right) {
            var tmp=root.right;
            while(tmp.right) tmp=tmp.right;
            suc=tmp;
        }
        return new Context(pre,suc);
    }
    if(root.key>key) findPreSuc(root.left,key);
    else findPreSuc(root.right,key);
}
/**
 *
 * @param root
 * @param n1
 * @param n2
 */
function lca(root,n1,n2) {
    if(!root) return root;
    if(root.data>n1&&root.data>n2) return lca(root.left,n1,n2);
    if(root.data<n1&&root.data<n2) return lca(root.right,n1,n2);
    return root;
}
/**
 * TODO: Fix bug - return undefined
 * @param root
 * @param c
 * @returns {*}
 */
function secondLargest(root,c) {
    if(!root||c[0]>=2)
        return;
    secondLargest(root.right,c);
    c[0]++;
    if(c[0]==2)
        return root;
    secondLargest(root.left,c);
}
var root=null;
root=insert(root,50);
root=insert(root,30);
root=insert(root,20);
root=insert(root,40);
root=insert(root,70);
root=insert(root,60);
root=insert(root,80);
/*
        50
    30          70
20      40  60      80
 */
// console.log('delete(root,20);');
// root=deleteNode(root,20);
// inorder(root);
// console.log('delete(root,30);');
// root=deleteNode(root,30);
// inorder(root);
// console.log('delete(root,50);');
// root=deleteNode(root,50);
// inorder(root);
// var ctx=findPreSuc(root,50);
// console.log(ctx.first,ctx.second);
console.log(lca(root,40,60));
var c=[];c[0]=0;
console.log(secondLargest(root,c));
