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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if (!root) return root;
  // split into three steps: find, remove, re-add
  // find:
  let prevNode;
  let wentLeft;
  let curNode = root;
  while (curNode) {
    if (curNode.val < key) {
      prevNode = curNode;
      curNode = curNode.right;
      wentLeft = false;
    } else if (curNode.val > key) {
      prevNode = curNode;
      curNode = curNode.left;
      wentLeft = true;
    } else {
      // remove
      if (prevNode) {
        if (wentLeft) {
          prevNode.left = null;
        } else {
          prevNode.right = null;
        }
      }
      break;
    }
  }
  if (!curNode) return root;
  let addToTree = function(tree, value) {
    if (tree.val < value) {
      if (tree.right) {
        addToTree(tree.right, value);
      } else {
        tree.right = new TreeNode(value);
      }
    } else {
      if (tree.left) {
        addToTree(tree.left, value);
      } else {
        tree.left = new TreeNode(value);
      }
    }
  };
  // get all values from severed branch and re-add them
  let severedVals = [];
  let addVal = function(tree) {
    severedVals.push(tree.val);
    if (tree.left) addVal(tree.left);
    if (tree.right) addVal(tree.right);
  };
  if (curNode.left) addVal(curNode.left);
  if (curNode.right) addVal(curNode.right);
  if (!prevNode) {
    if (!curNode.left && !curNode.right) return null;
    root.val = severedVals.shift();
    root.left = null;
    root.right = null;
  }
  severedVals.forEach((val) => addToTree(root, val));
  return root;
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

// let test = new TreeNode(5, new TreeNode(3, new TreeNode(2), new TreeNode(4)), new TreeNode(6, null, new TreeNode(7)));

// deleteNode(test, 3);
// console.log(test);

let test = new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), new TreeNode(4));
console.log(deleteNode(test, 3));