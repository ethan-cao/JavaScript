
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
    if (head === null || head.next === null ) {
        return head;
    }
    
    let virtualHead = new ListNode(0);
    virtualHead.next = head.next;
    
    let odd = head; 
    let even = head.next;
    
    while (odd !== null && even !== null) {
        let nextOdd = even.next;
        let nextEven = nextOdd === null ? null : nextOdd.next;
        
        even.next = odd;
        odd.next = nextEven === null ? nextOdd : nextEven;
       
        odd = nextOdd;
        even = nextEven;
    }
    
    return virtualHead.next;
}

// 52ms
const swap = (odd, even) => {
    if (odd === null || even === null) {
        return odd;
    }
    
    odd.next = swap(even.next, even.next === null ? null : even.next.next);
    even.next = odd;
    
    return even;
};

var swapPairs = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    
    return swap(head, head.next);
};