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
var sumOfLeftLeaves = function(root, left) {
  if (!root) return 0;
  let leaf = root.left === null && root.right === null;
  if (leaf && left) {
    return root.val;
  } else if (leaf && !left) {
    return 0;
  }
  return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false);
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(sumOfLeftLeaves(tree));