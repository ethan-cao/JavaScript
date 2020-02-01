/*
Given a sorted linked list, delete all nodes that have duplicate numbers,
leaving only distinct numbers from the original list.

### Example
1->2->3->3->4->4->5 ---> 1->2->5
1->1->1->2->3       ---> 2->3

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

"use strict";

// 56ms
var deleteDuplicates = function(head) {
    if (head === null) {
        return null;
    }
        
    let virtualHead = new ListNode(head.val-1);
    virtualHead.next = head;
    
    let current = virtualHead;
    let next = current.next;
    
    while (next !== null) {
        let skip = false;
        
        while (next.next !== null && next.val === next.next.val) {
            skip = true;
            next = next.next;         
        }
        
        if (skip) {
            current.next = next.next;
        } else {
            current = next;
        }
        
        next = current.next;
    }
    
    return virtualHead.next;
};


// 68ms
var deleteDuplicates = function(head) {
    if (head === null) {
        return null;
    }
        
    let virtualHead = new ListNode(head.val-1);
    virtualHead.next = head;
    
    let node = virtualHead;
    
    let current = virtualHead;  // no duplicate until current
    let next = current.next;
    
    while (next !== null && next.next != null ) {
        if (next.val !== current.val && next.val !== next.next.val) {
            node.next = next;
            node = node.next;
        }
       
        current = next;
        next = current.next;
    }
    
    if (current.val !== next.val) {
        node.next = next;
        node = node.next;
    }
        
    node.next = null; 
    
    return virtualHead.next;
};



// 56ms
const getUniqueNodes = (current, next) => {
    if (current === null) {
        return null;
    }
    
    if (current !== null && current.val === current.val || current.next !== null && current.next.val === current.val) {
        return getUniqueNodes(current, current.next) ;
    } else {
        current.next = getUniqueNodes(current, current.next);
        return current;
    }
    
};

var deleteDuplicates = function(head) {
    return getUniqueNodes(null, head);
};
