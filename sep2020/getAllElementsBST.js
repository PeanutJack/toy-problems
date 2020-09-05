/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
  // collect all nodes from a tree in a way that leaves them sorted
  let collapseTree = function(tree) {
    let output = [];
    if (tree.left !== null) {
      output.concat(collapseTree(tree.left));
    }
    output.push(tree.val);
    if (tree.right !== null) {
      output.concat(collapseTree(tree.right));
    }
    return output;
  }
  if (!root1) return collapseTree(root2);
  if (!root2) return collapseTree(root1);
  let arr1 = collapseTree(root1);
  let arr2 = collapseTree(root2);
  // merge the two arrays carefully to ensure sorted
  let pos1 = 0;
  let pos2 = 0;
  let output = [];
  while (output.length < arr1.length + arr2.length) {
    if (arr1[pos1] < arr2[pos2] || arr2[pos2] === undefined) {
      output.push(arr1[pos1]);
      pos1++;
    } else {
      output.push(arr2[pos2]);
      pos2++;
    }
  }
  return output;
};