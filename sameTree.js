/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p === null && q === null){
        return true;
    }
    
    if(p === null && q !== null || p !==null && q === null){
        return false;
    }
    
    if(p.val !== q.val){
        return false;
    }
    
    return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};

function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}

var q = new TreeNode([1,2]);
var p = new TreeNode([1,2]);
// console.log(q);
// console.log(isSameTree(q,p));
console.log([1,2]==[1,2]);