// Given a binary tree, rearrange it such that there are no left nodes, and the nodes to the right are in sorted order

// Brainstorming
// Collect vals of nodes in array, sort array, build tree from array
  // collect vals O(n)
  // sort array O(n log n)
  // rebuild tree O(n)
// I had a few brief ideas, but nothing with this low time complexity
// the only issue with this is I'm not preserving the original tree objects
// I could keep them though, and put those into the array, as long as I clear the node.left and .right

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
var increasingBST = function(root) {
  let nodeArr = [];
  // gather all the nodes into an array and clear their connections
  let collectNodes = function(node) {
    if (!node) return null;
    collectNodes(node.left);
    nodeArr.push(node); // rearranged when the push happens, so now it gets pushed in sorted order
    collectNodes(node.right);
    node.left = null;
    node.right = null;
  }
  collectNodes(root);
  // sort node array by the vals
  // nodeArr.sort((a, b) => a.val - b.val); // so I don't need to sort anymore
  // reassemble tree in proper order
  root = nodeArr[0];
  let curr = root;
  for (let i = 1; i < nodeArr.length; i++) {
    curr.right = nodeArr[i];
    curr = nodeArr[i];
  }
  return root;
};

// The above works, but after looking at other solutions I see the original BST is already sorted, I just need to traverse it in the correct order
// Doing that could eliminate O(n log n) sort time complexity and reduce it to just O(n) overall

var increasingBST = function(root) {
  let newRoot = null;
  let curr = null;
  let builder = function(node) {
    if (!node) return null;
    builder(node.left);
    node.left = null;
    if(!newRoot) {
      newRoot = node;
      curr = node;
    } else {
      curr.right = node;
      curr = node;
    }
    builder(node.right);
  }
  builder(root);
  return newRoot;
};