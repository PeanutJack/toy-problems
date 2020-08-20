/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  // first thought is to make an array of the nodes to keep track of them despite movement
  // L0→Ln→L1→L(n-1)→L2→L(n-2)→… where n is the last item
  var storage = [];
  let current = head;
  while (current) {
    storage.push(current);
    current = current.next;
  }
  for (let i = 0; i < storage.length; i++) {
    if (i >= Math.floor(storage.length / 2)) {
      let target = storage.length - i;
      if (target < i) {
        storage[i].next = storage[target];
      } else {
        storage[i].next = null;
      }
    } else {
      storage[i].next = storage[(storage.length - 1) - i];
    }
  }
};


function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var test = new ListNode(0, new ListNode(1, new ListNode(2, new ListNode(3))));
reorderList(test);

var test2 = new ListNode(0, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))));
reorderList(test2);

var test3 = new ListNode(0, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))));
reorderList(test3);