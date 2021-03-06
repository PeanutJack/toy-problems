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


// The following is NOT MY SOLUTION, just one I found in leetcode submissions

/*
var connect = function(root) {
    let curr = root;
    let leftmost = null;
    let next = null;

    // whenever this while loop restarts, we're going down a level
    while (curr) {
        // whenever this loop restarts, we're going to the next node to the right
        while (curr) {
            // the first node in a horizontal traversal gets set to leftmost
            // following nodes get set to next of the previous node
            if (curr.left) {
                if (next)
                    next.next = curr.left;
                else
                    leftmost = curr.left;

                next = curr.left;
            }

            if (curr.right) {
                if (next)
                    next.next = curr.right;
                else
                    leftmost = curr.right;

                next = curr.right;
            }
            // change current node to next one in horizontal layer
            curr = curr.next;
        }
        // hitting this point means the horizontal row is exhausted
        // the start of the next row is saved in leftmost
        // other variables can be reset
        curr = leftmost;
        leftmost = null;
        next = null;
    }

    return root;
};
*/

// One of the things I was having difficulty keep track of was how do you move horizontallty through a tree
  // Normally, you don't. You go up and then back down.
  // BUT we are connecting them with the .next prop, so you CAN