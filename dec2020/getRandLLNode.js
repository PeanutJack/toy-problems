// Not sure why there are 2 functions to fill in here.
  // I know what getRandom should do, but not solution.


// Anyways my idea for getRandom is to iterate over linked list to get it's length
  // Use length to select random node
  // When Traverse the list again, subtracting from random number each time
  // when random number is now 0, return that node's value


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function(head) {
  this.head = head;
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function() {
  let head = this.head;
  let length = 0;
  while (head) {
    head = head.next;
    length++;
  }
  let rand = Math.floor(Math.random() * length);
  head = this.head;
  while (rand > 0) {
    rand--;
    head = head.next;
  }
  return head.val;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */