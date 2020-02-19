/*
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order and each of their nodes contain a single digit.
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

### Example
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

*/

var addTwoNumbers = function(l1, l2) {
	let virtualHead = new ListNode(0);

	let node = virtualHead;
	let node1 = l1;
	let node2 = l2;

	let sum = 0;
	let carry = 0;

	while (node1 !== null || node2 !== null) {
		let value1 = node1 === null ? 0 : node1.val;
		let value2 = node2 === null ? 0 : node2.val;

		sum = Math.floor((value1 + value2 + carry) % 10);
		carry = Math.floor((value1 + value2 + carry) / 10);

		node.next = new ListNode(sum);

		node1 = node1 === null ? node1 : node1.next;
		node2 = node2 === null ? node2 : node2.next;
		node = node.next;
	}

	if (carry !== 0) {
		node.next = new ListNode(carry);
	}

	return virtualHead.next;
};
