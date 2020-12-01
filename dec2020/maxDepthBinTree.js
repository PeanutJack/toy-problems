// input: Binary Tree
// Output: maximum depth of the tree (distance to furthest leaf)


// seems straightforward, recurse down the tree keeping track of how far you are down
// I don't think it can be any faster because you have to check every path to see which one is deepest


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
var maxDepth = function(root) {
  // if passed null or undefined, return 0
  if (!root) return 0;
  // else, return 1 + the deeper of either left or right paths
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};


function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
};