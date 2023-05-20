/*
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

What if the BST is modified (insert/delete operations) often
and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?

### Example
Input: root = [3,1,4,null,2], k = 1   ==> 1
   3
  / \
 1   4
  \
   2

root = [5,3,6,2,4,null,null,1], k = 3  ==>  3
       5
      / \
     3   6
    / \
   2   4
  /
 1
*/
let count = 0;
let result = -1;

const inorderVisit = (node, k) => {
    if (node === null) {
        return;
    }
    
    inorderVisit(node.left, k);
    
    count++;
    if (count === k) {
        result = node.val;
    }
    
    inorderVisit(node.right, k);
};

var kthSmallest = function(root, k) {
    inorderVisit(root, k);
    return result;
};


const countNodes = (node) => {
	if (node === null) {
		return 0;
	}

	return countNodes(node.left) + 1 + countNodes(node.right);
};

var kthSmallest1 = function(root, k) {
	let leftChildCount = countNodes(root.left);

	if (leftChildCount === k - 1) {
		return root.val;
	}

	if (leftChildCount >= k) {
		return kthSmallest(root.left, k);
	} else {
		return kthSmallest(root.right, k - 1 - leftChildCount);
	}
};