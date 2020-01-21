/*
Given a linked list, remove the n-th node from the end of list and return its head.
Given n will always be valid.

### Example
1->2->3->4->5, and n = 2.
After removing the second node from the end, the linked list becomes 1->2->3->5.

1->2, and n = 1
1

*/

("use strict");

let idx = 0;

const visitNext = (previous, current, n) => {
	if (current === null) {
		return;
	}

	visitNext(current, current.next, n);
	idx++;

	if (idx === n) {
		if (previous === null) {
			current.val = null;
		} else {
			previous.next = current.next;
		}
	}
};

let removeNthFromEnd = function(head, n) {
	visitNext(null, head, n);

	return head.val === null ? head.next : head;
};


// 52ms
let removeNthFromEnd = function(head, n) {
    const virtualHead = new ListNode(0);
    virtualHead.next = head;
    
    let left = virtualHead; 
    let right = virtualHead;
    
    for (let i = 0; i <= n; ++i) {
        right = right.next;
    }
    
    while (right!== null) {
        left = left.next;
        right = right.next;
    }
     
    left.next = left.next.next;

    return virtualHead.next;
};