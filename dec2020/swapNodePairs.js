// input: linked list
// output: same linked list, but with every pair of nodes swapped
  // [1, 2, 3, 4] => [2, 1, 4, 3]
// Edge cases:
  // Empty linked list? Return empty
  // Odd number linked list? Don't swap the last one
// Constraints: Don't mess with the values, only move the nodes

// Strategy:
  // while the current node exists
    // if node has a next
      // keep track as next
      // current.next = next.next
      // next.next = current
    // current = current.next.next
  // return either head.next if it exists, or just head
    // not quite right, because head being the 2nd node now points to node 3, and I need to return node 1


// [1,2,3,4,5,6] => [2,1,4,3,6,5]
  // 1 needs to point to 3 // WAIT NO, in this example 1 needs to point to 4
    // 1 needs to point to 4 if it exists, otherwise 3
  // 2 needs to point to 1
  // 3 needs to point to 6
  // 4 needs to point to 3
  // 6 needs to point to 5

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let current = head;
  let next, third;
  let output = head?.next;
  while (current) {
    third = current.next?.next;
    if (current.next) {
      next = current.next; // next is 2, then 3's next is 4
      current.next = current.next?.next?.next || current.next?.next; // 1 points to 4, or 3 if 4 doesn't exist, 2nd loop changes 3 to point to 6, or 5 if no 6
      next.next = current; // 2 points to 1
    }
    current = third; // change current from 1 to 3
  }
  return output || head;
};