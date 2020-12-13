// input: binary tree (not sorted in any way, not balanced)
// output: tree node that has all the deepest nodes of overall tree as children

// strategy:
  // Find depth of left side and right side
    // if the same, return root
    // else, recurse on the deeper side
  // this could be really slow because I'd potentially traverse each side multiple times, but we'll see

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
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
  let findDepth = function(node) {
    if (!node) return null;
    return 1 + Math.max(findDepth(node.left), findDepth(node.right));
  }
  let compareDepths = function(node) {
    let leftD = findDepth(node.left);
    let rightD = findDepth(node.right);
    if (leftD === rightD) return node;
    return leftD > rightD ? compareDepths(node.left) : compareDepths(node.right);
  }
  return compareDepths(root);
};