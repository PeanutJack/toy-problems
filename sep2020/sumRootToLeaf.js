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
 * @return {number}
 */
var sumRootToLeaf = function(root) {
  let total = 0;
  let buildPath = function(tree, previous) {
    if (!tree.left && !tree.right) {
      total += parseInt(previous + String(tree.val), 2);
    } else {
      if (tree.left) buildPath(tree.left, previous + String(tree.val));
      if (tree.right) buildPath(tree.right, previous + String(tree.val));
    }
  }
  buildPath(root, '');
  return total;
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
};

let test1 = new TreeNode(1,
  new TreeNode(0,
    new TreeNode(0),
    new TreeNode(1)),
  new TreeNode(1,
    new TreeNode(0),
    new TreeNode(1)));
console.log(sumRootToLeaf(test1));