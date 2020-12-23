// input: binary tree
// output: boolean on if the tree is balanced

// strategy:
  // Search tree with recursive function
  // If the end of a branch is found (both left and right are null) check depth
    // if depth is higher than lowest found by more than 1, return false

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
 * @return {boolean}
 */

var isBalanced = function(root) {
  let balanced = true;
  let helper = function(node) {
    if (!node) return 0;
    let leftDepth = helper(node.left);
    let rightDepth = helper(node.right);
    if (Math.abs(leftDepth - rightDepth) > 1) balanced = false;
    return Math.max(leftDepth, rightDepth) + 1;
  }
  helper(root);
  return balanced;
}

// Below are previous ideas from misunderstanding what "balanced" meant

// var isBalanced = function(root) {
//   let helper = function(node, onlyChild) {
//     if (!node) return true;
//     if (!node.left || !node.right) {
//       if (onlyChild) return false;
//       return helper(node.left, true) && helper(node.right, true);
//     } else {
//       return helper(node.left, false) && helper(node.right, false);
//     }
//   }
//   return helper(root, false);
// };

// var isBalanced = function(root) {
//   let maxDepths = [];
//   let helper = function(node, depth) {
//     if (!node) return true;
//     if (!node.left || !node.right) {
//       if (!maxDepths.includes(depth)) {
//         maxDepths.push(depth);
//       }
//       if (maxDepths.length > 2) {
//         console.log(maxDepths)
//         return false;
//       }
//     }
//     return helper(node.left, depth + 1) && helper(node.right, depth + 1);
//   }
//   return helper(root, 1);
// };