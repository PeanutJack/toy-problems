// input: tree with nodes that have a next value of null
// output: same tree, but the next values should be pointing to the node to the right
// constraints: constant space (implicit recursive stack space doesn't count though)
  // if a node is missing (1,2,X,4) then still connect across it (1>2>4)

// strategy:
  // briefly considered keeping track of latest one for each level in an array, but that's extra space
    // the extra space would be equal to the number of levels, means scaling space and not constant
  // need to recurse down to children I think before doing anything
  // I kind of wish I had a way to just access something like node.parent
    // Not sure if that would help much though
  // I also need to keep in mind that sometimes finding the node I need to connect to involves going up and down multiple levels

  // I know how to do a Depth first search, but I think I need to cover breadth first here
  // Maybe I need to traverse backwards?

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (!root) return root // silly empty input edge cases
  let nodes = [[root]];
  // gather nodes into array of arrays where index of array indicates it's depth
  let gather = function(node, depth) {
    if (!node) return null;
    if (!nodes[depth]) nodes[depth] = [];
    if (node.left) nodes[depth].push(node.left);
    if (node.right) nodes[depth].push(node.right);
    gather(node.left, depth + 1);
    gather(node.right, depth + 1);
  }
  gather(root, 1);
  // go over each layer of nodes connecting them to the next one in the chain
  nodes.forEach((nodeArr) => {
    for (let i = 0; i < nodeArr.length; i++) {
      nodeArr[i].next = nodeArr[i + 1] || null;
    }
  });
  return root;
};

// Could not find the constant space solution, but even the pros in slack didn't get to it either