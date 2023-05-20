
/*
Given a singly linked list, group all odd nodes together followed by the even nodes.
Please note here we are talking about the node number and not the value in the nodes.

do it in place, with time: O(N) and space: O(1)

The relative order inside both the even and odd groups should remain as it was in the input.
The first node is considered odd, the second node even and so on

### Example
1->2->3->4->5->NULL -> 1->3->5->2->4->NULL
2->1->3->5->6->4->7->NULL -> 2->3->6->7->1->5->4->NULL

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

"use strict";

// 64ms
var oddEvenList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    
    const evenHead = head.next;
    
    let odd = head;
    let even = odd.next;
    
    while (odd.next !== null && even.next !== null) {
        odd.next = odd.next.next;     
        even.next = even.next.next;
        
        odd = odd.next;
        even = even.next;
    }
    
    odd.next = evenHead;
    
    return head;
};


// 56ms
const splitList = (head, odd, even) => {
    if (even === null || even.next === null) {
        return head;
    }
    
    let nextOdd = even.next; 
    let nextEven = nextOdd.next;
    
    nextOdd.next = odd.next;
    
    odd.next = nextOdd;
    even.next = nextEven;
    
    return splitList(head, nextOdd, nextEven);
};

var oddEvenList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    
    return splitList(head, head, head.next);
};