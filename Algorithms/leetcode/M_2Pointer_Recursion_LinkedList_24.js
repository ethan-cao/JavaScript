
/*
Given a linked list, swap every two adjacent nodes and return its head.
You may not modify the values in the list's nodes, only nodes itself may be changed.

### Example
1->2->3->4 ---> 2->1->4->3

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 48ms
var swapPairs = function(head) {
    let newHead = null;
    
    if (head === null) {
        return newHead;
    }
    
    newHead = head.next ? head.next : head;    

    let current = head;
    let next = current.next;
    
    while (current !== null && next !== null) {
        let nextNext = next.next;
        
        next.next = current;
        current.next = nextNext && nextNext.next ? nextNext.next : nextNext;
        
        current = nextNext;
        next = current ? current.next : null;
    }
     
    return newHead;
}

// 48ms
var swapPairs = function(head) {
    if (head === null || head.next === null) {
        return head;
    }    

    let next = head.next;
    
    head.next = swapPairs(next.next);
    next.next = head;
     
    return next;
};