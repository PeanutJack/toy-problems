/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
  this.root = root;
  this.curr = -Infinity;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  // helper function that given a node and a mininum, returns the smallest number greater than min
  let min = this.curr;
  let helper = function(node) {
    if (!node) return Infinity;
    if (node.val > min) return Math.min(node.val, helper(node.left));
    if (node.val <= min) return helper(node.right);
  }
  this.curr = helper(this.root);
  return this.curr;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  let node = this.root;
  while (node.right) {
    node = node.right;
  }
  return node.val !== this.curr;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */